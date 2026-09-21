"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Check } from "lucide-react";

export function MonarkIntro() {
  return (
    <section
      id="intro"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#050505] text-[#FAFAFA] border-b border-white/10 overflow-hidden select-none"
    >
      {/* Background Crest Watermark */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] opacity-5 pointer-events-none">
        <Image
          src="/monark-crest-gold.png"
          alt="Watermark Crest"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Section Marker */}
        <div className="flex justify-between items-center border-b border-white/10 pb-6 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFD004]" />
            <span className="text-white font-bold">03 — MONARK INTRO</span>
          </div>
          <span className="tracking-widest uppercase text-neutral-500">CORE THESIS</span>
        </div>

        {/* Monolithic Manifesto Declaration */}
        <div className="space-y-6">
          <span className="inline-block font-mono text-xs text-[#FFD004] uppercase tracking-[0.25em]">
            THE FOUNDATIONAL STATEMENT
          </span>

          <h2 className="text-[clamp(3rem,8vw,9.5rem)] font-black font-display tracking-tight leading-[0.88] uppercase text-white">
            WE BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD004] via-[#FFF185] to-[#FFD004]">
              BRAAAAAANDS.
            </span>
            <br />
            THAT&apos;S IT.
          </h2>
        </div>

        {/* Triple Action Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-white/10 items-start">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-2xl md:text-3xl text-neutral-200 font-light leading-relaxed">
              <strong className="text-white font-bold">MONARK</strong> is a brand consultancy that defines what a business or idea stands for, gives it a distinctive identity, and brings it to life across every touchpoint.
            </p>
            <p className="text-sm text-neutral-500 font-mono">
              ZERO TEMPLATES · ZERO GUEST WORK · 100% MATHEMATICAL PRECISION
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {[
              {
                step: "01",
                action: "Defines What It Stands For",
                detail: "We unearth your authentic market moat, articulate core principles, and forge the strategic posture that renders competitors obsolete.",
              },
              {
                step: "02",
                action: "Gives It A Distinctive Identity",
                detail: "From iconic crests and mathematical typography to custom color theory and tactile design tokens, we forge unmistakable visual signatures.",
              },
              {
                step: "03",
                action: "Brings It To Life Across Every Touchpoint",
                detail: "From 60fps web experiences and packaging suites to editorial campaigns and physical spatial environments, we build total immersion.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0A0A0E] border border-white/10 flex items-start gap-4 hover:border-[#FFD004]/40 transition-colors"
              >
                <span className="font-mono text-xs text-[#FFD004] font-bold bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  {item.step}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-bold font-display text-white">
                    {item.action}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
