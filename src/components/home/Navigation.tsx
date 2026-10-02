"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface NavigationProps {
  onBookCall?: () => void;
  className?: string;
}

export function Navigation({ onBookCall, className = "" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookCall = onBookCall || (() => scrollTo("final-cta"));

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-zinc-950/85 border-b border-zinc-800/40 select-none transition-all ${className}`}
      data-name="Fixed global navigation"
    >
      <div className="w-full max-w-[1352px] h-[72px] lg:h-[80px] mx-auto flex items-center justify-between px-4 sm:px-8">
        
        {/* Brand: Monogram + Brand Name (Figma 571:947 Desktop & 571:1153 Mobile) */}
        <div
          onClick={() => {
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 cursor-pointer"
        >
          {/* Authentic Crown Monogram Vector (w: 24.1px, h: 33.8px) */}
          <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full flex items-center justify-center shrink-0">
            <div className="w-[24.1px] h-[33.8px] relative shrink-0">
              <Image
                src="/assets/monogram.svg"
                alt="Monark Monogram"
                width={24}
                height={34}
                priority
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col text-[#F7F7F2] leading-none whitespace-nowrap">
            <span className="font-unbounded font-bold text-[16px] sm:text-[18px] tracking-[-0.54px]">
              MONARK
            </span>
            <span className="font-arimo font-normal text-[6.4px] sm:text-[7.4px] tracking-[1.19px] opacity-60 mt-1 uppercase text-[#F7F7F2]">
              BRAND CONSULTANCY
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links & Action (Figma 571:960) */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          <div className="flex items-center gap-7 text-[#F7F7F2]">
            <button
              onClick={() => scrollTo("services")}
              className="font-arimo font-bold text-[12px] tracking-[0.96px] uppercase hover:text-[#F5C518] transition-colors cursor-pointer"
            >
              OUR SERVICES
            </button>
            <button
              onClick={() => scrollTo("process")}
              className="font-arimo font-bold text-[12px] tracking-[0.96px] uppercase hover:text-[#F5C518] transition-colors cursor-pointer"
            >
              HOW WE WORK
            </button>
            <button
              onClick={() => scrollTo("final-cta")}
              className="font-arimo font-bold text-[12px] tracking-[0.96px] uppercase hover:text-[#F5C518] transition-colors cursor-pointer"
            >
              ABOUT US
            </button>
          </div>

          <button
            onClick={handleBookCall}
            className="h-[42px] px-[20px] rounded-full bg-[#F5C518] border border-[#F5C518] text-[#1D1D1D] font-arimo font-bold text-[11px] tracking-[1.1px] uppercase hover:bg-[#FFD004] transition-all cursor-pointer whitespace-nowrap shadow-sm hover:scale-105"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Navigation Tools (Figma Node 571:1165 / 573:106: Book a Call + 2-Line Menu) */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile "Book a Call" Pill Button */}
          <button
            onClick={handleBookCall}
            className="bg-[#F5C518] h-[38px] px-3.5 rounded-full flex items-center justify-center text-[#1D1D1D] font-arimo font-bold text-[9px] tracking-[0.81px] uppercase whitespace-nowrap shadow-sm"
          >
            Book a Call
          </button>

          {/* Minimalist 2-Line Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-[42px] h-[42px] flex flex-col items-center justify-center gap-[5px] text-[#F7F7F2] cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? (
              <X size={20} className="text-[#F5C518]" />
            ) : (
              <>
                <span className="bg-[#F7F7F2] h-[1.5px] w-[18px] rounded-full" />
                <span className="bg-[#F7F7F2] h-[1.5px] w-[18px] rounded-full" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#050505]/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => scrollTo("services")}
            className="font-unbounded font-bold text-[14px] text-left text-white hover:text-[#F5C518] transition-colors py-2 border-b border-zinc-900"
          >
            OUR SERVICES
          </button>
          <button
            onClick={() => scrollTo("process")}
            className="font-unbounded font-bold text-[14px] text-left text-white hover:text-[#F5C518] transition-colors py-2 border-b border-zinc-900"
          >
            HOW WE WORK
          </button>
          <button
            onClick={() => scrollTo("final-cta")}
            className="font-unbounded font-bold text-[14px] text-left text-white hover:text-[#F5C518] transition-colors py-2"
          >
            ABOUT US
          </button>
        </div>
      )}
    </header>
  );
}
