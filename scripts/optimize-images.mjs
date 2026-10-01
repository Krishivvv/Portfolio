// Static hosting has no image optimizer, so the website screenshots (and the
// portrait, when present) are pre-sized here:
// assets/sites/<name>.jpg → public/sites/<name>-<width>.webp.
// Runs before every build (see package.json "prebuild"); lib/image-loader.ts
// picks the right width at runtime.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const WIDTHS = [480, 800, 1200, 1440];

const out = "public/sites";
fs.mkdirSync(out, { recursive: true });

async function sizes(file, name) {
  for (const width of WIDTHS) {
    const target = path.join(out, `${name}-${width}.webp`);
    if (fs.existsSync(target) && fs.statSync(target).mtimeMs > fs.statSync(file).mtimeMs) continue;
    await sharp(file).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(target);
  }
}

for (const file of fs.readdirSync("assets/sites").filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  await sizes(path.join("assets/sites", file), path.parse(file).name);
}

// Krishiv's portrait, once it is added as assets/photo.jpg (or .jpeg/.png):
// public/sites/photo-<width>.webp, which components/portrait.tsx picks up.
const photo = fs.readdirSync("assets").find((f) => /^photo\.(jpe?g|png)$/i.test(f));
if (photo) await sizes(path.join("assets", photo), "photo");
