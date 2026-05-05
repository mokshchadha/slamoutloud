"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function VisionMission() {
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="w-full bg-[#fffcf5] pt-20 pb-15 lg:pt-32 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:flex flex-row px-8 lg:px-20 gap-16 lg:gap-32 w-full justify-center text-[#1a1a1a]">
          
          {/* Left Column (Vision) */}
          <motion.div 
            {...fadeInLeft}
            className="flex-1 flex flex-col relative max-w-[500px]"
          >
            {/* The line for Vision - standard length */}
            <div className="w-[1.5px] h-[100px] lg:h-[130px] bg-[#1a1a1a] mb-6" />
            
            <p className="text-[12px] lg:text-[14px] font-bold mb-4 tracking-wide uppercase text-[#1a1a1a]">
              Our Vision
            </p>
            <h2 className="text-[18px] lg:text-[26px] leading-[1.3] max-w-[420px] text-[#1a1a1a]">
              Every child will have a voice that enables them to change lives.
            </h2>
          </motion.div>

          {/* Right Column (Mission) */}
          <motion.div 
            {...fadeInRight}
            className="flex-1 flex flex-col relative max-w-[500px]"
          >
            {/* The line for Mission - longer to push it down */}
            <div className="w-[1.5px] h-[260px] lg:h-[320px] bg-[#1a1a1a] mb-6" />
            
            <p className="text-[12px] lg:text-[14px] font-bold mb-4 tracking-wide uppercase text-[#1a1a1a]">
              Our Mission
            </p>
            <h2 className="text-[18px] lg:text-[26px] leading-[1.3] pr-4 text-[#1a1a1a]">
              Make Social-Emotional Learning (SEL) an integrated part of the curriculum in schools across India.
            </h2>
          </motion.div>

        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="flex flex-col md:hidden px-[30px] pt-12 pb-20 w-full text-[#1a1a1a]">
          
          {/* Top section with lines */}
          <div className="flex w-full">
            {/* The gap for the Left Long Line */}
            <div className="w-[32px] shrink-0 relative">
               {/* This line goes all the way down, passing the Vision block, into the margin before Mission */}
               <div className="absolute top-0 left-0 w-[1.5px] bg-[#1a1a1a]" style={{ height: 'calc(100% + 40px)' }} />
            </div>

            {/* Vision Info */}
            <motion.div 
              {...fadeInLeft}
              className="flex-1 flex flex-col relative"
            >
               {/* The shorter line for Vision */}
               <div className="absolute top-0 left-0 w-[1.5px] h-[80px] bg-[#1a1a1a]" />
               
               <div className="pt-[100px]">
                 <p className="text-[12px] font-bold mb-3 tracking-wide text-[#1a1a1a] uppercase">
                   Our Vision
                 </p>
                 <h2 className="text-[18px] leading-[1.3] font-bold pr-2 text-[#1a1a1a]">
                   Every child will have a voice that enables them to change lives.
                 </h2>
               </div>
            </motion.div>
          </div>

          {/* Mission Info */}
           <motion.div 
             {...fadeInRight}
             className="flex flex-col w-full mt-[60px] relative"
           >
             <p className="text-[12px] font-bold mb-3 tracking-wide text-[#1a1a1a] uppercase">
               Our Mission
             </p>
             <h2 className="text-[18px] leading-[1.3] font-bold pr-2 text-[#1a1a1a]">
               Make Social-Emotional Learning (SEL) an integrated part of the curriculum in schools across India.
             </h2>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
