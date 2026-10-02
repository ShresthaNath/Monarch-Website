"use client";

import React, { useState } from "react";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { LogoLoader } from "@/components/home/LogoLoader";
import { Navigation } from "@/components/home/Navigation";
import { UnifiedHookSection } from "@/components/home/UnifiedHookSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/home/Footer";

export default function HomePage() {
  // Only the Logo Loader plays automatically on initial page visit.
  // The rest of the site is 100% manual scrollytelling driven by user scroll.
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#FAFAFA] selection:bg-[#FFD004] selection:text-black overflow-x-hidden w-full max-w-[100vw]">
      {/* 1. Logo Loader: Autoplays only on initial entry */}
      {showLoader && (
        <LogoLoader
          onComplete={() => setShowLoader(false)}
          onSkip={() => setShowLoader(false)}
        />
      )}

      {/* 2. Global Sticky Navigation (Visible throughout scrollytelling) */}
      <Navigation />

      {/* 3. Scrollytelling Timeline (Driven by manual scroll) */}
      <SmoothScroll>
        <main className="relative w-full flex flex-col items-center bg-[#050505] overflow-x-hidden">
          {/* Beat 1: Hook Sequence (Hook 1: Marketing Gets You Seen -> Hook 2: Branding gives people a reason to remember) */}
          <UnifiedHookSection />

          {/* Beat 2: Hero Section (Colossal MONARK, Greek statue, flowers, 120px Marquee, We build BRAAANDS - slides in on scroll per Figma 571:449) */}
          <HeroSection />

          {/* Beat 3: Services Section (Pick Your BATTLE - 4 Cards + Artwork Icons + Bottom CTA) */}
          <ServicesSection />

          {/* Beat 4: "How We Work" Process Section (Draggable Physics) */}
          <ProcessSection />

          {/* Beat 5: Final CTA (Desktop Canvas / Mobile Frosted Message Shield) */}
          <FinalCTA />

          {/* Beat 6: Footer */}
          <Footer />
        </main>
      </SmoothScroll>
    </div>
  );
}
