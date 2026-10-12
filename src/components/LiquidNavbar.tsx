"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WaitlistModal } from "./WaitlistModal";

export function LiquidNavbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (latest: number) => {
      // Trigger appearance when scrolled past Hero (entering Section 2)
      const threshold = typeof window !== "undefined" ? window.innerHeight * 0.65 : 600;
      setVisible(latest > threshold);
    };

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ y: -40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -40, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-5 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl select-none"
          >
            {/* SUPER CLEAR LIQUID GLASS PILL */}
            <nav
              className="w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 shadow-[0_16px_50px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.3)] transition-all duration-300"
              style={{
                background: "rgba(10, 12, 16, 0.45)",
                backdropFilter: "blur(28px) saturate(190%)",
                WebkitBackdropFilter: "blur(28px) saturate(190%)",
              }}
            >
              {/* Left: Brand Monogram */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="font-[family-name:var(--font-cormorant)] text-sm sm:text-base font-normal tracking-[0.25em] text-white/90 group-hover:text-white transition-colors uppercase">
                  NOTICED
                </span>
                <span className="hidden md:inline font-mono text-[9px] uppercase tracking-widest text-white/40">
                  VOL. I
                </span>
              </button>

              {/* Center: Navigation Links */}
              <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-white/60">
                <button
                  onClick={() => scrollToSection("manuscript")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Manuscript
                </button>
                <button
                  onClick={() => scrollToSection("library")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Library
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inquiries
                </button>
              </div>

              {/* Right: Poetic CTA Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="group flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-white text-stone-950 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase hover:bg-stone-200 transition-all cursor-pointer shadow-md"
              >
                <span>Get Early</span>
                <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultStore="apple"
      />
    </>
  );
}
