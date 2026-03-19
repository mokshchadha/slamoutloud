import Image from 'next/image';

const highlights = [
  {
    image: "/ch_numbers.png",
    name: "Supriya",
    description: "worn down by comparison, Supriya describes her creativity and joy fading under the weight of expectations."
  },
  {
    image: "/ch_abbas_tedx.png",
    name: "Abbas",
    description: "questions the cost of hiding one's dreams and fatigue within the relentless pace of a judgmental society."
  },
  {
    image: "/ch_mother_tongue.png",
    name: "Muskan",
    description: "questions identity and dignity through the lens of language, privilege, and a mother's interrupted education."
  },
  {
    image: "/ch_molbhav.png",
    name: "Chanda and Jyoti",
    description: "challenge the commodification of feelings, where even love and tears are weighed and priced."
  }
];

export default function ChildrensHighlight() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 flex justify-center overflow-hidden">
      <div className=" w-full bg-[#FF807B] px-6 py-12 md:px-16 md:py-20 flex flex-col gap-12 md:gap-16">
        
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
              {/* Image Container */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/5">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
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
