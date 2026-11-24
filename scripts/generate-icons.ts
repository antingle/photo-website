/// <reference types="bun" />
/**
 * Regenerates the PNG/ICO app icons from scripts/icons/icon-app.svg.
 * public/favicon.svg (the browser-tab icon) is hand-written and not generated.
 *
 * Run with: bun run icons
 */
import sharp from "sharp";

const source = "scripts/icons/icon-app.svg";
const out = "public";

const pngs = [
  { file: "apple-touch-icon.png", size: 180 },
  { file: "icon-192.png", size: 192 },
  { file: "icon-512.png", size: 512 },
];

const render = (size: number) =>
  sharp(source, { density: (72 * size) / 64 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();

for (const { file, size } of pngs) {
  await Bun.write(`${out}/${file}`, await render(size));
  console.log(`${out}/${file}`);
}

// favicon.ico for older browsers: a single 32×32 PNG wrapped in an ICO header.
const png32 = await render(32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8); // palette size
header.writeUInt8(0, 9); // reserved
header.writeUInt16LE(1, 10); // color planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(png32.length, 14); // image size
header.writeUInt32LE(22, 18); // image offset
await Bun.write(`${out}/favicon.ico`, Buffer.concat([header, png32]));
console.log(`${out}/favicon.ico`);
