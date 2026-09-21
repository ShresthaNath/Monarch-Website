"use client";

import React, { useState } from "react";
import { Check, Copy, Sparkles, ShieldCheck, AlertCircle } from "lucide-react";

interface ColorSwatch {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  hsl: string;
  cssVar: string;
  tailwindClass: string;
  contrastOnBlack: number;
  contrastOnWhite: number;
  wcagBlack: "AAA" | "AA" | "Fail";
  wcagWhite: "AAA" | "AA" | "Fail";
  description: string;
}

const PRIMARY_PALETTE: ColorSwatch[] = [
  {
    name: "Monark Gold",
    role: "Primary Accent & Emblem",
    hex: "#FFD004",
    rgb: "255, 208, 4",
    hsl: "49°, 100%, 51%",
    cssVar: "var(--color-gold-500)",
    tailwindClass: "bg-[#FFD004] text-black",
    contrastOnBlack: 14.1,
    contrastOnWhite: 1.49,
    wcagBlack: "AAA",
    wcagWhite: "Fail",
    description: "High-voltage electric gold extracted directly from the core fortress emblem. Used for primary CTAs, key focal headlines, and brand stamps.",
  },
  {
    name: "Deep Obsidian",
    role: "Primary Void Canvas",
    hex: "#050505",
    rgb: "5, 5, 5",
    hsl: "0°, 0%, 2%",
    cssVar: "var(--color-obsidian-950)",
    tailwindClass: "bg-[#050505] text-white",
    contrastOnBlack: 1.0,
    contrastOnWhite: 20.6,
    wcagBlack: "Fail",
    wcagWhite: "AAA",
    description: "Absolute dark foundation. Replaces standard grayish dark modes with an uncompromising jet-black cinema depth.",
  },
  {
    name: "Elevated Carbon",
    role: "Surface & Elevation Layer",
    hex: "#101014",
    rgb: "16, 16, 20",
    hsl: "240°, 11%, 7%",
    cssVar: "var(--color-obsidian-850)",
    tailwindClass: "bg-[#101014] text-white",
    contrastOnBlack: 1.25,
    contrastOnWhite: 16.5,
    wcagBlack: "Fail",
    wcagWhite: "AAA",
    description: "Subtle optical elevation for card decks, modal overlays, and hover spotlight targets.",
  },
  {
    name: "Stark White",
    role: "Primary Content & Display",
    hex: "#FAFAFA",
    rgb: "250, 250, 250",
    hsl: "0°, 0%, 98%",
    cssVar: "var(--foreground)",
    tailwindClass: "text-[#FAFAFA]",
    contrastOnBlack: 19.8,
    contrastOnWhite: 1.05,
    wcagBlack: "AAA",
    wcagWhite: "Fail",
    description: "Anti-fatigue pure white for maximum legibility and crisp Swiss grid typography.",
  },
];

const SECONDARY_SCALE = [
  { step: "Gold 100", hex: "#FFFAB8", role: "Soft Glow & Halo" },
  { step: "Gold 300", hex: "#FFE952", role: "Secondary Hover" },
  { step: "Gold 500", hex: "#FFD004", role: "Primary Brand Core" },
  { step: "Gold 700", hex: "#A88700", role: "Deep Accent Shade" },
  { step: "Carbon 700", hex: "#22222A", role: "Border Highlight" },
  { step: "Carbon 850", hex: "#101014", role: "Card Surface" },
  { step: "Carbon 950", hex: "#050505", role: "Root Canvas" },
];

