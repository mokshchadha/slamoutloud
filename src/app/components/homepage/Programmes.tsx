import Image from 'next/image';

export default function Programmes() {
  return (
    <section id="programmes" className="w-full bg-[#fdfaf4] py-16 md:py-32 px-6 md:px-12 flex justify-center font-sans overflow-hidden">
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-8 lg:gap-16 pl-0 md:pl-8">
        
        {/* Title Section */}
        <div className="w-full lg:w-48 shrink-0 pb-4 lg:pb-0 pt-0 lg:pt-12">
          <h2 className="text-xl md:text-2xl font-bold text-black tracking-wide">
            Our Programs
          </h2>
        </div>

        {/* Cards Section */}
        <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-24 lg:gap-0 pt-8 lg:pt-12">
          
          {/* Card 1: Art For All */}
          <div className="relative w-full max-w-[420px] bg-[#4ba39c] p-8 md:p-10 shadow-sm -rotate-2 top-0 lg:top-4 z-20 flex-1 lg:max-h-[460px]">
            {/* Pencil Illustration */}
            <div className="absolute -left-12 md:-left-[140px] lg:-left-[180px] -bottom-8 md:-bottom-12 w-44 md:w-[240px] lg:w-[280px] aspect-[1/3] z-30 pointer-events-none text-red-500">
              <Image 
                src="/programmes_pencil.png" 
                alt="Pencil character" 
                fill 
                className="object-contain object-bottom"
              />
            </div>

            <div className="relative z-10 text-black flex flex-col h-full pl-12 md:pl-16 lg:pl-0">
              <h3 className="text-3xl md:text-[42px] font-bold mb-6 leading-tight">
                Art For All <br className="hidden md:block" /> (AFA)
              </h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed mb-8 font-medium">
                Through state partnerships in Punjab, Maharashtra, and Bihar, AFA brings SEL into government schools through contextual curriculum rooted in local culture and expressions shaped by everyday realities.
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center text-[15px] font-medium hover:underline transition-all">
                  Know More <span className="ml-2 text-lg">⟶</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Jijivisha Fellowship */}
          <div className="relative w-full max-w-[420px] bg-[#fcb060] p-8 md:p-10 shadow-sm rotate-3 z-10 flex-1 lg:mt-12 lg:-ml-8 lg:max-h-[460px]">
            {/* Sun Illustration */}
            <div className="absolute -top-24 md:-top-[160px] lg:-top-[200px] -right-16 md:-right-[180px] lg:-right-[220px] w-56 md:w-[320px] lg:w-[400px] aspect-[4/3] z-30 pointer-events-none">
              <Image 
                src="/programmes_sun.png" 
                alt="Sun character" 
                fill 
                className="object-contain object-top"
              />
            </div>

            <div className="relative z-10 text-black flex flex-col h-full pr-8 md:pr-0">
              <h3 className="text-3xl md:text-[42px] font-bold mb-6 leading-tight">
                The Jijivisha <br className="hidden md:block" /> Fellowship
              </h3>
              <p className="text-[15px] md:text-[16px] leading-relaxed mb-8 font-medium">
                We place trained fellows inside classrooms and community spaces where art periods are intentionally designed to build core social-emotional learning skills, currently across Delhi, Bengaluru, Mumbai, and Pune.
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center text-[15px] font-medium hover:underline transition-all">
                  Know More <span className="ml-2 text-lg">⟶</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
