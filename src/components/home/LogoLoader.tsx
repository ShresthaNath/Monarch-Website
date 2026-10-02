"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LogoLoaderProps {
  onComplete: () => void;
  onSkip?: () => void;
}

export function LogoLoader({ onComplete, onSkip }: LogoLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoBoxRef = useRef<HTMLDivElement>(null);
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize stroke dash array and offset for drawing effect
      pathsRef.current.forEach((path) => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          stroke: "#000000",
          strokeWidth: 4,
          fill: "transparent",
        });
      });

      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      // 1. Draw strokes
      tl.to(pathsRef.current, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.inOut",
        stagger: 0.08,
      })
      // 2. Fill with solid black
      .to(pathsRef.current, {
        fill: "#000000",
        duration: 0.45,
        ease: "power2.out",
      }, "-=0.2")
      // 3. Briefly hold completed logo
      .to({}, { duration: 0.35 })
      // 4. Zoom rapidly into center until it fills viewport
      .to(logoBoxRef.current, {
        scale: 28,
        transformOrigin: "center center",
        duration: 0.65,
        ease: "expo.in",
      })
      // 5. Transition screen background to black without visible cut
      .to(containerRef.current, {
        backgroundColor: "#050505",
        opacity: 0,
        duration: 0.35,
        ease: "power1.out",
      }, "-=0.25");
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFD004] overflow-hidden"
    >
      {/* Skip button for rapid interaction */}
      {onSkip && (
        <button
          onClick={onSkip}
          className="absolute top-6 right-8 text-black/60 hover:text-black font-unbounded text-xs font-bold uppercase tracking-wider transition-colors z-50 cursor-pointer"
        >
          Skip Intro
        </button>
      )}

      {/* 532x532px Monark Vector Emblem */}
      <div
        ref={logoBoxRef}
        className="relative w-[340px] h-[340px] md:w-[532px] md:h-[532px] shrink-0"
      >
        {/* Vector 1 (M Letter) */}
        <div className="absolute inset-[42.88%_27.68%_18.65%_27.69%]">
          <svg
            className="w-full h-full block overflow-visible"
            viewBox="0 0 246.753 208.5"
            fill="none"
          >
            <path
              ref={(el) => { pathsRef.current[0] = el; }}
              d="M232.234 3.07682L232.488 3.33867C232.749 4.77881 232.516 4.64685 231.921 5.96126C227.314 16.1223 228.246 28.126 228.234 39.0315L228.211 71.5848C228.204 93.8161 227.863 116.181 228.55 138.389C228.969 151.909 229.375 156.235 242.05 161.687C234.861 165.356 223.543 173.087 216.517 177.618C201.406 187.452 186.212 197.156 170.935 206.731C176.955 198.899 193.978 179.675 197.154 172.059C199.325 166.853 198.052 85.6703 198.063 73.4333C192.122 81.3016 180.958 93.0129 174.135 100.605C157.058 119.359 140.11 138.232 123.294 157.22C106.955 138.39 89.4822 120.019 73.0126 101.246C64.9546 92.0606 56.1081 83.0592 48.5219 73.5284L48.4767 142.663C48.4549 146.858 47.8834 169.333 49.2601 171.844C55.1895 182.663 68.3846 196.653 75.6357 206.817L34.1184 180.199C24.7694 174.174 14.2115 167.045 4.6033 161.704C12.2768 158.551 16.6123 155.799 17.2461 146.935C19.1247 120.665 18.3704 93.9013 18.3714 67.5273L18.3631 37.5067C18.3532 21.6397 19.0063 17.1785 13.2842 2.19623C22.4866 13.3324 34.2566 24.933 44.1692 35.5028L94.797 89.7211C100.863 96.1909 119.07 114.758 123.34 120.816C127.105 115.197 142.616 99.4972 147.835 93.9153L201.058 36.9019C209.216 28.2455 225.474 12.1286 232.234 3.07682Z"
            />
          </svg>
        </div>

        {/* Vector 2 (Crown / Battlements) */}
        <div className="absolute inset-[18.74%_27.91%_60.69%_27.89%]">
          <svg
            className="w-full h-full block overflow-visible"
            viewBox="0 0 239.246 114.411"
            fill="none"
          >
            <path
              ref={(el) => { pathsRef.current[1] = el; }}
              d="M118.984 2.0009C121.538 1.88868 138.784 11.712 143.612 13.4597L143.564 41.6328C150.416 44.9739 157.332 48.1784 164.311 51.2436L164.319 24.2244C173.047 28.325 181.714 32.5561 190.316 36.9155L190.25 63.9181C196.562 66.9714 204.136 70.8424 210.527 73.357L210.547 47.1061C219.775 51.5055 228.229 55.5724 237.201 60.4767C236.603 76.4331 237.092 95.2926 237.102 111.468C225.61 106.921 212.111 100.458 200.642 95.3648L119.818 59.2569C111.803 62.265 100.899 67.5268 92.8369 71.1204L35.1659 96.9328C24.6329 101.653 12.8826 107.309 2.21147 111.41C2.42188 96.9172 2.83751 74.7161 2.06289 60.6394C9.31659 56.2395 20.938 50.5288 28.8 47.2957L28.7361 73.3144C34.2177 71.3537 43.6628 66.5142 49.2244 63.8475C48.7729 55.4233 48.9812 45.5127 48.9651 36.9747C57.8501 32.7088 65.9455 28.4321 75.0679 24.2545C74.7053 32.5582 74.9988 42.9805 74.9994 51.4463L95.9235 41.4603C95.4164 33.6232 95.724 21.9332 95.6777 13.76C103.001 10.409 111.681 5.70412 118.984 2.0009Z"
            />
          </svg>
        </div>

        {/* Vector 3 (Outer Arch) */}
        <div className="absolute inset-[31.44%_29.67%_51.06%_29.71%]">
          <svg
            className="w-full h-full block overflow-visible"
            viewBox="0 0 223.531 99.6763"
            fill="none"
          >
            <path
              ref={(el) => { pathsRef.current[2] = el; }}
              d="M111.409 2.22676L181.757 33.8111C191.083 38.0188 210.794 47.4956 219.75 50.5348C217.879 52.3085 215.974 54.3892 214.226 56.3037C202.483 69.1564 189.325 81.7436 178.479 95.3122C177.27 90.6806 175.859 86.104 174.25 81.5961C163.036 50.3551 140.751 33.3108 111.916 19.657C87.6163 27.5627 61.0625 51.9817 51.3291 75.4485C50.0568 78.5168 45.5306 93.1977 43.9518 94.1822C31.0814 79.3377 16.9819 64.9825 3.61172 50.4725C7.69784 49.1976 15.2118 45.5416 19.3701 43.6905L52.3734 28.8034L89.9469 11.9524C96.2421 9.15471 105.526 5.37096 111.409 2.22676Z"
            />
          </svg>
        </div>

        {/* Vector 4 (Inner Arch) */}
        <div className="absolute inset-[36.32%_38.4%_46.86%_38.51%]">
          <svg
            className="w-full h-full block overflow-visible"
            viewBox="0 0 126.969 98.4184"
            fill="none"
          >
            <path
              ref={(el) => { pathsRef.current[3] = el; }}
              d="M62.9607 2.11707C67.4895 3.40395 76.946 8.78733 80.9147 11.3995C106.855 28.4734 118.302 47.7963 124.838 77.2548C122.446 81.0754 116.721 86.1362 113.152 91.6282C113.248 68.1651 104.556 46.9942 86.7106 31.5989C79.3067 25.2118 71.985 21.4457 63.2797 17.2723C55.5242 20.204 45.3497 26.3683 39.1486 31.961C20.2662 48.9907 14.3129 66.9484 12.7974 91.4344C9.67969 86.4438 4.67973 81.8158 2.34028 78.1094C0.628425 75.3964 5.85906 60.0827 7.29349 56.499C17.5631 30.8383 37.8383 12.8179 62.9607 2.11707Z"
            />
          </svg>
        </div>

        {/* Vector 5 (Left Wing) */}
        <div className="absolute inset-[59.63%_37.27%_21.14%_59.57%]">
          <svg
            className="w-full h-full block overflow-visible"
            viewBox="0 0 20.8744 108.431"
            fill="none"
          >
            <path
              ref={(el) => { pathsRef.current[4] = el; }}
              d="M17.9799 2.9426C18.1866 3.1925 18.3929 3.44239 18.5997 3.69228C18.9639 19.9853 18.3139 69.8354 18.8475 83.5027C13.6433 90.2129 7.9098 98.2823 2.80125 105.221C2.59915 104.986 2.35651 104.703 2.07284 104.372C1.95283 79.5875 2.0157 43.4479 2.02246 19.857C7.48117 14.3235 12.4484 8.30832 17.9799 2.9426Z"
            />
          </svg>
        </div>

        {/* Vector 6 (Right Wing) */}
        <div className="absolute inset-[59.61%_59.55%_21.09%_37.23%]">
          <svg
            className="w-full h-full block overflow-visible"
            viewBox="0 0 21.2398 110.025"
            fill="none"
          >
            <path
              ref={(el) => { pathsRef.current[5] = el; }}
              d="M2.45774 3.19292C4.46261 4.14886 16.0404 17.0748 19.077 20.0377C19.408 29.2791 19.1321 40.3965 19.1342 49.8333L19.1217 105.863C16.2435 103.56 5.21125 87.783 2.08938 83.6106C2.88582 77.5752 2.54086 61.6693 2.52008 55.1164C2.46501 37.8924 2.7227 20.3733 2.45774 3.19292Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
