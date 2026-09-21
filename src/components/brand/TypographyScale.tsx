"use client";

import React, { useState } from "react";
import { Copy, Check, Type, Sliders } from "lucide-react";

interface ScaleItem {
  name: string;
  family: string;
  fontVar: string;
  clampCSS: string;
  fontSizeRem: string;
  lineHeight: string;
  tracking: string;
  weight: string;
  sampleText: string;
  usage: string;
}

const TYPO_SCALES: ScaleItem[] = [
  {
    name: "Display Monumental",
    family: "Syne (Display)",
    fontVar: "var(--font-syne)",
    clampCSS: "clamp(3.5rem, 9vw, 9.5rem)",
    fontSizeRem: "9.5rem (152px peak)",
    lineHeight: "0.88",
    tracking: "-0.04em",
    weight: "900 / Black",
    sampleText: "LET'S CREATE A BRAAAAAAND.",
    usage: "Hero headlines, monumental brand impact statements, punchy slogans.",
  },
  {
    name: "Heading 1 (Hero Secondary)",
    family: "Syne (Display)",
    fontVar: "var(--font-syne)",
    clampCSS: "clamp(2.5rem, 5.5vw, 5.5rem)",
    fontSizeRem: "5.5rem (88px peak)",
    lineHeight: "0.95",
    tracking: "-0.03em",
    weight: "800 / ExtraBold",
    sampleText: "MARKETING GETS YOU SEEN.",
    usage: "Major section anchor titles, manifesto thesis lines.",
  },
  {
    name: "Heading 2 (Section Anchor)",
    family: "Syne (Display)",
    fontVar: "var(--font-syne)",
    clampCSS: "clamp(2rem, 4vw, 3.75rem)",
    fontSizeRem: "3.75rem (60px peak)",
    lineHeight: "1.05",
    tracking: "-0.02em",
    weight: "700 / Bold",
    sampleText: "PICK YOUR BATTLE.",
    usage: "Services header, process title, narrative breakdown anchors.",
  },
  {
    name: "Heading 3 (Service Pill)",
    family: "Space Grotesk (Sans)",
    fontVar: "var(--font-space-grotesk)",
    clampCSS: "clamp(1.35rem, 2.5vw, 2.25rem)",
    fontSizeRem: "2.25rem (36px peak)",
    lineHeight: "1.2",
    tracking: "-0.01em",
    weight: "600 / SemiBold",
    sampleText: "01 — BRAND STRATEGY",
    usage: "Feature cards, service category heads, interactive drawer titles.",
  },
  {
    name: "Body Lead (Manifesto)",
    family: "Space Grotesk (Sans)",
    fontVar: "var(--font-space-grotesk)",
    clampCSS: "clamp(1.125rem, 1.4vw, 1.35rem)",
    fontSizeRem: "1.35rem (21.6px peak)",
    lineHeight: "1.6",
    tracking: "normal",
    weight: "400 / Regular",
    sampleText:
      "MONARK is a brand consultancy that defines what a business stands for, gives it a distinctive identity, and brings it to life across every touchpoint.",
    usage: "Value proposition paragraphs, introductory descriptions, client thesis.",
  },
  {
    name: "Meta / Technical Coordinate",
    family: "JetBrains Mono (Mono)",
    fontVar: "var(--font-jetbrains-mono)",
    clampCSS: "clamp(0.75rem, 0.9vw, 0.875rem)",
    fontSizeRem: "0.875rem (14px peak)",
    lineHeight: "1.5",
    tracking: "0.15em",
    weight: "500 / Medium",
    sampleText: "05 — HOW WE WORK // NO MYSTERY. JUST A PROCESS.",
    usage: "Section indices, metadata tags, live coordinate feeds, token specs.",
  },
];

