"use client";

import { useState, useEffect } from "react";
import Hero from "./Hero";
import HeroLite from "./HeroLite";

export default function HeroResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMounted) {
    return <div className="min-h-screen bg-[#fffcf5]" />;
  }

  return isMobile ? <HeroLite /> : <Hero />;
}
