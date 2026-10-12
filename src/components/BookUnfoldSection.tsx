"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function BookUnfoldSection() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven book opening and closing
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 3D rotation angles for opening upon entering and closing upon leaving:
  // 0.05 -> 0.30: Book unfolds open from 60deg to 0deg
  // 0.30 -> 0.70: Book rests completely open (0deg) for reading
  // 0.70 -> 0.95: Book gently folds closed back to 60deg as user scrolls to next section
  const leftPageRotateY = useTransform(
    scrollYProgress,
    [0.08, 0.32, 0.68, 0.94],
    [55, 0, 0, 55]
  );

  const rightPageRotateY = useTransform(
    scrollYProgress,
    [0.08, 0.32, 0.68, 0.94],
    [-55, 0, 0, -55]
  );

  const bookScale = useTransform(
    scrollYProgress,
    [0.05, 0.30, 0.70, 0.95],
    [0.94, 1, 1, 0.94]
  );

  const foldShadowOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.30, 0.70, 0.94],
    [0.45, 0, 0, 0.45]
  );

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#050708] text-white py-24 sm:py-32 lg:py-44 px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      
      {/* 1. SLENDER CURATORIAL INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-2xl text-center mb-14 sm:mb-20 px-4"
      >
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 block mb-4">
          The Living Manuscript &bull; Open Folio Edition
        </span>
        <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.35] text-white/95 tracking-wide">
          &ldquo;In an age of disposable feeds, Noticed is a sanctuary for stillness. Where fleeting thoughts become literature.&rdquo;
        </blockquote>
      </motion.div>

      {/* 2. THE 3D SCROLL-DRIVEN OPENING & CLOSING BOOK */}
      <motion.div
        style={{
          scale: bookScale,
          perspective: 1800,
        }}
        className="relative w-full max-w-5xl flex justify-center"
      >
        {/* TWO-PAGE SPREAD CONTAINER */}
        <div 
          className="relative w-full flex flex-col md:flex-row rounded-xl shadow-[0_35px_90px_rgba(0,0,0,0.95),0_15px_35px_rgba(0,0,0,0.75)] border border-stone-800/40"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          
          {/* ============================================================
              LEFT PAGE: PREFACE • ON STILLNESS (Hinged at Right / Spine)
              ============================================================ */}
          <motion.div 
            style={{
              rotateY: leftPageRotateY,
              transformOrigin: "right center",
              transformStyle: "preserve-3d",
              background: "linear-gradient(to right, #fbf9f4 0%, #f7f4ec 84%, #ded8c9 97%, #b5ad9b 100%)",
              color: "#1c1917",
              boxShadow: "inset 4px 0 10px rgba(0,0,0,0.03)",
            }}
            className="relative flex-1 p-7 sm:p-10 lg:p-12 flex flex-col justify-between rounded-t-xl md:rounded-tr-none md:rounded-l-xl z-10"
          >
            {/* Dynamic Fold Shadow Overlay */}
            <motion.div 
              style={{ opacity: foldShadowOpacity }}
              className="absolute inset-0 bg-black/40 pointer-events-none rounded-l-xl z-20"
            />

            {/* Stacked Pages Thickness Shadow (Left Outer Edge) */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />

            {/* Page Content */}
            <div className="relative z-10">
              {/* Header Plate */}
              <div className="border-b border-[#ded7c8] pb-3 mb-6 sm:mb-8 flex justify-between items-baseline font-mono text-[10px] tracking-[0.2em] text-[#78716c] uppercase">
                <span>PREFACE &bull; ON STILLNESS</span>
                <span>NOTICED ARCHIVE // 04:11 AM</span>
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl lg:text-[32px] font-normal leading-[1.18] text-[#1c1917] mb-5 tracking-tight">
                The Architecture of Memory
              </h3>

              {/* Seneca Quote in the Center */}
              <div className="my-5 sm:my-6">
                <blockquote className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl lg:text-[23px] italic font-medium leading-[1.38] text-[#1c1917] mb-2">
                  &ldquo;We suffer more often in imagination than in reality.&rdquo;
                </blockquote>
                <span className="font-mono text-[10.5px] sm:text-[11px] text-[#78716c] tracking-widest uppercase block">
                  &mdash; Seneca
                </span>
              </div>

              {/* Reflective Paragraph */}
              <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base leading-[1.78] text-[#44403c] italic font-light">
                We do not need to add more days to our life. We only need to stop wasting the stillness that is already here. Memory is not storage. It is architecture. We build it by what we choose to linger on.
              </p>
            </div>

            {/* Footnote Apparatus & Page Number */}
            <div className="relative z-10 pt-6 border-t border-[#ded7c8] mt-6 flex justify-between items-end">
              <div className="text-xs font-serif text-[#78716c] italic leading-relaxed max-w-[85%]">
                <span className="font-mono not-italic font-bold text-[#9a3412] mr-1.5">1.</span>
                Seneca, <span className="not-italic font-semibold">Letters from a Stoic</span> &mdash; underlined on a train to Kyoto, 04:11 AM.
              </div>
              <span className="font-mono text-[10px] text-[#a8a29e] tracking-widest uppercase">
                pg. 12
              </span>
            </div>
          </motion.div>

          {/* ============================================================
              CENTER SPINNER GUTTER & WOVEN SILK BOOKMARK RIBBON
              ============================================================ */}
          {/* Center Gutter Seam & Shadow Valley */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 pointer-events-none z-20">
            <div className="w-full h-full bg-gradient-to-r from-black/25 via-black/45 to-black/25" />
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
              RIGHT PAGE: FIELD RECORD • ON SEEING (Hinged at Left / Spine)
              ============================================================ */}
          <motion.div 
            style={{
              rotateY: rightPageRotateY,
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              background: "linear-gradient(to left, #fbf9f4 0%, #f7f4ec 84%, #ded8c9 97%, #b5ad9b 100%)",
              color: "#1c1917",
              boxShadow: "inset -4px 0 10px rgba(0,0,0,0.03)",
            }}
            className="relative flex-1 p-7 sm:p-10 lg:p-12 flex flex-col justify-between rounded-b-xl md:rounded-bl-none md:rounded-r-xl z-10"
          >
            {/* Dynamic Fold Shadow Overlay */}
            <motion.div 
              style={{ opacity: foldShadowOpacity }}
              className="absolute inset-0 bg-black/40 pointer-events-none rounded-r-xl z-20"
            />

            {/* Stacked Pages Thickness Shadow (Right Outer Edge) */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />

            {/* Page Content */}
            <div className="relative z-10">
              {/* Header Plate */}
              <div className="border-b border-[#ded7c8] pb-3 mb-4 sm:mb-5 flex justify-between items-baseline font-mono text-[10px] tracking-[0.2em] text-[#78716c] uppercase">
                <span>FIELD RECORD &bull; ON SEEING</span>
                <span>19:42 PM &bull; PARIS</span>
              </div>

              {/* Nietzsche Quote */}
              <div className="mb-4">
                <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-[15px] italic leading-[1.5] text-[#292524]">
                  &ldquo;He who fights with monsters should be careful lest he thereby become a monster. And if you gaze long into an abyss, the abyss also gazes into you.&rdquo;
                </p>
                <span className="font-mono text-[10px] text-[#78716c] tracking-wider uppercase block mt-1">
                  &mdash; Nietzsche, Beyond Good and Evil
                </span>
              </div>

              {/* Straight Archival Photographic Plate (Matching App Export 1:1, NO ROTATION) */}
              <div className="mb-4 rounded-lg border border-[#ded7c8] bg-white p-2.5 sm:p-3 pb-3 sm:pb-3.5 shadow-sm space-y-2">
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

              {/* Field Description Below Plate */}
              <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-[15px] leading-[1.65] text-[#44403c] font-light">
                19:42 over Paris. The gallery was almost empty. I did not take a photo to remember it. I took a photo to prove I stayed long enough to notice it.
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
            <div className="relative z-10 pt-6 border-t border-[#ded7c8] mt-6 flex justify-between items-center text-[10px] font-mono text-[#a8a29e] tracking-widest uppercase">
              <span>NOTICED FOLIO ARCHIVE</span>
              <span>pg. 13</span>
            </div>
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}
