import type { Metadata } from "next";
import { Dela_Gothic_One, Plus_Jakarta_Sans, Caveat, Newsreader } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const dela = Dela_Gothic_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dela",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syaikhani Giffa Indrawan — Creative Web Developer",
  description:
    "Creative portfolio of Syaikhani Giffa Indrawan (GiffaIndr). Front-end Developer & Software Engineering student at IPB University, Bogor, Indonesia.",
  authors: [{ name: "Syaikhani Giffa Indrawan", url: "https://github.com/GiffaIndr" }],
  openGraph: {
    title: "Syaikhani Giffa Indrawan — Portfolio",
    description: "Creative Developer from Bogor, Indonesia.",
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
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${dela.variable} ${serif.variable} ${sans.variable} ${caveat.variable}`}
    >
      <body className="antialiased bg-paper dark:bg-paper-dark text-ink dark:text-ink-light">
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
