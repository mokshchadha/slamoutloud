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
  const yAxisTicks = Array.from({ length: Math.floor(yMax / yStep) + 1 }, (_, i) => i * yStep);

  return (
    <div className="w-full flex flex-col gap-6 font-sans">
      <h4 className="text-xl font-bold text-gray-900">{title}</h4>

      <div className="relative w-full">
        <div className="relative h-[300px] w-full flex items-end">
          {/* Y-Axis Labels & Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {yAxisTicks.reverse().map((tick) => (
              <div key={tick} className="flex items-center w-full group">
                <span className="text-[10px] md:text-xs text-gray-500 w-10 shrink-0">
                  {tick.toFixed(2)}%
                </span>
                <div className="flex-1 h-[1px] bg-[#36a295]/20 group-last:bg-gray-400"></div>
              </div>
            ))}
          </div>

          {/* Bars Container */}
          <div className="flex-1 h-full flex justify-around items-end ml-10 relative z-10">
            {bars.map((bar, barIdx) => {
              return (
                <div key={barIdx} className="flex flex-col items-center w-full max-w-[80px]">
                  {/* The Stacked Bar */}
                  <div className="relative w-full h-[250px] flex flex-col-reverse justify-start rounded-t-sm overflow-hidden">
                     {bar.segments.map((segment, segIdx) => {
                       const heightPercentage = (segment.value / yMax) * 100;
                       return (
                         <motion.div
                           key={segIdx}
                           initial={{ height: 0 }}
                           whileInView={{ height: `${heightPercentage}%` }}
                           viewport={{ once: true }}
                           transition={{ duration: 1, ease: "easeOut", delay: barIdx * 0.1 + segIdx * 0.2 }}
                           style={{ backgroundColor: segment.color }}
                           className="relative w-full group"
                         >
                           {segment.value > 0 && (
                             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                               <span className="text-[9px] md:text-[10px] font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity">
                                 {segment.value}%
                               </span>
                               {/* Always show if segment is large enough */}
                               {heightPercentage > 5 && (
                                 <span className="text-[9px] md:text-[10px] font-bold text-gray-800">
                                   {segment.value}%
                                 </span>
                               )}
                             </div>
                           )}
                         </motion.div>
                       );
                     })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* X-Axis Labels Container - Separated to avoid pushing bars up */}
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

      {/* Legend */}
      <div className="flex flex-wrap gap-6 mt-4 justify-start text-xs font-semibold text-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#36a295] rounded-sm"></div>
          <span>75% Growth</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#f8b661] rounded-sm"></div>
          <span>50% Growth</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#ff8282] rounded-sm"></div>
          <span>25% Growth</span>
        </div>
      </div>
    </div>
  );
}
