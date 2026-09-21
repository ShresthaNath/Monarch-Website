"use client";

import React from "react";
import { Award, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export function MetricsTicker() {
  const METRICS = [
    {
      value: "$4.8B+",
      label: "CUMULATIVE MARKET VALUE",
      sub: "Across venture-backed and sovereign enterprises",
      icon: TrendingUp,
    },
    {
      value: "48+",
      label: "IDENTITIES DEPLOYED",
      sub: "Bespoke brand systems launched globally",
      icon: ShieldCheck,
    },
    {
      value: "100%",
      label: "BESPOKE ARCHITECTURE",
      sub: "Zero templates. Pure mathematical design craft",
      icon: Zap,
    },
    {
      value: "14",
      label: "AWARDS & HONORS",
      sub: "Awwwards, FWA, and International Design recognitions",
      icon: Award,
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 bg-[#060608] text-[#FAFAFA] border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className={`pt-6 sm:pt-0 ${idx !== 0 ? "sm:pl-8" : ""} space-y-3 group`}
              >
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFD004]">
                  <Icon className="w-3.5 h-3.5" />
                  <span className="tracking-widest uppercase">PROVEN TRACTION</span>
                </div>

                <p className="text-4xl md:text-5xl font-black font-display text-white tracking-tight group-hover:text-[#FFD004] transition-colors">
                  {metric.value}
                </p>

                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider">
                    {metric.label}
                  </h4>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    {metric.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
