'use client';

import { useRef, useEffect, useState } from 'react';

function LazyVideo({ src, poster }: { src?: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // start loading 200px before it enters view
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={isVisible ? src : undefined}
      poster={poster}       // shows a thumbnail until video loads
      preload="none"        // don't load anything until triggered
      controls
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  );
}

const highlights = [
  {
    image: "/ch_numbers.png",
    videoUrl: "https://pub-aee81a00e0fe433086dbd4d5f0c050e8.r2.dev/Numbers_Supriya.webm",
    name: "Supriya",
    description: "worn down by comparison, Supriya describes her creativity and joy fading under the weight of expectations."
  },
  {
    image: "/ch_abbas_tedx.png",
    videoUrl: "https://pub-aee81a00e0fe433086dbd4d5f0c050e8.r2.dev/Abbas_Tedx.webm",
    name: "Abbas",
    description: "questions the cost of hiding one's dreams and fatigue within the relentless pace of a judgmental society."
  },
  {
    image: "/ch_mother_tongue.png",
    videoUrl: "https://pub-aee81a00e0fe433086dbd4d5f0c050e8.r2.dev/Mother_Tongue_Muskan.webm",
    name: "Muskan",
    description: "questions identity and dignity through the lens of language, privilege, and a mother's interrupted education."
  },
  {
    image: "/ch_molbhav.png",
    videoUrl: "https://pub-aee81a00e0fe433086dbd4d5f0c050e8.r2.dev/Mol_Bhav_Chanda_Jyoti.webm",
    name: "Chanda and Jyoti",
    description: "challenge the commodification of feelings, where even love and tears are weighed and priced."
  }
];

export default function ChildrensHighlight() {
  return (
    <section className="w-full bg-[#FF807B] py-16 md:py-24 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col gap-12 md:gap-16">
        
        {/* Header Section */}
        <div className="text-center flex flex-col items-center gap-2">
          <h2 className="text-xl md:text-2xl text-black font-sans">
            <span className="italic">What numbers capture, is revealed in</span>
            <br />
            <span className="font-bold">children’s words and courage.</span>
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {highlights.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Video Container */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/5">
                <LazyVideo 
                  src={item.videoUrl}
                  poster={item.image}
                />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-black font-sans">
                  {item.name}
                </h3>
                <p className="text-sm md:text-base text-black font-sans leading-relaxed pr-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
