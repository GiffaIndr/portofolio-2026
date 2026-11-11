import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col justify-between p-8 sm:p-14 select-none">
      <div className="flex justify-between items-center font-hud text-xs opacity-60">
        <span>404 ERROR // ROUTE NOT FOUND</span>
        <span>BOGOR HIGHLANDS TRAILHEAD</span>
      </div>

      <div className="max-w-xl mx-auto text-center space-y-6 my-auto">
        <div className="inline-flex p-4 rounded-full bg-terracotta/10 text-terracotta">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>
        <h1 className="font-display-condensed text-5xl sm:text-7xl leading-tight">
          YOU'VE WANDERED <br />
          <span className="font-editorial-italic lowercase text-terracotta">
            off the trail.
          </span>
        </h1>
        <p className="font-sans text-base sm:text-lg opacity-80 leading-relaxed">
          The coordinates you requested do not exist in this field index. Retrace your steps back to the primary expedition.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-cream hover:bg-terracotta transition-colors font-hud text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO EXPEDITION BASE</span>
          </Link>
        </div>
      </div>

      <div className="font-hud text-xs opacity-50 text-center">
        SYAIKHANI GIFFA INDRAWAN // FIELD JOURNAL 2026
      </div>
    </div>
  );
}
