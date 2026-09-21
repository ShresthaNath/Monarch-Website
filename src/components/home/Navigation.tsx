"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MonarkLogo } from "@/components/brand/MonarkLogo";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavigationProps {
  onOpenContact: () => void;
}

export function Navigation({ onOpenContact }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
          : "bg-transparent py-6 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo Lockup */}
        <Link href="/" className="group flex items-center gap-3 select-none">
          <div className="relative rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <MonarkLogo variant="badge" size={38} priority />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black tracking-wider text-white text-base leading-none uppercase">
              MONARK
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#FFD004] uppercase mt-0.5">
              CONSULTANCY
            </span>
          </div>
        </Link>

        {/* Desktop Nav Anchors */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-neutral-400">
          <a href="#branding-hook" className="hover:text-white transition-colors">
            01 / HOOK
          </a>
          <a href="#intro" className="hover:text-white transition-colors">
            02 / ETHOS
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            03 / SERVICES
          </a>
          <a href="#process" className="hover:text-white transition-colors">
            04 / PROCESS
          </a>
          <Link
            href="/brand-guidelines"
            className="flex items-center gap-1 text-[#FFD004] hover:text-white transition-colors"
          >
            BRAND SYSTEM <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="relative px-5 py-2.5 bg-[#FFD004] hover:bg-white text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <span>Start A Conversation</span>
            <span className="font-mono">→</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#FFD004] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070709] border-b border-white/10 px-6 py-8 space-y-6">
          <nav className="flex flex-col space-y-4 font-mono text-sm text-neutral-300">
            <a
              href="#branding-hook"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#FFD004] transition-colors"
            >
              01 / HOOK
            </a>
            <a
              href="#intro"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#FFD004] transition-colors"
            >
              02 / ETHOS
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#FFD004] transition-colors"
            >
              03 / SERVICES
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#FFD004] transition-colors"
            >
              04 / PROCESS
            </a>
            <Link
              href="/brand-guidelines"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#FFD004] flex items-center gap-1"
            >
              BRAND SYSTEM (v1.0) <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-3.5 bg-[#FFD004] text-black font-semibold text-xs uppercase tracking-wider text-center"
          >
            Start A Conversation →
          </button>
        </div>
      )}
    </header>
  );
}
