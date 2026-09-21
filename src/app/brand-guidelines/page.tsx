"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MonarkLogo } from "@/components/brand/MonarkLogo";
import { BrandEthos } from "@/components/brand/BrandEthos";
import { LogoGrid } from "@/components/brand/LogoGrid";
import { ColorTokens } from "@/components/brand/ColorTokens";
import { TypographyScale } from "@/components/brand/TypographyScale";
import { ComponentShowcase } from "@/components/brand/ComponentShowcase";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ArrowLeft, ArrowUpRight, Download, Check, Sparkles } from "lucide-react";

export default function BrandGuidelinesPage() {
  const [copiedAll, setCopiedAll] = useState(false);

  const copyTokensConfig = () => {
    const cssTokens = `/* MONARK BRAND TOKENS v1.0 */
:root {
  --monark-gold: #FFD004;
  --monark-gold-light: #FFF185;
  --monark-gold-dark: #CCA600;
  --monark-obsidian: #050505;
  --monark-carbon: #101014;
  --monark-surface: #181818;
  --monark-border: rgba(255, 255, 255, 0.08);

  --font-display: 'Syne', sans-serif;
  --font-sans: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}`;
    navigator.clipboard.writeText(cssTokens);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#050505] text-[#FAFAFA] relative selection:bg-[#FFD004] selection:text-black">
        <MagneticCursor />

        {/* Technical Top Bar */}
        <header className="sticky top-0 z-40 bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 px-6 md:px-12 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="group flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>RETURN TO MAIN SITE</span>
              </Link>
              <div className="h-4 w-[1px] bg-white/15 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2.5">
                <MonarkLogo variant="crest-gold" size={20} />
                <span className="font-mono text-xs text-white font-bold tracking-widest uppercase">
                  MONARK SPECIFICATION
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={copyTokensConfig}
                className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                {copiedAll ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> TOKENS COPIED
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD004]" /> COPY ALL TOKENS
                  </>
                )}
              </button>

              <a
                href="/monark-badge.png"
                download="monark-emblem-master.png"
                className="px-4 py-2 rounded-lg bg-[#FFD004] hover:bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" /> MASTER ASSET
              </a>
            </div>
          </div>
        </header>

        {/* Hero Title Section */}
        <section className="px-6 md:px-12 pt-16 pb-12 border-b border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(255,208,4,0.06),transparent_60%)]">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-[#FFD004]/10 border border-[#FFD004]/30 text-[#FFD004] text-[11px] font-mono tracking-widest uppercase">
                SYSTEM RELEASE 1.0.4
              </span>
              <span className="text-xs font-mono text-neutral-500">
                ACTIVE DESIGN SYSTEM REPOSITORY
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-white uppercase">
              INTERACTIVE BRAND GUIDELINES
            </h1>

            <p className="text-base md:text-xl text-neutral-400 max-w-3xl font-light leading-relaxed">
              The living design language, mathematical clear-space regulations, WCAG-certified color tokens, fluid typography scales, and tactile micro-components for the Monark empire.
            </p>

            {/* Quick Navigation Anchors */}
            <div className="pt-6 flex flex-wrap gap-2 text-xs font-mono">
              {[
                { label: "00 / ETHOS", href: "#ethos" },
                { label: "01 / COLOR TOKENS", href: "#colors" },
                { label: "02 / LOGO ARCHITECTURE", href: "#logo" },
                { label: "03 / TYPOGRAPHY", href: "#typography" },
                { label: "04 / COMPONENTS", href: "#components" },
              ].map((anchor) => (
                <a
                  key={anchor.label}
                  href={anchor.href}
                  className="px-3.5 py-1.5 rounded-md bg-black/60 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-[#FFD004] transition-colors"
                >
                  {anchor.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Modules */}
        <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-24">
          <section id="ethos">
            <BrandEthos />
          </section>

          <section id="colors">
            <ColorTokens />
          </section>

          <section id="logo">
            <LogoGrid />
          </section>

          <section id="typography">
            <TypographyScale />
          </section>

          <section id="components">
            <ComponentShowcase />
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#070709] px-6 md:px-12 py-12 text-xs font-mono text-neutral-500">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <MonarkLogo variant="crest-gold" size={24} />
              <span>MONARK BRAND CONSULTANCY © 2026. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-white transition-colors">
                PRODUCTION SITE
              </Link>
              <span>WCAG 2.2 AAA CERTIFIED</span>
              <span>VERSION 1.0</span>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
