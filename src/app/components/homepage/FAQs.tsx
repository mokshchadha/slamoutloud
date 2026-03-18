"use client";

import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is SEL?",
    answer: "In simple terms, SEL is the education of life skills such as curiosity, emotional awareness, and analytical thinking alongside academic subjects.",
    bgColor: "bg-[#FF7A7A]", // Coral
  },
  {
    id: 2,
    question: "Why we teach art based SEL?",
    answer: "Art is a powerful medium for self-expression. It gives children a safe space to explore their emotions, develop empathy, and build resilience, seamlessly blending creativity with essential life skills.",
    bgColor: "bg-[#45A99E]", // Teal
  },
  {
    id: 3,
    question: "Who do we work with?",
    answer: "We work primarily with children from vulnerable communities, partnering with educators, schools, and local organizations to make art-based social emotional learning accessible to all.",
    bgColor: "bg-[#F3BD69]", // Yellow
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 0 is open by default as in the screenshot

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="flex flex-col w-full">
      {faqData.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.id}
            className={`${faq.bgColor} flex flex-col w-full transition-colors duration-300 cursor-pointer overflow-hidden`}
            onClick={() => toggleFAQ(index)}
          >
            {/* Header (Question + Icon) */}
            <div className="flex items-center justify-between px-6 py-8 md:px-16 lg:px-24 md:py-16">
              <h3 className="text-base md:text-xl font-medium text-black">
                {faq.question}
              </h3>
              <div
                className={`flex-shrink-0 transition-transform duration-500 ease-in-out transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-black"
                >
                  <circle cx="12" cy="12" r="11" />
                  <path d="m8 10 4 4 4-4" />
                </svg>
              </div>
            </div>

            {/* Answer Content */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-12 md:px-16 lg:px-24 md:pb-32 pt-12 md:pt-28 max-w-full md:max-w-[80%] lg:max-w-[70%] text-left">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-black">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
