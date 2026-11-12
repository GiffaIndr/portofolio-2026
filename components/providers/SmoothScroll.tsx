"use client";

import React, { useEffect } from "react";
import { initScroll } from "@/lib/scroll";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const scrollInstance = initScroll();

    return () => {
      scrollInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
}
