"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const colsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Fade & lift footer columns with a slight stagger
      tl.fromTo(
        colsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out" }
      )
      // 2. Reveal bottom utility bar last
      .fromTo(
        bottomBarRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-[#0A0A0A] pt-16 sm:pt-20 pb-12 px-6 sm:px-12 lg:px-[120px] select-none z-20"
      data-name="footer-section"
    >
      <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-between gap-16">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start justify-between">
          {/* Column 1: Brand */}
          <div
            ref={(el) => { colsRef.current[0] = el; }}
            className="flex flex-col gap-5 items-start max-w-[320px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0">
                <Image
                  src="/assets/footer-monogram.svg"
                  alt="Monark Monogram"
                  width={24}
                  height={34}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-unbounded font-black text-white text-[20px] tracking-[-0.6px]">
                  MONARK
                </span>
                <span className="font-dm-sans font-normal text-[10px] tracking-[1.6px] opacity-60 text-[#F7F7F2] mt-1 uppercase">
                  BRAND CONSULTANCY
                </span>
              </div>
            </div>
            <p className="font-dm-sans font-normal text-[#8E8E93] text-[16px] sm:text-[18px] leading-[1.4]">
              Building sovereign brands.
            </p>
          </div>

          {/* Column 2: Directory */}
          <div
            ref={(el) => { colsRef.current[1] = el; }}
            className="flex flex-col font-unbounded font-bold gap-4 items-start"
          >
            <span className="text-[#F5C518] text-[11px] uppercase tracking-wider">
              DIRECTORY
            </span>
            <a href="#services" className="text-white text-[13px] hover:text-[#F5C518] transition-colors">
              Services
            </a>
            <a href="#process" className="text-white text-[13px] hover:text-[#F5C518] transition-colors">
              Process
            </a>
            <a href="#final-cta" className="text-white text-[13px] hover:text-[#F5C518] transition-colors">
              Contact
            </a>
          </div>

          {/* Column 3: HQ Office */}
          <div
            ref={(el) => { colsRef.current[2] = el; }}
            className="flex flex-col gap-4 items-start"
          >
            <span className="font-unbounded font-bold text-[#F5C518] text-[11px] uppercase tracking-wider">
              HQ OFFICE
            </span>
            <div className="font-dm-sans font-normal text-[#8E8E93] text-[15px] leading-[1.5]">
              <p>Imperial Registry Suite 401</p>
              <p>40.7128° N, 74.0060° W</p>
            </div>
          </div>

          {/* Column 4: Secure Communications */}
          <div
            ref={(el) => { colsRef.current[3] = el; }}
            className="flex flex-col font-unbounded font-bold gap-5 items-start lg:items-end"
          >
            <div className="flex flex-col gap-2 items-start lg:items-end text-[#F5C518]">
              <span className="text-[11px] uppercase tracking-wider">
                SECURE COMMUNICATIONS
              </span>
              <a
                href="mailto:hello@monark.agency"
                className="text-[16px] hover:underline"
              >
                hello@monark.agency
              </a>
            </div>
            <div className="flex gap-4 items-center text-[13px] text-white">
              <a href="#" className="hover:text-[#F5C518] transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-[#F5C518] transition-colors">
                Discord
              </a>
              <a href="#" className="hover:text-[#F5C518] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div
          ref={bottomBarRef}
          className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-dm-sans font-normal text-[#444446] text-[10px] uppercase">
            © 2024 MONARK AGENCY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-[#F5C518] font-unbounded font-bold text-[10px] uppercase tracking-wider">
            <span>LAT 26.1445° N, SPEC: 01-SOVEREIGN</span>
            <div className="w-[4px] h-[4px] rounded-[2px] bg-[#F5C518]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
