"use client";

import React from "react";
import { motion } from "framer-motion";

interface MobiusTickerProps {
  speed?: number; // seconds for complete loop
  reverse?: boolean;
  className?: string;
}

const tickerItems = [
  { text: "FRONT-END ARCHITECTURE", color: "bg-[#2563EB] text-white", symbol: "✦" },
  { text: "NEXT.JS 15 & REACT 19", color: "bg-[#141412] text-[#84CC16] dark:bg-white dark:text-[#141412]", symbol: "★" },
  { text: "INDUSTRIAL IOT & HARDWARE", color: "bg-[#EA580C] text-white", symbol: "◆" },
  { text: "WEBGIS SPATIAL ANALYTICS", color: "bg-[#059669] text-white", symbol: "▲" },
  { text: "D4 TRPL · IPB UNIVERSITY", color: "bg-[#7C3AED] text-white", symbol: "●" },
  { text: "TACTILE ACCESSIBLE UI", color: "bg-[#F59E0B] text-[#141412]", symbol: "✦" },
  { text: "60FPS FRAMER MOTION", color: "bg-[#E11D48] text-white", symbol: "★" },
  { text: "BOGOR, WEST JAVA, ID", color: "bg-[#141412] text-[#FAF7F2] dark:bg-[#FAF7F2] dark:text-[#141412]", symbol: "📍" },
];

export function MobiusTicker({ speed = 25, reverse = false, className = "" }: MobiusTickerProps) {
  // Duplicate array 3 times for a seamless infinite loop
  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div
      className={`relative w-full overflow-hidden py-3 bg-[#FAF7F2] dark:bg-[#181816] border-y border-black/15 dark:border-white/15 select-none ${className}`}
    >
      <motion.div
        className="flex items-center gap-4 whitespace-nowrap will-change-transform"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider shadow-[1.5px_1.5px_0px_#141412] dark:shadow-[1.5px_1.5px_0px_rgba(255,255,255,0.15)] ${item.color}`}
            >
              <span>{item.symbol}</span>
              <span>{item.text}</span>
            </span>
            <span className="text-black/30 dark:text-white/30 text-xs font-mono select-none">
              //
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
