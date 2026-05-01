"use client";

import { useEffect, useState, useRef } from 'react';
import SkullAnimation from './SkullAnimation';

export default function Hero() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('skullAnimDone');
    if (hasPlayed) {
      setIsFirstLoad(false);
      setScrollProgress(1);
    } else {
      const handleScroll = () => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const scrollableDistance = rect.height - window.innerHeight;
        
        if (scrollableDistance <= 0) return;

        let progress = -rect.top / scrollableDistance;
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress);
        
        if (progress >= 1) {
          sessionStorage.setItem('skullAnimDone', 'true');
          setIsAnimationComplete(true);
        } else {
          setIsAnimationComplete(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('skullAnimationComplete', { detail: isAnimationComplete }));
  }, [isAnimationComplete]);

  return (
    <section 
      ref={containerRef}
      className={`relative w-full bg-[#fffcf5] ${isFirstLoad ? 'h-[300vh]' : 'min-h-[calc(100vh-80px)]'} flex flex-col`}
    >
      <div className={`w-full flex flex-col items-center justify-center p-8 overflow-hidden ${isFirstLoad ? 'sticky top-0 h-screen' : 'min-h-[calc(100vh-80px)] relative'}`}>
        
        {/* Main Container */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Central Image Container */}
          <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
             <SkullAnimation 
               isFirstLoad={isFirstLoad} 
               scrollProgress={scrollProgress}
               onAnimationComplete={() => setIsAnimationComplete(true)}
             />
          </div>

          {/* Bottom Text */}
          <div 
            className={`mt-16 text-center z-10 transition-all duration-1000 ease-out ${
              isAnimationComplete 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12 pointer-events-none'
            }`}
          >
            <p className="text-2xl md:text-4xl italic text-black font-serif">
              meanwhile these
            </p>
            <p className="text-3xl md:text-5xl font-bold text-black mt-2 font-serif relative inline-block">
               essential skills
               {/* Chalk Underline effect */}
               <svg className="absolute bottom-[-10px] left-0 w-full h-[15px]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                 <path d="M2.00025 6.99997C48.3396 2.66666 142.102 -3.49991 198 4.49998" stroke="#fb747b" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" style={{filter: 'blur(0.5px)'}} />
               </svg>
            </p>
            <p className="text-2xl md:text-4xl italic text-black font-serif inline ml-2">
               get ignored.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
