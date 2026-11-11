import type { Metadata } from "next";
import { Bodoni_Moda, Instrument_Serif, Caveat, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { FilmGrain } from "@/components/layout/FilmGrain";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syaikhani Giffa Indrawan — Web Developer & Front-end Specialist",
  description:
    "Portfolio of Syaikhani Giffa Indrawan (GiffaIndr). Front-end & Web Developer based in Bogor, Indonesia. Featuring RFID Absence IoT System, AksesKota Accessibility Map, Railuma Braille Workspace, and WebGIS.",
  keywords: [
    "Syaikhani Giffa Indrawan",
    "GiffaIndr",
    "Web Developer Bogor",
    "Front-end Developer Indonesia",
    "IPB University TRPL",
    "RFID Absence System",
    "AksesKota",
    "Railuma",
    "Portfolio 2026",
  ],
  authors: [{ name: "Syaikhani Giffa Indrawan", url: "https://github.com/GiffaIndr" }],
  creator: "Syaikhani Giffa Indrawan",
  openGraph: {
    title: "Syaikhani Giffa Indrawan — Web Developer Portfolio",
    description:
      "Editorial travel journal & engineering portfolio of Syaikhani Giffa Indrawan. Crafting intentional digital experiences from Bogor.",
    url: "https://giffaindr.vercel.app",
    siteName: "Syaikhani Giffa Indrawan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syaikhani Giffa Indrawan — Web Developer Portfolio",
    description: "Front-end developer & software engineering undergraduate at IPB University, Bogor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Syaikhani Giffa Indrawan",
    alternateName: "GiffaIndr",
    jobTitle: "Web Developer & Front-end Engineer",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "IPB University",
      },
      {
        "@type": "EducationalOrganization",
        name: "SMK Wikrama Bogor",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogor",
      addressRegion: "Jawa Barat",
      addressCountry: "ID",
    },
    sameAs: [
      "https://github.com/GiffaIndr",
      "https://www.linkedin.com/in/syaikhanigiffa/",
      "https://www.instagram.com/giffaa_indr",
    ],
  };

  return (
    <html
      lang="en"
      data-theme="light"
      className={`${bodoni.variable} ${instrument.variable} ${caveat.variable} ${mono.variable} ${sans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-cream text-ink">
        <FilmGrain />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
