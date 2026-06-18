/**
 * Export Manu Freixas media kit as A4 PDF using Playwright.
 *
 * Usage:
 *   npm run export:pdf
 *
 * Requirements:
 *   npm install -D playwright
 *   npx playwright install chromium
 *
 * The Next.js dev server must be running (npm run dev) before executing this script,
 * OR use the --build flag to run a production build first.
 */

import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUTPUT_DIR = join(ROOT, "exports");
const OUTPUT_FILE = join(OUTPUT_DIR, "Manu-Freixas-Media-Kit.pdf");

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";
const PDF_URL = `${BASE_URL}/media-kit-pdf`;

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("Launching Chromium…");
  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext({
    viewport: { width: 794, height: 1123 }, // approx A4 @ 96dpi
  });

  const page = await context.newPage();

  console.log(`Opening ${PDF_URL} …`);
  await page.goto(PDF_URL, { waitUntil: "networkidle", timeout: 60_000 });

  // Give fonts / images a moment to settle after network idle
  await page.waitForTimeout(2_000);

  console.log(`Exporting PDF → ${OUTPUT_FILE}`);
  await page.pdf({
    path: OUTPUT_FILE,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    preferCSSPageSize: true,
  });

  await browser.close();

  console.log("Done!  PDF saved to:");
  console.log(`  ${OUTPUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
