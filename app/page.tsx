"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { MoreWorks } from "@/components/sections/MoreWorks";
import { ScrollParallaxCanvas } from "@/components/layout/ScrollParallaxCanvas";
import { SerendipityBanner } from "@/components/ui/SerendipityBanner";
import { BrushStrokeDivider } from "@/components/ui/BrushStrokeDivider";

export default function Home() {
  const [lang, setLang] = useState<"EN" | "ID">("EN");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("giffa_theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("giffa_theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <>
      <Navigation
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <ScrollParallaxCanvas />
      <main className="relative min-h-screen">
        <Hero lang={lang} />
        <SerendipityBanner lang={lang} />
        <About lang={lang} />
        <BrushStrokeDivider variant="terracotta" />
        <SelectedWork lang={lang} />
        <Experience lang={lang} />
        <BrushStrokeDivider variant="butter" />
        <Skills lang={lang} />
        <MoreWorks lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
