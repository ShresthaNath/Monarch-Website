"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "text">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, { damping: 28, stiffness: 350 });
  const smoothY = useSpring(mouseY, { damping: 28, stiffness: 350 });

  const trailingX = useSpring(mouseX, { damping: 20, stiffness: 180 });
  const trailingY = useSpring(mouseY, { damping: 20, stiffness: 180 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("button, a, input, textarea, [data-cursor='hover']");
      const textElement = target.closest("h1, h2, h3, [data-cursor='text']");

      if (interactive) {
        setCursorState("hover");
      } else if (textElement) {
        setCursorState("text");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference"
        animate={{
          width: cursorState === "hover" ? 0 : 8,
          height: cursorState === "hover" ? 0 : 8,
          backgroundColor: "#FAFAFA",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Fluid Interactive Trailing Ring */}
      <motion.div
        style={{
          x: trailingX,
          y: trailingY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full"
        animate={{
          width: cursorState === "hover" ? 48 : cursorState === "text" ? 28 : 22,
          height: cursorState === "hover" ? 48 : cursorState === "text" ? 28 : 22,
          borderColor: cursorState === "hover" ? "#FFD004" : "rgba(255, 255, 255, 0.35)",
          borderWidth: cursorState === "hover" ? "2px" : "1px",
          backgroundColor: cursorState === "hover" ? "rgba(255, 208, 4, 0.15)" : "transparent",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      />
    </>
  );
}
