import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-white">
      {/* Logo Area */}
      <div className="bg-[#fb747b] flex justify-between items-center w-full py-1 px-2 md:px-12 rounded-lg">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/sol_logo.png"
            alt="Slam Out Loud Logo"
            width={50}
            height={30}
            className="object-contain"
          />
        </div>

        <div className="flex items-center gap-4">
          {/* Navigation */}
          <nav className="flex flex-wrap gap-3 md:gap-4 items-center text-sm font-medium mb-2 md:mb-0">
            <Link href="#" className="hover:text-red-100 transition-colors">
              About us
            </Link>
            <Link href="#" className="hover:text-red-100 transition-colors">
              Programs
            </Link>
            <Link
              href="#"
              className="border border-white/50 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Work with us
            </Link>
          </nav>

          {/* Action Button */}
          <Link
            href="#"
            className="bg-white text-black px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
