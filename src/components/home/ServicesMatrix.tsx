"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Compass, Eye, Sparkles, Monitor, X } from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  icon: any;
  deliverables: string[];
  description: string;
  timeline: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "strategy",
    number: "01",
    title: "BRAND STRATEGY",
    tagline: "Know what your brand stands for.",
    icon: Compass,
    deliverables: [
      "Positioning",
      "Research & Insights",
      "Brand Architecture",
      "Purpose & Vision",
      "Brand Naming",
      "Brand Messaging",
    ],
    description:
      "We strip away the noise to discover the undeniable core of your enterprise. Through rigorous competitor analysis, customer psychology audits, and positioning frameworks, we identify the exact battleground where you dominate.",
    timeline: "3 — 5 Weeks",
  },
  {
    id: "identity",
    number: "02",
    title: "BRAND IDENTITY",
    tagline: "Give your brand a recognisable face.",
    icon: Eye,
    deliverables: [
      "Visual Identity",
      "Logo & Symbol",
      "Typography",
      "Colour Systems",
      "Packaging",
      "Brand Guidelines",
    ],
    description:
      "A sovereign visual signature forged to stand the test of decades. We sculpt custom emblems, mathematical typography hierarchies, bespoke color palettes, and comprehensive brand guidelines books that ensure uncompromised coherence.",
    timeline: "4 — 6 Weeks",
  },
  {
    id: "creative",
    number: "03",
    title: "CREATIVE & CONTENT",
    tagline: "Turn your brand into things people experience.",
    icon: Sparkles,
    deliverables: [
      "Creative Direction",
      "Campaigns",
      "Graphic Design",
      "Copywriting",
      "Photography",
      "Film & Motion",
      "Content Creation",
    ],
    description:
      "Transforming static brand guidelines into living, pulse-accelerating campaigns. We produce cinema-grade launch films, razor-sharp editorial copy, tactile physical print, and high-frequency content frameworks that build fervent fandom.",
    timeline: "Ongoing / Sprint",
  },
  {
    id: "digital",
    number: "04",
    title: "DIGITAL & EXPERIENCE",
    tagline: "Make the brand live everywhere.",
    icon: Monitor,
    deliverables: [
      "Websites",
      "UI / UX",
      "Digital Experiences",
      "Social Media",
      "Brand Environments",
      "Customer Touchpoints",
    ],
    description:
      "Bringing the brand to life across digital viewports with 60fps kinetic craft. We engineer bespoke Next.js and Three.js platforms, intuitive interface systems, interactive brand guidelines portals, and physical architectural touchpoints.",
    timeline: "6 — 10 Weeks",
  },
];

interface ServicesMatrixProps {
  onOpenContactWithService: (serviceName: string) => void;
}

export function ServicesMatrix({ onOpenContactWithService }: ServicesMatrixProps) {
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);
  const [spotlightPos, setSpotlightPos] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlightPos((prev) => ({
      ...prev,
      [id]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  return (
    <section
      id="services"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#08080C] text-[#FAFAFA] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#FFD004]" />
              <span className="text-white font-bold">04 — SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white uppercase mt-2">
              PICK YOUR BATTLE.
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 uppercase tracking-wider max-w-sm">
            FOUR RIGOROUS DISCIPLINES DESIGNED TO CARVE UNQUESTIONED CATEGORY AUTHORITY.
          </p>
        </div>

        {/* 4 Quadrants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const pos = spotlightPos[service.id] || { x: 0, y: 0 };

            return (
              <div
                key={service.id}
                onMouseMove={(e) => handleMouseMove(e, service.id)}
                className="group relative p-8 md:p-12 rounded-3xl bg-[#0D0D12] border border-white/10 hover:border-[#FFD004]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[440px] shadow-xl"
              >
                {/* Radial Spotlight Glow Follower */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(450px circle at ${pos.x}px ${pos.y}px, rgba(255, 208, 4, 0.12), transparent 80%)`,
                  }}
                />

                <div className="relative z-10 space-y-6">
                  {/* Top Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD004]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-[#FFD004] font-bold">
                        {service.number} // SPECIFICATION
                      </span>
                    </div>
                    <span className="font-mono text-xs text-neutral-500">EST. TIME: {service.timeline}</span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3xl font-black font-display text-white group-hover:text-[#FFD004] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-mono text-neutral-300">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Deliverables List (From brief) */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD004]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Action Button */}
                <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModal(service)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white group-hover:text-[#FFD004] transition-colors"
                  >
                    <span>[ EXPLORE → ]</span>
                  </button>

                  <button
                    onClick={() => onOpenContactWithService(service.title)}
                    className="px-4 py-2 rounded bg-white/5 hover:bg-[#FFD004] text-neutral-300 hover:text-black text-xs font-mono uppercase tracking-wider transition-all"
                  >
                    Commission
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Service Detail Drawer Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0F0F14] border border-white/20 p-8 md:p-12 shadow-2xl space-y-8 animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFD004]">
                <span>{activeModal.number} // DEEP DIVE</span>
                <span>•</span>
                <span>TIMELINE: {activeModal.timeline}</span>
              </div>
              <h3 className="text-3xl font-black font-display text-white">
                {activeModal.title}
              </h3>
              <p className="text-base text-[#FFD004] font-mono">
                {activeModal.tagline}
              </p>
            </div>

            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              {activeModal.description}
            </p>

            <div className="space-y-3">
              <p className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                Full Deliverable Suite:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {activeModal.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-black/50 border border-white/10 flex items-center gap-2 text-xs font-mono text-white"
                  >
                    <Check className="w-3.5 h-3.5 text-[#FFD004]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-3 rounded-lg border border-white/15 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                Close Blueprint
              </button>

              <button
                onClick={() => {
                  const title = activeModal.title;
                  setActiveModal(null);
                  onOpenContactWithService(title);
                }}
                className="px-6 py-3 rounded-lg bg-[#FFD004] hover:bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              >
                Initiate This Battle <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
