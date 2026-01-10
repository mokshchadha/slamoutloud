
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-[#fffcf5] flex flex-col items-center justify-center p-8 overflow-hidden">
      
      {/* Main Container */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Central Image Container */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
           <Image 
             src="/skull.png" 
             alt="Head outline with skills" 
             fill
             className="object-contain"
             priority
           />
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center z-10">
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
    </section>
  );
}
