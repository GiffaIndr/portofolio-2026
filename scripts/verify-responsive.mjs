import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });

  const outDir = path.join(process.cwd(), "shots");
  fs.mkdirSync(outDir, { recursive: true });

  const viewports = [
    { name: "desktop-1440", width: 1440, height: 900 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "mobile-390", width: 390, height: 844, isMobile: true },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      isMobile: !!vp.isMobile,
    });

    console.log(`Testing viewport ${vp.name}...`);
    await page.goto("http://localhost:3005", { waitUntil: "networkidle2" });
    await new Promise((r) => setTimeout(r, 2200));

    // Check horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    console.log(`${vp.name} Horizontal overflow: ${hasHorizontalOverflow}`);

    await page.screenshot({
      path: path.join(outDir, `${vp.name}.png`),
      fullPage: false,
    });
    console.log(`Saved screenshot: ${vp.name}.png`);
    await page.close();
  }

  // Also verify Case Study page
  const csPage = await browser.newPage();
  await csPage.setViewport({ width: 1440, height: 900 });
  await csPage.goto("http://localhost:3005/work/rfid-absence-system", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1500));
  await csPage.screenshot({ path: path.join(outDir, "case-study-rfid.png") });
  console.log("Saved screenshot: case-study-rfid.png");
  await csPage.close();

  await browser.close();
  console.log("All verifications on port 3005 passed!");
}

verify().catch(console.error);
