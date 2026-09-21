"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Search,
  Sparkles,
  Layers,
  Send,
} from "lucide-react";

export function ComponentShowcase() {
  const [isLoading, setIsLoading] = useState(false);
  const [demoInput, setDemoInput] = useState("monark@consultancy.com");
  const [hasError, setHasError] = useState(false);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const toggleLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2400);
  };

  const handleSpotlightMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#FFD004]">
            Token Specification 04
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white mt-1">
            INTERACTIVE COMPONENT TOKENS
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Layers className="w-3.5 h-3.5 text-[#FFD004]" />
          <span>MICRO-INTERACTION STATES & ELEVATION</span>
        </div>
      </div>

      {/* Button States Matrix */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#0A0A0E] border border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <h3 className="text-base font-bold text-white font-display">
              Button Architecture & Dynamic State Machine
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Strict sharp-corner geometry or subtle 4px chamfers. Built with high-friction hover transitions.
            </p>
          </div>
          <button
            onClick={toggleLoading}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#FFD004] transition-colors"
          >
            {isLoading ? "Simulating Loading..." : "Simulate Loading State"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          
          {/* Primary Gold CTA */}
          <div className="p-5 rounded-xl bg-black/50 border border-white/5 space-y-3">
            <span className="text-[11px] font-mono text-neutral-400 block uppercase">
              01 / Primary Solid Gold
            </span>
            <button
              disabled={isLoading}
              className="w-full relative px-6 py-3.5 bg-[#FFD004] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(255,208,4,0.4)] active:scale-95 disabled:opacity-80"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  Start Project <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
            <p className="text-[10px] font-mono text-neutral-500">
              Classes: bg-[#FFD004] hover:bg-white active:scale-95
            </p>
          </div>

          {/* Secondary Ghost Obsidian */}
          <div className="p-5 rounded-xl bg-black/50 border border-white/5 space-y-3">
            <span className="text-[11px] font-mono text-neutral-400 block uppercase">
              02 / Ghost Obsidian
            </span>
            <button
              disabled={isLoading}
              className="w-full relative px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase border border-white/15 flex items-center justify-center gap-2 transition-all duration-300 hover:border-[#FFD004]/50 active:scale-95 disabled:opacity-80"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin text-[#FFD004]" />
              ) : (
                <>
                  Explore Matrix <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
            <p className="text-[10px] font-mono text-neutral-500">
              Classes: bg-white/5 hover:border-[#FFD004]/50
            </p>
          </div>

          {/* Outline Magnetic */}
          <div className="p-5 rounded-xl bg-black/50 border border-white/5 space-y-3">
            <span className="text-[11px] font-mono text-neutral-400 block uppercase">
              03 / White Outline
            </span>
            <button
              disabled={isLoading}
              className="w-full relative px-6 py-3.5 bg-transparent hover:bg-white text-white hover:text-black font-semibold text-xs tracking-wider uppercase border border-white flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 disabled:opacity-80"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  View Portfolio <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
            <p className="text-[10px] font-mono text-neutral-500">
              Classes: border border-white hover:bg-white
            </p>
          </div>

          {/* Disabled State */}
          <div className="p-5 rounded-xl bg-black/50 border border-white/5 space-y-3">
            <span className="text-[11px] font-mono text-neutral-400 block uppercase">
              04 / Disabled Inactive
            </span>
            <button
              disabled
              className="w-full relative px-6 py-3.5 bg-white/5 text-neutral-600 font-semibold text-xs tracking-wider uppercase border border-white/5 flex items-center justify-center gap-2 cursor-not-allowed opacity-50"
            >
              Capacity Sealed
            </button>
            <p className="text-[10px] font-mono text-neutral-500">
              Classes: opacity-50 cursor-not-allowed
            </p>
          </div>

        </div>
      </div>

      {/* Input Elements */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#0A0A0E] border border-white/10 space-y-6">
        <div>
          <h3 className="text-base font-bold text-white font-display">
            Form & Input Fields
          </h3>
          <p className="text-xs text-neutral-400 mt-0.5">
            Tactile focus rings with Monark Gold glow containment and instant validation cues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Standard Input */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-neutral-300 block uppercase tracking-wider">
              Client Entity Name
            </label>
            <input
              type="text"
              defaultValue="Acme Robotics Corp"
              className="w-full px-4 py-3 bg-black/60 border border-white/15 rounded-lg text-sm text-white font-sans focus:outline-none focus:border-[#FFD004] focus:ring-1 focus:ring-[#FFD004] transition-all"
            />
            <p className="text-[11px] text-neutral-500 font-mono">
              Focus: border-[#FFD004] ring-1
            </p>
          </div>

          {/* Search Input with Icon */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-neutral-300 block uppercase tracking-wider">
              Search Brand Archives
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search assets, tokens, guidelines..."
                className="w-full pl-10 pr-4 py-3 bg-black/60 border border-white/15 rounded-lg text-sm text-white font-sans focus:outline-none focus:border-[#FFD004] transition-all"
              />
            </div>
            <p className="text-[11px] text-neutral-500 font-mono">
              Embedded icon with dynamic contrast
            </p>
          </div>

          {/* Validation & Error Input */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-xs font-mono text-neutral-300 block uppercase tracking-wider">
                Inquiry Channel
              </label>
              <button
                onClick={() => setHasError(!hasError)}
                className="text-[10px] font-mono text-[#FFD004] hover:underline"
              >
                Toggle Error State
              </button>
            </div>
            <div className="relative">
              <input
                type="email"
                value={demoInput}
                onChange={(e) => setDemoInput(e.target.value)}
                className={`w-full px-4 py-3 bg-black/60 rounded-lg text-sm text-white font-sans focus:outline-none transition-all ${
                  hasError
                    ? "border border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                    : "border border-white/15 focus:border-[#FFD004]"
                }`}
              />
              {hasError ? (
                <AlertCircle className="w-4 h-4 text-rose-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              )}
            </div>
            {hasError && (
              <p className="text-[11px] text-rose-400 font-mono flex items-center gap-1">
                Invalid transmission channel protocol.
              </p>
            )}
          </div>

        </div>
      </div>

      {/* Surface Elevation & Interactive Spotlight Card */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-[#FFD004]">
          Spatial Elevation Hierarchy & Spotlight Cards
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Elevation 0: Root Canvas */}
          <div className="p-6 rounded-2xl bg-[#050505] border border-white/5 space-y-3">
            <span className="font-mono text-xs text-neutral-500 uppercase">Elevation 00 (Canvas)</span>
            <h4 className="text-lg font-bold font-display text-white">Root Obsidian</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Base background level. Zero shadow. Maximum light absorption for high-contrast typography.
            </p>
            <div className="pt-2 text-[10px] font-mono text-neutral-600">
              HEX: #050505 // SHADOW: NONE
            </div>
          </div>

          {/* Elevation 1: Card Surface */}
          <div className="p-6 rounded-2xl bg-[#101014] border border-white/10 shadow-lg space-y-3">
            <span className="font-mono text-xs text-[#FFD004] uppercase">Elevation 01 (Surface)</span>
            <h4 className="text-lg font-bold font-display text-white">Elevated Carbon</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Standard component card layer. 1px hairline border (`rgba(255,255,255,0.08)`).
            </p>
            <div className="pt-2 text-[10px] font-mono text-neutral-500">
              HEX: #101014 // SHADOW: lg (10px blur)
            </div>
          </div>

          {/* Elevation 2: Interactive Spotlight Surface */}
          <div
            onMouseMove={handleSpotlightMove}
            className="group relative p-6 rounded-2xl bg-[#14141A] border border-white/15 overflow-hidden transition-all duration-300 shadow-2xl space-y-3"
          >
            {/* Dynamic Spotlight Glow */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 208, 4, 0.15), transparent 80%)`,
              }}
            />

            <span className="font-mono text-xs text-[#FFD004] uppercase relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Elevation 02 (Spotlight)
            </span>
            <h4 className="text-lg font-bold font-display text-white relative z-10">
              Interactive Reactor
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed relative z-10">
              Move your mouse across this card to witness real-time radial gold gradient refraction.
            </p>
            <div className="pt-2 text-[10px] font-mono text-[#FFD004] relative z-10">
              ACTIVE HOVER SPOTLIGHT TRACKER
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
