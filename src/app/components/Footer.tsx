import React from 'react';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="w-full bg-[#ff7b7b] py-16 px-6 md:px-12 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between gap-12 text-black">
        {/* Left Section: Logo and Info */}
        <div className="flex flex-col gap-6 max-w-md">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Slam Out Loud.
          </h2>
          <p className="text-xl md:text-2xl font-medium opacity-80">
            Descriptive line about what your company does.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <a href="https://www.instagram.com/slamoutloud/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/slam-out-loud/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.youtube.com/c/SlamOutLoud" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3v6Z"/></svg>
            </a>
          </div>
        </div>

        {/* Right Section: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          {/* Features Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl">Features</h3>
            <ul className="flex flex-col gap-4 opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity text-lg font-medium">Core features</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity text-lg font-medium">Pro experience</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity text-lg font-medium">Integrations</a></li>
            </ul>
          </div>

          {/* Learn More Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl">Learn more</h3>
            <ul className="flex flex-col gap-4 opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity text-lg font-medium">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity text-lg font-medium">Case studies</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity text-lg font-medium">Customer stories</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity text-lg font-medium">Best practices</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl">Support</h3>
            <ul className="flex flex-col gap-4 opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity text-lg font-medium">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity text-lg font-medium">Support</a></li>
              <li><Link href="/privacy" className="hover:opacity-100 transition-opacity text-lg font-medium">Privacy Policy</Link></li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

