"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, X } from "lucide-react";

interface ServicesSectionProps {
  onBookCall?: () => void;
}

interface ServiceCard {
  number: string;
  title: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  desc: string;
  tags: string[];
  deliverables: string[];
  timeline: string;
}

const servicesData: ServiceCard[] = [
  {
    number: "01",
    title: "CREATIVE & CONTENT",
    icon: "/assets/icon-creative.svg",
    iconWidth: 115,
    iconHeight: 106,
    desc: "Transform abstract beliefs into striking reality. Art directed to endure.",
    tags: [
      "Creative Direction",
      "Campaigns",
      "Photography",
      "Film & Motion",
      "Copywriting",
      "Graphic Design",
      "Content Creation",
    ],
    deliverables: [
      "Creative Direction",
      "Campaign Architecture",
      "Cinematic Film",
      "Provocative Copy",
      "Digital Art Production",
      "Brand World Design",
    ],
    timeline: "Ongoing / Sprint",
  },
  {
    number: "02",
    title: "BRAND IDENTITY",
    icon: "/assets/icon-identity.svg",
    iconWidth: 94,
    iconHeight: 111,
    desc: "Give your sovereign entity an uncompromising, recognisable face.",
    tags: ["Visual Identity", "Logo & Symbol", "Typography", "Colour Systems"],
    deliverables: [
      "Visual Identity Systems",
      "Logo & Symbol Sculpting",
      "Custom Typography Hierarchy",
      "Color Palettes",
      "Packaging Architecture",
      "Brand Guidelines Book",
    ],
    timeline: "4 — 6 Weeks",
  },
  {
    number: "03",
    title: "DIGITAL & EXPERIENCE",
    icon: "/assets/icon-digital.svg",
    iconWidth: 95,
    iconHeight: 84,
    desc: "Command attention across every physical and virtual domain.",
    tags: ["Websites", "UI / UX", "Digital Exp.", "Social Media"],
    deliverables: [
      "Bespoke Next.js Platforms",
      "Interactive UI / UX Design",
      "Digital Motion Systems",
      "Social Media Ecosystems",
      "Brand Guidelines Portals",
      "Customer Touchpoints",
    ],
    timeline: "6 — 10 Weeks",
  },
  {
    number: "04",
    title: "BRAND STRATEGY",
    icon: "/assets/icon-strategy.svg",
    iconWidth: 120,
    iconHeight: 68,
    desc: "Know what your brand stands for before fighting for it.",
    tags: ["Positioning", "Brand Naming", "Architecture", "Research"],
    deliverables: [
      "Positioning Frameworks",
      "Brand Naming & Taxonomy",
      "Competitor Landscape Audit",
      "Audience Psychology Dossier",
      "Brand Architecture",
      "Strategic Core Narrative",
    ],
    timeline: "3 — 5 Weeks",
  },
];

