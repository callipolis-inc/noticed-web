"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
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
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-[#050708] text-white py-16 sm:py-24 px-4 sm:px-8 md:px-14 flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* 1. TWO-COLUMN FAQ CONTAINER */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Section Title & Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5 lg:sticky lg:top-24 space-y-4"
        >
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/40 block">
            Inquiries &bull; The Noticed Archive
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] text-white tracking-wide">
            Frequently Answered Inquiries
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg text-white/60 font-light italic leading-relaxed">
            Reflections on architecture, privacy, physical permanence, and the art of solitude.
          </p>
        </motion.div>

        {/* RIGHT COLUMN: Slender Accordion List */}
        <div className="lg:col-span-7 w-full divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-5 sm:py-6">
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
                      <p className="pt-3 text-sm sm:text-[15px] leading-[1.75] text-white/65 font-light font-[family-name:var(--font-cormorant)]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      {/* 2. MINIMALIST EDITORIAL INVITATION (EXACTLY MATCHING USER REFERENCE IMAGE) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mt-16 sm:mt-20 pt-12 sm:pt-14 border-t border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 sm:gap-12"
      >
        {/* Left: Editorial Statement */}
        <div className="space-y-2">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl lg:text-[40px] font-normal text-white tracking-wide leading-none">
            A letter, once a season.
          </h3>
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/40">
            Quiet notes from the studio. No noise.
          </p>
        </div>

        {/* Right: Underlined Email Subscription Field */}
        <div className="w-full md:w-auto md:min-w-[380px] lg:min-w-[420px]">
          {submitted ? (
            <div className="flex items-center gap-2 border-b border-white/30 pb-2.5 text-white/90 font-mono text-xs tracking-wider">
              <span>Token reserved. Welcome to the archive.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-center justify-between border-b border-white/20 pb-2.5 focus-within:border-white transition-colors">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-transparent text-sm sm:text-base font-[family-name:var(--font-cormorant)] italic text-white placeholder:text-white/35 placeholder:font-[family-name:var(--font-cormorant)] focus:outline-none pr-4"
                />
                <button
                  type="submit"
                  className="shrink-0 flex items-center gap-1 font-mono text-xs sm:text-[13px] tracking-wider text-white/80 hover:text-white transition-colors cursor-pointer whitespace-nowrap pl-2 group"
                >
                  <span>Subscribe</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>


      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultStore="apple"
      />

    </section>
  );
}
