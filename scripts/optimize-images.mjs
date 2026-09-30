// Static hosting has no image optimizer, so the website screenshots are
// pre-sized here: assets/sites/<name>.jpg → public/sites/<name>-<width>.webp.
// Runs before every build (see package.json "prebuild"); lib/image-loader.ts
// picks the right width at runtime.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const WIDTHS = [480, 800, 1200, 1440];

const src = "assets/sites";
const out = "public/sites";
fs.mkdirSync(out, { recursive: true });

for (const file of fs.readdirSync(src).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const name = path.parse(file).name;
  for (const width of WIDTHS) {
    const target = path.join(out, `${name}-${width}.webp`);
    if (fs.existsSync(target) && fs.statSync(target).mtimeMs > fs.statSync(path.join(src, file)).mtimeMs) continue;
    await sharp(path.join(src, file)).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(target);
  }
}
