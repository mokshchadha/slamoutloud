import React from 'react';

export default function VisionMission() {
  return (
    <section className="w-full bg-[#fffcf5] pt-20 lg:pt-32 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:flex flex-row px-8 lg:px-20 gap-16 lg:gap-32 w-full justify-center text-[#1a1a1a]">
          
          {/* Left Column (Vision) */}
          <div className="flex-1 flex flex-col relative max-w-[500px]">
            {/* The line for Vision - standard length */}
            <div className="w-[2px] h-[100px] lg:h-[130px] bg-[#1a1a1a] mb-8 rounded-full" />
            
            <p className="text-base lg:text-lg font-medium mb-5 tracking-wide">
              Our Vision
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-snug lg:leading-[1.25] max-w-[420px]">
              Every child will have a voice that enables them to change lives.
            </h2>
          </div>

          {/* Right Column (Mission) */}
          <div className="flex-1 flex flex-col relative max-w-[500px]">
            {/* The line for Mission - longer to push it down */}
            <div className="w-[2px] h-[260px] lg:h-[320px] bg-[#1a1a1a] mb-8 rounded-full" />
            
            <p className="text-base lg:text-lg font-medium mb-5 tracking-wide">
              Our Mission
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-snug lg:leading-[1.25] pr-4">
              Make Social-Emotional Learning (SEL) an integrated part of the curriculum in schools across India.
            </h2>
          </div>

        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="flex flex-col md:hidden px-[30px] pt-12 pb-20 w-full text-[#1a1a1a]">
          
          {/* Top section with lines */}
          <div className="flex w-full">
            {/* The gap for the Left Long Line */}
            <div className="w-[32px] shrink-0 relative">
               {/* This line goes all the way down, passing the Vision block, into the margin before Mission */}
               <div className="absolute top-0 left-0 w-[2.5px] bg-[#1a1a1a] rounded-full" style={{ height: 'calc(100% + 40px)' }} />
            </div>

            {/* Vision Info */}
            <div className="flex-1 flex flex-col relative">
               {/* The shorter line for Vision */}
               <div className="absolute top-0 left-0 w-[2.5px] h-[80px] bg-[#1a1a1a] rounded-full" />
               
               <div className="pt-[100px]">
                 <p className="text-[15px] font-medium mb-3 tracking-wide text-gray-800">
                   Our Vision
                 </p>
                 <h2 className="text-[28px] leading-[1.3] font-bold pr-2">
                   Every child will have a voice that enables them to change lives.
                 </h2>
               </div>
            </div>
          </div>

          {/* Mission Info */}
           <div className="flex flex-col w-full mt-[60px] relative">
             <p className="text-[15px] font-medium mb-3 tracking-wide text-gray-800">
               Our Mission
             </p>
             <h2 className="text-[28px] leading-[1.3] font-bold pr-2">
               Make Social-Emotional Learning (SEL) an integrated part of the curriculum in schools across India.
             </h2>
          </div>

        </div>

      </div>
    </section>
  );
}
