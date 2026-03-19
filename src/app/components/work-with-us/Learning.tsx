"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

interface Resource {
  title: string;
  link?: string;
  subItems?: { title: string; link: string }[];
}

const resources: Resource[] = [
  {
    title: "The Gift of Poetry",
    link: "https://anidalal.net/thegiftofpoetry/",
  },
  {
    title: "Spoken Word Poetry Series",
    subItems: [
      {
        title: "An Introduction to Spoken Word Poetry",
        link: "https://www.youtube.com/watch?v=hi_KxksmV-Y&list=PLvFACZ_X4INXji_LyPg9dkwUFk-S1kE6i&index=1&pp=iAQB",
      },
      {
        title: "How to Write Spoken Word Poetry",
        link: "https://www.youtube.com/watch?v=gdaf57VSu0c&list=PLvFACZ_X4INXji_LyPg9dkwUFk-S1kE6i&index=3&pp=iAQB",
      },
      {
        title: "How to Perform Spoken Word Poetry",
        link: "https://www.youtube.com/watch?v=tthRr493fHA&list=PLvFACZ_X4INXji_LyPg9dkwUFk-S1kE6i&index=4&pp=iAQB0gcJCesJAYcqIYzv",
      },
    ],
  },
  {
    title: "The Game of Energy | Understanding Climate Change",
    link: "https://www.youtube.com/watch?v=d1tWMyaFpwM&list=PLvFACZ_X4INXji_LyPg9dkwUFk-S1kE6i&index=5&pp=iAQB",
  },
  {
    title: "Writing Powerful Stories with Elements of Nature",
    link: "https://www.youtube.com/watch?v=bbzqQvfJHNw&list=PLvFACZ_X4INXji_LyPg9dkwUFk-S1kE6i&index=8&pp=iAQB",
  },
  {
    title: "Postcard to Future Self",
    link: "https://www.youtube.com/watch?v=2uIRlIwVix8&list=PLvFACZ_X4INXji_LyPg9dkwUFk-S1kE6i&index=6&pp=iAQB",
  },
  {
    title: "Nature in Art: A Madhubani Adventure with Sharon & Aditya",
    link: "https://www.youtube.com/watch?v=ErRImid5_w&pp=ygUXc2xhbSBvdXQgbG91ZCBtYWRodWJhbmk%3D",
  },
  {
    title: "People Are Like Rainbows | A video on Gender Spectrum",
    link: "https://www.youtube.com/watch?v=OhspqTbJcwU&pp=ygUYcGVvcGxlIGFyZSBsaWtlIHJhaW5ib3dz",
  },
  {
    title: "Hum Ghar Kab Jaenge | An SOL Original Poem",
    link: "https://www.youtube.com/watch?v=pCxTfMsj9lo&pp=ygUhaGFtIGdoYXIga2FiIGphZW5nZSBzbGFtIG91dCBsb3Vk",
  },
  {
    title: "GEN eARTh | Element Series",
    subItems: [
      {
        title: "Element 1: AIR | Folk Tale | Story of Vayu",
        link: "https://www.youtube.com/watch?v=k4shCuC2TUs&pp=ygUgZWxlbWVudHMgb2YgbmF0dXJlIHNsYW0gb3V0IGxvdWQ%3D",
      },
      {
        title: "Element 1: AIR | Meditative Exercise",
        link: "https://www.youtube.com/watch?v=OeLjlfiulG4&pp=ygUgZWxlbWVudHMgb2YgbmF0dXJlIHNsYW0gb3V0IGxvdWQ%3D",
      },
      {
        title: "Element 2: EARTH | Folk Tale | Rahul and the Selfless Tree",
        link: "https://www.youtube.com/watch?v=lJSEO-8C6Zs&pp=ygUgZWxlbWVudHMgb2YgbmF0dXJlIHNsYW0gb3V0IGxvdWQ%3D",
      },
      {
        title: "Element 2: EARTH | Meditative Exercise",
        link: "https://www.youtube.com/watch?v=HPG5uLRtdrY&pp=ygUgZWxlbWVudHMgb2YgbmF0dXJlIHNsYW0gb3V0IGxvdWQ%3D",
      },
      {
        title: "Element 3: FIRE | Folk Tale | Grandmother Spider brings Fire",
        link: "https://www.youtube.com/watch?v=eH-shN5klp8&pp=ygUgZWxlbWVudHMgb2YgbmF0dXJlIHNsYW0gb3V0IGxvdWQ%3D",
      },
      {
        title: "Element 3: FIRE | Meditative Exercise | Body Scan",
        link: "https://www.youtube.com/watch?v=8HYkaXeO-SY&pp=ygUgZWxlbWVudHMgb2YgbmF0dXJlIHNsYW0gb3V0IGxvdWQ%3D",
      },
      {
        title: "Element 4: WATER | Folk Tale | A Well Is Born",
        link: "https://www.youtube.com/watch?v=e4SuNPKQx0g&pp=ygUgZWxlbWVudHMgb2YgbmF0dXJlIHNsYW0gb3V0IGlvdWQ%3D",
      },
      {
        title: "Element 4: WATER | Meditative Exercise",
        link: "https://www.youtube.com/watch?v=WJfV9PXw0Ns&pp=ygUwZ2VuIGVhcnRoIC0gZWxlbWVudCA0IHdhdGVyIG1lZGl0YXRpdmUgZXhlcmNpc2Vz",
      },
      {
        title: "Element 5: SPACE | Folk Tale",
        link: "https://www.youtube.com/watch?v=dN9tQlfcnkM&pp=ygUgZWxlbWVudHMgb2YgbmF0dXJlIHNsYW0gb3V0IGxvdWQ%3D",
      },
      {
        title: "Element 5: SPACE | Meditative Exercise",
        link: "https://www.youtube.com/watch?v=4oOs1TEwPNk&pp=ygUgZWxlbWVudHMgb2YgbmF0dXJlIHNsYW0gb3V0IGxvdWQ%3D",
      },
    ],
  },
  {
    title: "So Kind Art-Ed curriculum",
    link: "https://www.youtube.com/playlist?list=PL3bjmkJqDriO9wZd_6U8dT_sdZzc0vlzo",
  },
];

export default function Learning() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f2b757] py-16 px-6 md:px-12 lg:px-24 min-h-[600px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-12 text-black/80">
          Learning Resources
        </h2>

        <div className="space-y-0">
          {resources.map((resource, index) => {
            const isExpanded = expandedIndex === index;
            const hasSubItems = !!resource.subItems;

            return (
              <div key={index} className="border-t border-black/40 last:border-b">
                {hasSubItems ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full flex items-center justify-between py-6 group transition-all duration-300"
                    >
                      <span className="text-lg md:text-2xl font-medium text-left pr-4 group-hover:translate-x-1 transition-transform">
                        {resource.title}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 flex-shrink-0" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="pb-6 pl-4 md:pl-8 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        {resource.subItems?.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={sub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-base md:text-lg text-black/70 hover:text-black transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between py-6 group transition-all duration-300"
                  >
                    <span className="text-lg md:text-2xl font-medium text-left pr-4 group-hover:translate-x-1 transition-transform">
                      {resource.title}
                    </span>
                    <ExternalLink className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}