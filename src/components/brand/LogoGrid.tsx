"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MonarkLogo } from "./MonarkLogo";
import { CheckCircle2, XCircle, Eye, EyeOff, Ruler, Sparkles } from "lucide-react";

export function LogoGrid() {
  const [showClearance, setShowClearance] = useState(true);

  const MISUSE_RULES = [
    {
      title: "Aspect Ratio Distortion",
      type: "dont",
      rule: "Never squish, stretch, or alter the 1:1 proportional circular bounding box.",
      preview: (
        <div className="w-24 h-16 relative overflow-hidden flex items-center justify-center">
          <div className="w-24 h-14 scale-x-125 scale-y-75 rounded-full overflow-hidden relative">
            <Image src="/monark-badge.png" alt="Distorted" fill className="object-cover" />
          </div>
        </div>
      ),
    },
    {
      title: "Unauthorized Hue Shifts",
      type: "dont",
      rule: "Never substitute canonical Monark Gold (#FFD004) with neon, cyan, or pastel colors.",
      preview: (
        <div className="w-20 h-20 rounded-full bg-cyan-400 p-2 flex items-center justify-center filter hue-rotate-180">
          <div className="w-16 h-16 relative">
            <Image src="/monark-crest-black.png" alt="Wrong Color" fill className="object-contain" />
          </div>
        </div>
      ),
    },
    {
      title: "Cluttered Backgrounds",
      type: "dont",
      rule: "Never position the mark on high-frequency, un-dimmed photographic textures.",
      preview: (
        <div className="w-24 h-24 rounded-xl bg-gradient-to-r from-red-500 via-green-500 to-blue-500 p-2 flex items-center justify-center relative overflow-hidden">
          <div className="w-14 h-14 relative">
            <Image src="/monark-badge.png" alt="Cluttered" fill className="object-contain" />
          </div>
        </div>
      ),
    },
    {
      title: "Off-Axis Rotation",
      type: "dont",
      rule: "The fortress battlements must always stand plumb vertical on the Y-axis. Never rotate.",
      preview: (
        <div className="w-20 h-20 relative rotate-45">
          <Image src="/monark-badge.png" alt="Rotated" fill className="object-contain" />
        </div>
      ),
    },
    {
      title: "Adequate Contrast Discipline",
      type: "do",
      rule: "Maintain absolute contrast by deploying the golden badge on pure obsidian or white surfaces.",
      preview: (
        <div className="w-20 h-20 relative">
          <Image src="/monark-badge.png" alt="Compliant" fill className="object-contain" />
        </div>
      ),
    },
    {
      title: "Isolated Fortress Glyph",
      type: "do",
      rule: "The standalone fortress monogram may be utilized as a watermark or architectural accent in gold or white.",
      preview: (
        <div className="w-20 h-20 relative">
          <Image src="/monark-crest-gold.png" alt="Glyph" fill className="object-contain" />
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#FFD004]">
            Token Specification 02
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white mt-1">
            LOGO ARCHITECTURE & CLEAR-SPACE
          </h2>
        </div>
        <button
          onClick={() => setShowClearance(!showClearance)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
        >
          {showClearance ? <EyeOff className="w-3.5 h-3.5 text-[#FFD004]" /> : <Eye className="w-3.5 h-3.5 text-[#FFD004]" />}
          {showClearance ? "Hide Clearance Grid" : "Show Clearance Grid"}
        </button>
      </div>

      {/* Main Interactive Clear Space Stage */}
      <div className="p-8 md:p-14 rounded-3xl bg-[#08080C] border border-white/10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Blueprint Canvas */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative p-12 rounded-2xl bg-black/60 border border-white/10 shadow-2xl flex items-center justify-center">
              
              {/* Architectural Grid Overlay */}
              {showClearance && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Safe margin boundary */}
                  <div className="absolute inset-4 border border-dashed border-[#FFD004]/60 rounded-xl" />
                  
                  {/* Dimension markers */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#FFD004] bg-black/90 px-2 py-0.5 border border-[#FFD004]/30 rounded">
                    1X Safe Zone Clearance
                  </div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#FFD004] bg-black/90 px-2 py-0.5 border border-[#FFD004]/30 rounded">
                    1X Safe Zone Clearance
                  </div>
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[#FFD004] bg-black/90 px-1 py-1 [writing-mode:vertical-lr] border border-[#FFD004]/30 rounded">
                    1X Safe
                  </div>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[#FFD004] bg-black/90 px-1 py-1 [writing-mode:vertical-lr] border border-[#FFD004]/30 rounded">
                    1X Safe
                  </div>

                  {/* Center Crosshair Lines */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#FFD004]/20 -translate-x-1/2" />
                  <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#FFD004]/20 -translate-y-1/2" />
                </div>
              )}

              {/* Core Monark Logo */}
              <div className="relative z-10 w-44 h-44 md:w-56 md:h-56">
                <Image
                  src="/monark-badge.png"
                  alt="Monark Core Fortress Emblem"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_35px_rgba(255,208,4,0.3)]"
                />
              </div>
            </div>
          </div>

          {/* Mathematical Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFD004] uppercase">
              <Ruler className="w-3.5 h-3.5" /> Geometric Formulation
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
              Fortress Disc Safe Zone (1X Rule)
            </h3>
            
            <p className="text-neutral-400 text-sm leading-relaxed">
              The primary emblem requires an unencumbered spatial perimeter equal to unit <strong className="text-white">X</strong>, where <strong className="text-white">X</strong> equals the height of the central battlement tower (approx. 20% of the disc radius).
            </p>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-2">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-neutral-500 uppercase block">Digital Minimum</span>
                <span className="text-lg font-bold text-white">24px × 24px</span>
                <p className="text-[11px] text-neutral-400">Favicons, micro-badges, status bars</p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-neutral-500 uppercase block">Print Minimum</span>
                <span className="text-lg font-bold text-white">10mm × 10mm</span>
                <p className="text-[11px] text-neutral-400">Stationery, silkscreen, embossed goods</p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-neutral-500 uppercase block">Standard Hero Scale</span>
                <span className="text-lg font-bold text-[#FFD004]">96px — 240px</span>
                <p className="text-[11px] text-neutral-400">Primary digital lockups & landing pages</p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-neutral-500 uppercase block">Display Aspect Ratio</span>
                <span className="text-lg font-bold text-white">1 : 1 (Strict)</span>
                <p className="text-[11px] text-neutral-400">Circular boundary vector geometry</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Adaptations Showcase */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-[#FFD004]">
          Approved Context Adaptations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Dark Background */}
          <div className="p-6 rounded-2xl bg-[#050505] border border-white/15 flex flex-col items-center justify-center text-center space-y-3 min-h-[180px]">
            <div className="w-16 h-16 relative">
              <Image src="/monark-badge.png" alt="On Dark" fill className="object-contain" />
            </div>
            <span className="font-mono text-xs text-neutral-300">On Deep Obsidian (#050505)</span>
          </div>

          {/* Light Background */}
          <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-neutral-300 flex flex-col items-center justify-center text-center space-y-3 min-h-[180px]">
            <div className="w-16 h-16 relative">
              <Image src="/monark-badge.png" alt="On Light" fill className="object-contain" />
            </div>
            <span className="font-mono text-xs text-neutral-800 font-semibold">On Stark White (#FAFAFA)</span>
          </div>

          {/* Standalone White Glyph */}
          <div className="p-6 rounded-2xl bg-[#101014] border border-white/10 flex flex-col items-center justify-center text-center space-y-3 min-h-[180px]">
            <div className="w-14 h-14 relative">
              <Image src="/monark-crest-white.png" alt="Crest White" fill className="object-contain" />
            </div>
            <span className="font-mono text-xs text-neutral-400">Standalone Crest (White)</span>
          </div>

          {/* Standalone Gold Glyph */}
          <div className="p-6 rounded-2xl bg-[#08080A] border border-white/10 flex flex-col items-center justify-center text-center space-y-3 min-h-[180px]">
            <div className="w-14 h-14 relative">
              <Image src="/monark-crest-gold.png" alt="Crest Gold" fill className="object-contain" />
            </div>
            <span className="font-mono text-xs text-[#FFD004]">Standalone Crest (Gold)</span>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts Misuse Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-[#FFD004]">
          Logo Misuse & Governance (Do&apos;s and Don&apos;ts)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MISUSE_RULES.map((rule, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-[#0A0A0E] border flex flex-col justify-between ${
                rule.type === "do"
                  ? "border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
                  : "border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.05)]"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono font-bold ${
                      rule.type === "do"
                        ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                        : "bg-rose-950 text-rose-400 border border-rose-800"
                    }`}
                  >
                    {rule.type === "do" ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" /> DO
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5" /> DON&apos;T
                      </>
                    )}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">RULE {idx + 1}</span>
                </div>

                <div className="h-28 rounded-xl bg-black/60 border border-white/5 flex items-center justify-center mb-4">
                  {rule.preview}
                </div>

                <h4 className="text-base font-bold text-white font-display mb-1">
                  {rule.title}
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {rule.rule}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
