// lib/scroll.ts
// Official GSAP + ScrollTrigger + Lenis Smooth Scroll Engine
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function initScroll() {
  if (typeof window === "undefined") return null;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  const lenis = new Lenis({
    lerp: 0.085, // "Berat" dan mewah: scroll terasa berbobot, tenang, dan stabil
    wheelMultiplier: 0.9,
    smoothWheel: true,
    syncTouch: false, // Sentuhan mobile memakai scroll native agar presisi
  });

  lenis.on("scroll", ScrollTrigger.update);

  const tickerCallback = (time: number) => {
    lenis.raf(time * 1000);
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    destroy: () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    },
  };
}
