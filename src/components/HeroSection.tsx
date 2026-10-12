"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowUpRight } from "lucide-react";
import { WaitlistModal } from "./WaitlistModal";

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [targetPlatform, setTargetPlatform] = useState<"apple" | "google">("apple");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenStore = (platform: "apple" | "google") => {
    setTargetPlatform(platform);
    setModalOpen(true);
  };

  return (
    <section id="hero" className="relative min-h-screen w-full bg-[#050708] flex flex-col justify-between overflow-hidden">
      {/* 1. Full-bleed Background with seamless mask-fade to pure black */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 62%, transparent 96%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 62%, transparent 96%)",
        }}
      >
        <picture>
          <source srcSet="/heroes-bg.webp" type="image/webp" />
          <img
            src="/heroes-page.png"
            alt="Noticed Baroque Masterpiece on Exhibition Wall"
            className="w-full h-full object-cover object-center select-none pointer-events-none scale-[1.01]"
          />
        </picture>
      </div>

      {/* 2. TOP NAVIGATION BAR */}
      <motion.header
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 w-full flex items-center justify-between px-6 sm:px-12 md:px-16 lg:px-20 pt-8 sm:pt-10 select-none"
      >
        {/* Left Nav: Brand & Edition */}
        <div className="flex items-center gap-8 sm:gap-12">
          <a
            href="#hero"
            className="tracking-[0.25em] text-xs sm:text-sm font-medium text-white hover:text-white/80 transition-colors uppercase font-[family-name:var(--font-cormorant)]"
          >
            NOTICED
          </a>
          <span className="tracking-[0.22em] text-[11px] sm:text-xs text-white/60 hover:text-white transition-colors uppercase cursor-pointer font-[family-name:var(--font-cormorant)]">
            EDITION 01
          </span>
        </div>

        {/* Right Nav: Waitlist, Philosophy, Menu */}
        <div className="flex items-center gap-6 sm:gap-10">
          <button
            onClick={() => handleOpenStore("apple")}
            className="flex items-center gap-1.5 tracking-[0.22em] text-[11px] sm:text-xs text-white/90 hover:text-white transition-colors uppercase group font-[family-name:var(--font-cormorant)]"
          >
            <Plus size={13} className="text-white/80 group-hover:rotate-90 transition-transform duration-300" />
            <span>Waitlist</span>
          </button>

          <a
            href="#manuscript"
            className="tracking-[0.22em] text-[11px] sm:text-xs text-white/60 hover:text-white transition-colors uppercase cursor-pointer hidden md:inline-block font-[family-name:var(--font-cormorant)]"
          >
            Manuscript
          </a>

          <a
            href="#library"
            className="tracking-[0.22em] text-[11px] sm:text-xs text-white/60 hover:text-white transition-colors uppercase cursor-pointer hidden md:inline-block font-[family-name:var(--font-cormorant)]"
          >
            Library
          </a>

          {/* Minimalist 2-line Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2.5 tracking-[0.22em] text-[11px] sm:text-xs text-white hover:text-white/80 transition-colors uppercase group cursor-pointer font-[family-name:var(--font-cormorant)]"
            aria-label="Toggle Navigation Menu"
          >
            <span className="hidden sm:inline-block">Menu</span>
            <div className="flex flex-col gap-1.5 w-5 justify-center py-1">
              <span className={`block h-[1.5px] w-full bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`block h-[1.5px] w-full bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* 3. MIDDLE VIEWPORT (Flanking the Centered Baroque Frame) */}
      <div className="relative z-20 flex-1 w-full grid grid-cols-1 md:grid-cols-12 items-center px-6 sm:px-12 md:px-16 lg:px-20 py-8 md:py-0">
        
        {/* Left Column: Brand Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, x: -22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 lg:col-span-3 max-w-[340px] mb-8 md:mb-0"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-xs sm:text-[13px] lg:text-[15px] tracking-[0.16em] uppercase text-white font-normal leading-[1.8] select-none drop-shadow-md">
            A quiet sanctuary for transient thoughts, book marginalia, and things you don&apos;t want to forget.
          </p>
        </motion.div>

        {/* Center: Breathable area for the spotlit framed painting */}
        <div className="hidden md:block md:col-span-4 lg:col-span-6 pointer-events-none" />

        {/* Right Column: Begin Your Archive & Store CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 lg:col-span-3 flex flex-col items-start justify-center"
        >
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-[34px] font-normal tracking-wide text-white mb-4 select-none drop-shadow-md">
            Begin Your Archive
          </h2>

          <div className="flex items-center gap-3">
            {/* Apple Apps Store Button */}
            <button
              onClick={() => handleOpenStore("apple")}
              className="glass-pill group px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl flex items-center gap-2 cursor-pointer font-sans"
            >
              <svg className="w-3.5 h-3.5 fill-current opacity-90 group-hover:opacity-100" viewBox="0 0 170 170">
                <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12-14.44-6.42-9.79-11.4-20.9-14.93-33.34-3.53-12.43-5.3-24.16-5.3-35.19 0-14.45 3.73-26.65 11.2-36.6 7.46-9.95 16.92-15.02 28.37-15.21 4.8 0 10.23 1.25 16.29 3.75 6.06 2.5 10.2 3.8 12.43 3.92 1.7.13 6.09-1.25 13.16-4.13 7.07-2.88 12.89-4.18 17.47-3.9 13.06.77 23.47 5.66 31.25 14.67-11.41 6.89-17 16.32-16.77 28.31.24 9.4 3.9 17.24 10.99 23.53 7.09 6.29 15.52 9.87 25.29 10.75-2.22 6.52-4.99 13.25-8.31 20.19zM119.22 33.02c0-7.73 2.76-14.99 8.29-21.78 5.53-6.79 12.27-10.87 20.21-12.24.23 1.14.35 2.22.35 3.24 0 7.73-2.88 15.15-8.64 22.25-5.76 7.1-12.63 11.16-20.61 12.18-.11-1.2-.17-2.42-.17-3.65z"/>
              </svg>
              <span>Apps Store</span>
            </button>

            {/* Google Play Store Button */}
            <button
              onClick={() => handleOpenStore("google")}
              className="glass-pill group px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl flex items-center gap-2 cursor-pointer font-sans"
            >
              <svg className="w-3.5 h-3.5 fill-current opacity-90 group-hover:opacity-100" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-.986V2.8a2.378 2.378 0 0 1 .609-.986zm11.242 11.245l2.257 2.258-11.75 6.784 9.493-9.042zm2.257-2.258l-2.257 2.258-9.493-9.042 11.75 6.784zm1.196 1.196l2.96 1.708a1.59 1.59 0 0 1 0 2.768l-2.96 1.708-2.072-2.072 2.072-2.112z"/>
              </svg>
              <span>Play Store</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* 4. MONUMENTAL BOTTOM SERIF TYPOGRAPHY: "NOTICED" */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full overflow-hidden select-none pointer-events-none pb-0 pt-4"
      >
        <div className="w-full flex justify-center items-end">
          <h1 className="font-[family-name:var(--font-cormorant)] text-[18vw] leading-[0.76] tracking-[0.06em] font-normal text-white uppercase whitespace-nowrap text-center drop-shadow-2xl">
            NOTICED
          </h1>
        </div>
      </motion.div>


      {/* FULLSCREEN CURATORIAL CURTAIN OVERLAY (NO RIGID BOX) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#050708]/96 backdrop-blur-3xl flex flex-col justify-between p-6 sm:p-12 md:p-16 lg:p-20 text-white select-none overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="w-full flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <span className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg tracking-[0.25em] uppercase text-white">
                  NOTICED
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  &bull; DIRECTORY &bull; VOL. I
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors cursor-pointer group"
                aria-label="Close Navigation Menu"
              >
                <span>Close</span>
                <span className="p-1 rounded-full border border-white/20 group-hover:border-white transition-colors">
                  <X size={14} />
                </span>
              </button>
            </div>

            {/* Middle: Editorial Quote + Grand Navigation List */}
            <div className="w-full max-w-6xl my-auto py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Curatorial Philosophy */}
              <div className="lg:col-span-5 space-y-5 hidden md:block">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 block">
                  The Curatorial Index
                </span>
                <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-light italic text-white/80 leading-relaxed">
                  &ldquo;We build our sanctuary by what we choose to linger upon. Memory is not storage; it is architecture.&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-white/10 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  <span>MCMXXVI</span>
                  <span>&bull;</span>
                  <span>TOKYO &bull; PARIS</span>
                </div>
              </div>

              {/* Right Column: Monumental Navigation Links */}
              <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6">
                {[
                  { num: "01", label: "The Exhibition", href: "#hero", desc: "Baroque Sanctuary & Philosophy" },
                  { num: "02", label: "The Living Manuscript", href: "#manuscript", desc: "Open Folio Edition & 3D Scroll Physics" },
                  { num: "03", label: "Folio Architecture", href: "#library", desc: "Multi-Volume Bound Luxury Bookshelf" },
                  { num: "04", label: "Archival Inquiries", href: "#faq", desc: "Offline Solitude & FAQ Specifications" },
                ].map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.06, duration: 0.35 }}
                    className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-2 sm:py-3 border-b border-white/10 hover:border-white/40 transition-colors"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm text-white/40 group-hover:text-amber-200/80 transition-colors">
                        {item.num}
                      </span>
                      <span className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-4xl text-white font-normal tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors mt-1 sm:mt-0">
                      {item.desc}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom Bar: Access CTA & Copyright */}
            <div className="w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/40">
              <span>© 2026 NOTICED ARCHIVES &bull; ENCRYPTED LOCAL MEMORY</span>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleOpenStore("apple");
                }}
                className="flex items-center gap-1.5 text-white hover:text-amber-200 transition-colors cursor-pointer"
              >
                <span>Request Early Admission Token</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TestFlight & App Store Waitlist Invitation Modal */}
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultStore={targetPlatform}
      />
    </section>
  );
}