export function ServicesSection({ onBookCall }: ServicesSectionProps) {
  const [activeModal, setActiveModal] = useState<ServiceCard | null>(null);
  const [spotlightPos, setSpotlightPos] = useState<{ [key: string]: { x: number; y: number } }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, title: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlightPos((prev) => ({
      ...prev,
      [title]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const handleBookCallClick = onBookCall || (() => {
    const el = document.getElementById("final-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <section
      id="services"
      className="relative w-full bg-[#050505] pt-20 sm:pt-28 pb-24 sm:pb-36 px-4 sm:px-8 lg:px-12 select-none z-20 flex flex-col items-center"
      data-node-id="559:5926"
      data-name="our-services-section"
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-14 sm:gap-20">
        
        {/* Section Header (Figma Node 559:5927) */}
        <div className="flex flex-col items-center text-center gap-4 max-w-[850px] mx-auto">
          <span className="font-arimo font-bold text-[#F5C518] text-[11px] uppercase tracking-[1.5px]">
            OUR SERVICES
          </span>

          <h2 className="leading-none text-center">
            <span className="font-garamond italic text-white text-[48px] sm:text-[64px] lg:text-[72px] capitalize block">
              Pick Your
            </span>
            <span className="font-unbounded font-black text-[#F5C518] text-[48px] sm:text-[76px] lg:text-[96px] uppercase tracking-tight block mt-1">
              BATTLE.
            </span>
          </h2>

          <p className="font-dm-sans italic text-[#B8B8B8] text-[15px] sm:text-[18px] lg:text-[20px] leading-[1.6] max-w-[680px] pt-1">
            We build sovereign empires, not just visual placeholders. Choose the
            blueprint required to secure your market's absolute dominance.
          </p>
        </div>

        {/* 4 Cards Grid Sized 431px x 654px per Figma Node 560:6190 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-[960px] mx-auto pt-4 justify-items-center">
          {servicesData.map((card) => {
            const pos = spotlightPos[card.title] || { x: 0, y: 0 };
            return (
              <div
                key={card.title}
                onMouseMove={(e) => handleMouseMove(e, card.title)}
                className="w-full max-w-[431px] min-h-[654px] rounded-[24px] p-8 lg:p-[48px] bg-gradient-to-b from-[#1C1A0A] via-1/2 via-[#141410] to-[#0E0E11] border border-[rgba(245,197,24,0.2)] shadow-[0px_40px_80px_0px_rgba(0,0,0,0.8)] flex flex-col justify-between transition-all duration-300 hover:border-[#F5C518] hover:shadow-[0px_40px_80px_0px_rgba(245,197,24,0.18)] group relative overflow-hidden"
              >
                {/* Radial Spotlight Glow Follower */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px]"
                  style={{
                    background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(245, 197, 24, 0.15), transparent 80%)`,
                  }}
                />
              <div className="flex flex-col gap-6">
                
                {/* Header with full-scale artwork icon and number */}
                <div className="flex items-start justify-between w-full min-h-[115px]">
                  <div
                    className="relative flex items-center justify-start shrink-0"
                    style={{ width: card.iconWidth, height: card.iconHeight }}
                  >
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={card.iconWidth}
                      height={card.iconHeight}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-unbounded font-bold text-[#F5C518] text-[14px]">
                    {card.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-unbounded font-black text-white text-[26px] lg:text-[30px] leading-[1.1] pt-1">
                  {card.title}
                </h3>

                {/* Service Description */}
                <p className="font-dm-sans font-normal text-white/70 text-[14.5px] lg:text-[15px] leading-[1.65]">
                  {card.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-[6px] bg-[rgba(245,197,24,0.1)] border border-[rgba(245,197,24,0.2)] text-[#F5C518] font-dm-sans text-[12px] whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Full-width Explore CTA */}
              <button
                onClick={() => setActiveModal(card)}
                className="w-full h-[48px] rounded-full bg-[#F5C518] text-black font-dm-sans font-bold text-[11px] uppercase tracking-wider flex items-center justify-between px-7 hover:bg-[#FFD004] transition-all cursor-pointer mt-8 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>EXPLORE</span>
                <ArrowRight size={16} />
              </button>
            </div>
            );
          })}
        </div>

        {/* Bottom Conversion Bar (Figma Node 559:5930) */}
        <div className="w-full border-t border-[rgba(245,197,24,0.15)] pt-10 sm:pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1.5 text-center sm:text-left">
            <h4 className="font-unbounded font-black text-[#F5C518] text-[24px] sm:text-[32px] lg:text-[36px] leading-[1.1]">
              READY TO DOMINATE?
            </h4>
            <p className="font-dm-sans font-normal text-white/50 text-[14px] sm:text-[16px] lg:text-[18px]">
              Every empire begins with a single, deliberate move.
            </p>
          </div>

          <button
            onClick={handleBookCallClick}
            className="w-full sm:w-auto h-[52px] px-10 rounded-full bg-[#F5C518] text-[#1D1D1D] font-arimo font-bold text-[12px] sm:text-[13px] tracking-[1.3px] uppercase hover:bg-[#FFD004] transition-all cursor-pointer whitespace-nowrap shadow-lg hover:scale-105 active:scale-95"
          >
            Book a Call
          </button>
        </div>
      </div>

      {/* Interactive Service Detail Drawer Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0F0F14] border border-[#F5C518]/30 p-8 md:p-12 shadow-2xl space-y-8 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5C518]">
                <span>{activeModal.number} // SPECIFICATION</span>
                <span>•</span>
                <span>TIMELINE: {activeModal.timeline}</span>
              </div>
              <h3 className="text-3xl font-black font-unbounded text-white">
                {activeModal.title}
              </h3>
              <p className="text-base text-[#F5C518] font-dm-sans">
                {activeModal.desc}
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-dm-sans text-xs text-neutral-400 uppercase tracking-wider">
                Full Deliverable Suite:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeModal.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-black/50 border border-white/10 flex items-center gap-2 text-xs font-dm-sans text-white"
                  >
                    <Check className="w-3.5 h-3.5 text-[#F5C518] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={() => setActiveModal(null)}
                className="px-6 py-3 rounded-lg border border-white/15 text-xs font-dm-sans text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Close Blueprint
              </button>

              <button
                onClick={() => {
                  setActiveModal(null);
                  handleBookCallClick();
                }}
                className="px-6 py-3 rounded-lg bg-[#F5C518] hover:bg-[#FFD004] text-black font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105"
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
