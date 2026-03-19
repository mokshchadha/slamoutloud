import Image from 'next/image';

export default function OurImpact() {
  return (
    <section className="w-full bg-[#fffcf5] py-16 md:py-24 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col gap-16 md:gap-24">
        {/* Top Part: Text and Illustration */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Side: Illustration */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg md:max-w-xl aspect-square md:aspect-[4/3]">
              <Image
                src="/our_impact.png"
                alt="Illustration of children building skills step by step"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-12">
            {/* Top Text Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg md:text-xl font-bold text-black font-sans">
                Our Impact
              </h3>
              <p className="text-2xl md:text-[32px] md:leading-[1.2] text-gray-900 font-medium font-sans">
                Data from 4000+ children across 4 cities (2024)
              </p>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-8">
              {/* Stat Box 1 */}
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-5xl md:text-6xl font-extrabold text-black font-sans tracking-tight">
                  700,000
                </h2>
                <p className="text-sm md:text-base text-gray-800 font-sans leading-relaxed">
                  Children directly enabled with SEL skills across 4 states and New Delhi, India.
                </p>
              </div>

              {/* Vertical Divider (Desktop) / Horizontal Divider (Mobile) */}
              <div className="hidden sm:block w-[2px] h-32 bg-black shrink-0 my-auto rounded-full"></div>
              <div className="block sm:hidden w-full h-[2px] bg-black/10 shrink-0 rounded-full"></div>

              {/* Stat Box 2 */}
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-5xl md:text-6xl font-extrabold text-black font-sans tracking-tight">
                  20 million
                </h2>
                <p className="text-sm md:text-base text-gray-800 font-sans leading-relaxed">
                  Children reached through digital resources.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: Graphs */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 w-full">
          {/* Graph 1 */}
          <div className="relative w-full md:w-1/2 max-w-lg aspect-[5/4] md:aspect-[4/3]">
            <Image
              src="/our_impact_graph1.png"
              alt="Growth in SEL competencies graph"
              fill
              className="object-contain"
            />
          </div>

          {/* Graph 2 */}
          <div className="relative w-full md:w-1/2 max-w-lg aspect-[5/4] md:aspect-[4/3]">
            <Image
              src="/our_impact_graph2.png"
              alt="Growth in climate competencies graph"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
