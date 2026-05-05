"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WeareSOL() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="relative w-full bg-[#fffcf5] flex flex-col items-center pt-6 md:pt-24 overflow-hidden">
      
      {/* Text Content */}
      <div className="flex flex-col items-center px-4 w-full max-w-[95%] md:max-w-4xl mx-auto z-10">
        <motion.p 
          {...fadeInUp}
          className="text-lg md:text-xl text-black font-medium font-sans"
        >
          We are
        </motion.p>
        
        <motion.h1 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-[90px] font-bold text-[#f56f7b] mt-4 md:mt-6 leading-none tracking-tight"
        >
          Slam Out Loud
        </motion.h1>
        
        <motion.div 
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="mt-6 md:mt-10 text-center w-full max-w-[500px] md:max-w-[700px]"
        >
          <p className="text-sm sm:text-base md:text-xl italic text-black font-sans leading-relaxed">
            A non-profit using transformational power of performing and visual arts to build{" "}
            <span className="relative inline-block whitespace-nowrap">
              Social Emotional Learning (SEL)
              {/* Teal chalk underline */}
              <svg className="absolute bottom-[-4px] md:bottom-[-8px] left-0 w-full h-[8px] md:h-[12px]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M2.00025 6.99997C48.3396 2.66666 142.102 -3.49991 198 4.49998" stroke="#529b9c" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" style={{filter: 'blur(0.3px)'}} />
              </svg>
            </span>
            {" "}in children.
          </p>
        </motion.div>
      </div>

      {/* Illustration */}
      <motion.div 
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.3 }}
        className="w-full max-w-4xl mx-auto mt-10 md:mt-14 px-6 md:px-12"
      >
        <Image 
          src="/weare_sol.png" 
          alt="We are Slam Out Loud illustration with characters playing instruments" 
          width={1200}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}
