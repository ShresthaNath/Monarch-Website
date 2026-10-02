"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function UnifiedHookSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);

  // Line 1 word refs
  const l1Word1 = useRef<HTMLSpanElement>(null); // "Marketing"
  const l1Word2 = useRef<HTMLSpanElement>(null); // "Gets"
  const l1Word3 = useRef<HTMLSpanElement>(null); // "You"
  const l1Word4 = useRef<HTMLSpanElement>(null); // "Seen"

  // Line 2 word refs
  const l2Branding = useRef<HTMLSpanElement>(null); // "Branding"
  const l2Gives = useRef<HTMLSpanElement>(null);
  const l2People = useRef<HTMLSpanElement>(null);
  const l2A = useRef<HTMLSpanElement>(null);
  const l2Reason = useRef<HTMLSpanElement>(null);
  const l2To = useRef<HTMLSpanElement>(null);
  const l2Remember = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Single continuous pinned scrollytelling container for Hook 1 and Hook 2
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1600",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      const line1Words = [l1Word1.current, l1Word2.current, l1Word3.current, l1Word4.current];
      const line2Words = [
        l2Branding.current,
        l2Gives.current,
        l2People.current,
        l2A.current,
        l2Reason.current,
        l2To.current,
        l2Remember.current,
      ];

      // Initial dim state
      gsap.set(line1Words, { opacity: 0.15, y: 30 });
      gsap.set(line2Words, { opacity: 0.15, y: 30 });
      gsap.set(line2Ref.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(line1Ref.current, { opacity: 1, pointerEvents: "auto" });

      // 0.00 – 0.35: Hook 1 ("Marketing Gets You Seen" - Node 575:1498) reveals word by word
      tl.to(l1Word1.current, { opacity: 1, y: 0, duration: 0.1, ease: "none" }, 0)
        .to(l1Word2.current, { opacity: 1, y: 0, duration: 0.1, ease: "none" }, 0.08)
        .to(l1Word3.current, { opacity: 1, y: 0, duration: 0.1, ease: "none" }, 0.16)
        .to(l1Word4.current, { opacity: 1, y: 0, duration: 0.1, ease: "none" }, 0.24);

      // 0.35 – 0.45: Hook 1 holds focus for readability
      tl.to({}, { duration: 0.1 });

      // 0.45 – 0.55: Hook 1 lifts and dissolves out
      tl.to(
        line1Words,
        {
          opacity: 0,
          y: -30,
          duration: 0.08,
          stagger: 0.015,
          ease: "none",
        },
        0.45
      )
      .to(
        line1Ref.current,
        { opacity: 0, duration: 0.02, ease: "none" },
        0.53
      )
      .to(
        line2Ref.current,
        { opacity: 1, pointerEvents: "auto", duration: 0.02, ease: "none" },
        0.55
      );

      // 0.55 – 0.85: Hook 2 ("Branding / GIVES PEOPLE A REASON TO REMEMBER" - Node 575:1403) reveals word by word
      line2Words.forEach((wordEl, idx) => {
        if (!wordEl) return;
        tl.to(
          wordEl,
          { opacity: 1, y: 0, duration: 0.08, ease: "none" },
          0.55 + idx * 0.04
        );
      });

      // 0.85 – 0.94: Hook 2 holds focus
      tl.to({}, { duration: 0.09 });

      // 0.94 – 1.00: Hook 2 dissolves upward, smoothly releasing directly into Hero Section
      tl.to(
        line2Words,
        {
          opacity: 0,
          y: -30,
          duration: 0.06,
          stagger: 0.01,
          ease: "none",
        },
        0.94
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full relative">
      <section
        ref={containerRef}
        className="relative w-full h-screen bg-[#050505] flex flex-col items-center justify-center px-4 sm:px-8 select-none overflow-hidden z-25"
        data-name="unified-scrollytelling-hook"
      >
      <div className="relative w-full max-w-[1280px] h-[360px] sm:h-[320px] flex items-center justify-center px-4">
        
        {/* ========================================================
            HOOK 1 (Figma Node 575:1498)
            Single horizontal line: "Marketing Gets You Seen"
            Marketing: 80px Garamond Italic #ffd004
            Gets You Seen: 52px Unbounded Bold White uppercase
            ======================================================== */}
        <div
          ref={line1Ref}
          className="absolute inset-0 flex items-center justify-center text-center"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-x-4 sm:gap-x-6 gap-y-2">
            <span
              ref={l1Word1}
              className="font-garamond italic text-[#ffd004] text-[58px] sm:text-[72px] lg:text-[80px] leading-[1.05] capitalize will-change-transform"
            >
              Marketing
            </span>
            <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <span
                ref={l1Word2}
                className="font-unbounded font-bold text-white text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.05] uppercase will-change-transform"
              >
                GETS
              </span>
              <span
                ref={l1Word3}
                className="font-unbounded font-bold text-white text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.05] uppercase will-change-transform"
              >
                YOU
              </span>
              <span
                ref={l1Word4}
                className="font-unbounded font-bold text-white text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.05] uppercase will-change-transform"
              >
                SEEN
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            HOOK 2 (Figma Node 575:1403 & media_1790926527109.png)
            2-line layout with exact adjusted vertical rhythm:
            Top line: "Branding" in EB Garamond Italic 96px #f5c518
            Bottom line: "GIVES PEOPLE A REASON TO REMEMBER" in 49.4px
            Unbounded Black white in one continuous horizontal line
            ======================================================== */}
        <div
          ref={line2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-[1000px] mx-auto px-2"
        >
          {/* Top Line: Branding (Node 575:1497) */}
          <span
            ref={l2Branding}
            className="font-garamond italic text-[#f5c518] text-[64px] sm:text-[80px] lg:text-[96px] leading-[1.2] lg:leading-[1.4] will-change-transform block mb-1 lg:mb-2"
          >
            Branding
          </span>

          {/* Bottom Line: GIVES PEOPLE A REASON TO REMEMBER (One continuous wide line) */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 flex-wrap sm:flex-nowrap leading-[1.2] lg:leading-[1.4]">
            <span
              ref={l2Gives}
              className="font-unbounded font-black text-white text-[24px] sm:text-[36px] lg:text-[49.4px] uppercase will-change-transform"
            >
              GIVES
            </span>
            <span
              ref={l2People}
              className="font-unbounded font-black text-white text-[24px] sm:text-[36px] lg:text-[49.4px] uppercase will-change-transform"
            >
              PEOPLE
            </span>
            <span
              ref={l2A}
              className="font-unbounded font-black text-white text-[24px] sm:text-[36px] lg:text-[49.4px] uppercase will-change-transform"
            >
              A
            </span>
            <span
              ref={l2Reason}
              className="font-unbounded font-black text-white text-[24px] sm:text-[36px] lg:text-[49.4px] uppercase will-change-transform"
            >
              REASON
            </span>
            <span
              ref={l2To}
              className="font-unbounded font-black text-white text-[24px] sm:text-[36px] lg:text-[49.4px] uppercase will-change-transform"
            >
              TO
            </span>
            <span
              ref={l2Remember}
              className="font-unbounded font-black text-white text-[24px] sm:text-[36px] lg:text-[49.4px] uppercase will-change-transform"
            >
              REMEMBER
            </span>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator hint */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-40">
        <span className="font-dm-sans text-[10px] uppercase tracking-widest text-white/60">
          Scroll to explore
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#F5C518] to-transparent animate-pulse" />
      </div>
    </section>
    </div>
  );
}
