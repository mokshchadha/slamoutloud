
import Image from 'next/image';

export default function DidYouKnow() {
  return (
    <section className="w-full bg-[#fffcf5] py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-normal mb-12 md:mb-16">
          Did you know?
        </h2>

        {/* Desktop Layout - Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Intro Text */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed">
              Children instinctively use art to build and practice life skills. Neuroscience has confirmed, creative and cognitive processes are linked.
            </p>
            <p className="text-base leading-relaxed">
              Yet, art education is nationally deprioritized, suffering from minimal teacher training and lack of budget.
            </p>
          </div>

          {/* Middle Column - Stat 1 with Illustration */}
          <div className="flex flex-col items-center">
            <div className="border-l-2 border-black pl-6 mb-8">
              <p className="text-lg italic mb-1">Children get</p>
              <p className="text-3xl font-bold mb-1">less than 20 hours</p>
              <p className="text-lg italic">of arts learning a year.</p>
            </div>
            <div className="relative w-48 h-48">
              <Image
                src="/section2_illustration1.png"
                alt="Melting clock illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column - Stat 2 with Illustration */}
          <div className="flex flex-col items-center">
            <div className="border-l-2 border-black pl-6 mb-8">
              <p className="text-lg italic mb-1">An average</p>
              <p className="text-lg italic mb-1">art teacher–student</p>
              <p className="text-lg italic">ratio is <span className="font-bold text-2xl">1:1400.</span></p>
            </div>
            <div className="relative w-48 h-48">
              <Image
                src="/section2_illustration2.png"
                alt="Hand with pencil illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Tablet Layout - 2 Column Grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-8">
          {/* Top Left - Intro Text */}
          <div className="space-y-6">
            <p className="text-base leading-relaxed">
              Children instinctively use art to build and practice life skills. Neuroscience has confirmed, creative and cognitive processes are linked.
            </p>
            <p className="text-base leading-relaxed">
              Yet, art education is nationally deprioritized, suffering from minimal teacher training and lack of budget.
            </p>
          </div>

          {/* Top Right - Empty for spacing */}
          <div></div>

          {/* Bottom Left - Stat 1 */}
          <div className="flex flex-col">
            <div className="border-l-2 border-black pl-6 mb-6">
              <p className="text-lg italic mb-1">Children get</p>
              <p className="text-2xl font-bold mb-1">less than 20 hours</p>
              <p className="text-lg italic">of arts learning a year.</p>
            </div>
          </div>

          {/* Bottom Right - Stat 2 */}
          <div className="flex flex-col">
            <div className="border-l-2 border-black pl-6 mb-6">
              <p className="text-lg italic mb-1">An average</p>
              <p className="text-lg italic mb-1">art teacher–student</p>
              <p className="text-lg italic">ratio is <span className="font-bold text-xl">1:1400.</span></p>
            </div>
          </div>

          {/* Illustrations Row */}
          <div className="flex justify-center">
            <div className="relative w-40 h-40">
              <Image
                src="/section2_illustration1.png"
                alt="Melting clock illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-40 h-40">
              <Image
                src="/section2_illustration2.png"
                alt="Hand with pencil illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="md:hidden space-y-8">
          {/* Intro Text */}
          <div className="space-y-6">
            <p className="text-sm leading-relaxed">
              Children instinctively use art to build and practice life skills. Neuroscience has confirmed, creative and cognitive processes are linked.
            </p>
            <p className="text-sm leading-relaxed">
              Yet, art education is nationally deprioritized, suffering from minimal teacher training and lack of budget.
            </p>
          </div>

          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="border-l-2 border-black pl-6 mb-6 self-start">
              <p className="text-base italic mb-1">Children get</p>
              <p className="text-xl font-bold mb-1">less than 20 hours</p>
              <p className="text-base italic">of arts learning a year.</p>
            </div>
            <div className="relative w-36 h-36">
              <Image
                src="/section2_illustration1.png"
                alt="Melting clock illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="border-l-2 border-black pl-6 mb-6 self-start">
              <p className="text-base italic mb-1">An average</p>
              <p className="text-base italic mb-1">art teacher–student</p>
              <p className="text-base italic">ratio is <span className="font-bold text-lg">1:1400.</span></p>
            </div>
            <div className="relative w-36 h-36">
              <Image
                src="/section2_illustration2.png"
                alt="Hand with pencil illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
