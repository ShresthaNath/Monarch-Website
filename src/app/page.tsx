"use client";

import React, { useState } from "react";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { MagneticCursor } from "@/components/ui/MagneticCursor";
import { Navigation } from "@/components/home/Navigation";
import { HeroHybrid } from "@/components/home/HeroHybrid";
import { BrandingHook } from "@/components/home/BrandingHook";
import { MonarkIntro } from "@/components/home/MonarkIntro";
import { ServicesMatrix } from "@/components/home/ServicesMatrix";
import { ProcessWorkflow } from "@/components/home/ProcessWorkflow";
import { MetricsTicker } from "@/components/home/MetricsTicker";
import { DynamicCTA } from "@/components/home/DynamicCTA";
import { ContactModal } from "@/components/ui/ContactModal";

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("02 — BRAND IDENTITY");

  const handleOpenContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setContactOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050505] text-[#FAFAFA] selection:bg-[#FFD004] selection:text-black">
        {/* Custom Physics Magnetic Cursor */}
        <MagneticCursor />

        {/* Sticky Header Navigation */}
        <Navigation onOpenContact={() => handleOpenContact()} />

        {/* Phase 1 Approved Hero (Hybrid A + C) */}
        <HeroHybrid onOpenContact={() => handleOpenContact()} />

        {/* 02 — The Branding Hook */}
        <BrandingHook />

        {/* 03 — Monark Intro */}
        <MonarkIntro />

        {/* 04 — Services Matrix */}
        <ServicesMatrix onOpenContactWithService={handleOpenContact} />

        {/* 05 — How We Work (Process) */}
        <ProcessWorkflow />

        {/* Social Proof & Metrics Ticker */}
        <MetricsTicker />

        {/* 06 — Final CTA & Footer */}
        <DynamicCTA onOpenContact={() => handleOpenContact()} />

        {/* Interactive Inquiry Drawer Modal */}
        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
          defaultService={selectedService}
        />
      </div>
    </SmoothScroll>
  );
}
