"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function DarkroomSection() {
  const [activeEmulsion, setActiveEmulsion] = useState<"tri-x" | "cinestill" | "portra">("tri-x");

  return (
    <section className="relative w-full bg-[#050708] text-white py-24 sm:py-36 lg:py-44 px-4 sm:px-8 md:px-14 flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* 1. SLENDER CURATORIAL INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-2xl text-center mb-16 sm:mb-20 px-4"
      >
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 block mb-4">
          Plate 02 &bull; The Analog Darkroom
        </span>
        <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.35] text-white/95 tracking-wide">
          &ldquo;Photography is the sudden pause of a shutter. Memory is the patient development in the dark.&rdquo;
        </blockquote>
      </motion.div>

      {/* 2. ARCHITECTURAL 35MM CONTACT SHEET (NO GLASS, RAW FILM REBATE) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl"
      >
        {/* Film Strip Frame Container */}
        <div className="w-full rounded-xl bg-[#090b0d] border border-stone-800/80 p-4 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.9)]">
          
          {/* Top Sprocket & Film Rebate Markings */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 font-mono text-[9px] sm:text-[10px] text-white/30 tracking-[0.25em] uppercase">
            <span>&bull; &bull; &bull; KODAK SAFETY FILM 5063</span>
            <span className="hidden sm:inline">35MM &bull; EMULSION ISO 400</span>
            <span>EXP 24 &bull; &bull; &bull;</span>
          </div>

          {/* 3 Contact Frames Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 py-5 sm:py-6">
            
            {/* FRAME 01: Paris Museum Wall */}
            <div className="space-y-3 group cursor-pointer" onClick={() => setActiveEmulsion("tri-x")}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-black border border-white/10">
                <Image
                  src="/heroes-bg.webp"
                  alt="Frame 18"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className={`object-cover transition-all duration-700 ${
                    activeEmulsion === "tri-x" ? "grayscale contrast-125" : "grayscale opacity-80"
                  }`}
                />
                {/* Frame Index Overlay */}
                <span className="absolute top-2 left-2 font-mono text-[9px] text-white/60 bg-black/60 px-1 py-0.5 rounded">
                  ▲ 18
                </span>
              </div>
              <div className="font-mono text-[10px] text-white/60 space-y-0.5">
                <p className="text-white/90 font-medium tracking-wider">FRAME 18 &bull; PARIS // 19:42</p>
                <p className="text-[9px] text-white/40 tracking-widest">KODAK TRI-X &bull; SILVER HALIDE</p>
              </div>
            </div>

            {/* FRAME 02: Kyoto Dawn */}
            <div className="space-y-3 group cursor-pointer" onClick={() => setActiveEmulsion("cinestill")}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-black border border-white/10">
                <Image
                  src="/heroes-bg.webp"
                  alt="Frame 19"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className={`object-cover transition-all duration-700 ${
                    activeEmulsion === "cinestill"
                      ? "sepia-[0.35] hue-rotate-[340deg] contrast-115"
                      : "sepia-[0.2] opacity-80"
                  }`}
                />
                <span className="absolute top-2 left-2 font-mono text-[9px] text-white/60 bg-black/60 px-1 py-0.5 rounded">
                  ▲ 19
                </span>
              </div>
              <div className="font-mono text-[10px] text-white/60 space-y-0.5">
                <p className="text-white/90 font-medium tracking-wider">FRAME 19 &bull; KYOTO // 04:11</p>
                <p className="text-[9px] text-amber-300/60 tracking-widest">CINESTILL 800T &bull; TUNGSTEN</p>
              </div>
            </div>

            {/* FRAME 03: Florence Night */}
            <div className="space-y-3 group cursor-pointer" onClick={() => setActiveEmulsion("portra")}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-black border border-white/10">
                <Image
                  src="/heroes-bg.webp"
                  alt="Frame 20"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className={`object-cover transition-all duration-700 ${
                    activeEmulsion === "portra"
                      ? "saturate-90 brightness-105 contrast-105"
                      : "saturate-70 opacity-80"
                  }`}
                />
                <span className="absolute top-2 left-2 font-mono text-[9px] text-white/60 bg-black/60 px-1 py-0.5 rounded">
                  ▲ 20
                </span>
              </div>
              <div className="font-mono text-[10px] text-white/60 space-y-0.5">
                <p className="text-white/90 font-medium tracking-wider">FRAME 20 &bull; FLORENCE // 23:15</p>
                <p className="text-[9px] text-rose-300/60 tracking-widest">PORTRA 160 &bull; MUTED GRAIN</p>
              </div>
            </div>

          </div>

          {/* Bottom Film Rebate Markings */}
          <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10 font-mono text-[9px] sm:text-[10px] text-white/30 tracking-[0.25em] uppercase">
            <span>&bull; NOTICED ARCHIVES &bull; NO. 042</span>
            <span>PROCESS C-41 / B&W GELATIN SILVER</span>
          </div>

        </div>
      </motion.div>

      {/* 3. THREE QUIET PILLARS (Clean Slender Hairline Columns, Zero Glass) */}
      <div className="w-full max-w-5xl mt-24 sm:mt-32 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        
        {/* Pillar I */}
        <div className="space-y-3">
          <span className="font-mono text-[10px] text-white/40 tracking-[0.25em] uppercase block">
            01 &bull; OFFLINE SOLITUDE
          </span>
          <h4 className="font-[family-name:var(--font-cormorant)] text-2xl text-white font-normal tracking-wide">
            Private by Architecture
          </h4>
          <p className="text-sm text-white/60 font-light leading-relaxed">
            Noticed operates completely offline-first. Your private reflections never leave your device without your explicit sync, and are never harvested for AI training.
          </p>
        </div>

        {/* Pillar II */}
        <div className="space-y-3">
          <span className="font-mono text-[10px] text-white/40 tracking-[0.25em] uppercase block">
            02 &bull; THE LUXURY FOLIO
          </span>
          <h4 className="font-[family-name:var(--font-cormorant)] text-2xl text-white font-normal tracking-wide">
            Bound for Permanence
          </h4>
          <p className="text-sm text-white/60 font-light leading-relaxed">
            Generate masterwork A4/A5 PDF editions formatted in Penguin Classics typography. Ready for high-grade archival printing and physical leather binding.
          </p>
        </div>

        {/* Pillar III */}
        <div className="space-y-3">
          <span className="font-mono text-[10px] text-white/40 tracking-[0.25em] uppercase block">
            03 &bull; TACTILE MEMO
          </span>
          <h4 className="font-[family-name:var(--font-cormorant)] text-2xl text-white font-normal tracking-wide">
            Whisper to Manuscript
          </h4>
          <p className="text-sm text-white/60 font-light leading-relaxed">
            Record spoken thoughts with lossless 48kHz frequency capture. Each audio relic embeds directly beside your handwritten notes and photograph plates.
          </p>
        </div>

      </div>

    </section>
  );
}
