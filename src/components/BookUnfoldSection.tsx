"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";

export function BookUnfoldSection() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="relative w-full bg-[#050708] text-white py-24 sm:py-32 lg:py-44 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* 1. SLENDER PHILOSOPHICAL INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center mb-16 sm:mb-20 px-4"
      >
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 block mb-6">
          The Physical Folio &bull; Vol. I
        </span>
        <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.38] text-white/90 tracking-wide">
          &ldquo;In an age of disposable feeds, Noticed is a sanctuary for stillness. Where fleeting thoughts become literature.&rdquo;
        </blockquote>
      </motion.div>

      {/* 2. THE 3D BOOK UNFOLD CONTAINER */}
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        
        {/* Interactive Book Spread */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            /* ================= OPEN BOOK SPREAD ================= */
            <motion.div
              key="open-book"
              initial={{ opacity: 0, rotateX: 8, scale: 0.94 }}
              animate={{ opacity: 1, rotateX: 0, scale: 1 }}
              exit={{ opacity: 0, rotateX: -8, scale: 0.94 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl rounded-xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] flex flex-col md:flex-row overflow-hidden border border-white/10"
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Spine Valley Shadow (Center Fold) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 bg-gradient-to-r from-black/25 via-black/45 to-black/25 pointer-events-none z-30" />
              
              {/* Bookmark Ribbon hanging down */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-28 bg-[#9a3412] shadow-md pointer-events-none z-40 rounded-b-sm" />

              {/* LEFT PAGE: The Preface & Marginalia */}
              <div className="flex-1 bg-[#F7F5F0] text-[#1C1917] p-8 sm:p-10 lg:p-12 relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E5E0D5]">
                {/* Page Header */}
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#E5E0D5] mb-8 font-mono text-[10px] tracking-[0.2em] text-[#78716C] uppercase">
                    <span>PREFACE &bull; NOTICED SALON</span>
                    <span>OCTOBER 12, 2026</span>
                  </div>

                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#A8A29E] uppercase block mb-2">
                    CHAPTER I &bull; ON STILLNESS
                  </span>

                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-normal leading-[1.2] text-[#1C1917] mb-5 tracking-tight">
                    The Architecture of Memory
                  </h3>

                  <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg leading-[1.75] text-[#292524] mb-4">
                    We do not remember days; we remember moments.{" "}
                    <span className="bg-amber-200/80 px-1 py-0.5 rounded text-[#1C1917]">
                      The richness of observation lies not in speed, but in the deliberate pause to notice what is fragile.
                    </span>
                    <sup className="font-serif font-bold text-xs text-[#9a3412] ml-0.5">1</sup>
                  </p>

                  <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base leading-[1.7] text-[#57534E] font-light">
                    Every word written by hand or captured in quiet reflection is a quiet rebellion against forgetting.
                  </p>
                </div>

                {/* Marginalia footnote at page bottom */}
                <div className="pt-6 border-t border-[#E5E0D5] mt-6 flex justify-between items-end">
                  <div className="text-[11px] font-serif text-[#78716C] italic leading-tight">
                    <span className="font-mono not-italic text-[#9a3412] font-semibold mr-1">1.</span>
                    Cesare Pavese, Il mestiere di vivere &mdash; Margin noted in study.
                  </div>
                  <span className="font-mono text-[10px] text-[#A8A29E]">pg. 12</span>
                </div>
              </div>

              {/* RIGHT PAGE: Field Entry & Analog Artifact */}
              <div className="flex-1 bg-[#F5F2EB] text-[#1C1917] p-8 sm:p-10 lg:p-12 relative flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-[#E5E0D5] mb-6 font-mono text-[10px] tracking-[0.2em] text-[#78716C] uppercase">
                    <span>FIELD OBSERVATION NO. 042</span>
                    <span>17:42 PM</span>
                  </div>

                  {/* Tucked 35mm Polaroid Card */}
                  <div className="w-full sm:w-56 float-none sm:float-right ml-0 sm:ml-5 mb-5 p-2 bg-white rounded shadow-md border border-[#E5E0D5] rotate-0 sm:rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="relative w-full aspect-[4/3] rounded overflow-hidden bg-stone-900">
                      <Image
                        src="/heroes-bg.webp"
                        alt="The Exhibition, Paris"
                        fill
                        sizes="240px"
                        className="object-cover sepia-[0.2] contrast-105"
                      />
                    </div>
                    <div className="pt-2 px-1 flex justify-between items-center font-mono text-[9px] text-[#78716C] tracking-wider">
                      <span>THE EXHIBITION</span>
                      <span>35MM &bull; EXP 18</span>
                    </div>
                  </div>

                  <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg leading-[1.75] text-[#292524] mb-4">
                    Twilight over the gallery wall. The spotlit frame revealed a warmth that the rain outside had washed away.
                  </p>

                  <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base leading-[1.7] text-[#57534E] font-light">
                    Spoke a few words into the microphone. A whisper preserved directly into the manuscript stream.
                  </p>

                  {/* Slender Single-Line Voice Memo Pill */}
                  <div className="mt-4 flex items-center gap-3 px-3.5 py-2 rounded-lg bg-[#EAE5DA] border border-[#DDD7CA] text-[#44403C] w-fit">
                    <span className="w-2 h-2 rounded-full bg-[#9a3412] animate-pulse" />
                    <span className="font-mono text-[10px] tracking-wider uppercase">
                      VOICE MEMO 01:24 &bull; LOSSLESS
                    </span>
                  </div>
                </div>

                {/* Right page footer */}
                <div className="pt-6 border-t border-[#E5E0D5] mt-6 flex justify-between items-center text-[10px] font-mono text-[#A8A29E]">
                  <span>NOTICED &bull; BUCKRAM ARCHIVE</span>
                  <span>pg. 13</span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ================= CLOSED BOOK (LEATHER / BUCKRAM COVER) ================= */
            <motion.div
              key="closed-book"
              initial={{ opacity: 0, rotateY: -15, scale: 0.94 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: 15, scale: 0.94 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setIsOpen(true)}
              className="relative w-[300px] sm:w-[340px] md:w-[380px] h-[440px] sm:h-[480px] md:h-[520px] rounded-r-2xl rounded-l-md bg-[#131518] border border-white/15 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.9)] flex flex-col justify-between cursor-pointer group hover:scale-[1.02] transition-transform duration-300 select-none"
              style={{
                perspective: "1200px",
              }}
            >
              {/* Embossed Gold Foil Border */}
              <div className="absolute inset-3 sm:inset-4 border border-amber-400/25 rounded-r-xl rounded-l-sm pointer-events-none" />
              <div className="absolute inset-4 sm:inset-5 border border-amber-400/15 rounded-r-lg rounded-l-xs pointer-events-none" />

              {/* Spine edge texture on left */}
              <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none rounded-l-md" />

              {/* Cover Header */}
              <div className="text-center pt-8 relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-amber-200/60 block mb-2">
                  OFFICIAL FIELD ARCHIVE
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
                  VOL. I &bull; MCMXXVI
                </span>
              </div>

              {/* Centered Gold Foil Monogram */}
              <div className="text-center relative z-10">
                <h3 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl text-white font-normal tracking-[0.12em] uppercase drop-shadow-md mb-2">
                  NOTICED
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base italic text-amber-200/80 tracking-wide font-light">
                  &ldquo;for things you don&apos;t want to forget&rdquo;
                </p>
              </div>

              {/* Cover Bottom */}
              <div className="text-center pb-6 relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30 block mb-3">
                  PENGUIN CLASSICS &bull; HIGH-DENSITY FOLIO
                </span>
                <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-mono group-hover:translate-x-1 transition-transform">
                  <span>Tap to open manuscript</span>
                  <span>&rarr;</span>
                </div>
              </div>

              {/* Hanging Bookmark Ribbon */}
              <div className="absolute -bottom-6 left-16 w-3 h-10 bg-[#9a3412] shadow-md pointer-events-none rounded-b-sm" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slender Toggle Control Underneath */}
        <div className="mt-10 sm:mt-12 flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-transparent text-white/80 hover:text-white hover:border-white/40 text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer"
          >
            <BookOpen size={13} />
            <span>{isOpen ? "Close Folio Cover" : "Unfold Living Manuscript"}</span>
          </button>
        </div>

      </div>

    </section>
  );
}
