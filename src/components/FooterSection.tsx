"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WaitlistModal } from "./WaitlistModal";

export function FooterSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050708] min-h-[35vh] sm:min-h-[45vh] py-16 sm:py-20 lg:py-24 overflow-hidden select-none flex items-center justify-center">
      {/* 1. SEAMLESS TOP AMBIENT FADE (GUARANTEES 100% PURE OBSIDIAN AT JUNCTION WITH FAQ) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)",
        }}
      >
        {/* Soft radial spotlight centered directly behind the monumental text */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-5xl h-[380px]"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 48%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />

        {/* Soft volumetric light columns cascading vertically through the letterforms */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen flex justify-around px-8 sm:px-20">
          <div className="w-12 h-full bg-gradient-to-b from-transparent via-white/12 to-transparent blur-xl" />
          <div className="w-20 h-full bg-gradient-to-b from-transparent via-white/18 to-transparent blur-2xl" />
          <div className="w-10 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent blur-xl" />
          <div className="w-24 h-full bg-gradient-to-b from-transparent via-white/16 to-transparent blur-2xl" />
          <div className="w-12 h-full bg-gradient-to-b from-transparent via-white/12 to-transparent blur-xl" />
        </div>
      </div>

      {/* 2. CENTER STAGE: MONUMENTAL "NOTICED" WITH CENTERED OVERLAY TEXT */}
      <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-8">
        
        {/* Large Monumental Serif Background Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-center"
        >
          <h2 className="font-[family-name:var(--font-cormorant)] text-[16vw] sm:text-[18vw] lg:text-[19.5vw] leading-none tracking-[0.24em] font-light uppercase select-none text-center bg-gradient-to-b from-white/35 via-white/12 to-white/[0.02] bg-clip-text text-transparent pl-[0.24em] drop-shadow-[0_12px_45px_rgba(255,255,255,0.05)]">
            NOTICED
          </h2>
        </motion.div>

        {/* 3. SINGLE LINE FOOTER TEXT FLOATING DIRECTLY IN THE CENTER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center px-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5 sm:gap-x-7 md:gap-x-9 text-[10px] sm:text-[11px] md:text-xs font-mono uppercase tracking-[0.24em] text-white/70 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            <span className="text-white/45">
              © 2026 NOTICED
            </span>

            <a
              href="#manuscript"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              PHILOSOPHY
            </a>

            <a
              href="#manuscript"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              THE MANUSCRIPT
            </a>

            <a
              href="#library"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              THE LIBRARY
            </a>

            <Link
              href="/privacy"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              OFFLINE PRIVACY
            </Link>

            <Link
              href="/terms"
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              TERMS
            </Link>

            <button
              onClick={() => setModalOpen(true)}
              className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              TESTFLIGHT BETA
            </button>

            <button
              onClick={scrollToTop}
              className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              BACK TO TOP
            </button>
          </div>
        </motion.div>

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
