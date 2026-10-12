"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function BookUnfoldSection() {
  const [paperTheme, setPaperTheme] = useState<"linen" | "obsidian">("linen");

  return (
    <section className="relative w-full bg-[#050708] text-white py-24 sm:py-32 lg:py-40 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* 1. SLENDER CURATORIAL INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-2xl text-center mb-12 sm:mb-16 px-4"
      >
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 block mb-4">
          Folio Manuscript &bull; App Export Edition
        </span>
        <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.35] text-white/95 tracking-wide">
          &ldquo;In an age of disposable feeds, Noticed is a sanctuary for stillness. Where fleeting thoughts become literature.&rdquo;
        </blockquote>
      </motion.div>

      {/* 2. PAPER FORMAT & THEME CONTROLS */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={() => setPaperTheme("linen")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
            paperTheme === "linen"
              ? "bg-white text-stone-900 font-semibold shadow-md"
              : "border border-white/20 text-white/60 hover:text-white"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#fdfbf7] border border-stone-300" />
          <span>Alabaster Linen</span>
        </button>

        <button
          onClick={() => setPaperTheme("obsidian")}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
            paperTheme === "obsidian"
              ? "bg-white text-stone-900 font-semibold shadow-md"
              : "border border-white/20 text-white/60 hover:text-white"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#161719] border border-white/40" />
          <span>Obsidian Dark</span>
        </button>
      </div>

      {/* 3. AUTHENTIC FOLIO MANUSCRIPT SHEET (MATCHING APP EXPORT 1:1) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[720px] relative"
      >
        {/* Layered Deckle Shadow (Simulating stacked heavy archival paper) */}
        <div
          className={`absolute -bottom-3 -right-3 left-3 top-3 rounded-2xl transition-colors duration-500 pointer-events-none ${
            paperTheme === "linen" ? "bg-[#ebe6dc]/60" : "bg-[#0d0f12]/80"
          }`}
        />
        <div
          className={`absolute -bottom-1.5 -right-1.5 left-1.5 top-1.5 rounded-2xl transition-colors duration-500 pointer-events-none ${
            paperTheme === "linen" ? "bg-[#f4efe6]/80" : "bg-[#111317]/90"
          }`}
        />

        {/* The Main Folio Paper Sheet */}
        <div
          className={`relative w-full rounded-2xl p-8 sm:p-14 md:p-16 transition-colors duration-500 shadow-[0_30px_70px_rgba(0,0,0,0.85)] border space-y-10 ${
            paperTheme === "linen"
              ? "bg-[#fdfbf7] text-[#1c1917] border-stone-300/80"
              : "bg-[#141619] text-[#f4efe6] border-white/15"
          }`}
        >
          {/* Top Folio Header Plate */}
          <div
            className={`border-b pb-4 flex items-baseline justify-between ${
              paperTheme === "linen" ? "border-stone-300/80" : "border-white/15"
            }`}
          >
            <div>
              <span
                className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] block ${
                  paperTheme === "linen" ? "text-stone-500" : "text-stone-400"
                }`}
              >
                Volume Folio Edition &bull; No. 042
              </span>
              <h4
                className={`font-[family-name:var(--font-cormorant)] text-xs sm:text-sm tracking-wider uppercase font-semibold mt-1 ${
                  paperTheme === "linen" ? "text-stone-800" : "text-stone-200"
                }`}
              >
                The Salon Field Chronicle
              </h4>
            </div>

            <div className="text-right font-mono text-[10px] sm:text-[11px] text-stone-500 tracking-wider">
              <span>OCTOBER 12, 2026</span>
              <span className="block text-[9px] text-stone-400">17:42 PM &bull; PARIS</span>
            </div>
          </div>

          {/* Note Title */}
          <div>
            <h3
              className={`font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-normal tracking-tight leading-[1.2] mb-4 ${
                paperTheme === "linen" ? "text-stone-900" : "text-white"
              }`}
            >
              The Architecture of Memory
            </h3>

            {/* Note Body Text with Amber Highlighter Stroke */}
            <p
              className={`font-[family-name:var(--font-cormorant)] text-base sm:text-lg lg:text-[19px] leading-[1.8] font-normal mb-5 ${
                paperTheme === "linen" ? "text-stone-800" : "text-stone-200"
              }`}
            >
              We do not remember days; we remember moments.{" "}
              <span
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  paperTheme === "linen"
                    ? "bg-amber-200/80 text-stone-950 font-medium"
                    : "bg-amber-400/25 text-amber-100 font-medium"
                }`}
              >
                The richness of observation lies not in speed, but in the deliberate pause to notice what is fragile.
              </span>
              <sup
                className={`font-serif font-bold text-xs ml-1 ${
                  paperTheme === "linen" ? "text-amber-900" : "text-amber-300"
                }`}
              >
                1
              </sup>
            </p>

            <p
              className={`font-[family-name:var(--font-cormorant)] text-sm sm:text-base leading-[1.75] font-light ${
                paperTheme === "linen" ? "text-stone-600" : "text-stone-400"
              }`}
            >
              Walking past the gallery hall after rain. The spotlit frame revealed a warmth that the cold street had washed away. Spoke a short reflection into the microphone before the impression faded.
            </p>
          </div>

          {/* Straight Polaroid Photographic Plate (Clean, Unrotated, Matching Mobile App 1:1) */}
          <div className="pt-2">
            <div
              className={`rounded-xl overflow-hidden border p-3 sm:p-4 pb-4 sm:pb-5 space-y-3 transition-colors ${
                paperTheme === "linen"
                  ? "bg-white border-stone-200 shadow-sm"
                  : "bg-[#1a1d22] border-white/10 shadow-md"
              }`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden bg-stone-950">
                <Image
                  src="/heroes-bg.webp"
                  alt="The Exhibition, Paris"
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover sepia-[0.15] contrast-105"
                />
              </div>

              {/* Typewriter Monospace Caption */}
              <div
                className={`pt-1 px-1 flex flex-wrap items-center justify-between font-mono text-[10px] sm:text-[11px] tracking-wider uppercase ${
                  paperTheme === "linen" ? "text-stone-600" : "text-stone-400"
                }`}
              >
                <span className="font-semibold text-stone-800 dark:text-stone-200">
                  PLATE I &bull; THE EXHIBITION AT TWILIGHT
                </span>
                <span>35MM KODAK TRI-X &bull; EXP 18</span>
              </div>
            </div>
          </div>

          {/* Slender Lossless Audio Memo Pill */}
          <div
            className={`flex items-center justify-between px-4 py-2.5 rounded-xl border text-xs font-mono transition-colors ${
              paperTheme === "linen"
                ? "bg-[#f4efe6] border-stone-300/80 text-stone-700"
                : "bg-white/5 border-white/10 text-stone-300"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span className="tracking-wider uppercase text-[11px]">
                VOICE MEMO 01:24 &bull; REFLECTIONS BY THE WALL
              </span>
            </div>
            <span className="text-[10px] text-stone-500 uppercase tracking-widest hidden sm:inline">
              LOSSLESS 48KHZ
            </span>
          </div>

          {/* Penguin Classics Footnotes Apparatus */}
          <div
            className={`pt-5 border-t space-y-2 text-xs transition-colors ${
              paperTheme === "linen" ? "border-stone-300/80 text-stone-600" : "border-white/15 text-stone-400"
            }`}
          >
            <div className="flex items-baseline gap-2 font-[family-name:var(--font-cormorant)] text-sm sm:text-base italic leading-relaxed">
              <span
                className={`font-mono not-italic font-bold text-xs ${
                  paperTheme === "linen" ? "text-amber-900" : "text-amber-300"
                }`}
              >
                1.
              </span>
              <span>
                Cesare Pavese, <span className="font-semibold not-italic">Il mestiere di vivere</span> &mdash; Margin noted in study after midnight.
              </span>
            </div>
          </div>

          {/* Bottom Archival Page Stamp */}
          <div
            className={`pt-4 border-t flex justify-between items-center font-mono text-[10px] tracking-widest uppercase text-stone-400 ${
              paperTheme === "linen" ? "border-stone-200" : "border-white/10"
            }`}
          >
            <span>NOTICED FOLIO ARCHIVE</span>
            <span>PAGE 12</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
