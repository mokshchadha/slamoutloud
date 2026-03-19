import Image from 'next/image';

export default function DonateAndJoin() {
  return (
    <section className="w-full bg-[#fffcf5] py-16 md:py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col items-center gap-10 md:gap-14">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-black font-sans text-center">
          Be a part of the <span className="text-[#ff7477]">S.O.L.ution</span>
        </h2>

        {/* Illustration */}
        <div className="relative w-full max-w-2xl md:max-w-4xl aspect-[4/3] sm:aspect-[16/10] md:aspect-[2/1] lg:aspect-[16/9]">
          <Image
            src="/donate.png"
            alt="Children engaging in various arts and activities in a book"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full mt-4">
          <button className="w-full sm:w-[240px] px-8 py-3 rounded-lg border-2 border-black text-black font-semibold text-lg hover:bg-black/5 transition-colors text-center">
            Join the fellowship
          </button>
          <button className="w-full sm:w-[240px] px-8 py-3 rounded-lg bg-black text-white font-semibold text-lg hover:bg-black/90 transition-colors text-center">
            Donate
          </button>
        </div>

      </div>
    </section>
  );
}
