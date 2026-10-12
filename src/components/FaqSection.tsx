"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { WaitlistModal } from "./WaitlistModal";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Is Noticed completely offline-first?",
    answer:
      "Yes. All your entries, photographs, and audio relics are written and stored directly on your local device. You can write at 30,000 feet in an airplane or in a cabin far from reception. When connected, silent hybrid synchronization securely mirrors your archive to private cloud storage without interrupting your thought flow.",
  },
  {
    question: "How does the Folio Manuscript PDF export work?",
    answer:
      "Every notebook space can be compiled into an editorial A4 or A5 PDF monograph formatted according to classic book design standards—complete with table of passages, straight photographic plates, superscripts, and footnote apparatus. Ready for local printing or archival leather binding.",
  },
  {
    question: "Do you train artificial intelligence on my journal entries?",
    answer:
      "Never. Noticed is built on the philosophy of solitude. We do not inspect, monetize, or train machine learning models on your writing. Your reflections remain strictly your private sanctuary.",
  },
  {
    question: "How does the Analog Darkroom process photography?",
    answer:
      "When you import a photograph, you can apply authentic 35mm film emulsions—including Kodak Tri-X silver halide monochrome, Cinestill 800T tungsten halation, and Portra 160. Each photo is mounted with clean archival borders and Courier typewriter captions containing date and location coordinates.",
  },
  {
    question: "How can I participate in the Private Beta?",
    answer:
      "We are currently welcoming initial circle admissions for iOS TestFlight and Android preview. Simply submit your email through the reservation modal to receive a sequential admission token as upcoming batches are issued.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#050708] text-white py-24 sm:py-36 px-4 sm:px-8 md:px-14 flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* 1. SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="max-w-2xl text-center mb-16 sm:mb-20 px-4"
      >
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 block mb-4">
          Inquiries &bull; The Noticed Archive
        </span>
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.25] text-white tracking-wide mb-4">
          Frequently Answered Inquiries
        </h2>
        <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg text-white/60 font-light italic">
          Reflections on architecture, privacy, and permanence.
        </p>
      </motion.div>

      {/* 2. SLENDER ACCORDION CONTAINER (NO GLASS, RAW HAIRLINE RULES) */}
      <div className="w-full max-w-3xl divide-y divide-white/10 border-y border-white/10">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-5 sm:py-7">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between text-left group cursor-pointer gap-6"
                aria-expanded={isOpen}
              >
                <span className="font-[family-name:var(--font-cormorant)] text-xl sm:text-2xl text-white/90 group-hover:text-white transition-colors tracking-wide font-normal">
                  {faq.question}
                </span>
                <span className="shrink-0 p-1 rounded-full text-white/40 group-hover:text-white transition-colors">
                  <Plus
                    size={16}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-white" : ""
                    }`}
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-sm sm:text-[15px] leading-[1.75] text-white/65 font-light font-[family-name:var(--font-cormorant)]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* 3. SLENDER RESERVATION BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="w-full max-w-3xl mt-24 sm:mt-32 text-center p-8 sm:p-12 border border-white/10 rounded-2xl bg-[#090b0d] flex flex-col items-center"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3">
          PRIVATE BETA INVITATION
        </span>
        <h3 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl text-white font-normal mb-4">
          Begin Your Personal Archive
        </h3>
        <p className="text-sm text-white/65 font-light max-w-md mb-8 leading-relaxed font-[family-name:var(--font-cormorant)] text-base sm:text-lg">
          Join the waitlist for iOS TestFlight and Android preview. Experience the quiet luxury notebook engineered for minds that notice.
        </p>

        <button
          onClick={() => setModalOpen(true)}
          className="group flex items-center gap-3 px-7 py-3 rounded-xl bg-white text-stone-950 font-medium text-xs font-mono tracking-widest uppercase hover:bg-stone-200 transition-all shadow-xl cursor-pointer"
        >
          <span>Request Access Token</span>
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* 4. MINIMALIST ARCHIVAL FOOTER */}
      <footer className="w-full max-w-5xl mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 tracking-wider">
        <span>NOTICED &bull; VOL. I &bull; MCMXXVI</span>
        <span className="mt-2 sm:mt-0 font-[family-name:var(--font-cormorant)] text-sm text-white/60 italic">
          &ldquo;for things you don&apos;t want to forget&rdquo;
        </span>
        <span className="mt-2 sm:mt-0">ALL RIGHTS RESERVED</span>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultStore="apple"
      />

    </section>
  );
}
