"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FinalCTAProps {
  onStartConversation?: () => void;
}

export function FinalCTA({ onStartConversation }: FinalCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const desktopCardRef = useRef<HTMLDivElement>(null);
  const mobileCardRef = useRef<HTMLDivElement>(null);

  // Desktop individual flower refs for scroll-linked flight animation
  const flower1Ref = useRef<HTMLDivElement>(null);
  const flower2Ref = useRef<HTMLDivElement>(null);
  const flower3Ref = useRef<HTMLDivElement>(null);
  const flower4Ref = useRef<HTMLDivElement>(null);
  const flower5Ref = useRef<HTMLDivElement>(null);
  const flower6Ref = useRef<HTMLDivElement>(null);
  const flower7Ref = useRef<HTMLDivElement>(null);

  // Desktop text & button refs
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Direct Scroll-Scrubbed Animation for Desktop (Guaranteed to be seen as user scrolls)
      const desktopTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "center center",
          scrub: 1.2,
        },
      });

      // Canvas scale and fade in
      desktopTl.fromTo(
        desktopCardRef.current,
        { scale: 0.9, opacity: 0.3 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
        0
      );

      // 7 Perimeter Flowers fly inward from outside bounds to exact Figma spots
      desktopTl
        .fromTo(
          flower3Ref.current,
          { x: -100, y: -100, scale: 0.7, opacity: 0 },
          { x: 0, y: 0, scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
          0.05
        )
        .fromTo(
          flower4Ref.current,
          { x: 100, y: -100, scale: 0.7, opacity: 0 },
          { x: 0, y: 0, scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
          0.05
        )
        .fromTo(
          flower1Ref.current,
          { x: -90, y: 90, scale: 0.7, opacity: 0 },
          { x: 0, y: 0, scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
          0.1
        )
        .fromTo(
          flower2Ref.current,
          { x: 90, y: 90, scale: 0.7, opacity: 0 },
          { x: 0, y: 0, scale: 1, opacity: 1, duration: 1, ease: "power2.out" },
          0.1
        )
        .fromTo(
          flower5Ref.current,
          { x: -70, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
          0.15
        )
        .fromTo(
          flower6Ref.current,
          { y: -60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
          0.15
        )
        .fromTo(
          flower7Ref.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power2.out" },
          0.15
        );

      // Central typography and CTA button illuminate
      desktopTl
        .fromTo(
          textRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          0.25
        )
        .fromTo(
          btnRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" },
          0.35
        );

      // 2. Mobile View ScrollTrigger scrub
      const mobileTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center center",
          scrub: 1,
        },
      });

      mobileTl.fromTo(
        mobileCardRef.current,
        { scale: 0.92, opacity: 0.3 },
        { scale: 1, opacity: 1, duration: 1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleClick = onStartConversation || (() => {
    window.location.href = "mailto:hello@monarch.agency?subject=Start%20a%20Conversation";
  });

  return (
    <section
      id="final-cta"
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-8 flex flex-col items-center justify-center bg-black select-none z-20 overflow-hidden"
      data-name="Final call to action"
    >
      {/* ========================================================
          DESKTOP VIEW (Figma Node 568:114 / 571:754)
          Solid black rounded canvas (rounded-[41px]) with lush
          perimeter flowers directly framing the typography.
          NO gray frosted shield overlay on desktop.
          ======================================================== */}
      <div
        ref={desktopCardRef}
        className="hidden md:flex relative w-full max-w-[1034px] min-h-[431px] rounded-[41px] bg-[#050505] border border-[rgba(245,197,24,0.18)] shadow-[0px_30px_70px_0px_rgba(0,0,0,0.9)] flex-col items-center justify-center p-[60px] lg:p-[86px] gap-[34px] overflow-hidden will-change-transform"
        data-node-id="568:114"
        data-name="final-cta-section-desktop"
      >
        {/* Flower 5 (Left Middle, Figma 568:120) */}
        <div
          ref={flower5Ref}
          className="absolute h-[164px] w-[167px] left-0 top-[117px] pointer-events-none z-10 will-change-transform"
        >
          <Image
            src="/assets/cta-flower-5.png"
            alt="Flower 5"
            fill
            className="object-contain"
            sizes="167px"
          />
        </div>

        {/* Flower 1 (Bottom Left, Figma 568:121) */}
        <div
          ref={flower1Ref}
          className="absolute h-[250px] w-[312px] left-[34px] top-[215px] pointer-events-none z-10 will-change-transform"
        >
          <Image
            src="/assets/cta-flower-1.png"
            alt="Flower 1"
            fill
            className="object-contain"
            sizes="312px"
          />
        </div>

        {/* Flower 3 (Top Left, Figma 568:122) */}
        <div
          ref={flower3Ref}
          className="absolute h-[287px] w-[363px] -left-[15px] -top-[37px] pointer-events-none z-10 will-change-transform"
        >
          <Image
            src="/assets/cta-flower-3.png"
            alt="Flower 3"
            fill
            className="object-contain"
            sizes="363px"
          />
        </div>

        {/* Flower 6 (Top Center-Left, Figma 568:123) */}
        <div
          ref={flower6Ref}
          className="absolute h-[118px] w-[371px] left-[308px] -top-[1px] pointer-events-none z-10 will-change-transform"
        >
          <Image
            src="/assets/cta-flower-6.png"
            alt="Flower 6"
            fill
            className="object-contain"
            sizes="371px"
          />
        </div>

        {/* Flower 4 (Top Right, Figma 568:124) */}
        <div
          ref={flower4Ref}
          className="absolute h-[295px] w-[282px] left-[796px] -top-[1px] pointer-events-none z-10 will-change-transform"
        >
          <Image
            src="/assets/cta-flower-4.png"
            alt="Flower 4"
            fill
            className="object-contain"
            sizes="282px"
          />
        </div>

        {/* Flower 2 (Bottom Right, Figma 568:125) */}
        <div
          ref={flower2Ref}
          className="absolute h-[280px] w-[385px] left-[649px] top-[169px] pointer-events-none z-10 will-change-transform"
        >
          <Image
            src="/assets/cta-flower-2.png"
            alt="Flower 2"
            fill
            className="object-contain"
            sizes="385px"
          />
        </div>

        {/* Flower 7 (Bottom Center, Figma 568:126) */}
        <div
          ref={flower7Ref}
          className="absolute h-[170px] w-[375px] left-[329px] top-[320px] pointer-events-none z-10 will-change-transform"
        >
          <Image
            src="/assets/cta-flower-7.png"
            alt="Flower 7"
            fill
            className="object-contain"
            sizes="375px"
          />
        </div>

        {/* Typography Block directly on Canvas (Figma 568:115) */}
        <div
          ref={textRef}
          className="relative z-20 flex flex-col items-center text-center font-unbounded font-bold gap-2 leading-[0.92] tracking-[-1.6px] max-w-[620px] will-change-transform"
        >
          <p className="text-[#f7f7f2] text-[34px] lg:text-[40.7px] leading-[0.92]">
            BUILT THE BUSINESS?
          </p>
          <p className="text-[#f5c518] text-[34px] lg:text-[40.7px] leading-[0.92]">
            NOW BUILD THE BRAND IT DESERVES.
          </p>
        </div>

        {/* CTA Button (Figma 568:118) */}
        <button
          ref={btnRef}
          onClick={handleClick}
          className="relative z-20 bg-[#f5c518] hover:bg-[#ffd004] border border-[#f5c518] rounded-[14px] px-[26px] py-[14px] transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 will-change-transform"
        >
          <span className="font-dm-sans font-bold text-[#09090b] text-[11.5px] uppercase tracking-wider whitespace-nowrap">
            START A CONVERSATION
          </span>
        </button>
      </div>

      {/* ========================================================
          MOBILE VIEW (Figma Node 568:127)
          Floral conversation card with inner frosted message shield
          (Figma Node 568:135: 290px x 208px rounded-[16px])
          ======================================================== */}
      <div
        ref={mobileCardRef}
        className="md:hidden relative w-full max-w-[358px] min-h-[440px] rounded-[24px] bg-[#050505] border border-[rgba(245,197,24,0.18)] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center p-4 overflow-hidden"
        data-node-id="568:127"
        data-name="Final call to action mobile"
      >
        {/* Flower 3 (Top Left) */}
        <div className="absolute h-[155px] w-[196px] -left-[34px] top-0 pointer-events-none z-10">
          <Image
            src="/assets/cta-flower-3.png"
            alt="Flower 3"
            fill
            className="object-contain"
            sizes="196px"
          />
        </div>

        {/* Flower 1 (Bottom Left) */}
        <div className="absolute h-[160px] w-[178px] -left-[55px] top-[250px] pointer-events-none z-10">
          <Image
            src="/assets/cta-flower-1.png"
            alt="Flower 1"
            fill
            className="object-contain"
            sizes="178px"
          />
        </div>

        {/* Flower 4 (Top Right) */}
        <div className="absolute h-[176px] w-[160px] left-[233px] top-[18px] pointer-events-none z-10">
          <Image
            src="/assets/cta-flower-4.png"
            alt="Flower 4"
            fill
            className="object-contain"
            sizes="160px"
          />
        </div>

        {/* Flower 2 (Bottom Right) */}
        <div className="absolute h-[136px] w-[186px] left-[220px] top-[266px] pointer-events-none z-10">
          <Image
            src="/assets/cta-flower-2.png"
            alt="Flower 2"
            fill
            className="object-contain"
            sizes="186px"
          />
        </div>

        {/* Flower 6 (Top Center) */}
        <div className="absolute h-[54px] w-[166px] left-[79px] top-0 pointer-events-none z-10">
          <Image
            src="/assets/cta-flower-6.png"
            alt="Flower 6"
            fill
            className="object-contain"
            sizes="166px"
          />
        </div>

        {/* Flower 7 (Bottom Center) */}
        <div className="absolute h-[80px] w-[178px] left-[94px] top-[356px] pointer-events-none z-10">
          <Image
            src="/assets/cta-flower-7.png"
            alt="Flower 7"
            fill
            className="object-contain"
            sizes="178px"
          />
        </div>

        {/* Mobile Message Shield (Figma 568:135) */}
        <div
          className="relative z-20 bg-[rgba(5,5,5,0.85)] backdrop-blur-md rounded-[16px] w-[290px] min-h-[208px] flex flex-col items-center justify-center p-5 border border-white/5 shadow-2xl"
          data-node-id="568:135"
          data-name="Message shield"
        >
          {/* Prompt copy (Figma 568:137) */}
          <div className="flex flex-col items-center font-unbounded font-extrabold gap-1 leading-[0.98] text-[20px] text-center w-full">
            <p className="text-white">
              BUILT THE BUSINESS?
            </p>
            <p className="text-[#f5c518]">
              NOW BUILD THE BRAND IT DESERVES.
            </p>
          </div>

          {/* Button (Figma 568:140) */}
          <button
            onClick={handleClick}
            className="bg-[#f5c518] hover:bg-[#ffd004] h-[50px] px-[22px] rounded-[12px] flex items-center justify-center cursor-pointer transition-all mt-5 w-full shadow-md"
          >
            <span className="font-dm-sans font-bold text-[10px] text-black tracking-wider uppercase whitespace-nowrap">
              START A CONVERSATION
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
