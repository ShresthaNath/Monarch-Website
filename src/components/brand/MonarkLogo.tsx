"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface MonarkLogoProps {
  variant?: "badge" | "crest-white" | "crest-black" | "crest-gold" | "lockup";
  size?: number;
  className?: string;
  priority?: boolean;
}

export function MonarkLogo({
  variant = "badge",
  size = 48,
  className,
  priority = false,
}: MonarkLogoProps) {
  if (variant === "lockup") {
    return (
      <div className={cn("inline-flex items-center gap-3.5 select-none", className)}>
        <div
          className="relative rounded-full overflow-hidden flex-shrink-0"
          style={{ width: size, height: size }}
        >
          <Image
            src="/monark-badge.png"
            alt="Monark Fortress Emblem"
            fill
            sizes={`${size}px`}
            priority={priority}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-display font-black tracking-wider text-white text-lg leading-none uppercase">
            MONARK
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#FFD004] uppercase mt-0.5">
            CONSULTANCY
          </span>
        </div>
      </div>
    );
  }

  let src = "/monark-badge.png";
  if (variant === "crest-white") src = "/monark-crest-white.png";
  if (variant === "crest-black") src = "/monark-crest-black.png";
  if (variant === "crest-gold") src = "/monark-crest-gold.png";

  return (
    <div
      className={cn("relative inline-block flex-shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt="Monark Emblem"
        fill
        sizes={`${size}px`}
        priority={priority}
        className="object-contain"
      />
    </div>
  );
}
