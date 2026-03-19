import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#FAF7F2] py-12 px-4 md:px-8 lg:px-16 flex justify-center">
      <div className="relative w-full max-w-7xl">
        {/* Background Image Container */}
        <div className="relative aspect-[21/10] w-full overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/jijivisha/jijivisha_header.png"
            alt="The Jijivisha Fellowship"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Pink Content Box */}
        <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 w-[90%] sm:w-[55%] md:w-[50%] lg:w-[45%] bg-[#F2707E] p-6 sm:p-8 md:p-10 lg:p-12 text-white rounded-none shadow-2xl z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            The Jijivisha Fellowship
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-light leading-relaxed">
            We place trained fellows in classrooms and communities, to use art
            periods to build core social-emotional skills.
          </p>
          <div className="pt-4 border-white inline-block">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">
              Delhi | Bengaluru | Mumbai | Pune
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
