import Image from "next/image";

export default function WhyExist() {
  return (
    <section className="bg-[#ff7b7b] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-black">
        <h2 className="text-2xl font-bold mb-12">Why we exist</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed">
              In 2014, our co-founder Jigyasa watched children move through school in silence, rarely given real space to feel, imagine, or create.
            </p>
            <p className="text-lg leading-relaxed">
              A spoken-word poetry workshop in Kashmir changed everything. What poured out was undeniable.
            </p>
            <div className="relative w-full aspect-[4/3] mt-4 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about/why_we_exist.png"
                alt="That moment became Slam Out Loud"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">What We Discovered</h3>
            <p className="text-lg leading-relaxed">
              Expression was missing because we'd forgotten it was foundational to learning, to dignity, and to becoming.
            </p>
            <p className="text-lg leading-relaxed">
              Through poetry, theatre, and storytelling, we found that when children are invited to speak their truth in safe spaces
            </p>
            <ul className="flex flex-col gap-4 mt-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-black shrink-0"></span>
                <span className="text-lg">They find the courage to own their narratives.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-black shrink-0"></span>
                <span className="text-lg">They move from passive observers to active creators.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-black shrink-0"></span>
                <span className="text-lg">They build empathy and community.</span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold">Our Commitment</h3>
            <p className="text-lg leading-relaxed">
              Guided by Love. We learn directly from students and teachers to build strong ecosystems that expand, ensuring our impact is rooted in reality.
            </p>
            <p className="text-lg leading-relaxed">
              By strengthening public education and teacher ecosystems, we are evolving arts-based SEL into a scalable model, combining "high-touch" inspiration with "high-tech" reach.
            </p>
            <p className="text-lg font-bold leading-relaxed mt-4">
              Because every child deserves to be heard. And that work begins now.
            </p>
            
            <button className="flex items-center gap-3 bg-[#ff9c95] hover:bg-white/20 transition-colors px-6 py-4 rounded-full w-fit mt-4 font-medium group">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:translate-y-0.5 transition-transform"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download our 2024 annual report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