export function ColorTokens() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [testFg, setTestFg] = useState("#FFD004");
  const [testBg, setTestBg] = useState("#050505");

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Quick relative luminance contrast ratio calculation
  const getLuminance = (hex: string) => {
    const rgb = hex
      .replace("#", "")
      .match(/.{1,2}/g)!
      .map((v) => {
        const c = parseInt(v, 16) / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  };

  const lum1 = getLuminance(testFg);
  const lum2 = getLuminance(testBg);
  const currentRatio = (
    (Math.max(lum1, lum2) + 0.05) /
    (Math.min(lum1, lum2) + 0.05)
  ).toFixed(2);

  const passesAA = parseFloat(currentRatio) >= 4.5;
  const passesAAA = parseFloat(currentRatio) >= 7.0;

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#FFD004]">
            Token Specification 01
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white mt-1">
            COLOR PALETTE & WCAG TOKENS
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>WCAG 2.2 COMPLIANT (AAA/AA TARGETS)</span>
        </div>
      </div>

      {/* Primary Swatches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRIMARY_PALETTE.map((color) => (
          <div
            key={color.name}
            className="group relative rounded-2xl bg-[#0A0A0E] border border-white/10 p-6 flex flex-col justify-between hover:border-[#FFD004]/50 transition-all duration-300"
          >
            <div>
              {/* Color Block Preview */}
              <div
                className="w-full h-36 rounded-xl relative overflow-hidden flex items-end p-4 shadow-inner border border-white/10"
                style={{ backgroundColor: color.hex }}
              >
                <button
                  onClick={() => copyToClipboard(color.hex, color.name)}
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-mono flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity"
                >
                  {copiedKey === color.name ? (
                    <>
                      <Check className="w-3 h-3 text-[#FFD004]" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy Hex
                    </>
                  )}
                </button>
                <span
                  className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-black/50 backdrop-blur-md text-white"
                >
                  {color.hex}
                </span>
              </div>

              {/* Identity & Role */}
              <div className="mt-5 space-y-1">
                <h3 className="text-lg font-bold text-white font-display">
                  {color.name}
                </h3>
                <p className="text-xs font-mono text-[#FFD004] uppercase">
                  {color.role}
                </p>
                <p className="text-xs text-neutral-400 font-light leading-relaxed pt-2">
                  {color.description}
                </p>
              </div>
            </div>

            {/* Technical Specs & Copyable Values */}
            <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center text-neutral-400">
                <span>CSS VAR:</span>
                <button
                  onClick={() => copyToClipboard(color.cssVar, `${color.name}-css`)}
                  className="hover:text-white flex items-center gap-1 text-[11px] text-neutral-300"
                >
                  {copiedKey === `${color.name}-css` ? "Copied" : color.cssVar}
                </button>
              </div>

              <div className="flex justify-between items-center text-neutral-400">
                <span>ON OBSIDIAN:</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    color.wcagBlack === "AAA"
                      ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                      : color.wcagBlack === "AA"
                      ? "bg-blue-950 text-blue-300 border border-blue-800"
                      : "bg-neutral-900 text-neutral-500"
                  }`}
                >
                  {color.contrastOnBlack}:1 ({color.wcagBlack})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Tonal Scale */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#0A0A0E] border border-white/10 space-y-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-[#FFD004]">
          Secondary Tonal Scale & Elevation Ramp
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {SECONDARY_SCALE.map((item) => (
            <div
              key={item.step}
              onClick={() => copyToClipboard(item.hex, item.step)}
              className="group cursor-pointer p-3 rounded-xl bg-black/40 border border-white/5 hover:border-[#FFD004]/40 transition-all text-center"
            >
              <div
                className="w-full h-12 rounded-lg border border-white/10 mb-2.5 transition-transform group-hover:scale-105"
                style={{ backgroundColor: item.hex }}
              />
              <p className="text-xs font-bold text-white font-mono">{item.step}</p>
              <p className="text-[10px] font-mono text-neutral-400">{item.hex}</p>
              <p className="text-[9px] text-neutral-500 mt-1 truncate">{item.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive WCAG Contrast Testbench */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#101015] to-[#08080A] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFD004] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Contrast Simulator
          </div>
          <h3 className="text-2xl font-bold font-display text-white">
            Verify Accessibility Real-Time
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Test any foreground and background pairing against strict W3C WCAG 2.2 standards. Monark guarantees all display headlines and critical touchpoints exceed AA standards.
          </p>

          {/* Color Pickers */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-[11px] font-mono text-neutral-400 block mb-1.5 uppercase">
                Foreground Hex
              </label>
              <div className="flex items-center gap-2 bg-black border border-white/10 rounded-lg p-2">
                <input
                  type="color"
                  value={testFg}
                  onChange={(e) => setTestFg(e.target.value)}
                  className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent"
                />
                <input
                  type="text"
                  value={testFg}
                  onChange={(e) => setTestFg(e.target.value)}
                  className="bg-transparent text-xs font-mono text-white focus:outline-none w-full"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono text-neutral-400 block mb-1.5 uppercase">
                Background Hex
              </label>
              <div className="flex items-center gap-2 bg-black border border-white/10 rounded-lg p-2">
                <input
                  type="color"
                  value={testBg}
                  onChange={(e) => setTestBg(e.target.value)}
                  className="w-6 h-6 rounded cursor-pointer border-0 bg-transparent"
                />
                <input
                  type="text"
                  value={testBg}
                  onChange={(e) => setTestBg(e.target.value)}
                  className="bg-transparent text-xs font-mono text-white focus:outline-none w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live Simulation Card */}
        <div className="lg:col-span-7">
          <div
            className="p-8 rounded-xl border border-white/15 shadow-2xl transition-colors duration-300 flex flex-col justify-between min-h-[220px]"
            style={{ backgroundColor: testBg, color: testFg }}
          >
            <div>
              <span className="text-xs font-mono tracking-widest uppercase opacity-80">
                MONARK LIVE PREVIEW
              </span>
              <p className="text-3xl font-black font-display mt-2 tracking-tight">
                WE BUILD BRAAAAAANDS.
              </p>
              <p className="text-sm mt-2 opacity-90 font-light">
                Branding gives people a reason to remember you.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-current/20 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold">{currentRatio}:1</span>
                <span>CONTRAST RATIO</span>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold ${
                    passesAA
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                  }`}
                >
                  {passesAA ? <ShieldCheck className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                  WCAG AA {passesAA ? "PASS" : "FAIL"}
                </span>

                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold ${
                    passesAAA
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-neutral-800 text-neutral-400 border border-white/10"
                  }`}
                >
                  WCAG AAA {passesAAA ? "PASS" : "FAIL"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
