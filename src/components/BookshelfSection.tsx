"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NotebookVolume {
  id: string;
  volume: string;
  title: string;
  subtitle: string;
  category: string;
  entriesCount: number;
  spineColor: string;
  spineGradient: string;
  textColor: string;
  glyph: string;
  heightClass: string;
  widthClass: string;
  quote: string;
  author: string;
}

const VOLUMES: NotebookVolume[] = [
  {
    id: "seneca",
    volume: "VOL. 01",
    title: "Letters to Lucilius",
    subtitle: "Stoic Epistles on Stillness & Time",
    category: "Philosophy",
    entriesCount: 42,
    spineColor: "#1d1512",
    spineGradient: "linear-gradient(90deg, #2a1e1a 0%, #1d1512 35%, #150e0c 100%)",
    textColor: "#e6ca85", // antique gold foil
    glyph: "✦",
    heightClass: "h-[275px] sm:h-[315px] md:h-[345px]",
    widthClass: "w-[42px] sm:w-[52px] md:w-[60px]",
    quote: "Nothing belongs to us, Lucilius, except time.",
    author: "Seneca",
  },
  {
    id: "memory",
    volume: "VOL. 02",
    title: "The Architecture of Memory",
    subtitle: "Spatial Notes on Rooms & Solitude",
    category: "Architecture",
    entriesCount: 18,
    spineColor: "#111215",
    spineGradient: "linear-gradient(90deg, #1f2227 0%, #111215 35%, #0a0b0d 100%)",
    textColor: "#f1f5f9", // silver foil
    glyph: "◈",
    heightClass: "h-[290px] sm:h-[335px] md:h-[365px]",
    widthClass: "w-[46px] sm:w-[56px] md:w-[66px]",
    quote: "We build our memory by what we choose to linger upon.",
    author: "Noticed Curatorial Folio",
  },
  {
    id: "aurelius",
    volume: "VOL. 03",
    title: "Meditations at 04:00 AM",
    subtitle: "Solitary Pre-dawn Inquiries",
    category: "Meditations",
    entriesCount: 64,
    spineColor: "#0d1424",
    spineGradient: "linear-gradient(90deg, #18233a 0%, #0d1424 35%, #080c16 100%)",
    textColor: "#e8d5a3", // pale gold foil
    glyph: "◬",
    heightClass: "h-[280px] sm:h-[320px] md:h-[350px]",
    widthClass: "w-[44px] sm:w-[54px] md:w-[62px]",
    quote: "Think of what a privilege it is to be alive, to breathe, to think.",
    author: "Marcus Aurelius",
  },
  {
    id: "kyoto",
    volume: "VOL. 04",
    title: "Field Records • Kyoto",
    subtitle: "Moss, Rain, and Temple Woodwork",
    category: "Field Record",
    entriesCount: 27,
    spineColor: "#0e1c14",
    spineGradient: "linear-gradient(90deg, #172c21 0%, #0e1c14 35%, #08120c 100%)",
    textColor: "#d1dfbe", // pale sage foil
    glyph: "≋",
    heightClass: "h-[300px] sm:h-[345px] md:h-[375px]",
    widthClass: "w-[48px] sm:w-[58px] md:w-[68px]",
    quote: "Giō-ji at dawn. The rain arrived before the light.",
    author: "Travelogue",
  },
  {
    id: "nietzsche",
    volume: "VOL. 05",
    title: "Beyond Good & Solitude",
    subtitle: "Dialectics of Quiet Resistance",
    category: "Critique",
    entriesCount: 35,
    spineColor: "#1d1018",
    spineGradient: "linear-gradient(90deg, #2d1825 0%, #1d1018 35%, #12090e 100%)",
    textColor: "#e5b4bd", // rose gold foil
    glyph: "⬡",
    heightClass: "h-[280px] sm:h-[320px] md:h-[350px]",
    widthClass: "w-[42px] sm:w-[52px] md:w-[60px]",
    quote: "Whoever fights monsters should see to it that he does not become one.",
    author: "Nietzsche",
  },
  {
    id: "ephemeral",
    volume: "VOL. 06",
    title: "Notes on the Ephemeral",
    subtitle: "Train Windows & Dissolving Light",
    category: "Fragments",
    entriesCount: 51,
    spineColor: "#1a1d22",
    spineGradient: "linear-gradient(90deg, #262b32 0%, #1a1d22 35%, #101215 100%)",
    textColor: "#ffffff", // pure chalk foil
    glyph: "◉",
    heightClass: "h-[285px] sm:h-[330px] md:h-[360px]",
    widthClass: "w-[44px] sm:w-[54px] md:w-[64px]",
    quote: "The beauty of a train window is that the world never repeats itself.",
    author: "Transit",
  },
  {
    id: "lingering",
    volume: "VOL. 07",
    title: "The Art of Lingering",
    subtitle: "In Praise of Slowness & Attention",
    category: "Essays",
    entriesCount: 29,
    spineColor: "#221612",
    spineGradient: "linear-gradient(90deg, #32211b 0%, #221612 35%, #150d0a 100%)",
    textColor: "#fae8b2", // warm ivory foil
    glyph: "✶",
    heightClass: "h-[295px] sm:h-[340px] md:h-[370px]",
    widthClass: "w-[48px] sm:w-[58px] md:w-[68px]",
    quote: "To notice requires that you surrender the desire to arrive.",
    author: "Essays",
  },
  {
    id: "paris",
    volume: "VOL. 08",
    title: "Parisian Nocturnes",
    subtitle: "Empty Museums & Midnight Seine",
    category: "City Notes",
    entriesCount: 38,
    spineColor: "#101628",
    spineGradient: "linear-gradient(90deg, #1b2440 0%, #101628 35%, #090d18 100%)",
    textColor: "#d0d9ea", // platinum foil
    glyph: "✳",
    heightClass: "h-[275px] sm:h-[315px] md:h-[345px]",
    widthClass: "w-[40px] sm:w-[50px] md:w-[58px]",
    quote: "19:42 over Paris. I stayed long enough to notice it.",
    author: "Nocturne",
  },
];

