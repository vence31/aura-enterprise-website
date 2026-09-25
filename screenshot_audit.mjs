import { chromium } from "playwright";
import path from "path";
import fs from "fs";

const artifactDir = "C:\\Users\\vence\\.gemini\\antigravity\\brain\\32569857-0c3b-4dff-92a0-6c298098e066";

async function runAudit() {
  console.log("Launching Chromium...");
  const browser = await chromium.launch({ headless: true });

  // 1. Desktop Audit (1440x900)
  console.log("Auditing Desktop viewport (1440x900)...");
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await desktopPage.waitForTimeout(1500);

  const desktopScreenshotPath = path.join(artifactDir, "desktop_audit.png");
  await desktopPage.screenshot({
    path: desktopScreenshotPath,
    fullPage: true,
  });
  console.log(`Desktop fullpage screenshot saved to: ${desktopScreenshotPath}`);

  // 2. Mobile Audit (iPhone 14 Pro: 393x852)
  console.log("Auditing Mobile viewport (393x852)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 393, height: 852 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(1500);

  const mobileScreenshotPath = path.join(artifactDir, "mobile_audit.png");
  await mobilePage.screenshot({
    path: mobileScreenshotPath,
    fullPage: true,
  });
  console.log(`Mobile fullpage screenshot saved to: ${mobileScreenshotPath}`);

  await browser.close();
  console.log("Visual Playwright audit completed successfully!");
}

runAudit().catch((err) => {
  console.error("Audit error:", err);
  process.exit(1);
});
