"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function BookUnfoldSection() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <section className="relative w-full bg-[#050708] text-white py-24 sm:py-32 lg:py-40 px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* 1. SLENDER CURATORIAL INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-2xl text-center mb-14 sm:mb-18 px-4"
      >
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 block mb-4">
          The Living Manuscript &bull; Open Folio Edition
        </span>
        <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.35] text-white/95 tracking-wide">
          &ldquo;In an age of disposable feeds, Noticed is a sanctuary for stillness. Where fleeting thoughts become literature.&rdquo;
        </blockquote>
      </motion.div>

      {/* 2. THE HIGH-CRAFT TWO-PAGE OPEN BOOK */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl flex justify-center"
      >
        
        {/* PHYSICAL HARDCOVER CASING UNDERNEATH (Obsidian Buckram Cloth Binding) */}
        <div 
          className="relative w-full rounded-2xl p-2 sm:p-3 bg-[#111215] border border-white/15"
          style={{
            boxShadow: "0 35px 80px -15px rgba(0, 0, 0, 0.95), 0 15px 35px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.1)",
          }}
        >
          
          {/* THE TWO-PAGE OPEN SPREAD */}
          <div className="relative w-full flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl">
            
            {/* ============================================================
                LEFT PAGE: Preface, The Architecture of Memory & Marginalia
                ============================================================ */}
            <div 
              className="relative flex-1 p-7 sm:p-10 lg:p-12 flex flex-col justify-between"
              style={{
                /* Natural paper gradient curling toward the center gutter */
                background: "linear-gradient(to right, #fbf9f4 0%, #f7f4ec 84%, #ded8c9 97%, #b5ad9b 100%)",
                color: "#1c1917",
                boxShadow: "inset 4px 0 10px rgba(0,0,0,0.03)",
              }}
            >
              {/* Stacked Pages Thickness Shadow (Left Outer Edge) */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />

              {/* Page Content */}
              <div>
                {/* Header Plate */}
                <div className="border-b border-[#ded7c8] pb-3 mb-6 sm:mb-8 flex justify-between items-baseline font-mono text-[10px] tracking-[0.2em] text-[#78716c] uppercase">
                  <span>PREFACE &bull; NOTICED SALON</span>
                  <span>OCTOBER 12, 2026</span>
                </div>

                {/* Chapter & Title */}
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#a8a29e] uppercase block mb-1.5">
                  CHAPTER I &bull; ON STILLNESS
                </span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[1.18] text-[#1c1917] mb-5 tracking-tight">
                  The Architecture of Memory
                </h3>

                {/* Body Passage with Warm Amber Highlighter */}
                <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg leading-[1.8] text-[#292524] mb-4">
                  We do not remember days; we remember moments.{" "}
                  <span className="bg-[#fef08a]/80 px-1 py-0.5 rounded text-[#1c1917] font-medium">
                    The richness of observation lies not in speed, but in the deliberate pause to notice what is fragile.
                  </span>
                  <sup className="font-serif font-bold text-xs text-[#9a3412] ml-0.5">1</sup>
                </p>

                <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base leading-[1.75] text-[#57534e] font-light">
                  Every reflection recorded in quiet stillness is a deliberate rebellion against the disposable noise of modern feeds. Words kept become an anchor.
                </p>
              </div>

              {/* Footnotes Apparatus & Page Number */}
              <div className="pt-6 border-t border-[#ded7c8] mt-6 flex justify-between items-end">
                <div className="text-xs font-serif text-[#78716c] italic leading-relaxed max-w-[80%]">
                  <span className="font-mono not-italic font-bold text-[#9a3412] mr-1.5">1.</span>
                  Cesare Pavese, <span className="not-italic font-semibold">Il mestiere di vivere</span> &mdash; Margin noted in study after midnight.
                </div>
                <span className="font-mono text-[10px] text-[#a8a29e] tracking-widest uppercase">
                  pg. 12
                </span>
              </div>
            </div>

            {/* ============================================================
                THE CENTER SPINNER GUTTER & WOVEN SILK BOOKMARK RIBBON
                ============================================================ */}
            {/* Center Gutter Seam & Shadow Valley */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 pointer-events-none z-20">
              {/* Deep Shadow Gutter Valley */}
              <div className="w-full h-full bg-gradient-to-r from-black/25 via-black/45 to-black/25" />
              {/* Hairline Center Stitch Thread */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-black/40" />
            </div>

            {/* Authentic Silk Ribbon Bookmark with Notch V-Cut */}
            <div 
              className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-36 pointer-events-none z-30"
              style={{
                background: "linear-gradient(to bottom, #9a3412 0%, #7c2d12 70%, #5c1e08 100%)",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 88%, 0 100%)",
                filter: "drop-shadow(2px 5px 6px rgba(0, 0, 0, 0.4))",
              }}
            />

            {/* ============================================================
                RIGHT PAGE: Field Observation & Straight Photographic Plate
                ============================================================ */}
            <div 
              className="relative flex-1 p-7 sm:p-10 lg:p-12 flex flex-col justify-between"
              style={{
                /* Natural paper gradient curling away from the center gutter */
                background: "linear-gradient(to left, #fbf9f4 0%, #f7f4ec 84%, #ded8c9 97%, #b5ad9b 100%)",
                color: "#1c1917",
                boxShadow: "inset -4px 0 10px rgba(0,0,0,0.03)",
              }}
            >
              {/* Stacked Pages Thickness Shadow (Right Outer Edge) */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />

              {/* Page Content */}
              <div>
                {/* Header Plate */}
                <div className="border-b border-[#ded7c8] pb-3 mb-5 sm:mb-6 flex justify-between items-baseline font-mono text-[10px] tracking-[0.2em] text-[#78716c] uppercase">
                  <span>FIELD RECORD NO. 042</span>
                  <span>17:42 PM &bull; PARIS</span>
                </div>

                {/* Straight Archival Photographic Plate (Matching App Export 1:1, NO ROTATION) */}
                <div className="mb-5 rounded-lg border border-[#ded7c8] bg-white p-2.5 sm:p-3 pb-3 sm:pb-3.5 shadow-sm space-y-2">
                  {/* Photo Canvas */}
                  <div className="relative aspect-[16/10] rounded overflow-hidden bg-stone-950">
                    <Image
                      src="/heroes-bg.webp"
                      alt="The Exhibition, Paris"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover sepia-[0.15] contrast-105"
                    />
                  </div>

                  {/* Typewriter Monospace Plate Caption */}
                  <div className="px-1 flex justify-between items-center font-mono text-[9px] sm:text-[10px] text-[#57534e] tracking-wider uppercase">
                    <span className="font-semibold text-[#292524]">
                      PLATE I &bull; THE EXHIBITION AT TWILIGHT
                    </span>
                    <span>35MM TRI-X &bull; EXP 18</span>
                  </div>
                </div>

                {/* Field Observation Body Text */}
                <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg leading-[1.8] text-[#292524] mb-3">
                  Twilight over the gallery hall. The spotlit frame revealed a warmth that the rain outside had washed away.
                </p>

                <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base leading-[1.7] text-[#57534e] font-light">
                  Spoke a few words into the microphone. A whisper preserved directly into the manuscript stream.
                </p>

                {/* Slender Lossless Voice Memo Pill */}
                <div className="mt-4 flex items-center justify-between px-3.5 py-2 rounded-lg bg-[#efeae0] border border-[#ded7c8] text-[#44403c] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-4 h-4 rounded-full bg-[#9a3412] text-white flex items-center justify-center text-[8px] cursor-pointer"
                    >
                      {isPlayingAudio ? "❚❚" : "▶"}
                    </button>
                    <span className="tracking-wider uppercase text-[10px]">
                      VOICE MEMO 01:24 &bull; REFLECTIONS
                    </span>
                  </div>
                  <span className="text-[9px] text-[#78716c] uppercase tracking-wider">
                    LOSSLESS 48KHZ
                  </span>
                </div>
              </div>

              {/* Footer & Page Number */}
              <div className="pt-6 border-t border-[#ded7c8] mt-6 flex justify-between items-center text-[10px] font-mono text-[#a8a29e] tracking-widest uppercase">
                <span>NOTICED FOLIO ARCHIVE</span>
                <span>pg. 13</span>
              </div>
            </div>

          </div>
        </div>

      </motion.div>

    </section>
  );
}
