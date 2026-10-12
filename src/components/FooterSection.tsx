"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { WaitlistModal } from "./WaitlistModal";

export function FooterSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050708] pt-28 sm:pt-36 lg:pt-44 pb-6 sm:pb-8 overflow-hidden select-none flex flex-col justify-between border-t border-white/[0.06]">
      {/* 1. ATMOSPHERIC SPOTLIGHT & VOLUMETRIC LIGHT BEAMS (INSPIRED BY REFERENCE) */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80vw] max-w-5xl h-[380px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 48%, transparent 75%)",
          filter: "blur(32px)",
        }}
      />

      {/* Subtle vertical light columns cascading through the letterforms */}
      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen flex justify-around px-8 sm:px-16">
        <div className="w-12 h-64 bg-gradient-to-b from-white/12 via-white/3 to-transparent blur-xl" />
        <div className="w-20 h-72 bg-gradient-to-b from-white/18 via-white/5 to-transparent blur-2xl" />
        <div className="w-10 h-60 bg-gradient-to-b from-white/10 via-white/2 to-transparent blur-xl" />
        <div className="w-24 h-72 bg-gradient-to-b from-white/16 via-white/4 to-transparent blur-2xl" />
        <div className="w-12 h-64 bg-gradient-to-b from-white/12 via-white/3 to-transparent blur-xl" />
      </div>

      {/* 2. MONUMENTAL "NOTICED" BACKGROUND TYPOGRAPHY */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full flex flex-col items-center justify-center my-auto px-4"
      >
        <h2 className="font-[family-name:var(--font-cormorant)] text-[17vw] sm:text-[18.5vw] lg:text-[19.5vw] leading-[0.8] tracking-[0.24em] font-light uppercase select-none text-center bg-gradient-to-b from-white/40 via-white/12 to-white/[0.02] bg-clip-text text-transparent drop-shadow-[0_12px_45px_rgba(255,255,255,0.06)] pl-[0.24em]">
          NOTICED
        </h2>
      </motion.div>

      {/* 3. EDGE-TO-EDGE SINGLE ROW FOOTER TEXT (NO LOGOS, NO ICONS, PURE TEXT) */}
      <div className="relative z-20 w-full mt-20 sm:mt-28 lg:mt-32 border-t border-white/10 pt-5 sm:pt-6 px-4 sm:px-8 md:px-10">
        <div className="w-full flex flex-wrap items-center justify-between gap-y-3 gap-x-6 sm:gap-x-8 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em]">
          <span className="text-white/40 hover:text-white/70 transition-colors">
            © 2026 NOTICED
          </span>

          <a
            href="#manuscript"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            PHILOSOPHY
          </a>

          <a
            href="#manuscript"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            THE MANUSCRIPT
          </a>

          <a
            href="#darkroom"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            DARKROOM
          </a>

          <a
            href="#faq"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            OFFLINE PRIVACY
          </a>

          <a
            href="#faq"
            className="text-white/40 hover:text-white transition-colors duration-200"
          >
            TERMS
          </a>

          <button
            onClick={() => setModalOpen(true)}
            className="text-white/40 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            TESTFLIGHT BETA
          </button>

          <button
            onClick={scrollToTop}
            className="text-white/40 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            BACK TO TOP
          </button>
        </div>
      </div>

      {/* TestFlight Access Modal */}
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultStore="apple"
      />
    </footer>
  );
}
