import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";

export default function PartnersAndFeature() {
  // Read local directories for images 
  const partnersDir = path.join(process.cwd(), "public", "partners");
  const featuredDir = path.join(process.cwd(), "public", "featured");

  let partnersFiles: string[] = [];
  let featuredFiles: string[] = [];

  try {
    partnersFiles = fs
      .readdirSync(partnersDir)
      .filter((file) => !file.startsWith("."));
  } catch (error) {
    console.error("Error reading partners directory", error);
  }

  try {
    featuredFiles = fs
      .readdirSync(featuredDir)
      .filter((file) => !file.startsWith("."));
  } catch (error) {
    console.error("Error reading featured directory", error);
  }

  // Create multiple duplicates to ensure seamless infinite scroll on any screen width
  const duplicates = 4;
  const partnerSets = Array.from({ length: duplicates });
  const featuredSets = Array.from({ length: duplicates });

  return (
    <section className="w-full bg-[#4bb29a] py-16 overflow-hidden text-white flex flex-col gap-12 sm:gap-16">
      {/* Our Partners Section */}
      <div className="flex flex-col gap-6 w-full max-w-[100vw]">
        <h2 className="text-xl md:text-3xl font-bold px-6 md:px-16 mb-4">
          Our Partners
        </h2>
        <div className="relative flex w-full overflow-hidden pause-on-hover group">
          <div className="flex w-full min-w-full">
            {partnerSets.map((_, setIdx) => (
              <div
                key={`partner-set-${setIdx}`}
                className="flex animate-scroll-left items-center w-max shrink-0 pr-12 md:pr-16 gap-12 md:gap-16"
                aria-hidden={setIdx !== 0}
              >
                {partnersFiles.map((file, idx) => (
                  <div
                    key={`partner-${setIdx}-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Image
                      src={`/partners/${file}`}
                      alt={`Partner ${file.split(".")[0]}`}
                      width={160}
                      height={80}
                      className="object-contain h-10 sm:h-12 md:h-16 w-auto brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured In Section */}
      <div className="flex flex-col gap-6 w-full max-w-[100vw]">
        <h2 className="text-xl md:text-3xl font-bold px-6 md:px-16 mb-4">
          Featured In
        </h2>
        <div className="relative flex w-full overflow-hidden pause-on-hover group">
          <div className="flex w-full min-w-full">
            {featuredSets.map((_, setIdx) => (
              <div
                key={`featured-set-${setIdx}`}
                className="flex animate-scroll-right items-center w-max shrink-0 pl-12 md:pl-16 gap-12 md:gap-16 justify-end"
                aria-hidden={setIdx !== 0}
              >
                {featuredFiles.map((file, idx) => (
                  <div
                    key={`featured-${setIdx}-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <Image
                      src={`/featured/${file}`}
                      alt={`Featured ${file.split(".")[0]}`}
                      width={160}
                      height={80}
                      className="object-contain h-10 sm:h-12 md:h-16 w-auto brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}