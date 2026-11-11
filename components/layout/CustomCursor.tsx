"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.3 };
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
        setCursorVariant("hover");
      } else {
        const isClickable = (e.target as HTMLElement).closest("a, button, input, [role='button']");
        if (isClickable) {
          setCursorText("");
          setCursorVariant("hover");
        } else {
          setCursorText("");
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
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-ink dark:bg-ink-light pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{ x: mouseX, y: mouseY, opacity: cursorText ? 0 : 1 }}
      />

      {/* Outer Follower Ring - NO glassmorphism / NO backdrop-blur for instant snappy speed */}
      <motion.div
        aria-hidden="true"
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-colors ${
          cursorVariant === "hover"
            ? "border-2 border-ink dark:border-ink-light bg-butter text-ink"
            : "border border-ink/40 dark:border-ink-light/40 bg-transparent"
        }`}
        animate={{
          width: cursorText ? 68 : cursorVariant === "hover" ? 38 : 24,
          height: cursorText ? 68 : cursorVariant === "hover" ? 38 : 24,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        style={{ x: smoothX, y: smoothY }}
      >
        {cursorText && (
          <span className="text-[10px] font-extrabold uppercase select-none px-1 text-center font-sans tracking-tight">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
