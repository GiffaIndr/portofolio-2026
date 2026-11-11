"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorColor, setCursorColor] = useState<string | null>(null);
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Möbius spring configuration: snappy yet silky
  const springConfig = { damping: 24, stiffness: 320, mass: 0.28 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      if (target) {
        setCursorText(target.getAttribute("data-cursor") || "");
        setCursorColor(target.getAttribute("data-cursor-color") || null);
        setCursorVariant("hover");
      } else {
        const isClickable = (e.target as HTMLElement).closest("a, button, input, [role='button']");
        if (isClickable) {
          setCursorText("");
          setCursorColor(null);
          setCursorVariant("hover");
        } else {
          setCursorText("");
          setCursorColor(null);
          setCursorVariant("default");
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", onOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-ink dark:bg-white pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{ x: mouseX, y: mouseY, opacity: cursorText ? 0 : 1 }}
      />

      {/* Dynamic Follower Ring & Pill */}
      <motion.div
        aria-hidden="true"
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-colors shadow-sm ${
          cursorVariant === "hover" && !cursorColor
            ? "border-2 border-ink dark:border-white bg-[#F2D13B] text-[#141412]"
            : cursorVariant === "default"
            ? "border border-ink/40 dark:border-white/40 bg-transparent text-transparent"
            : ""
        }`}
        animate={{
          width: cursorText ? 84 : cursorVariant === "hover" ? 42 : 24,
          height: cursorText ? 36 : cursorVariant === "hover" ? 42 : 24,
          borderRadius: cursorText ? 18 : 9999,
          backgroundColor: cursorColor
            ? cursorColor
            : cursorVariant === "hover"
            ? "#F2D13B"
            : "transparent",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        style={{
          x: smoothX,
          y: smoothY,
          color: cursorColor ? "#FFFFFF" : undefined,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-black uppercase select-none px-2 text-center font-mono tracking-tight drop-shadow-sm">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
