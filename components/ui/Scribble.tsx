"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScribbleProps {
  type?: "underline" | "circle" | "highlight";
  color?: string;
  className?: string;
}

export function Scribble({
  type = "underline",
  color = "#F2D13B",
  className = "",
}: ScribbleProps) {
  if (type === "underline") {
    return (
      <svg
        className={`overflow-visible pointer-events-none ${className}`}
        viewBox="0 0 240 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 3 14 C 55 4, 135 18, 237 8 C 175 14, 80 16, 25 18"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.95 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </svg>
    );
  }

  if (type === "circle") {
    return (
      <svg
        className={`overflow-visible pointer-events-none ${className}`}
        viewBox="0 0 160 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 20 40 C 15 15, 60 8, 110 12 C 155 16, 155 60, 115 72 C 60 78, 10 65, 18 35 C 24 18, 50 14, 90 15"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        />
      </svg>
    );
  }

  return null;
}
