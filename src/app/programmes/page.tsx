"use client";

import { motion } from "framer-motion";
import Footer from "../components/Footer";
import DonateAndJoin from "../components/homepage/DonateAndJoin";
import Programmes from "../components/homepage/Programmes";

export default function ProgrammesPage() {
  return (
    <main className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Programmes />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <DonateAndJoin />
      </motion.div>
      
      <Footer />
    </main>
  );
}
