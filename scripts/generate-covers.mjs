import puppeteer from "puppeteer-core";
import fs from "node:fs";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function generate() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const cards = [
    {
      path: "public/projects/rfid-absence-system/cover.webp",
      accent: "#D9622B",
      title: "RFID ABSENCE SYSTEM V2",
      badge: "IOT / FULLSTACK",
      subtitle: "ESP8266 + MFRC522 + Laravel 10 + 70% KPI Gate",
    },
    {
      path: "public/projects/rfid-absence-system/circuit-mockup.webp",
      accent: "#D9622B",
      title: "ESP8266 HARDWARE CIRCUIT",
      badge: "IOT SCHEMATIC",
      subtitle: "NodeMCU, MFRC522 RFID 13.56MHz, LCD 16x2 I2C, Active Buzzer",
    },
    {
      path: "public/projects/rfid-absence-system/dashboard-mockup.webp",
      accent: "#D9622B",
      title: "HRD MANAGEMENT DESK",
      badge: "ENTERPRISE PORTAL",
      subtitle: "Employee Roster, Live Clock Status, and Weighted KPI Scoring",
    },
    {
      path: "public/projects/one-percent-mobile/cover.webp",
      accent: "#F2D13B",
      title: "1% BETTER MOBILE",
      badge: "ANDROID / JAVA",
      subtitle: "Atomic Habit Loops, Camera Proof & Social Streaks",
    },
    {
      path: "public/projects/one-percent-mobile/mockup.webp",
      accent: "#F2D13B",
      title: "HABIT TRACKER INTERFACE",
      badge: "MOBILE SCREENS",
      subtitle: "Daily Challenges, Streak Calendars, and Peer Accountability",
    },
    {
      path: "public/projects/kac-play/cover.webp",
      accent: "#D9622B",
      title: "KAC PLAY MANAGEMENT",
      badge: "FULLSTACK / LARAVEL",
      subtitle: "Kids Activity Club Registration, Mentor Roster & Excel Analytics",
    },
    {
      path: "public/projects/p5-control-system/cover.webp",
      accent: "#3E7D2F",
      title: "P5 CONTROL SYSTEM",
      badge: "WEB / NEXT.JS",
      subtitle: "Campus Cleanliness & Student Project Milestone Tracker",
    },
    {
      path: "public/experience/placeholder.webp",
      accent: "#3E7D2F",
      title: "FIELD EXPERIENCE",
      badge: "COMMUNITY & ACADEMIC",
      subtitle: "IPB University TRPL & Community Volunteering Initiatives",
    },
  ];

  for (const c of cards) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 750, deviceScaleFactor: 2 });
    const html = `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body {
          margin: 0; padding: 64px;
          background: #F3EBDD;
          font-family: 'Courier New', monospace;
          color: #1B1A17;
          box-sizing: border-box;
          height: 100vh;
          display: flex; flex-direction: column; justify-content: space-between;
          border: 12px solid #EADBCC;
        }
        .header { display: flex; justify-content: space-between; align-items: center; }
        .tag {
          font-size: 15px; letter-spacing: 0.16em; font-weight: 800;
          color: #FFFFFF; background: ${c.accent};
          padding: 8px 18px; border-radius: 9999px;
        }
        .hud { font-size: 13px; letter-spacing: 0.16em; opacity: 0.65; }
        .body { margin-top: auto; margin-bottom: auto; }
        .title {
          font-family: Georgia, serif; font-size: 56px; font-weight: 900;
          letter-spacing: -0.02em; margin: 0 0 16px 0; line-height: 1.05;
        }
        .sub { font-size: 22px; opacity: 0.85; max-width: 860px; font-family: -apple-system, sans-serif; line-height: 1.4; }
        .footer {
          border-top: 1.5px solid rgba(27,26,23,0.15);
          padding-top: 24px; display: flex; justify-content: space-between;
          font-size: 13px; opacity: 0.7; font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <span class="tag">${c.badge}</span>
        <span class="hud">SYAIKHANI GIFFA // ARTIFACT REPO</span>
      </div>
      <div class="body">
        <h1 class="title">${c.title}</h1>
        <div class="sub">${c.subtitle}</div>
      </div>
      <div class="footer">
        <span>VERIFIED CODEBASE ARTIFACT</span>
        <span>BOGOR, ID · 2024-2025</span>
      </div>
    </body>
    </html>`;

    await page.setContent(html);
    await page.screenshot({ path: c.path, type: "webp", quality: 90 });
    await page.close();
    console.log("Generated:", c.path);
  }
  await browser.close();
  console.log("All covers generated successfully!");
}

generate().catch(console.error);
