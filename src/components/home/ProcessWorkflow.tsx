"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle, Search, Lightbulb, PenTool, Rocket } from "lucide-react";

export function ProcessWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    {
      number: "01",
      name: "DISCOVER",
      briefCopy: "We listen.",
      icon: Search,
      breakdown:
        "Deep qualitative inquiry. We immerse ourselves in your executive vision, interrogate market competitors, audit your customers' unspoken desires, and map the friction holding your brand back.",
      deliverable: "Strategic Brand Audit & Opportunity Blueprint",
    },
    {
      number: "02",
      name: "DEFINE",
      briefCopy: "We figure it out.",
      icon: Lightbulb,
      breakdown:
        "Synthesis and positioning mathematics. We distil the findings into an uncompromising value proposition, articulate your brand architecture, and identify the single emotional hook that makes you unforgettable.",
      deliverable: "Positioning Manifesto & Verbal Framework",
    },
    {
      number: "03",
      name: "DESIGN",
      briefCopy: "We make it real.",
      icon: PenTool,
      breakdown:
        "Visual alchemy and tactile craft. We forge the fortress crest, calculate fluid clamp typography, generate color palettes with WCAG AAA certified contrast, and compose dynamic design systems.",
      deliverable: "Complete Identity Suite & Interactive Guidelines",
    },
    {
      number: "04",
      name: "DEPLOY",
      briefCopy: "We turn it into action.",
      icon: Rocket,
      breakdown:
        "Full-scale production rollout. We engineer 60fps web experiences, produce launch campaigns, print premium physical assets, and train your team to protect and execute the brand system forever.",
      deliverable: "Production Launch, Web Build & Living Tokens",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#050505] text-[#FAFAFA] border-b border-white/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#FFD004]" />
              <span className="text-white font-bold">05 — HOW WE WORK</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-white uppercase mt-2">
              NO MYSTERY.
              <br />
              <span className="text-neutral-500 text-2xl md:text-4xl block mt-1 font-light">
                (LIKE THE KFC SPICES.)
              </span>
              <span className="text-[#FFD004] block mt-1">JUST A PROCESS.</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 uppercase tracking-wider max-w-sm">
            FOUR REPEATABLE PHASES DEVOID OF AGENCY THEATRICS OR UNPROVEN INTUITION.
          </p>
        </div>

        {/* Interactive Step Switcher Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 ${
                activeStep === idx
                  ? "bg-[#121218] border-[#FFD004] shadow-[0_0_25px_rgba(255,208,4,0.15)]"
                  : "bg-[#09090D] border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs font-bold text-[#FFD004]">
                  {step.number} // PHASE
                </span>
                {activeStep === idx && (
                  <span className="w-2 h-2 rounded-full bg-[#FFD004] animate-pulse" />
                )}
              </div>
              <h3 className="text-lg md:text-xl font-black font-display text-white">
                {step.name}
              </h3>
              <p className="text-xs font-mono text-neutral-400 mt-1">
                {step.briefCopy}
              </p>
            </button>
          ))}
        </div>

        {/* Active Phase Deep Dive Canvas */}
        <div className="p-8 md:p-14 rounded-3xl bg-[#0B0B0F] border border-white/15 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFD004]/10 border border-[#FFD004]/30 text-[#FFD004] text-xs font-mono tracking-widest uppercase">
                ACTIVE FOCUS: PHASE {STEPS[activeStep].number}
              </div>

              <div className="space-y-1">
                <h4 className="text-3xl md:text-5xl font-black font-display text-white uppercase">
                  {STEPS[activeStep].name}
                </h4>
                <p className="text-xl md:text-2xl font-mono text-[#FFD004]">
                  &quot;{STEPS[activeStep].briefCopy}&quot;
                </p>
              </div>

              <p className="text-base md:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
                {STEPS[activeStep].breakdown}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono">
                <span className="text-neutral-500 uppercase">KEY MILESTONE:</span>
                <span className="px-3 py-1.5 rounded-lg bg-black border border-white/10 text-white font-medium">
                  {STEPS[activeStep].deliverable}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-black/60 border border-white/10 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD004]">
                {React.createElement(STEPS[activeStep].icon, { className: "w-10 h-10" })}
              </div>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                SURGICAL EXECUTION
              </span>
              <p className="text-xs text-neutral-500">
                Phase {activeStep + 1} of 4 — Built for category dominion.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
