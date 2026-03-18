import Image from 'next/image';

export default function WeareSOL() {
  return (
    <section className="relative w-full bg-[#fffcf5] flex flex-col items-center pt-16 md:pt-24 overflow-hidden pt-12">
      
      {/* Text Content */}
      <div className="flex flex-col items-center px-4 w-full max-w-[90%] md:max-w-4xl mx-auto z-10">
        <p className="text-xl md:text-2xl text-black font-medium font-sans">
          We are
        </p>
        
        <h1 className="text-6xl sm:text-7xl md:text-[110px] font-bold text-[#f56f7b] mt-4 md:mt-6 leading-none tracking-tight">
          Slam Out Loud
        </h1>
        
        <div className="mt-8 md:mt-12 text-center w-full max-w-2xl md:max-w-3xl">
          <p className="text-lg md:text-2xl italic text-black font-sans leading-relaxed">
            A non-profit using transformational power of performing and visual arts to build{" "}
            <br className="hidden md:block" />
            <span className="relative inline-block">
              Social Emotional Learning (SEL)
              {/* Teal chalk underline */}
              <svg className="absolute bottom-[-4px] md:bottom-[-8px] left-0 w-full h-[8px] md:h-[12px]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M2.00025 6.99997C48.3396 2.66666 142.102 -3.49991 198 4.49998" stroke="#529b9c" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" style={{filter: 'blur(0.3px)'}} />
              </svg>
            </span>
            {" "}in children.
          </p>
        </div>
      </div>

      {/* Illustration */}
      <div className="w-full max-w-5xl mx-auto mt-12 md:mt-16 px-4 md:px-8">
        <Image 
          src="/weare_sol.png" 
          alt="We are Slam Out Loud illustration with characters playing instruments" 
          width={1200}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
