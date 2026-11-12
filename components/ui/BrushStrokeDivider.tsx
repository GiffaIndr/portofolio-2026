"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface BrushStrokeDividerProps {
  color?: string;
  variant?: "terracotta" | "butter" | "meadow";
}

export function BrushStrokeDivider({
  color = "#D9622B",
  variant = "terracotta",
}: BrushStrokeDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 85, damping: 26 });
  const draw = useTransform(smooth, [0.15, 0.75], [0, 1]);
  const strokeWidth = useTransform(smooth, [0.15, 0.75], [16, 28]);

  const colorMap = {
    terracotta: "#D9622B",
    butter: "#F2D13B",
    meadow: "#3E7D2F",
  };

  const activeColor = colorMap[variant] || color;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="relative w-full h-12 sm:h-16 overflow-hidden pointer-events-none select-none my-4 opacity-80"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 60"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M -20 30 Q 300 10, 600 32 T 1220 28"
          stroke={activeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength: draw }}
          className="filter drop-shadow-sm"
        />
        <motion.path
          d="M 50 36 Q 400 24, 750 38 T 1150 34"
          stroke={activeColor}
          strokeWidth="6"
          strokeLinecap="round"
          opacity={0.45}
          style={{ pathLength: draw }}
        />
      </svg>
    </div>
  );
}
