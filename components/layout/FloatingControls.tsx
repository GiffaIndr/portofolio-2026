"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingControlsProps {
  lang: "EN" | "ID";
  setLang: (lang: "EN" | "ID") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function FloatingControls({
  lang,
  setLang,
  theme,
  toggleTheme,
}: FloatingControlsProps) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-2 p-1.5 rounded-full bg-white/90 dark:bg-[#1E1E1B]/90 backdrop-blur-md border border-black/10 dark:border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <button
        onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
        aria-label="Toggle language"
        className="px-3 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wider text-ink dark:text-ink-light hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      >
        {lang}
      </button>

      <div className="w-px h-4 bg-black/10 dark:bg-white/15" />

      <button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="p-2 rounded-full text-ink dark:text-ink-light hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      >
        {theme === "light" ? (
          <Moon className="w-3.5 h-3.5" />
        ) : (
          <Sun className="w-3.5 h-3.5" />
        )}
      </button>

      <AnimatePresence>
        {showTop && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="flex items-center overflow-hidden"
          >
            <div className="w-px h-4 bg-black/10 dark:bg-white/15 mr-1" />
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-full text-ink dark:text-ink-light hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
