"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WaitlistModal } from "./WaitlistModal";

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
    heightClass: "h-[390px] sm:h-[430px]",
    widthClass: "w-[54px] sm:w-[68px] md:w-[76px]",
    quote: "Nothing belongs to us, Lucilius, except time. Hold every hour in your grasp.",
    author: "Seneca • Epistulae Morales",
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
    heightClass: "h-[415px] sm:h-[460px]",
    widthClass: "w-[60px] sm:w-[74px] md:w-[84px]",
    quote: "Memory is not storage. It is architecture. We build it by what we choose to linger upon.",
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
    heightClass: "h-[400px] sm:h-[440px]",
    widthClass: "w-[56px] sm:w-[70px] md:w-[78px]",
    quote: "When you arise in the morning think of what a privilege it is to be alive, to breathe, to think.",
    author: "Marcus Aurelius • Book IV",
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
    heightClass: "h-[425px] sm:h-[470px]",
    widthClass: "w-[62px] sm:w-[78px] md:w-[88px]",
    quote: "Giō-ji at dawn. The rain arrived before the light, soaking centuries of quiet green.",
    author: "Archival Travelogue",
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
    heightClass: "h-[395px] sm:h-[435px]",
    widthClass: "w-[54px] sm:w-[68px] md:w-[76px]",
    quote: "Whoever fights monsters should see to it that in the process he does not become a monster.",
    author: "Friedrich Nietzsche • Aphorisms",
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
    heightClass: "h-[410px] sm:h-[450px]",
    widthClass: "w-[58px] sm:w-[72px] md:w-[80px]",
    quote: "The beauty of a train window is that the world never repeats itself even once.",
    author: "Observations in Transit",
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
    heightClass: "h-[420px] sm:h-[465px]",
    widthClass: "w-[64px] sm:w-[76px] md:w-[86px]",
    quote: "To notice requires that you surrender the desire to arrive. Slowness is a luxury.",
    author: "Solitude Folio No. 07",
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
    heightClass: "h-[395px] sm:h-[435px]",
    widthClass: "w-[52px] sm:w-[66px] md:w-[74px]",
    quote: "19:42 over Paris. The gallery was almost empty. I stayed long enough to notice it.",
    author: "Nocturne Series",
  },
];

