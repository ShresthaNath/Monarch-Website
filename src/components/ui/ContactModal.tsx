"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { MonarkLogo } from "../brand/MonarkLogo";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ContactModal({
  isOpen,
  onClose,
  defaultService = "02 — BRAND IDENTITY",
}: ContactModalProps) {
  const [selectedService, setSelectedService] = useState(defaultService);
  const [entityName, setEntityName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("$25k — $50k");
  const [vision, setVision] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#09090D] border border-white/20 p-8 md:p-12 shadow-[0_0_80px_rgba(255,208,4,0.15)] overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-[#FFD004]/10 border border-[#FFD004]/30 mx-auto flex items-center justify-center text-[#FFD004]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#FFD004] uppercase tracking-widest">
                TRANSMISSION LOGGED // MK-PROTOCOL
              </span>
              <h3 className="text-3xl font-black font-display text-white">
                CONVERSATION INITIATED
              </h3>
              <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                Our executive brand partners have received your brief. We will review your market positioning and reply within 24 hours.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={resetForm}
                className="px-8 py-3.5 bg-[#FFD004] hover:bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all"
              >
                Return To Headquarters
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center gap-3">
              <MonarkLogo variant="crest-gold" size={28} />
              <div>
                <span className="text-[11px] font-mono text-[#FFD004] tracking-widest uppercase">
                  INITIAL DISCOVERY PROTOCOL
                </span>
                <h3 className="text-2xl md:text-3xl font-black font-display text-white">
                  START A CONVERSATION
                </h3>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-light">
              Tell us what your business stands for, or where you want to take it. No corporate fluff — just an honest discussion.
            </p>

            <div className="space-y-4 pt-2">
              {/* Service Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300 block uppercase tracking-wider">
                  Pick Your Battle
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white font-sans focus:outline-none focus:border-[#FFD004] transition-all cursor-pointer"
                >
                  <option value="01 — BRAND STRATEGY">01 — Brand Strategy</option>
                  <option value="02 — BRAND IDENTITY">02 — Brand Identity</option>
                  <option value="03 — CREATIVE & CONTENT">03 — Creative & Content</option>
                  <option value="04 — DIGITAL & EXPERIENCE">04 — Digital & Experience</option>
                  <option value="COMPLETE EMPIRE OVERHAUL">Complete Empire Overhaul (All 4)</option>
                </select>
              </div>

              {/* Entity Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300 block uppercase tracking-wider">
                    Company / Project Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Dynamics"
                    value={entityName}
                    onChange={(e) => setEntityName(e.target.value)}
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white font-sans focus:outline-none focus:border-[#FFD004] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300 block uppercase tracking-wider">
                    Direct Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="founder@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white font-sans focus:outline-none focus:border-[#FFD004] transition-all"
                  />
                </div>
              </div>

              {/* Budget Tier */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300 block uppercase tracking-wider">
                  Target Capital Allocation
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["$15k — $30k", "$30k — $75k", "$75k+"].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setBudget(tier)}
                      className={`py-2 px-3 rounded-lg border text-xs font-mono transition-all ${
                        budget === tier
                          ? "bg-[#FFD004] text-black border-[#FFD004] font-bold"
                          : "bg-black/50 text-neutral-400 border-white/10 hover:border-white/20"
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vision */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300 block uppercase tracking-wider">
                  Briefly Describe Your Objective
                </label>
                <textarea
                  rows={3}
                  placeholder="What is your business, and why does it need an unforgettable brand?"
                  value={vision}
                  onChange={(e) => setVision(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-xl text-sm text-white font-sans focus:outline-none focus:border-[#FFD004] transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-[#FFD004] hover:bg-white text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 shadow-[0_0_30px_rgba(255,208,4,0.3)]"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> ENCRYPTING TRANSMISSION...
                </>
              ) : (
                <>
                  Transmit Commission Request <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
