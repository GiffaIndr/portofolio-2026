"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CreditCard, Cpu, Server, Database, LayoutDashboard } from "lucide-react";

export function RfidSignalArchitectureFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const pulseX = useTransform(smooth, [0.1, 0.85], ["0%", "100%"]);
  const pathDraw = useTransform(smooth, [0.1, 0.85], [0, 1]);

  const nodes = [
    {
      title: "MFRC522 RFID Card",
      detail: "13.56MHz Contactless Card Tap",
      icon: CreditCard,
      color: "#2563EB",
      step: "01",
    },
    {
      title: "ESP8266 NodeMCU",
      detail: "Hardware WiFi & I2C LCD Controller",
      icon: Cpu,
      color: "#EA580C",
      step: "02",
    },
    {
      title: "Laravel 10 REST API",
      detail: "X-API-KEY Gated Endpoint /api/rfid",
      icon: Server,
      color: "#DC2626",
      step: "03",
    },
    {
      title: "MySQL 8 Database",
      detail: "70% Task Threshold & Carry-over",
      icon: Database,
      color: "#0891B2",
      step: "04",
    },
    {
      title: "HRD & Staff Dashboard",
      detail: "Real-time KPI Score & Excel Export",
      icon: LayoutDashboard,
      color: "#059669",
      step: "05",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1E1E1B] border border-black/10 dark:border-white/10 shadow-sm space-y-6 select-none"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 dark:border-white/10 pb-4">
        <div>
          <span className="text-[11px] font-sans font-semibold tracking-wider text-[#2563EB] dark:text-[#60A5FA] uppercase block">
            System Architecture Signal Flow
          </span>
          <h4 className="font-serif text-xl sm:text-2xl text-ink dark:text-white font-normal">
            Physical IoT to Production Web Pipeline
          </h4>
        </div>
        <div className="flex items-center gap-2 text-xs font-sans text-ink/60 dark:text-ink-lightDim">
          <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
          <span>Live Hardware Pipeline</span>
        </div>
      </div>

      {/* Responsive Horizontal Pipeline on desktop, stacked on mobile */}
      <div className="relative pt-4 pb-2">
        {/* Animated Connecting Line on Desktop */}
        <div className="hidden lg:block absolute top-[52px] left-10 right-10 h-[3px] bg-black/10 dark:bg-white/10 -z-0">
          <motion.div
            style={{ width: pulseX }}
            className="h-full bg-gradient-to-r from-[#2563EB] via-[#EA580C] to-[#059669] origin-left"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {nodes.map((node, i) => {
            const IconComponent = node.icon;
            return (
              <div
                key={i}
                className="p-4 rounded-2xl bg-paper/60 dark:bg-black/25 border border-black/5 dark:border-white/5 space-y-3 flex flex-col justify-between transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div
                    style={{ backgroundColor: `${node.color}15`, color: node.color }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-sans font-bold text-ink/40 dark:text-white/40">
                    STEP {node.step}
                  </span>
                </div>

                <div>
                  <h5 className="font-serif text-sm text-ink dark:text-white font-medium">
                    {node.title}
                  </h5>
                  <p className="text-xs text-ink/65 dark:text-ink-lightDim font-sans mt-0.5 leading-relaxed">
                    {node.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
