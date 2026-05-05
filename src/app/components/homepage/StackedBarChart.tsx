'use client';

import { motion } from 'framer-motion';

interface Segment {
  label: string;
  value: number;
  color: string;
}

interface Bar {
  label: string;
  segments: Segment[];
}

interface StackedBarChartProps {
  title: string;
  bars: Bar[];
  yMax?: number;
  yStep?: number;
}

export default function StackedBarChart({
  title,
  bars,
  yMax = 50,
  yStep = 10,
}: StackedBarChartProps) {
  const yAxisTicks = Array.from(
    { length: Math.floor(yMax / yStep) + 1 },
    (_, i) => i * yStep
  ).reverse();

  const CHART_HEIGHT = 300; // px — single source of truth for both grid and bars

  return (
    <div className="w-full flex flex-col gap-6 font-sans">
      <h4 className="text-xl font-bold text-gray-900">{title}</h4>

      <div className="relative w-full">
        {/* Single container — grid lines and bars share identical coordinate space */}
        <div className="flex" style={{ height: CHART_HEIGHT }}>

          {/* Y-axis tick labels (outside the plot area, no height influence) */}
          <div className="flex flex-col justify-between shrink-0 w-10 pointer-events-none">
            {yAxisTicks.map((tick) => (
              <span key={tick} className="text-[10px] md:text-xs text-gray-500 leading-none">
                {tick.toFixed(2)}%
              </span>
            ))}
          </div>

          {/* Plot area: grid + bars occupy the exact same box */}
          <div className="relative flex-1">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {yAxisTicks.map((tick, i) => (
                <div
                  key={tick}
                  className={`w-full h-[1px] ${i === yAxisTicks.length - 1 ? 'bg-gray-400' : 'bg-[#36a295]/20'}`}
                />
              ))}
            </div>

            {/* Bars — absolutely pinned to the bottom of the plot area */}
            <div className="absolute inset-0 flex justify-around items-end px-4">
              {bars.map((bar, barIdx) => (
                <div
                  key={barIdx}
                  className="flex flex-col-reverse w-full max-w-[80px] overflow-hidden rounded-t-sm"
                  style={{ height: '100%' }}
                >
                  {bar.segments.map((segment, segIdx) => {
                    const heightPct = (segment.value / yMax) * 100;
                    return (
                      <motion.div
                        key={segIdx}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${heightPct}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: 'easeOut',
                          delay: barIdx * 0.1 + segIdx * 0.2,
                        }}
                        style={{ backgroundColor: segment.color, flexShrink: 0 }}
                        className="relative w-full group"
                      >
                        {heightPct > 5 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[9px] md:text-[10px] font-bold text-gray-800">
                              {segment.value}%
                            </span>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-around ml-10 mt-4 h-16">
          {bars.map((bar, barIdx) => (
            <div key={barIdx} className="w-full max-w-[80px] flex justify-center">
              <span className="text-[10px] md:text-xs font-semibold text-gray-700 text-center leading-tight">
                {bar.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend — centered */}
      <div className="flex flex-wrap gap-6 mt-4 justify-center text-xs font-semibold text-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#36a295] rounded-sm" />
          <span>75% Growth</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#f8b661] rounded-sm" />
          <span>50% Growth</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#ff8282] rounded-sm" />
          <span>25% Growth</span>
        </div>
      </div>
    </div>
  );
}