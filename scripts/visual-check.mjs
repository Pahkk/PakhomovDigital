import { chromium } from "playwright";

const url = "http://localhost:5173/";
const viewports = [
  ["desktop", { width: 1440, height: 1100 }],
  ["mobile", { width: 390, height: 900 }]
];

const browser = await chromium.launch();

for (const [name, viewport] of viewports) {
  const page = await browser.newPage({ viewport });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForSelector("img[alt*='Business app mockup']");
  await page.waitForTimeout(500);
  await page.screenshot({ path: `test-results/${name}.png`, fullPage: false });

  const result = await page.evaluate(() => {
    const image = document.querySelector("img[alt*='Business app mockup']");
    const rect = image.getBoundingClientRect();
    return {
      loaded: image.complete && image.naturalWidth > 0,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      visibleWidth: Math.round(rect.width),
      visibleHeight: Math.round(rect.height)
    };
  });

  console.log(`${name}: ${JSON.stringify(result)}`);
  await page.close();
}

await browser.close();
