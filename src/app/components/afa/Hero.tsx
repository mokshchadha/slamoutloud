import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#FAF7F2] py-12 px-4 md:px-8 lg:px-16 flex justify-center">
      <div className="relative w-full max-w-7xl">
        {/* Background Image Container */}
        <div className="relative aspect-[21/10] w-full overflow-hidden rounded-[40px] shadow-lg">
          <Image
            src="/afa/hero.png"
            alt="Arts for All (AFA)"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Pink Content Box */}
        <div className="absolute bottom-0 right-0 md:bottom-8 md:right-8 w-full sm:w-[60%] md:w-[50%] lg:w-[40%] bg-[#F2707E] p-6 sm:p-8 md:p-10 lg:p-12 text-white z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Arts for All <br /> (AFA)
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Through state partnerships in Punjab, Maharashtra, and Bihar, AFA 
            brings SEL into government schools. Rooted in local culture and 
            expressions shaped by everyday realities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