export function BookshelfSection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(1); // Default to Vol. 02

  const activeVol = VOLUMES[selectedIndex];

  return (
    <section
      id="library"
      className="relative w-full bg-[#050708] text-white py-16 sm:py-24 px-4 sm:px-8 md:px-14 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* 1. SLENDER CURATORIAL INTRO (TIGHTER & LEANER) */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center mb-6 sm:mb-8 px-4"
      >
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 block mb-3">
          Folio Architecture &bull; Multiple Volumes
        </span>
        <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-[34px] font-normal leading-[1.28] text-white/95 tracking-wide">
          &ldquo;A library of one&apos;s own is not storage; it is the quiet architecture of who you chose to become.&rdquo;
        </blockquote>
      </motion.div>

      {/* 2. MINIMALIST SLENDER METADATA ROW (NO GLASS, NO CARD BOX, PURE RAW TYPOGRAPHY) */}
      <div className="w-full max-w-4xl mb-4 sm:mb-6 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVol.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="w-full flex flex-col sm:flex-row items-center sm:items-baseline justify-between gap-2 border-b border-white/10 pb-3 text-center sm:text-left"
          >
            {/* Left: Volume Indicator */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                {activeVol.volume}
              </span>
              <span className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl text-white font-normal tracking-wide">
                {activeVol.title}
              </span>
              <span className="hidden md:inline font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                &bull; {activeVol.category} &bull; {activeVol.entriesCount} Entries
              </span>
            </div>

            {/* Right: Curated Excerpt */}
            <p className="font-[family-name:var(--font-cormorant)] text-xs sm:text-sm text-white/70 italic font-light">
              &ldquo;{activeVol.quote}&rdquo;
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. THE 3D SPINES SHELF (SLENDER PROPORTIONS) */}
      <div className="w-full max-w-5xl flex flex-col items-center">
        
        {/* Scrollable container on mobile, centered on desktop */}
        <div className="w-full overflow-x-auto no-scrollbar pt-6 pb-2 px-4 flex items-end justify-start md:justify-center">
          <div className="flex items-end gap-1.5 sm:gap-2 md:gap-2.5">
            {VOLUMES.map((vol, index) => {
              const isSelected = selectedIndex === index;

              return (
                <motion.div
                  key={vol.id}
                  onClick={() => setSelectedIndex(index)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  animate={{
                    y: isSelected ? -20 : 0,
                    scale: isSelected ? 1.015 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  className={`relative cursor-pointer group shrink-0 ${vol.widthClass} ${vol.heightClass} rounded-t-[4px] sm:rounded-t-[5px] overflow-hidden select-none transition-shadow duration-300 ${
                    isSelected
                      ? "shadow-[0_20px_40px_rgba(0,0,0,0.95),0_0_20px_rgba(255,255,255,0.06)] z-20"
                      : "shadow-[inset_2px_0_4px_rgba(255,255,255,0.08),inset_-3px_0_6px_rgba(0,0,0,0.65)] hover:y-[-8px] opacity-85 hover:opacity-100 z-10"
                  }`}
                  style={{
                    background: vol.spineGradient,
                    borderTop: `1px solid rgba(255,255,255,${isSelected ? 0.35 : 0.12})`,
                    borderLeft: `1px solid rgba(255,255,255,${isSelected ? 0.25 : 0.08})`,
                    borderRight: `1px solid rgba(0,0,0,0.7)`,
                  }}
                >
                  {/* Spine Cylindrical Highlight Streak */}
                  <div className="absolute inset-y-0 left-1 w-2 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-1 w-1.5 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />

                  {/* Top Embossed Hairline Rule */}
                  <div className="absolute top-3.5 sm:top-4 inset-x-2 h-[1px] bg-white/20" />

                  {/* Vertical Book Spine Title */}
                  <div className="absolute inset-y-10 sm:inset-y-12 inset-x-0 flex items-center justify-center">
                    <span
                      className="font-[family-name:var(--font-cormorant)] text-[12px] sm:text-[13px] md:text-[14px] font-normal tracking-[0.16em] whitespace-nowrap [writing-mode:vertical-rl] rotate-180 transition-colors"
                      style={{
                        color: vol.textColor,
                        textShadow: isSelected
                          ? "0 1px 4px rgba(0,0,0,0.8)"
                          : "0 1px 2px rgba(0,0,0,0.9)",
                      }}
                    >
                      {vol.title}
                    </span>
                  </div>

                  {/* Bottom Geometric Glyph & Embossed Rule */}
                  <div className="absolute bottom-2.5 sm:bottom-3 inset-x-0 flex flex-col items-center gap-1">
                    <span
                      className="text-xs sm:text-sm select-none leading-none"
                      style={{ color: vol.textColor }}
                    >
                      {vol.glyph}
                    </span>
                    <div className="w-4 sm:w-5 h-[1px] bg-white/20" />
                  </div>

                  {/* Selected Indicator Overhead Spot Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="spineHighlight"
                      className="absolute -top-1 inset-x-1 h-0.5 bg-white/80 rounded-full blur-[0.5px]"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4. THE PHYSICAL SHELF RAIL */}
        <div className="w-full relative mt-[-2px] z-30">
          <div className="w-full h-2.5 bg-gradient-to-b from-[#181a1d] to-[#0c0d0f] border-t border-stone-700/60 shadow-[0_10px_25px_rgba(0,0,0,0.95)]" />
          <div className="w-full h-1 bg-gradient-to-b from-[#090a0c] to-transparent" />
        </div>

        {/* 5. SLENDER COMPACT PILLARS (LEAN 3-COLUMN SUMMARY) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14 pt-8 border-t border-white/10 text-left">
          
          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/40 block">
              01 &bull; Infinite Private Folios
            </span>
            <h4 className="font-[family-name:var(--font-cormorant)] text-lg text-white font-normal">
              A Home for Every Current
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed font-[family-name:var(--font-cormorant)]">
              Create unlimited bound notebooks for projects, morning pages, or city walks. Never lose thoughts in an endless timeline.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/40 block">
              02 &bull; Tactile Spine & Debossing
            </span>
            <h4 className="font-[family-name:var(--font-cormorant)] text-lg text-white font-normal">
              Bookbinding on Glass
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed font-[family-name:var(--font-cormorant)]">
              Custom spine textures, debossed foil typography, and archival ribbon bookmarks designed to outlast software trends.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/40 block">
              03 &bull; Encrypted Solitude
            </span>
            <h4 className="font-[family-name:var(--font-cormorant)] text-lg text-white font-normal">
              Zero Cloud Training
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed font-[family-name:var(--font-cormorant)]">
              Stored offline on your device. No telemetry, no behavioral profiling, and zero AI scraping.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
