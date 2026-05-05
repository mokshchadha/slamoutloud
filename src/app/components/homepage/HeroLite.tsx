"use client";

import SkullAnimation from './SkullAnimation';

export default function HeroLite() {
  return (
    <section className="relative w-full bg-[#fffcf5] min-h-[calc(100vh-80px)] flex flex-col py-12">
      <div className="w-full flex flex-col items-center justify-center px-8">
        
        {/* Main Container */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">

          {/* Central Image - Static final state */}
          <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px]">
            <SkullAnimation
              isFirstLoad={true}
              scrollProgress={1}
              highlightMode="right"
              onAnimationComplete={() => {}}
            />
          </div>

          {/* Final Text Message */}
          <div className="mt-8 w-full text-center">
            <div className="transition-all duration-700 ease-out">
              <p className="text-2xl md:text-3xl italic text-black font-serif">meanwhile these</p>
              <p className="text-3xl md:text-4xl font-bold text-black mt-1 font-serif relative inline-block">
                essential skills
                <svg className="absolute bottom-[-10px] left-0 w-full h-[15px]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <path d="M2.00025 6.99997C48.3396 2.66666 142.102 -3.49991 198 4.49998" stroke="#fb747b" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" style={{filter: 'blur(0.5px)'}} />
                </svg>
              </p>
              <p className="text-2xl md:text-3xl italic text-black font-serif inline ml-2">
                get ignored.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