export function TypographyScale() {
  const [copiedClamp, setCopiedClamp] = useState<string | null>(null);
  const [interactiveText, setInteractiveText] = useState("WE BUILD BRAAAAAANDS. THAT'S IT.");
  const [previewSize, setPreviewSize] = useState(48);

  const copyRule = (rule: string, key: string) => {
    navigator.clipboard.writeText(rule);
    setCopiedClamp(key);
    setTimeout(() => setCopiedClamp(null), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#FFD004]">
            Token Specification 03
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white mt-1">
            TYPOGRAPHY HIERARCHY & FLUID CLAMPS
          </h2>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
          <span>TRI-FONT ENGINE:</span>
          <span className="text-white font-bold">SYNE</span> +{" "}
          <span className="text-white font-bold">SPACE GROTESK</span> +{" "}
          <span className="text-[#FFD004] font-bold">JETBRAINS MONO</span>
        </div>
      </div>

      {/* Interactive Playground Sandbox */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#0A0A0E] border border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFD004] uppercase">
            <Sliders className="w-3.5 h-3.5" /> Interactive Specimen Playground
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
            <span>FONT SIZE:</span>
            <span className="text-white font-bold">{previewSize}px</span>
            <input
              type="range"
              min="18"
              max="96"
              value={previewSize}
              onChange={(e) => setPreviewSize(Number(e.target.value))}
              className="w-32 accent-[#FFD004] cursor-pointer"
            />
          </div>
        </div>

        <div>
          <input
            type="text"
            value={interactiveText}
            onChange={(e) => setInteractiveText(e.target.value)}
            placeholder="Type custom specimen copy..."
            className="w-full bg-black/70 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono text-neutral-200 focus:outline-none focus:border-[#FFD004] transition-colors"
          />
        </div>

        {/* Live Rendering in 3 Families */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 border-t border-white/5">
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
            <span className="text-[11px] font-mono text-[#FFD004] uppercase tracking-wider block">
              Display: Syne (Black)
            </span>
            <p
              className="font-display font-black text-white leading-none tracking-tighter"
              style={{ fontSize: `${previewSize}px` }}
            >
              {interactiveText}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
            <span className="text-[11px] font-mono text-[#FFD004] uppercase tracking-wider block">
              Sans: Space Grotesk (Medium)
            </span>
            <p
              className="font-sans font-medium text-white leading-tight"
              style={{ fontSize: `${previewSize * 0.8}px` }}
            >
              {interactiveText}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
            <span className="text-[11px] font-mono text-[#FFD004] uppercase tracking-wider block">
              Mono: JetBrains Mono (Specs)
            </span>
            <p
              className="font-mono text-neutral-300 leading-normal"
              style={{ fontSize: `${previewSize * 0.55}px` }}
            >
              {interactiveText}
            </p>
          </div>
        </div>
      </div>

      {/* Fluid Clamp Tokens Table */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-[#FFD004]">
          Production Clamp Formula Standards
        </h3>
        <div className="divide-y divide-white/10 rounded-2xl bg-[#08080C] border border-white/10 overflow-hidden">
          {TYPO_SCALES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 hover:bg-white/[0.02] transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-2 lg:max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold text-white font-display">
                    {item.name}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-[#FFD004] border border-white/10">
                    {item.family}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    {item.weight}
                  </span>
                </div>

                <p
                  className="text-white pt-2 font-display leading-[1.05]"
                  style={{
                    fontSize: `calc(${item.fontSizeRem.split(" ")[0]} * 0.45)`,
                  }}
                >
                  {item.sampleText}
                </p>

                <p className="text-xs text-neutral-400 font-light pt-1">
                  {item.usage}
                </p>
              </div>

              {/* Clamp Spec & Copy Button */}
              <div className="flex flex-col items-start lg:items-end gap-2 font-mono text-xs">
                <span className="text-neutral-500">FLUID CSS CLAMP:</span>
                <code className="px-3 py-1.5 rounded-lg bg-black border border-white/10 text-neutral-200 font-mono text-[11px]">
                  {item.clampCSS}
                </code>
                <button
                  onClick={() => copyRule(`font-size: ${item.clampCSS};`, item.name)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-[#FFD004] border border-white/10 transition-colors text-[11px]"
                >
                  {copiedClamp === item.name ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" /> Copied CSS Rule
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy CSS Rule
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
