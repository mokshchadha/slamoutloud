"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Hero from "../components/work-with-us/Hero";
import Collaboration from "../components/work-with-us/Collaboration";
import Learning from "../components/work-with-us/Learning";

export default function WorkWithUs() {
  return (
    <main className="min-h-screen pt-5 bg-[#fffcf5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Collaboration />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Learning />
      </motion.div>

      <Footer />
    </main>
  );
}
