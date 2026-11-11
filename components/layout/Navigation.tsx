"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, ArrowUpRight, Menu, X } from "lucide-react";

interface NavProps {
  lang: "EN" | "ID";
  setLang: (lang: "EN" | "ID") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Navigation({ lang, setLang, theme, toggleTheme }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: lang === "EN" ? "Works" : "Karya", href: "#work" },
    { label: lang === "EN" ? "About" : "Tentang", href: "#about" },
    { label: lang === "EN" ? "Trajectory" : "Riwayat", href: "#experience" },
    { label: lang === "EN" ? "Toolbox" : "Keahlian", href: "#skills" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/90 dark:bg-[#121210]/90 backdrop-blur-md py-4 border-b border-ink/5 dark:border-cream/5 shadow-sm"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between">
        {/* Monogram Brand */}
        <Link
          href="#hero"
          className="group flex items-center gap-3 text-ink dark:text-cream"
        >
          <span className="w-10 h-10 rounded-full border border-ink/20 dark:border-cream/20 flex items-center justify-center font-display text-sm font-extrabold transition-all duration-300 group-hover:bg-ink group-hover:text-cream dark:group-hover:bg-cream dark:group-hover:text-ink">
            GI
          </span>
          <div className="flex flex-col">
            <span className="font-display text-sm font-extrabold tracking-tight leading-none">
              SYAIKHANI GIFFA
            </span>
            <span className="text-[11px] text-ink/50 dark:text-cream/50 mt-0.5 font-medium">
              Bogor, ID
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-wide uppercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink/70 dark:text-cream/70 hover:text-ochre dark:hover:text-butter transition-colors relative py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            aria-label="Toggle language"
            className="text-xs font-bold px-3 py-1.5 rounded-full border border-ink/15 dark:border-cream/15 hover:border-ink dark:hover:border-cream transition-colors"
          >
            {lang}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full border border-ink/15 dark:border-cream/15 hover:border-ink dark:hover:border-cream transition-colors text-ink dark:text-cream"
          >
            {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-ink text-cream dark:bg-cream dark:text-ink text-xs font-bold hover:bg-ochre dark:hover:bg-butter transition-colors ml-2"
          >
            <span>{lang === "EN" ? "Get in Touch" : "Hubungi"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-ink dark:text-cream"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-cream dark:bg-[#121210] z-40 p-8 flex flex-col justify-between border-t border-ink/10">
          <nav className="flex flex-col gap-6 mt-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-4xl text-ink dark:text-cream hover:text-ochre transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-8 border-t border-ink/10 space-y-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-4 rounded-full bg-ink text-cream dark:bg-cream dark:text-ink font-bold text-sm block"
            >
              {lang === "EN" ? "Get in Touch" : "Hubungi Sekarang"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
