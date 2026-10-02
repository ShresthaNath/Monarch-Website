"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";

interface StepItem {
  step: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

const stepsData: StepItem[] = [
  {
    step: "01",
    name: "DISCOVER",
    subtitle: "We listen.",
    description:
      "We deep-dive into your operational realities, map structural advantages, and extract unassailable market truths before outlining the brand dossier.",
    image: "/assets/process-discover.png",
  },
  {
    step: "02",
    name: "DEFINE",
    subtitle: "We figure it out.",
    description:
      "Our analysts construct your competitive matrix, isolate positioning white space, and crystallise the strategic foundations your brand will be built upon.",
    image: "/assets/process-define.png",
  },
  {
    step: "03",
    name: "DESIGN",
    subtitle: "We make it real.",
    description:
      "We translate strategy into cohesive visual systems — identity, language, and form — crafted to command attention and endure scrutiny.",
    image: "/assets/process-design.png",
  },
  {
    step: "04",
    name: "DEPLOY",
    subtitle: "We turn it into action.",
    description:
      "We deliver precise implementation systems and launch your sovereign entity.",
    image: "/assets/process-deploy.png",
  },
];

interface CardProps {
  item: StepItem;
  index: number;
  total: number;
  onSwipe: (dir: number) => void;
}

function DraggableProcessCard({ item, index, total, onSwipe }: CardProps) {
  const x = useMotionValue(0);
  // Dynamic rotational tilt based on swipe delta: swiping left tilts -8deg, right tilts +8deg
  const rotate = useTransform(x, [-250, 0, 250], [-8, 0, 8]);
  const opacity = useTransform(x, [-250, -150, 0, 150, 250], [0, 0.8, 1, 0.8, 0]);

  const isFront = index === 0;

  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const threshold = 100;
    const velocityThreshold = 400;
    if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
      onSwipe(1); // Swipe right
    } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
      onSwipe(-1); // Swipe left
    }
  };

  return (
    <motion.div
      style={{
        x: isFront ? x : 0,
        rotate: isFront ? rotate : 0,
        opacity: isFront ? opacity : 1 - index * 0.25,
        scale: 1 - index * 0.06,
        y: index * 14,
        zIndex: total - index,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.65}
      onDragEnd={isFront ? handleDragEnd : undefined}
      initial={{ scale: 0.9, opacity: 0, y: 30 }}
      animate={{ scale: 1 - index * 0.06, opacity: 1 - index * 0.25, y: index * 14 }}
      exit={{ x: 300, opacity: 0, transition: { duration: 0.25 } }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      className={`absolute w-[92vw] max-w-[500px] h-[450px] sm:h-[480px] rounded-[30px] p-6 sm:p-8 bg-[#0D0D0D] border border-[#F5C518]/20 shadow-[0px_25px_60px_0px_rgba(0,0,0,0.85)] flex flex-col items-center justify-between text-center ${
        isFront ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
      }`}
    >
      {/* Top Rose Illustration Badge */}
      <div className="relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] flex items-center justify-center pointer-events-none">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain"
          sizes="170px"
        />
      </div>

      {/* Content Stack */}
      <div className="flex flex-col items-center gap-1.5 max-w-[400px] pointer-events-none">
        <h3 className="font-unbounded font-black text-white text-[24px] sm:text-[28px] leading-tight uppercase">
          {item.name}
        </h3>
        <p className="font-unbounded font-medium text-[#F5C518] text-[11px] sm:text-[12px] uppercase tracking-wider">
          {item.subtitle}
        </p>
        <p className="font-dm-sans font-normal text-[#8E8E93] text-[13px] sm:text-[14px] leading-[1.6] mt-1">
          {item.description}
        </p>
      </div>

      {/* Footer bar with drag hint & progress */}
      <div className="w-full flex items-center justify-between border-t border-white/5 pt-3 mt-1">
        <span className="font-unbounded font-bold text-[#F5C518] text-[12px]">
          {item.step} / 04
        </span>
        <span className="font-dm-sans text-[11px] text-white/40 uppercase tracking-widest flex items-center gap-1">
          Swipe Card <ArrowRight className="w-3 h-3 text-[#F5C518]" />
        </span>
      </div>
    </motion.div>
  );
}

interface ProcessSectionProps {
  onWorkflowComplete?: (completed: boolean) => void;
}

export function ProcessSection({ onWorkflowComplete }: ProcessSectionProps) {
  const [cards, setCards] = useState<StepItem[]>(stepsData);
  const [activeStep, setActiveStep] = useState("01");
  const [hasCompletedAll, setHasCompletedAll] = useState(false);

  const handleSwipe = (direction: number) => {
    setCards((prev) => {
      const next = [...prev];
      const removed = next.shift();
      if (removed) {
        next.push(removed);
      }
      if (next.length > 0) {
        setActiveStep(next[0].step);
      }
      return next;
    });

    // If cycled to 04 or beyond, mark workflow complete
    setHasCompletedAll(true);
    if (onWorkflowComplete) {
      onWorkflowComplete(true);
    }
  };

  const handleReset = () => {
    setCards(stepsData);
    setActiveStep("01");
  };

  return (
    <section
      id="process"
      className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center justify-between py-16 px-4 select-none z-20 overflow-hidden"
      data-name="how-we-work-draggable-physics"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2 max-w-[900px] z-10 pt-4">
        <h2 className="font-unbounded font-black text-[#F5C518] text-[40px] sm:text-[54px] lg:text-[68px] leading-[0.95] tracking-tight uppercase">
          NO MYSTERY.
        </h2>
        <p className="font-garamond italic text-white text-[34px] sm:text-[46px] lg:text-[58px] leading-[1.1] capitalize">
          Just a Process.
        </p>
      </div>

      {/* Interactive Draggable Stack Stage */}
      <div className="relative w-full max-w-[500px] h-[500px] flex items-center justify-center my-6">
        <AnimatePresence mode="popLayout">
          {cards.slice(0, 3).map((item, index) => (
            <DraggableProcessCard
              key={item.name}
              item={item}
              index={index}
              total={3}
              onSwipe={handleSwipe}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Step Counter & Reset Control */}
      <div className="flex items-center gap-6 z-20 pb-4">
        <div className="flex items-center gap-2">
          <span className="font-unbounded font-black text-[#F5C518] text-[36px] sm:text-[44px] tracking-tight">
            {activeStep}
          </span>
          <span className="font-unbounded font-bold text-white/30 text-[18px]">
            / 04
          </span>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#F5C518] text-white/60 hover:text-[#F5C518] text-[11px] font-dm-sans transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>
    </section>
  );
}
