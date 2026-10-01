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
    // rotate() applies the camera's EXIF orientation, so phone photos stand upright.
    await sharp(file).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(target);
  }
}

for (const file of fs.readdirSync("assets/sites").filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  await sizes(path.join("assets/sites", file), path.parse(file).name);
}

// Krishiv's portrait, once it is added as assets/photo.jpg (or .jpeg/.png):
// public/sites/photo-<width>.webp, which components/portrait.tsx picks up.
const photo = fs.readdirSync("assets").find((f) => /^photo\.(jpe?g|png)$/i.test(f));
if (photo) await sizes(path.join("assets", photo), "photo");

// "Life outside work" media (components/life-outside-work.tsx): photos in
// assets/life/ become public/sites/life-<name>-<width>.webp; videos are copied
// to public/life/. Cloudflare Pages refuses files over 25 MiB, so a larger
// video stops the build with a message instead of failing the deploy later.
if (fs.existsSync("assets/life")) {
  // Upright pixel sizes of each photo, so the page can frame it at its own shape.
  const dims = {};
  for (const file of fs.readdirSync("assets/life")) {
    const full = path.join("assets/life", file);
    if (/\.(jpe?g|png)$/i.test(file)) {
      await sizes(full, `life-${path.parse(file).name}`);
      const meta = await sharp(full).metadata();
      const turned = (meta.orientation ?? 1) >= 5;
      dims[path.parse(file).name] = turned ? [meta.height, meta.width] : [meta.width, meta.height];
    }
    if (/\.(mp4|webm)$/i.test(file)) {
      const mib = fs.statSync(full).size / 1024 / 1024;
      if (mib > 25) throw new Error(`${full} is ${mib.toFixed(1)} MiB; Cloudflare Pages allows 25 MiB per file. Compress it first.`);
      fs.mkdirSync("public/life", { recursive: true });
      const target = path.join("public/life", file);
      if (!fs.existsSync(target) || fs.statSync(target).mtimeMs < fs.statSync(full).mtimeMs) fs.copyFileSync(full, target);
    }
  }
  fs.writeFileSync("public/sites/life-media.json", `${JSON.stringify(dims, null, 2)}\n`);
}
