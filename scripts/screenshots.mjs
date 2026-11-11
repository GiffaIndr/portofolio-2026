import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const targets = [
  { slug: "akseskota", url: "https://akseskota-web.vercel.app/" },
  { slug: "railuma", url: "https://railuma.vercel.app" },
  { slug: "sadar-edu", url: "https://sadar-edu-v1.vercel.app" },
];

async function capture() {
  console.log("Launching system Chrome from:", CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  for (const t of targets) {
    const dir = path.join(process.cwd(), "public", "projects", t.slug);
    fs.mkdirSync(dir, { recursive: true });

    console.log(`Navigating to ${t.slug} (${t.url})...`);
    
    // Desktop view
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
      await page.goto(t.url, { waitUntil: "networkidle2", timeout: 45000 });
      await new Promise((r) => setTimeout(r, 2000));

      const desktopHomePath = path.join(dir, "desktop-home.webp");
      const coverPath = path.join(dir, "cover.webp");
      await page.screenshot({ path: desktopHomePath, type: "webp", quality: 85 });
      fs.copyFileSync(desktopHomePath, coverPath);
      console.log(`Saved desktop screenshot for ${t.slug}`);

      // Mobile view
      await page.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 });
      await new Promise((r) => setTimeout(r, 1000));
      const mobileHomePath = path.join(dir, "mobile-home.webp");
      await page.screenshot({ path: mobileHomePath, type: "webp", quality: 85 });
      console.log(`Saved mobile screenshot for ${t.slug}`);

      await page.close();
    } catch (err) {
      console.error(`Error capturing ${t.slug}:`, err.message);
    }
  }

  await browser.close();
  console.log("Screenshot capture complete!");
}

capture().catch((e) => {
  console.error(e);
  process.exit(1);
});
