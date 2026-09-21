"use client";

import React from "react";
import { Compass, Shield, Zap, Target } from "lucide-react";

export function BrandEthos() {
  const PILLARS = [
    {
      icon: Shield,
      number: "01",
      title: "Identity First",
      subtitle: "A logo is an anchor. An identity is an empire.",
      body: "Marketing gets you noticed for an instant. A sovereign identity builds enduring recall and loyalty that outlasts transient media cycles.",
    },
    {
      icon: Target,
      number: "02",
      title: "No Mystery. Just Process.",
      subtitle: "Like the KFC spices. But transparent.",
      body: "We don't sell mystical branding vaporware. We deploy a surgical four-phase roadmap: Discover, Define, Design, and Deploy.",
    },
    {
      icon: Zap,
      number: "03",
      title: "Radical Directness",
      subtitle: "WE BUILD BRAAAAAANDS. THAT'S IT.",
      body: "We strip away bloated agency theater. If it doesn't sharpen brand differentiation or command category authority, it doesn't belong.",
    },
  ];

  const TONE_TRAITS = [
    {
      attribute: "Uncompromising & Direct",
      doText: "Say exactly what is built and why it matters. 'We build braaaaands. That's it.'",
      dontText: "Hide behind vague agency jargon like 'synergistic omnichannel brand resonance.'",
    },
    {
      attribute: "Architectural & Grounded",
      doText: "Speak with structural authority, precision craft, and enduring permanence.",
      dontText: "Sound trendy, fickle, apologetic, or overly casual without gravitas.",
    },
    {
      attribute: "Punchy & Memorable",
      doText: "Use memorable hooks that contrast marketing versus true brand recall.",
      dontText: "Dilute messages into bland corporate white-papers nobody reads.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#FFD004]">
            Brand Ethos 00
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white mt-1">
            BRAND ARCHITECTURE & ETHOS
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <Compass className="w-3.5 h-3.5 text-[#FFD004]" />
          <span>FOUNDATIONAL CONSULTANCY THESIS</span>
        </div>
      </div>

      {/* Core Manifesto Box */}
      <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-[#0D0D12] to-[#050505] border border-white/15 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD004]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 space-y-6 max-w-4xl">
          <span className="px-3.5 py-1.5 rounded-full bg-[#FFD004]/10 border border-[#FFD004]/30 text-[#FFD004] text-xs font-mono tracking-widest uppercase">
            The Sovereign Declaration
          </span>

          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-[1.02]">
            Marketing gets you seen.
            <br />
            <span className="text-[#FFD004]">Branding gives people a reason to remember you.</span>
          </h3>

          <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
            MONARK is a brand consultancy that defines what a business or idea stands for, gives it a distinctive identity, and brings it to life across every touchpoint.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD004]" />
              <span>A Logo → <strong className="text-white">Identity</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD004]" />
              <span>A Campaign → <strong className="text-white">Marketing</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD004]" />
              <span>Posts → <strong className="text-white">Content</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Strategic Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0A0A0E] border border-white/10 hover:border-[#FFD004]/40 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD004]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-neutral-500">{pillar.number}</span>
                </div>

                <h4 className="text-xl font-bold font-display text-white">
                  {pillar.title}
                </h4>
                <p className="text-xs font-mono text-[#FFD004] uppercase tracking-wider">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tone of Voice Matrix */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#08080C] border border-white/10 space-y-6">
        <h3 className="text-base font-bold font-display text-white uppercase tracking-wider">
          Tone of Voice Principles
        </h3>

        <div className="divide-y divide-white/10">
          {TONE_TRAITS.map((trait, idx) => (
            <div key={idx} className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div className="lg:col-span-4">
                <span className="text-sm font-bold text-white font-display">
                  {trait.attribute}
                </span>
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-emerald-400 bg-emerald-950/30 p-3 rounded-lg border border-emerald-800/40">
                <strong className="block text-emerald-300 font-bold mb-1">✓ HOW WE SPEAK:</strong>
                {trait.doText}
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-rose-400 bg-rose-950/30 p-3 rounded-lg border border-rose-800/40">
                <strong className="block text-rose-300 font-bold mb-1">✗ WHAT WE AVOID:</strong>
                {trait.dontText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
