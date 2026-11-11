"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/sections/Preloader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { MoreWorks } from "@/components/sections/MoreWorks";

export default function Home() {
  const [lang, setLang] = useState<"EN" | "ID">("EN");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check saved theme
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
      <Preloader onComplete={() => setIsReady(true)} />
      <Navigation
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="relative min-h-screen">
        <Hero lang={lang} />
        <About lang={lang} />
        <SelectedWork lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <MoreWorks lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
