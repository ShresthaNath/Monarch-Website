"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Shield, Sparkles } from "lucide-react";

interface HeroHybridProps {
  onOpenContact: () => void;
}

export function HeroHybrid({ onOpenContact }: HeroHybridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Velocity spring interpolation for butter-smooth skew
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const skewX = useTransform(smoothVelocity, [-1500, 0, 1500], [-10, 0, 10]);
  const marqueeOffset = useTransform(smoothVelocity, [-1500, 0, 1500], [-60, 0, 60]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] text-[#FAFAFA] flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 border-b border-white/10 select-none overflow-hidden"
    >
      {/* Precision Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#FFD004]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Architectural Metadata Rail (Swiss Grid Alignment) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-white/10 text-xs font-mono text-neutral-400 uppercase tracking-widest items-center">
        <div className="md:col-span-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FFD004] animate-ping" />
          <span className="text-white font-bold">01 — HERO // MANIFESTO</span>
        </div>

        <div className="md:col-span-4 text-left md:text-center text-neutral-500">
          DISCIPLINES: STRATEGY · IDENTITY · DIGITAL
        </div>

        <div className="md:col-span-4 flex justify-start md:justify-end items-center gap-4">
          <span className="text-[#FFD004]">MONARK EST. 2026</span>
          <span className="text-white/40">|</span>
          <Link
            href="/brand-guidelines"
            className="text-neutral-300 hover:text-[#FFD004] transition-colors inline-flex items-center gap-1"
          >
            SPEC 1.0 <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Main Kinetic Stage: Brutalist Velocity Core + Swiss Layout */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center Typographic Monolith */}
          <div className="lg:col-span-8">
            <motion.div style={{ skewX }} className="origin-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-none bg-white/5 border border-white/10 text-xs font-mono text-[#FFD004] tracking-widest uppercase"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Category Sovereign Engineering
              </motion.div>

              <h1 className="text-[clamp(3.25rem,8.8vw,11.5rem)] font-black leading-[0.88] tracking-tighter uppercase font-display text-white">
                LET&apos;S CREATE
                <br />A{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD004] via-[#FFF185] to-[#FFD004] hover:tracking-wide transition-all duration-500">
                  BRAAAAAAND.
                  <span className="absolute -bottom-2 left-0 right-0 h-[4px] bg-[#FFD004]/60" />
                </span>
              </h1>
            </motion.div>

            {/* Sub-Manifesto & Action Triggers */}
            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <div className="space-y-1">
                <p className="text-xl md:text-2xl text-neutral-400 font-light leading-snug">
                  Not just something that looks good.
                </p>
                <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                  Something people remember.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-start md:justify-end">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-4 bg-[#FFD004] hover:bg-white text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(255,208,4,0.3)] flex items-center gap-2"
                >
                  <span>Start A Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/brand-guidelines"
                  className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-widest uppercase border border-white/15 transition-all duration-300"
                >
                  System Specs
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Fortress Monolith Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-3xl bg-[#09090D] border border-white/15 p-8 shadow-2xl overflow-hidden group">
              {/* Corner Architectural Bracket Marks */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-neutral-600">┌ MK-SYS</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-neutral-600">┐ 2026</div>
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-neutral-600">└ TOKEN</div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-600">┘ 1X</div>

              <div className="space-y-6 pt-4 text-center flex flex-col items-center">
                {/* Fortress Disc Emblem with Subtle Pulse Halo */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-105 shadow-[0_0_50px_rgba(255,208,4,0.25)]">
                  <Image
                    src="/monark-badge.png"
                    alt="Monark Emblem"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-display font-black text-white uppercase tracking-wider">
                    MONARK FOUNDATION
                  </h2>
                  <p className="font-mono text-xs text-[#FFD004] tracking-widest uppercase mt-1">
                    SOVEREIGN BRAND EMPIRE
                  </p>
                </div>

                <p className="text-xs text-neutral-400 font-light leading-relaxed border-t border-white/10 pt-4">
                  We define what an enterprise stands for, carve its distinct visual fortress, and deploy it across every customer touchpoint.
                </p>

                <div className="w-full grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono text-neutral-400">
                  <div className="bg-black/60 p-2.5 rounded border border-white/5 text-left">
                    <span className="text-[9px] text-neutral-600 block">STANDARD</span>
                    <strong className="text-white">WCAG AAA</strong>
                  </div>
                  <div className="bg-black/60 p-2.5 rounded border border-white/5 text-left">
                    <span className="text-[9px] text-neutral-600 block">COLOR CORE</span>
                    <strong className="text-[#FFD004]">#FFD004</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Kinetic Rail / Velocity Marquee Strip */}
      <div className="relative z-10 max-w-7xl w-full mx-auto border-t border-white/10 pt-6">
        <motion.div
          style={{ x: marqueeOffset }}
          className="flex justify-between items-center text-xs font-mono text-neutral-500 whitespace-nowrap overflow-hidden gap-8"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD004]" />
            MARKETING GETS YOU SEEN. BRANDING GIVES PEOPLE A REASON TO REMEMBER YOU.
          </span>
          <span className="text-[#FFD004] font-bold">
            WE BUILD BRAAAAAANDS. THAT&apos;S IT.
          </span>
          <span className="hidden sm:inline text-neutral-400">
            NO MYSTERY. JUST A PROCESS.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
