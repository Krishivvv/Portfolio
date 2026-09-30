import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static site: `next build` writes plain files to out/ (deployed to Cloudflare Pages).
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
  experimental: {
    // Tailwind CSS (~36 KB, ~8 KB gzip) ships inside the HTML: no render-blocking
    // request. Measured with applied slow-4G throttling: LCP 1.8–1.9 s vs 2.4–2.6 s
    // linked on /, for ~26 KB more gzipped HTML per page.
    inlineCss: true,
  },
};

export default nextConfig;
