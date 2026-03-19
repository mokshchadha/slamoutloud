"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/*
  The SVG path REVERSED so it starts from bottom-left (Arithmetic side)
  and draws rightward: up the face → over the crown → down the back of head → neck.
  Original path went bottom-right → top → bottom-left; this is the reverse.
*/
const HEAD_PATH =
  "M133.427 286.326C133.427 245.83 115.743 241.516 93.7422 242.073C43.6142 236.645 37.766 216.189 26.4872 170.684C24.5159 162.73 23.563 170.684 3.51185 160.247C-1.50098 149.392 26.3133 132.663 33.1709 93.0321C42.7787 37.5072 87.4762 -5.49326 158.491 4.94376C229.505 15.3808 257.911 57.9638 257.911 122.256C257.911 165.571 229.463 188.986 222.404 209.092C208.04 250.005 220.733 293.005 228.252 311.374";

/*
  Labeled dots – fractions are now along the REVERSED path.
  Path starts bottom-left → up face → crown → down back → bottom-right.
*/
const LABELS = [
  { fraction: 0.09, label: "Arithmetic", side: "left", offsetX: -16, offsetY: 22, color: "#9a9a9a" },
  { fraction: 0.27, label: "Writing", side: "left", offsetX: -16, offsetY: 6, color: "#9a9a9a" },
  { fraction: 0.50, label: "Reading", side: "left", offsetX: -16, offsetY: -14, color: "#9a9a9a" },
  { fraction: 0.61, label: "Curiosity", side: "right", offsetX: 16, offsetY: -16, color: "#4a9a8a" },
  { fraction: 0.75, label: "Imagination", side: "right", offsetX: 16, offsetY: 8, color: "#4a9a8a" },
  { fraction: 0.86, label: "Emotional Awareness", side: "right", offsetX: 16, offsetY: 8, color: "#4a9a8a" },
  { fraction: 0.97, label: "Agency", side: "right", offsetX: 16, offsetY: 22, color: "#4a9a8a" },
];

const ANIM_DURATION = 4000;

export default function SkullAnimation() {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);
  const [dotPositions, setDotPositions] = useState<any[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const animRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const len = pathRef.current.getTotalLength();
    setPathLength(len);
    const positions = LABELS.map((l) => {
      const pt = pathRef.current!.getPointAtLength(len * l.fraction);
      return { x: pt.x, y: pt.y, ...l };
    });
    setDotPositions(positions);
  }, []);

  useEffect(() => {
    if (pathLength > 0 && !hasStarted) {
      const t = setTimeout(() => startAnimation(), 400);
      return () => clearTimeout(t);
    }
  }, [pathLength, hasStarted]);

  const startAnimation = useCallback(() => {
    if (pathLength === 0) return;
    setProgress(0);
    setIsDrawing(true);
    setHasStarted(true);
    startTimeRef.current = performance.now();

    const tick = (now: number) => {
      if (startTimeRef.current === null) return;
      const elapsed = now - startTimeRef.current;
      const t = Math.min(elapsed / ANIM_DURATION, 1);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setProgress(eased);
      if (t < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        setIsDrawing(false);
      }
    };
    animRef.current = requestAnimationFrame(tick);
  }, [pathLength]);

  const dashOffset = pathLength * (1 - progress);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <svg
        viewBox="-80 -25 420 380"
        className="w-full h-full max-w-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="pencil" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Labeled dots */}
        {dotPositions.map((d, i) => (
          <circle
            key={`dot-${i}`}
            cx={d.x}
            cy={d.y}
            r={4.5}
            fill="#e8a849"
            stroke="#d4913a"
            strokeWidth={0.6}
            style={{
              opacity: progress >= d.fraction ? 1 : 0.3,
              transition: "opacity 0.3s ease",
            }}
          />
        ))}

        {/* Main stroke – thick hand-drawn line */}
        <path
          ref={pathRef}
          d={HEAD_PATH}
          fill="none"
          stroke="#2a2a2a"
          strokeWidth={5.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: pathLength || 3000,
            strokeDashoffset: dashOffset,
            filter: "url(#pencil)",
          }}
        />

        {/* Labels – fade in when pencil reaches each dot */}
        {dotPositions.map((d, i) => {
          const revealed = progress >= d.fraction;
          const anchor = d.side === "right" ? "start" : "end";
          return (
            <text
              key={`label-${i}`}
              x={d.x + d.offsetX}
              y={d.y + d.offsetY}
              textAnchor={anchor}
              fill={d.color}
              fontSize={18}
              fontFamily="'Caveat', cursive"
              fontWeight={600}
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(5px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              {d.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
