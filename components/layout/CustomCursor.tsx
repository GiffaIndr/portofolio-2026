"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable for fine pointers (mouse), disable on touch
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

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
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
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
      {/* Precision small dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-ink dark:bg-cream pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: cursorVariant === "hover" && cursorText ? 0 : 1,
        }}
      />

      {/* Lag follower circle */}
      <motion.div
        aria-hidden="true"
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-hud transition-colors ${
          cursorVariant === "hover"
            ? "border border-ink/40 dark:border-cream/40 bg-butter/85 text-ink backdrop-blur-sm"
            : "border border-ink/30 dark:border-cream/30 bg-transparent"
        }`}
        animate={{
          width: cursorText ? 72 : cursorVariant === "hover" ? 44 : 28,
          height: cursorText ? 72 : cursorVariant === "hover" ? 44 : 28,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-widest uppercase select-none px-1 text-center">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
