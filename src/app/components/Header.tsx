"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "About us", href: "/about-us" },
    { name: "Programmes", href: "/programmes" },
    { name: "Work with us", href: "/work-with-us" },
  ];

  return (
    <header className="py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-white bg-[#fffcf5]">
      {/* Logo Area */}
      <div className="bg-[#fb747b] flex justify-between items-center w-full py-1 px-2 md:px-12 rounded-lg">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/">
            <Image
              src="/sol_logo.png"
              alt="Slam Out Loud Logo"
              width={50}
              height={30}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Navigation */}
          <nav className="flex flex-wrap gap-3 md:gap-4 items-center text-sm font-medium mb-2 md:mb-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? "text-white font-bold underline underline-offset-4"
                    : "hover:text-red-100"
                } ${
                  link.name === "Work with us"
                    ? "border border-white/50 px-4 py-2 rounded-lg hover:bg-white/10"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <Link
            href="https://milaap.org/fundraisers/slam-out-loud"
            target="_blank"
            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-sm font-medium"
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}

