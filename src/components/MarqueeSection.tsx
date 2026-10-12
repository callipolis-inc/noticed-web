"use client";

import React from "react";
import { motion } from "framer-motion";

const PUBLICATIONS = [
  "Kinfolk",
  "The Paris Review",
  "Apartamento",
  "Cereal",
  "Monocle",
  "Architectural Digest",
  "Noticed",
];

export function MarqueeSection() {
  return (
    <section className="relative w-full bg-[#050708] py-12 sm:py-16 overflow-hidden select-none">
      {/* Top Header Labels */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl mx-auto flex items-center justify-between px-6 sm:px-8 mb-6 sm:mb-8 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/40"
      >
        <span>AS FEATURED IN — ARCHIVAL EDITIONS</span>
        <span>SELECTED PUBLICATIONS</span>
      </motion.div>

      {/* Endless Scrolling Marquee with Edge Mask-Fade */}
      <div
        className="w-full overflow-hidden select-none py-6 border-y border-white/10 relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-10 sm:gap-16 md:gap-20 whitespace-nowrap will-change-transform w-max"
        >
          {[...PUBLICATIONS, ...PUBLICATIONS].map((pub, idx) => (
            <div key={idx} className="flex items-center gap-10 sm:gap-16 md:gap-20">
              <span className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white font-light tracking-wide transition-colors">
                {pub}
              </span>
              <span className="text-amber-200/50 text-base sm:text-lg font-serif select-none">
                ✳
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
