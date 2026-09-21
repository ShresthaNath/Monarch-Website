"use client";

import React from "react";
import Link from "next/link";
import { MonarkLogo } from "@/components/brand/MonarkLogo";
import { ArrowRight, ArrowUpRight, Sparkles, Shield, Terminal } from "lucide-react";

interface DynamicCTAProps {
  onOpenContact: () => void;
}

export function DynamicCTA({ onOpenContact }: DynamicCTAProps) {
  return (
    <footer className="relative bg-[#040406] text-[#FAFAFA] pt-28 pb-12 px-6 md:px-12 overflow-hidden border-t border-white/10">
      {/* Ambient Lighting / Animated Mesh Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#FFD004]/15 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        
        {/* Call to Action Anchor Core */}
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FFD004] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> 06 — FINAL CTA
          </div>

          <h2 className="text-[clamp(2.75rem,7.5vw,8.5rem)] font-black font-display tracking-tight leading-[0.9] uppercase text-white">
            GOT A BUSINESS?
            <br />
            NOW GIVE IT A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD004] via-[#FFF185] to-[#FFD004]">
              BRAAAAAAND.
            </span>
          </h2>

          <p className="text-lg md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
            Stop fading into background noise. Build an indelible fortress that captures mindshare and dominates your category.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-10 py-5 bg-[#FFD004] hover:bg-white text-black font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_50px_rgba(255,208,4,0.4)] active:scale-95 flex items-center gap-3"
            >
              <span>[ START A CONVERSATION → ]</span>
            </button>

            <Link
              href="/brand-guidelines"
              className="px-8 py-5 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm tracking-widest uppercase border border-white/15 transition-all flex items-center gap-2"
            >
              Explore Brand System <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Global Navigation & Discipline Columns */}
        <div className="pt-20 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-xs font-mono">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <MonarkLogo variant="lockup" size={42} />
            <p className="text-neutral-400 font-light leading-relaxed max-w-sm pt-2 text-sm font-sans">
              MONARK is an elite brand consultancy that defines what a business stands for, gives it a distinctive identity, and brings it to life across every touchpoint.
            </p>
            <div className="flex items-center gap-3 pt-2 text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>COMMISSIONS OPEN FOR Q2/Q3 2026</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-white font-bold tracking-widest uppercase block">
              DISCIPLINES
            </span>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#services" className="hover:text-[#FFD004] transition-colors">01 — Brand Strategy</a></li>
              <li><a href="#services" className="hover:text-[#FFD004] transition-colors">02 — Brand Identity</a></li>
              <li><a href="#services" className="hover:text-[#FFD004] transition-colors">03 — Creative & Content</a></li>
              <li><a href="#services" className="hover:text-[#FFD004] transition-colors">04 — Digital & Experience</a></li>
            </ul>
          </div>

          {/* Col 3: System Tokens & Assets */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-white font-bold tracking-widest uppercase block">
              SYSTEM SPECS
            </span>
            <ul className="space-y-2 text-neutral-400">
              <li><Link href="/brand-guidelines#colors" className="hover:text-[#FFD004] transition-colors">Color Tokens</Link></li>
              <li><Link href="/brand-guidelines#logo" className="hover:text-[#FFD004] transition-colors">Clear Space 1X</Link></li>
              <li><Link href="/brand-guidelines#typography" className="hover:text-[#FFD004] transition-colors">Fluid Clamps</Link></li>
              <li><Link href="/brand-guidelines#components" className="hover:text-[#FFD004] transition-colors">UI Playground</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal & Standards */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-white font-bold tracking-widest uppercase block">
              GOVERNANCE
            </span>
            <ul className="space-y-2 text-neutral-400">
              <li><span>WCAG 2.2 AAA</span></li>
              <li><span>Zero AI Slop</span></li>
              <li><span>60 FPS Target</span></li>
              <li><span>Next.js App Router</span></li>
            </ul>
          </div>

        </div>

        {/* Base Copyright Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-neutral-600 gap-4">
          <span>© 2026 MONARK CONSULTANCY INC. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-6">
            <span className="text-neutral-500 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#FFD004]" />
              PERF METRICS: 60FPS · ZERO CLS · EDGE
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
