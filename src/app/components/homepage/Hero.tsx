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

  const handleSkip = () => {
    sessionStorage.setItem('skullAnimDone', 'true');
    setIsFirstLoad(false);
    setScrollProgress(1);
    setIsAnimationComplete(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('skullAnimationComplete', { detail: isAnimationComplete }));
  }, [isAnimationComplete]);

  return (
    <section 
      ref={containerRef}
      className={`relative w-full bg-[#fffcf5] ${isFirstLoad ? 'h-[300vh]' : 'min-h-[calc(100vh-80px)]'} flex flex-col`}
    >
      <div className={`w-full flex flex-col items-center justify-center p-8 overflow-hidden ${isFirstLoad ? 'sticky top-0 h-screen' : 'min-h-[calc(100vh-80px)] relative'}`}>
        
        {/* Scroll Prompt Overlay */}
        {isFirstLoad && !isAnimationComplete && (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none transition-opacity duration-500"
            style={{ opacity: scrollProgress < 0.05 ? 1 : 0 }}
          >
            <div className="flex flex-col items-center mb-8">
              <div className="mb-4">
                <svg width="30" height="45" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="32" rx="10" stroke="black" strokeWidth="2"/>
                  <rect x="11" y="8" width="2" height="6" rx="1" fill="black"/>
                  <path d="M8 22L12 26L16 22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 26L12 30L16 26" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 italic">Scroll to connect the dots</h2>
              <button 
                onClick={handleSkip}
                className="pointer-events-auto text-sm text-gray-500 hover:text-black transition-colors italic underline underline-offset-4"
              >
                Skip the experience
              </button>
            </div>
          </div>
        )}

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
