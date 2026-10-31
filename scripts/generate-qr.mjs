import QRCode from "qrcode";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const destination = "https://scalpyasamin.com";
const outputDir = resolve(dirname(fileURLToPath(import.meta.url)), "../public/qr");
await mkdir(outputDir, { recursive: true });
await QRCode.toFile(resolve(outputDir, "scalpyasamin-website.png"), destination, {
  type: "png", errorCorrectionLevel: "H", margin: 4, width: 1024, color: { dark: "#183a29", light: "#ffffff" },
});
const svg = await QRCode.toString(destination, { type: "svg", errorCorrectionLevel: "H", margin: 4, color: { dark: "#183a29", light: "#ffffff" } });
await writeFile(resolve(outputDir, "scalpyasamin-website.svg"), svg, "utf8");
console.log(`QR code saved for ${destination}`);
