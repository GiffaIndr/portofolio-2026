"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if user already saw the preloader in this session or prefers reduced motion
    const seen = sessionStorage.getItem("giffa_preloader_seen");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || prefersReducedMotion) {
      setVisible(false);
      onComplete();
      return;
    }

    // Counter animation 0 -> 100 within 1.6s
    const startTime = Date.now();
    const duration = 1600;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * 100);
      setCount(current);

      if (progress >= 1) {
        clearInterval(interval);
        setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem("giffa_preloader_seen", "true");
          onComplete();
        }, 300);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100000] bg-cream text-ink flex flex-col justify-between p-8 sm:p-14 select-none"
        >
          {/* Top header */}
          <div className="flex justify-between items-center font-hud text-xs text-ink/60">
            <span>SYAIKHANI GIFFA INDRAWAN</span>
            <span>PORTFOLIO 2026 // FIELD LOG</span>
          </div>

          {/* Center: Handwritten "hello." SVG Stroke Draw */}
          <div className="flex flex-col items-center justify-center my-auto">
            <svg
              className="w-48 sm:w-64 h-24 overflow-visible"
              viewBox="0 0 200 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M 20 20 L 20 65 M 20 42 C 30 30, 48 28, 48 45 L 48 65 M 65 52 C 65 42, 75 38, 85 40 C 95 42, 95 62, 80 62 C 68 62, 65 52, 75 52 L 95 52 M 110 15 L 110 65 M 125 15 L 125 65 M 145 52 C 145 40, 160 40, 160 52 C 160 65, 145 65, 145 52 M 175 62 L 180 62"
                stroke="#1B1A17"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </svg>
            <span className="font-handwriting text-2xl text-terracotta mt-2">
              crafting for the web...
            </span>
          </div>

          {/* Bottom telemetry & percentage counter */}
          <div className="flex justify-between items-end font-hud text-xs text-ink/70">
            <div>
              <span className="block opacity-50">LOCATION:</span>
              <span className="font-semibold">BOGOR, INDONESIA</span>
            </div>
            <div className="text-right">
              <span className="font-mono text-3xl sm:text-4xl font-bold tabular-nums text-ink">
                {count}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
