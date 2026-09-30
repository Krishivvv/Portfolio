// next/image loader for static hosting. Screenshots are pre-sized by
// scripts/optimize-images.mjs; this maps a requested width to the smallest
// generated file that covers it.
const WIDTHS = [480, 800, 1200, 1440];

export default function imageLoader({ src, width }: { src: string; width: number }) {
  // Static imports resolve to /_next/static/media/<name>.<hash>.<ext>.
  const name = src.match(/\/([a-z0-9-]+)\.[a-z0-9_-]+\.(?:jpe?g|png)$/i)?.[1];
  if (!name) return src;
  const size = WIDTHS.find((w) => w >= width) ?? WIDTHS[WIDTHS.length - 1];
  return `/sites/${name}-${size}.webp`;
}
