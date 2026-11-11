import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT_DIR = "C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\ab6a3057-2262-4453-94a4-e779153b3f19\\preview";

fs.mkdirSync(OUT_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log("Navigating to http://localhost:3005...");
  await page.goto("http://localhost:3005", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1500));

  // Capture light mode hero and full page
  await page.screenshot({ path: path.join(OUT_DIR, "light-hero.webp"), type: "webp", quality: 80 });
  
  // Scroll down a bit to see sections
  await page.evaluate(() => window.scrollTo(0, 1000));
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, "light-work.webp"), type: "webp", quality: 80 });

  await page.evaluate(() => window.scrollTo(0, 2200));
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, "light-serendipity.webp"), type: "webp", quality: 80 });

  // Now switch to dark mode
  await page.evaluate(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  });
  await new Promise((r) => setTimeout(r, 1000));

  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, "dark-hero.webp"), type: "webp", quality: 80 });

  await page.evaluate(() => window.scrollTo(0, 1000));
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, "dark-work.webp"), type: "webp", quality: 80 });

  await page.evaluate(() => window.scrollTo(0, 2200));
  await new Promise((r) => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUT_DIR, "dark-serendipity.webp"), type: "webp", quality: 80 });

  await browser.close();
  console.log("Screenshots captured to:", OUT_DIR);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
