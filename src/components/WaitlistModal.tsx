"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultStore?: "apple" | "google" | "general";
}

export function WaitlistModal({
  isOpen,
  onClose,
  defaultStore = "apple",
}: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<"apple" | "google">(
    defaultStore === "google" ? "google" : "apple"
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("submitting");
    // Simulate instant smooth capture
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  const handleReset = () => {
    setEmail("");
    setStatus("idle");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-[#0e1317]/95 p-6 sm:p-8 text-[#f4efe6] shadow-2xl backdrop-blur-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {status === "success" ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-medium tracking-wide">
                  Invitation Reserved
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                  We have added <span className="text-white font-mono">{email}</span> to the private {platform === "apple" ? "TestFlight" : "Early Access"} registry. You will receive an invitation token shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 w-full rounded-xl bg-white/10 border border-white/20 py-2.5 text-xs font-medium tracking-wider uppercase text-white hover:bg-white/20 transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-mono mb-1.5">
                    Private Beta Edition
                  </p>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-normal tracking-wide text-white">
                    Begin Your Archive
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/80 leading-relaxed font-light font-[family-name:var(--font-cormorant)]">
                    Join the private literary circle. Experience the analog darkroom, luxury folio manuscripts, and calm digital journaling before public release.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Platform Selection */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPlatform("apple")}
                      className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 text-xs font-medium tracking-wide transition-all ${
                        platform === "apple"
                          ? "border-white/40 bg-white/15 text-white shadow-inner"
                          : "border-white/10 bg-white/5 text-white/60 hover:text-white"
                      }`}
                    >
                      <span>iOS TestFlight</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPlatform("google")}
                      className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 text-xs font-medium tracking-wide transition-all ${
                        platform === "google"
                          ? "border-white/40 bg-white/15 text-white shadow-inner"
                          : "border-white/10 bg-white/5 text-white/60 hover:text-white"
                      }`}
                    >
                      <span>Android Preview</span>
                    </button>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/50 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="author@noticedapp.com"
                      className="w-full rounded-xl border border-white/15 bg-black/40 px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-white/40 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full group mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-stone-200 to-amber-100 py-3 text-xs font-medium tracking-wider uppercase text-stone-900 transition-all hover:opacity-95 active:scale-[0.99] disabled:opacity-50"
                  >
                    <span>{status === "submitting" ? "Reserving Slot..." : "Request Access Invitation"}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
