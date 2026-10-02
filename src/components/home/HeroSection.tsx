"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface HeroSectionProps {
  onSayHi?: () => void;
}

export function HeroSection({ onSayHi }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statueRef = useRef<HTMLDivElement>(null);
  const flowerARef = useRef<HTMLDivElement>(null);
  const flowerBRef = useRef<HTMLDivElement>(null);
  const flowerCRef = useRef<HTMLDivElement>(null);
  const desktopCtaRef = useRef<HTMLDivElement>(null);
  const mobileCtaRef = useRef<HTMLDivElement>(null);
  const declarationRef = useRef<HTMLDivElement>(null);

  // Declaration word and element refs for scrollytelling animation
  const weTextRef = useRef<HTMLSpanElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const buildTextRef = useRef<HTMLSpanElement>(null);
  const braaandsTextRef = useRef<HTMLParagraphElement>(null);

  // Marquee track
  const marqueeTrackRef = useRef<HTMLDivElement>(null);

  const marqueeItems = [
    "BRAND STRATEGY",
    "BRAND IDENTITY",
    "CREATIVE & CONTENT",
    "DIGITAL & EXPERIENCE",
    "BRAND STRATEGY",
    "BRAND IDENTITY",
    "CREATIVE & CONTENT",
    "DIGITAL & EXPERIENCE",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Continuous smooth horizontal marquee translation
      if (marqueeTrackRef.current) {
        gsap.to(marqueeTrackRef.current, {
          xPercent: -50,
          duration: 24,
          ease: "none",
          repeat: -1,
        });
      }

      // 2. Powerful element-by-element slide-in entrance driven by ScrollTrigger scrub
      // Delayed start so user sees section comfortably in viewport
      // Staggered sequential slide-in: Headline -> Greek Statue -> Flower 1 -> Flower 2 -> Flower 3 -> CTA
      // Tightened delay (reduced by ~0.5s) for a fluid, dynamic cascade on scroll
      // Smooth bidirectional reverse on scroll up
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 55%",
          end: "top 5%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl
        // Headline settled / subtle reveal
        .fromTo(
          headlineRef.current,
          { opacity: 0.5, scale: 0.97 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
          0
        )
        // Step 1: Classical Greek Statue rises up to touch headline
        .fromTo(
          statueRef.current,
          { y: 180 },
          { y: 0, duration: 0.5, ease: "power3.out" },
          0.05
        )
        // Step 2: All Flowers appear TOGETHER 0.5s after Statue (0.55s)
        // User request: "Statue -> 0.5 sec Flower. Flowers appear together"
        .fromTo(
          flowerARef.current,
          { x: -110, y: 50, opacity: 0.3 },
          { x: 0, y: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
          0.55
        )
        .fromTo(
          flowerBRef.current,
          { x: 110, y: 50, opacity: 0.3 },
          { x: 0, y: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
          0.55
        )
        .fromTo(
          flowerCRef.current,
          { y: 70, opacity: 0.3 },
          { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
          0.55
        )
        // Step 3: CTA Conversion Panel slides in right after flowers, driving attention to CTA
        .fromTo(
          desktopCtaRef.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          0.85
        )
        .fromTo(
          mobileCtaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          0.85
        );

      // 3. Kinetic Scrollytelling Animation for "We build BRAAANDS"
      // User request: "animated we build braands as well that would be great"
      if (declarationRef.current) {
        const declTl = gsap.timeline({
          scrollTrigger: {
            trigger: declarationRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        declTl
          .fromTo(
            weTextRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
            0
          )
          .fromTo(
            pillRef.current,
            { scale: 0.6, opacity: 0, rotation: -8 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.45, ease: "back.out(1.4)" },
            0.05
          )
          .fromTo(
            buildTextRef.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
            0.1
          )
          .fromTo(
            braaandsTextRef.current,
            { y: 70, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: "power3.out" },
            0.15
          );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSayHiClick = onSayHi || (() => {
    const el = document.getElementById("final-cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full bg-black flex flex-col items-center pt-20 sm:pt-24 lg:pt-28 pb-16 overflow-hidden select-none z-20"
      data-node-id="577:1629"
      data-name="Hero 01 — Monumental typographic collage"
    >
      {/* Main Upper Collage Canvas Container
          Calibrated height so Greek Statue head touches MONARK and band connects flush with zero empty space */}
      <div className="relative w-full max-w-[1440px] h-[500px] sm:h-[620px] md:h-[720px] lg:h-[780px] xl:h-[820px] flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        
        {/* Colossal "MONARK" Headline (Figma Node 577:1658: text-[246.7px] font-unbounded font-black leading-[0.69]) */}
        <div
          ref={headlineRef}
          className="relative z-10 w-full flex justify-center pt-1 sm:pt-2 lg:pt-3"
        >
          <h1 className="font-unbounded font-black text-[#F5C518] text-[64px] sm:text-[110px] md:text-[160px] lg:text-[210px] xl:text-[246.7px] tracking-[-3px] sm:tracking-[-6px] lg:tracking-[-10px] xl:tracking-[-12.3px] leading-[0.85] lg:leading-[0.72] select-none text-center">
            MONARK
          </h1>
        </div>

        {/* Desktop Conversion Panel (Left, under MONARK, per Figma 577:1659) */}
        <div
          ref={desktopCtaRef}
          className="hidden lg:flex flex-col gap-4 items-start absolute left-[32px] top-[240px] xl:top-[260px] max-w-[392px] z-25 px-2"
        >
          <p className="font-dm-sans font-normal text-[17px] xl:text-[20px] text-white uppercase leading-[1.3] tracking-wide">
            We define what a business stands for and brings it to life.
          </p>
          <button
            onClick={handleSayHiClick}
            className="h-[46px] xl:h-[49.4px] px-[24px] rounded-full bg-[#F5C518] border border-[#F5C518] text-[#1D1D1D] font-arimo font-bold text-[10.9px] tracking-[1.09px] uppercase hover:bg-[#FFD004] transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          >
            SAY HI !
          </button>
        </div>

        {/* Left Flower A (Figma 577:1669 / 583:80: 399.3x456.3px at bottom 106px) */}
        <div
          ref={flowerARef}
          className="absolute z-15 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[370px] xl:w-[399px] h-[206px] sm:h-[298px] md:h-[366px] lg:h-[423px] xl:h-[456px] left-1/2 -translate-x-1/2 -ml-[160px] sm:-ml-[200px] md:-ml-[230px] lg:-ml-[259px] bottom-[40px] sm:bottom-[65px] md:bottom-[85px] lg:bottom-[106px] pointer-events-none"
        >
          <Image
            src="/assets/hero-flower-a.png"
            alt="Flower A"
            fill
            sizes="(max-width: 1024px) 320px, 399px"
            className="object-contain"
            priority
          />
        </div>

        {/* Right Flower B (Figma 577:1668 / 583:79: 376.1x486.9px at bottom 96px) */}
        <div
          ref={flowerBRef}
          className="absolute z-15 w-[170px] sm:w-[245px] md:w-[300px] lg:w-[350px] xl:w-[376px] h-[220px] sm:h-[318px] md:h-[389px] lg:h-[453px] xl:h-[487px] left-1/2 -translate-x-1/2 ml-[150px] sm:ml-[190px] md:ml-[220px] lg:ml-[249px] bottom-[35px] sm:bottom-[60px] md:bottom-[78px] lg:bottom-[96px] pointer-events-none"
        >
          <Image
            src="/assets/hero-flower-b.png"
            alt="Flower B"
            fill
            sizes="(max-width: 1024px) 300px, 376px"
            className="object-contain"
            priority
          />
        </div>

        {/* Main Classical Statue with Sunglasses & Laptop (Figma 582:4 / 583:81: 854x696px)
            Notice: z-20 sits in FRONT of MONARK (z-10), head touches and overlaps 'N' and 'A'
            Straight cropped bottom rests flush at bottom-0 on top of the yellow marquee band */}
        <div
          ref={statueRef}
          className="absolute z-20 w-[380px] sm:w-[560px] md:w-[680px] lg:w-[800px] xl:w-[854px] h-[310px] sm:h-[456px] md:h-[554px] lg:h-[652px] xl:h-[700px] left-1/2 -translate-x-1/2 bottom-0 pointer-events-none"
        >
          <Image
            src="/assets/hero-statue.png"
            alt="Classical Statue with Laptop"
            fill
            sizes="(max-width: 1024px) 680px, 854px"
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* Bottom Flower C (Figma 577:1671 / 583:82: 397.8x222.6px)
            Bottom flush against the yellow band top border at bottom-0 */}
        <div
          ref={flowerCRef}
          className="absolute z-25 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[370px] xl:w-[398px] h-[101px] sm:h-[146px] md:h-[180px] lg:h-[207px] xl:h-[223px] left-1/2 -translate-x-1/2 -ml-[15px] sm:-ml-[20px] lg:-ml-[28px] bottom-0 pointer-events-none"
        >
          <Image
            src="/assets/hero-flower-c.png"
            alt="Flower C"
            fill
            sizes="(max-width: 1024px) 320px, 398px"
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* Note: Rectangle 3 (gradient rectangle) is OFF per user explicit request */}
      </div>

      {/* Single Continuous Horizontal Yellow Marquee Band (Figma Node 577:1673: h=120px)
          Brought up to the user annotation line (-mt-[48px] sm:-mt-[58px] lg:-mt-[70px] xl:-mt-[74px]) so we don't see the end of the image */}
      <div
        className="w-screen relative left-1/2 -translate-x-1/2 h-[60px] sm:h-[85px] lg:h-[120px] bg-[#FFD004] border-t border-b border-[#F5C518]/60 shadow-[-50px_19px_13.4px_0px_rgba(0,0,0,0.25)] flex items-center overflow-hidden select-none z-30 -mt-[48px] sm:-mt-[58px] lg:-mt-[70px] xl:-mt-[74px] mb-8 sm:mb-12 lg:mb-14"
        data-name="services-marquee-band-horizontal"
      >
        <div
          ref={marqueeTrackRef}
          className="flex items-center gap-8 sm:gap-10 shrink-0 whitespace-nowrap will-change-transform px-4"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-10 shrink-0">
              <span className="font-unbounded font-black text-black text-[12px] sm:text-[15px] lg:text-[18px] tracking-wider uppercase">
                {item}
              </span>
              <span className="text-[#09090B] text-[12px] sm:text-[14px] lg:text-[16px]">
                ◆
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Conversion Panel (Strictly below the band on mobile) */}
      <div
        ref={mobileCtaRef}
        className="lg:hidden flex flex-col items-center gap-3 relative z-30 px-4 text-center max-w-[340px] mx-auto my-6"
      >
        <p className="font-dm-sans font-normal text-[13px] sm:text-[15px] text-white uppercase leading-[1.3] tracking-wide">
          WE DEFINE WHAT A BUSINESS STANDS FOR AND BRINGS IT TO LIFE.
        </p>
        <button
          onClick={handleSayHiClick}
          className="h-[46px] px-[32px] rounded-full bg-[#F5C518] text-black font-arimo font-bold text-[10px] tracking-[1px] uppercase hover:bg-[#FFD004] transition-all cursor-pointer shadow-md active:scale-95"
        >
          Say Hi
        </button>
      </div>

      {/* Brand Declaration: "We [rose pill] build BRAAANDS" (Figma Node 577:1664: y=1199px) */}
      <div
        ref={declarationRef}
        className="relative z-30 flex flex-col items-center justify-center text-center mt-12 sm:mt-16 lg:mt-20 pb-16 sm:pb-24 px-4"
        data-name="We build BRAAANDS with flower pill"
      >
        {/* Top line: "We" + Yellow Pill with embedded crimson rose + "build" */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 leading-none">
          <span
            ref={weTextRef}
            className="font-garamond italic text-white text-[42px] sm:text-[68px] lg:text-[84px] will-change-transform"
          >
            We
          </span>

          {/* Yellow pill with lush crimson rose illustration inside (Nodes 577:1666 & 577:1667) */}
          <div
            ref={pillRef}
            className="relative w-[150px] sm:w-[200px] lg:w-[223px] h-[54px] sm:h-[72px] lg:h-[81px] rounded-[49.5px] bg-[#F5C518] flex items-center justify-center overflow-visible shadow-[0px_10px_25px_rgba(245,197,24,0.35)] shrink-0 will-change-transform"
          >
            <div className="absolute w-[180px] sm:w-[240px] lg:w-[276px] h-[65px] sm:h-[80px] lg:h-[90px] flex items-center justify-center pointer-events-none -scale-y-100">
              <Image
                src="/assets/pill-flower.png"
                alt="Rose inside pill"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <span
            ref={buildTextRef}
            className="font-garamond italic text-white text-[42px] sm:text-[68px] lg:text-[84px] will-change-transform"
          >
            build
          </span>
        </div>

        {/* Bottom word: "BRAAANDS" */}
        <p
          ref={braaandsTextRef}
          className="font-unbounded font-black text-[#F5C518] text-[44px] sm:text-[72px] lg:text-[84px] tracking-tight uppercase leading-[1.05] mt-2 sm:mt-3 will-change-transform"
        >
          BRAAANDS
        </p>
      </div>
    </section>
  );
}
