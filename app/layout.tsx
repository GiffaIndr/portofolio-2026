import type { Metadata } from "next";
import { Syne, Bodoni_Moda, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { FilmGrain } from "@/components/layout/FilmGrain";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "700", "800"],
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syaikhani Giffa Indrawan — Front-end & Systems Developer",
  description:
    "Creative portfolio of Syaikhani Giffa Indrawan (GiffaIndr), Front-end & Software Engineering undergraduate based in Bogor, Indonesia. Featuring RFID Absence IoT System, AksesKota, Railuma, and WebGIS.",
  keywords: [
    "Syaikhani Giffa Indrawan",
    "GiffaIndr",
    "Web Developer Bogor",
    "Front-end Developer",
    "Creative Portfolio 2026",
    "IPB University TRPL",
  ],
  authors: [{ name: "Syaikhani Giffa Indrawan", url: "https://github.com/GiffaIndr" }],
  openGraph: {
    title: "Syaikhani Giffa Indrawan — Portfolio",
    description: "Front-end & Software Engineering portfolio. Minimal, deliberate, and high-performance.",
    url: "https://giffaindr.vercel.app",
    siteName: "Syaikhani Giffa Indrawan",
    locale: "en_US",
    type: "website",
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
    jobTitle: "Front-end Developer",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "IPB University" },
      { "@type": "EducationalOrganization", name: "SMK Wikrama Bogor" },
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
      className={`${syne.variable} ${bodoni.variable} ${sans.variable} ${caveat.variable}`}
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