export function BookshelfSection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(1); // Default to Vol. 02
  const [modalOpen, setModalOpen] = useState(false);

  const activeVol = VOLUMES[selectedIndex];

  return (
    <section
      id="library"
      className="relative w-full bg-[#050708] text-white py-24 sm:py-36 lg:py-44 px-4 sm:px-8 md:px-14 flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* 1. SECTION HEADER (THE PHILOSOPHY OF MULTIPLE VOLUMES) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl text-center mb-14 sm:mb-20 px-4"
      >
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 block mb-4">
          Folio Architecture &bull; Multiple Volumes
        </span>
        <blockquote className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal leading-[1.3] text-white/95 tracking-wide mb-6">
          &ldquo;A library of one&apos;s own is not storage; it is the quiet architecture of who you chose to become.&rdquo;
        </blockquote>
        <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg text-white/60 font-light italic max-w-xl mx-auto leading-relaxed">
          Create boundless independent notebooks. Segregate quiet reflections, urban observations, and philosophical inquiries into physical-grade bound folios.
        </p>
      </motion.div>

      {/* 2. THE CURATORIAL INSPECTOR (FLOATING CARD ABOVE THE SHELF) */}
      <div className="w-full max-w-4xl min-h-[140px] mb-8 sm:mb-12 flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVol.id}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6 p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#090b0d] shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
          >
            {/* Left: Volume Info */}
            <div className="space-y-1.5 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40">
                  {activeVol.volume}
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded border border-white/10 text-white/60">
                  {activeVol.category}
                </span>
                <span className="font-mono text-[10px] text-white/40 tracking-wider">
                  &bull; {activeVol.entriesCount} Entries
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl text-white font-normal tracking-wide">
                {activeVol.title}
              </h3>
              <p className="text-xs sm:text-[13px] font-mono text-white/50 tracking-wider">
                {activeVol.subtitle}
              </p>
            </div>

            {/* Right: Excerpt & Action */}
            <div className="flex flex-col items-center md:items-end justify-between gap-4 max-w-md text-center md:text-right">
              <p className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base text-white/80 italic font-light leading-relaxed">
                &ldquo;{activeVol.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                  {activeVol.author}
                </span>
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-white/80 hover:text-white transition-colors cursor-pointer border-b border-white/20 pb-0.5"
                >
                  <span>Open Volume</span>
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. THE 3D SPINES SHELF (ACCORDING TO REFERENCE IMAGE 2) */}
      <div className="w-full max-w-5xl flex flex-col items-center">
        
        {/* Scrollable container for mobile, perfectly centered on desktop */}
        <div className="w-full overflow-x-auto no-scrollbar pt-12 pb-2 px-6 flex items-end justify-start md:justify-center">
          <div className="flex items-end gap-1.5 sm:gap-2 md:gap-2.5">
            {VOLUMES.map((vol, index) => {
              const isSelected = selectedIndex === index;

              return (
                <motion.div
                  key={vol.id}
                  onClick={() => setSelectedIndex(index)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  animate={{
                    y: isSelected ? -28 : 0,
                    scale: isSelected ? 1.02 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  className={`relative cursor-pointer group shrink-0 ${vol.widthClass} ${vol.heightClass} rounded-t-[5px] sm:rounded-t-[6px] overflow-hidden select-none transition-shadow duration-300 ${
                    isSelected
                      ? "shadow-[0_24px_50px_rgba(0,0,0,0.95),0_0_25px_rgba(255,255,255,0.08)] z-20"
                      : "shadow-[inset_2px_0_4px_rgba(255,255,255,0.08),inset_-3px_0_6px_rgba(0,0,0,0.65)] hover:y-[-12px] opacity-85 hover:opacity-100 z-10"
                  }`}
                  style={{
                    background: vol.spineGradient,
                    borderTop: `1px solid rgba(255,255,255,${isSelected ? 0.35 : 0.12})`,
                    borderLeft: `1px solid rgba(255,255,255,${isSelected ? 0.25 : 0.08})`,
                    borderRight: `1px solid rgba(0,0,0,0.7)`,
                  }}
                >
                  {/* Spine Cylindrical Highlight Streak (3D Curve) */}
                  <div className="absolute inset-y-0 left-1 w-2.5 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-1 w-2 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />

                  {/* Top Embossed Hairline Rule */}
                  <div className="absolute top-4 sm:top-5 inset-x-2.5 h-[1.5px] bg-white/20" />

                  {/* Vertical Book Spine Title */}
                  <div className="absolute inset-y-12 sm:inset-y-14 inset-x-0 flex items-center justify-center">
                    <span
                      className="font-[family-name:var(--font-cormorant)] text-[13px] sm:text-[15px] md:text-[16px] font-normal tracking-[0.16em] whitespace-nowrap [writing-mode:vertical-rl] rotate-180 transition-colors"
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
                  <div className="absolute bottom-3 sm:bottom-4 inset-x-0 flex flex-col items-center gap-1.5 sm:gap-2">
                    <span
                      className="text-base sm:text-lg select-none leading-none"
                      style={{ color: vol.textColor }}
                    >
                      {vol.glyph}
                    </span>
                    <div className="w-5 sm:w-6 h-[1.5px] bg-white/20" />
                  </div>

                  {/* Selected Indicator Overhead Spot Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="spineHighlight"
                      className="absolute -top-1.5 inset-x-1 h-1 bg-white/70 rounded-full blur-[1px]"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4. THE PHYSICAL SHELF RAIL (OBSIDIAN WOOD/STONE LEDGE) */}
        <div className="w-full relative mt-[-2px] z-30">
          <div className="w-full h-3 bg-gradient-to-b from-[#181a1d] to-[#0c0d0f] border-t border-stone-700/60 shadow-[0_12px_30px_rgba(0,0,0,0.95)]" />
          <div className="w-full h-1 bg-gradient-to-b from-[#090a0c] to-transparent" />
        </div>

        {/* 5. THREE SLENDER EDITORIAL PILLARS (OFFLINE, FOLIOS, TACTILE) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-24 pt-12 border-t border-white/10 text-left">
          
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 block">
              01 &bull; Infinite Private Folios
            </span>
            <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-white font-normal">
              A Home for Every Current
            </h4>
            <p className="text-sm text-white/60 font-light leading-relaxed font-[family-name:var(--font-cormorant)] text-base">
              Create unlimited bound notebooks for your projects, morning pages, book margins, or city walks. Never let thoughts get lost in an endless feed.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 block">
              02 &bull; Tactile Spine & Debossing
            </span>
            <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-white font-normal">
              Bookbinding on Glass
            </h4>
            <p className="text-sm text-white/60 font-light leading-relaxed font-[family-name:var(--font-cormorant)] text-base">
              Each volume carries its own custom spine texture, debossed foil typography, and archival ribbon bookmark. An heirloom app designed to outlast software trends.
            </p>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 block">
              03 &bull; Encrypted Solitude
            </span>
            <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-white font-normal">
              Zero Cloud Training
            </h4>
            <p className="text-sm text-white/60 font-light leading-relaxed font-[family-name:var(--font-cormorant)] text-base">
              Your library lives offline on your device storage. No telemetry, no behavioral profiling, and zero AI scraping. Stillness guaranteed by cryptography.
            </p>
          </div>

        </div>

      </div>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultStore="apple"
      />
    </section>
  );
}
