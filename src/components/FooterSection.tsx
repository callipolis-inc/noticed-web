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
    <footer className="relative w-full min-h-[75vh] sm:min-h-[85vh] bg-[#050708] flex items-center justify-center overflow-hidden select-none">
      
      {/* 1. SEAMLESS TRANSITION FROM FAQ (ZERO SEAMS, PURE OBSIDIAN AT EDGES) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 90% 70% at 50% 50%, #171a1e 0%, #0d0f12 52%, #050708 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
        }}
      />

      {/* Luminous frosted ambient core glow (inspired by Trelli reference) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-5xl h-[360px] sm:h-[440px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255, 255, 255, 0.28) 0%, rgba(200, 210, 220, 0.10) 45%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      {/* 2. ANALOG FILM GRAIN / TACTILE NOISE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.38] mix-blend-overlay z-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="footer-grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.9 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#footer-grain-filter)" />
        </svg>
      </div>

      {/* 3. MONUMENTAL FROSTED & VOLUMETRIC BLUR "NOTICED" (TRELLI STYLE) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4">
        {/* Layer A: Vertical Volumetric Light Streaks (cascading down like stems in Trelli) */}
        <span
          aria-hidden="true"
          className="absolute font-[family-name:var(--font-cormorant)] text-[18vw] sm:text-[19.5vw] font-bold tracking-[0.22em] uppercase select-none text-white/45 scale-y-[1.38] translate-y-8 sm:translate-y-12 pl-[0.22em]"
          style={{ filter: "blur(32px)" }}
        >
          NOTICED
        </span>

        {/* Layer B: Frosted Body Bloom */}
        <span
          aria-hidden="true"
          className="absolute font-[family-name:var(--font-cormorant)] text-[18vw] sm:text-[19.5vw] font-bold tracking-[0.22em] uppercase select-none text-white/65 pl-[0.22em]"
          style={{ filter: "blur(14px)" }}
        >
          NOTICED
        </span>

        {/* Layer C: Crisp Frosted Top Edge Highlight */}
        <span
          aria-hidden="true"
          className="absolute font-[family-name:var(--font-cormorant)] text-[18vw] sm:text-[19.5vw] font-bold tracking-[0.22em] uppercase select-none text-white/90 pl-[0.22em]"
          style={{
            filter: "blur(2px)",
            maskImage: "linear-gradient(to bottom, white 0%, white 35%, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to bottom, white 0%, white 35%, transparent 70%)",
          }}
        >
          NOTICED
        </span>
      </div>

      {/* 4. CENTERED SINGLE ROW OF FOOTER TEXT (PURE TEXT, NO LOGOS, NO ICONS, NO BULLETS) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 w-full max-w-5xl px-6 sm:px-8 py-8 flex flex-col items-center justify-center text-center"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-9 md:gap-x-11 gap-y-3 font-mono text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.24em] text-white/75">
          <span className="text-white/60 hover:text-white transition-colors">
            © 2026 NOTICED
          </span>

          <a
            href="#manuscript"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            PHILOSOPHY
          </a>

          <a
            href="#manuscript"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            THE MANUSCRIPT
          </a>

          <a
            href="#darkroom"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            DARKROOM
          </a>

          <a
            href="#faq"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            OFFLINE PRIVACY
          </a>

          <a
            href="#faq"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            TERMS
          </a>

          <button
            onClick={() => setModalOpen(true)}
            className="text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            TESTFLIGHT BETA
          </button>

          <button
            onClick={scrollToTop}
            className="text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            BACK TO TOP
          </button>
        </div>
      </motion.div>

      {/* TestFlight Access Modal */}
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultStore="apple"
      />
    </footer>
  );
}
