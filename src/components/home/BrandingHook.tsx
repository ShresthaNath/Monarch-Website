"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Eye, Shield, Layers, FileText } from "lucide-react";

export function BrandingHook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const cards = [
    {
      marker: "01",
      input: "A logo",
      arrow: "→",
      output: "Identity",
      icon: Shield,
      desc: "Anyone can draw an icon. We architect the psychological gravity, typographic discipline, and sovereign brand architecture that commands market dominance.",
    },
    {
      marker: "02",
      input: "A campaign",
      arrow: "→",
      output: "Marketing",
      icon: Eye,
      desc: "Marketing buys you momentary eyeballs that disappear when ad budgets pause. Brand equity builds an unforgettable fortress in customer memory.",
    },
    {
      marker: "03",
      input: "A bunch of posts",
      arrow: "→",
      output: "Content",
      icon: FileText,
      desc: "Endless social output without narrative vision is wasted energy. We establish the editorial cadence and cultural resonance that turns audiences into believers.",
    },
  ];

  return (
    <section
      id="branding-hook"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#08080C] text-[#FAFAFA] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Index & Swiss Meta */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 text-xs font-mono text-neutral-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FFD004]" />
            <span className="text-white font-bold">02 — THE BRANDING HOOK</span>
          </div>
          <span className="tracking-widest uppercase text-neutral-500">
            THE STRATEGIC DIFFERENTIATION
          </span>
        </div>

        {/* Monumental Headline Reveal */}
        <div className="space-y-6 max-w-5xl">
          <h2 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black font-display tracking-tight leading-[0.95] uppercase">
            <span className="text-neutral-400">MARKETING GETS YOU SEEN.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF099] to-[#FFD004]">
              BRANDING GIVES PEOPLE A REASON TO REMEMBER YOU.
            </span>
          </h2>

          <p className="text-lg md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed">
            You might call it branding. But there is a canyon between superficial decoration and genuine category sovereignty.
          </p>
        </div>

        {/* 3 Interactive Shift Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-[#0C0C10] border border-white/10 hover:border-[#FFD004]/50 transition-all duration-500 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-6">
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD004] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-neutral-500">{card.marker}</span>
                  </div>

                  {/* Transformation equation */}
                  <div className="py-2 border-y border-white/10">
                    <p className="font-mono text-xs text-neutral-500 uppercase">THE FORMULA</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-neutral-400 font-medium text-base line-through decoration-[#FFD004]/50">
                        {card.input}
                      </span>
                      <span className="text-[#FFD004] font-bold text-sm">→</span>
                      <span className="text-white font-bold font-display text-xl">
                        {card.output}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-[#FFD004] transition-colors">
                  <span>DISCIPLINE VERIFIED</span>
                  <span>0{idx + 1} // MK</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Punchline Statement */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#14141A] via-[#0E0E12] to-[#0A0A0C] border border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#FFD004] uppercase tracking-widest block">
              THE CONVERGENCE
            </span>
            <p className="text-2xl md:text-3xl font-bold font-display text-white">
              That&apos;s where we come in.
            </p>
            <p className="text-sm text-neutral-400 max-w-xl">
              We bridge the gap between abstract corporate ambitions and indelible cultural resonance.
            </p>
          </div>

          <a
            href="#services"
            className="self-start md:self-center px-8 py-4 bg-white hover:bg-[#FFD004] text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
