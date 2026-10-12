"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Film, Mic, Sparkles, Volume2 } from "lucide-react";

type PlateType = "folio" | "darkroom" | "audio";

export function ManifestoSection() {
  const [activePlate, setActivePlate] = useState<PlateType>("folio");
  const [emulsion, setEmulsion] = useState<"tri-x" | "cinestill" | "portra">("tri-x");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <section className="relative w-full bg-[#070b0d] text-white py-24 sm:py-32 lg:py-40 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden">
      
      {/* 1. SEAMLESS TRANSITION LIGHT BEAM (Continues the museum spotlight downwards) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[600px] bg-gradient-to-b from-amber-400/[0.04] via-amber-300/[0.02] to-transparent blur-[120px] pointer-events-none" />

      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070b0d]/50 to-[#070b0d] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Curatorial Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.28em] text-white/50">
            Plate 01 // The Archival Manifesto
          </span>
          <span className="h-[1px] w-8 bg-white/20" />
        </motion.div>

        {/* The Central Philosophical Statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-normal leading-[1.35] tracking-wide text-white/95 max-w-4xl drop-shadow-lg mb-12 sm:mb-16"
        >
          &ldquo;In an age of algorithmic noise and disposable feeds, we built Noticed for quiet minds. A digital refuge where ephemeral thoughts are treated not as fleeting data, but as enduring literature.&rdquo;
        </motion.blockquote>

        {/* Dispatch Attrib */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/40 mb-20 sm:mb-28 text-center"
        >
          &mdash; Curated for solitary thinkers &bull; Offline-First &bull; Private by Design
        </motion.p>

        {/* 2. THE THREE CURATORIAL PLATES (Interactive Feature Relics) */}
        <div className="w-full">
          
          {/* Switcher Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
            <button
              onClick={() => setActivePlate("folio")}
              className={`flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer ${
                activePlate === "folio"
                  ? "bg-white text-stone-950 font-medium shadow-[0_0_30px_rgba(255,255,255,0.18)] scale-105"
                  : "bg-white/[0.05] text-white/60 hover:text-white hover:bg-white/[0.1] border border-white/10"
              }`}
            >
              <BookOpen size={14} className={activePlate === "folio" ? "text-stone-900" : "text-white/60"} />
              <span className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base">01. The Luxury Folio</span>
            </button>

            <button
              onClick={() => setActivePlate("darkroom")}
              className={`flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer ${
                activePlate === "darkroom"
                  ? "bg-white text-stone-950 font-medium shadow-[0_0_30px_rgba(255,255,255,0.18)] scale-105"
                  : "bg-white/[0.05] text-white/60 hover:text-white hover:bg-white/[0.1] border border-white/10"
              }`}
            >
              <Film size={14} className={activePlate === "darkroom" ? "text-stone-900" : "text-white/60"} />
              <span className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base">02. Analog Darkroom</span>
            </button>

            <button
              onClick={() => setActivePlate("audio")}
              className={`flex items-center gap-2.5 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer ${
                activePlate === "audio"
                  ? "bg-white text-stone-950 font-medium shadow-[0_0_30px_rgba(255,255,255,0.18)] scale-105"
                  : "bg-white/[0.05] text-white/60 hover:text-white hover:bg-white/[0.1] border border-white/10"
              }`}
            >
              <Mic size={14} className={activePlate === "audio" ? "text-stone-900" : "text-white/60"} />
              <span className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base">03. Audio Relics</span>
            </button>
          </div>

          {/* Interactive Plate Container */}
          <div className="relative w-full min-h-[460px] sm:min-h-[500px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-2xl p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl">
            
            <AnimatePresence mode="wait">
              {/* PLATE 1: THE LUXURY FOLIO & MARGINALIA */}
              {activePlate === "folio" && (
                <motion.div
                  key="folio"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px] font-mono tracking-widest uppercase mb-4 w-fit">
                      <Sparkles size={12} />
                      <span>Penguin Classics Standard</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl text-white font-normal mb-4 tracking-wide">
                      The Printed Manuscript & Marginalia
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light mb-6">
                      Noticed transforms notes into continuous manuscript streams. Highlight passages in warm amber linen, anchor superscript footnotes, and export your personal notebook into a bound luxury PDF book ready for physical print.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50">
                      <span className="flex items-center gap-1.5">&bull; Deckle Edge Layout</span>
                      <span className="flex items-center gap-1.5">&bull; Foil Embossed Spines</span>
                      <span className="flex items-center gap-1.5">&bull; Auto Marginalia Index</span>
                    </div>
                  </div>

                  {/* Visual Simulation: Alabaster Linen Manuscript Card */}
                  <div className="lg:col-span-6 flex justify-center">
                    <div className="w-full max-w-md rounded-2xl bg-[#F7F5F0] text-[#1C1917] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[#E8E4DA] relative overflow-hidden">
                      {/* Linen paper header */}
                      <div className="flex justify-between items-center border-b border-[#E0DCCE] pb-3 mb-5 font-mono text-[10px] tracking-widest text-[#78716C] uppercase">
                        <span>FOLIO NO. 042</span>
                        <span>OCTOBER 12, 2026</span>
                      </div>

                      {/* Manuscript typography */}
                      <h4 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold mb-3 text-[#1C1917] tracking-tight">
                        On the Art of Quiet Observation
                      </h4>
                      <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg leading-[1.8] text-[#292524] mb-4">
                        We do not remember days; we remember moments.{" "}
                        <span className="bg-amber-200/70 px-1 py-0.5 rounded text-[#1C1917] font-medium">
                          The richness of life lies not in speed, but in the deliberate pause to notice what is fragile.
                        </span>
                        <sup className="text-amber-800 font-serif font-bold text-xs ml-0.5">1</sup>
                      </p>

                      {/* Marginalia footnote pill */}
                      <div className="mt-5 pt-3 border-t border-[#E0DCCE] flex items-start gap-2 text-xs font-serif text-[#57534E] italic">
                        <span className="font-bold font-mono text-[10px] text-amber-800 not-italic">1.</span>
                        <span>Cesare Pavese, Il mestiere di vivere &mdash; Margin noted in Florence studio.</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PLATE 2: THE ANALOG DARKROOM */}
              {activePlate === "darkroom" && (
                <motion.div
                  key="darkroom"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-[11px] font-mono tracking-widest uppercase mb-4 w-fit">
                      <Film size={12} />
                      <span>Silver Halide Emulsions</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl text-white font-normal mb-4 tracking-wide">
                      The Analog Darkroom Studio
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light mb-6">
                      Every photograph in your journal becomes a timeless artifact. Apply authentic 35mm film emulsions—from rich Kodak Tri-X silver monochrome to warm Cinestill tungsten halation—complete with typewriter date stamps.
                    </p>

                    {/* Interactive Emulsion Selector */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-xs font-mono text-white/50 mr-2 uppercase">Emulsion:</span>
                      <button
                        onClick={() => setEmulsion("tri-x")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          emulsion === "tri-x"
                            ? "bg-white text-black font-semibold"
                            : "bg-white/5 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        Tri-X 400
                      </button>
                      <button
                        onClick={() => setEmulsion("cinestill")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          emulsion === "cinestill"
                            ? "bg-amber-400 text-black font-semibold"
                            : "bg-white/5 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        Cinestill 800T
                      </button>
                      <button
                        onClick={() => setEmulsion("portra")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                          emulsion === "portra"
                            ? "bg-rose-300 text-black font-semibold"
                            : "bg-white/5 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        Portra 160
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50">
                      <span>&bull; Natural Film Grain</span>
                      <span>&bull; Courier Typewriter Captions</span>
                      <span>&bull; Polaroid Spatial Strips</span>
                    </div>
                  </div>

                  {/* Visual Simulation: Analog Polaroid with Film Emulsion */}
                  <div className="lg:col-span-6 flex justify-center">
                    <div className="w-full max-w-sm rounded-xl bg-[#141517] p-4 pb-6 shadow-2xl border border-white/15 relative">
                      {/* Film canister marker */}
                      <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-white/40 pb-2.5 mb-2 border-b border-white/10 uppercase">
                        <span>35MM FILM EXPOSURE</span>
                        <span>{emulsion.toUpperCase()} &bull; ISO 400</span>
                      </div>

                      {/* Simulated image frame */}
                      <div
                        className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden transition-all duration-700 ${
                          emulsion === "tri-x"
                            ? "grayscale contrast-125 brightness-95"
                            : emulsion === "cinestill"
                            ? "sepia-[0.35] hue-rotate-[340deg] contrast-110"
                            : "saturate-90 brightness-105"
                        }`}
                      >
                        <Image
                          src="/heroes-bg.webp"
                          alt="Film Emulsion Preview"
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover"
                        />
                        {/* Film grain overlay effect */}
                        <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
                      </div>

                      {/* Typewriter caption */}
                      <div className="mt-4 px-1 flex justify-between items-end font-mono">
                        <div>
                          <p className="text-xs text-white/90 tracking-wider">
                            MIDNIGHT IN MONTMARTRE
                          </p>
                          <p className="text-[10px] text-white/50 tracking-widest mt-0.5">
                            48.8867&deg; N, 2.3431&deg; E
                          </p>
                        </div>
                        <span className="text-[10px] text-amber-300/80 tracking-widest">
                          19:42 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PLATE 3: AUDIO RELICS & AMBIENT DICTATION */}
              {activePlate === "audio" && (
                <motion.div
                  key="audio"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-[11px] font-mono tracking-widest uppercase mb-4 w-fit">
                      <Volume2 size={12} />
                      <span>Tactile Acoustic Field Memos</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl text-white font-normal mb-4 tracking-wide">
                      Whisper to Manuscript
                    </h3>
                    <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light mb-6">
                      Some thoughts are too immediate to type. Capture spoken reflections with real-time waveform visualization, transcribed directly onto your journal page without ever breaking your contemplation.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50">
                      <span>&bull; 48kHz Tactile Audio</span>
                      <span>&bull; Dynamic Island Floating Player</span>
                      <span>&bull; Complete Offline Privacy</span>
                    </div>
                  </div>

                  {/* Visual Simulation: Tactile Waveform Audio Player */}
                  <div className="lg:col-span-6 flex justify-center">
                    <div className="w-full max-w-md rounded-2xl bg-[#101317] border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                            className="w-12 h-12 rounded-full bg-white text-stone-900 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg cursor-pointer"
                          >
                            {isPlayingAudio ? (
                              <div className="flex gap-1">
                                <span className="w-1 h-3.5 bg-stone-900 rounded-full" />
                                <span className="w-1 h-3.5 bg-stone-900 rounded-full" />
                              </div>
                            ) : (
                              <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-stone-900 ml-0.5" />
                            )}
                          </button>
                          <div>
                            <h5 className="font-[family-name:var(--font-cormorant)] text-lg text-white font-medium">
                              Reflections by the Window
                            </h5>
                            <p className="font-mono text-[10px] text-white/50 tracking-wider">
                              AUDIO MEMO NO. 18 &bull; 01:24
                            </p>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-white/60">
                          {isPlayingAudio ? "PLAYING" : "PAUSED"}
                        </span>
                      </div>

                      {/* Simulated Sound Wave Equalizer Bars */}
                      <div className="h-16 flex items-end justify-between gap-1.5 px-2 py-2 bg-black/40 rounded-xl border border-white/10">
                        {[40, 65, 80, 50, 90, 75, 45, 60, 95, 70, 85, 40, 60, 80, 55, 70, 90, 45].map((height, i) => (
                          <motion.span
                            key={i}
                            animate={{
                              height: isPlayingAudio ? [`${height}%`, `${(height * 1.3) % 100}%`, `${height}%`] : `${height * 0.4}%`,
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: i * 0.05,
                              ease: "easeInOut",
                            }}
                            className={`w-full rounded-full transition-colors ${
                              isPlayingAudio ? "bg-amber-300" : "bg-white/30"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-white/40">
                        <span>00:38 / 01:24</span>
                        <span>LOSSLESS OPUS ENCODED</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
