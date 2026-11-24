import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Absolute URLs (link-preview images, canonical links) must point at the site
// that's actually serving the page. Vercel preview builds use their own branch
// URL; production and local builds use the real domain.
const { VERCEL_ENV, VERCEL_BRANCH_URL, VERCEL_URL } = process.env;
const previewHost = VERCEL_ENV === "preview" ? (VERCEL_BRANCH_URL ?? VERCEL_URL) : undefined;
const site = previewHost ? `https://${previewHost}` : "https://anthonyinglephotos.com";

// https://astro.build/config
export default defineConfig({
  site,
  // Every page is prerendered at build time (galleries refresh on redeploy).
  output: "static",
  adapter: vercel(),
  // Astro 7 defaults to JSX-style whitespace collapsing; keep the old HTML behavior.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
  // Old URLs from the previous site.
  redirects: {
    "/gallery": "/people",
    "/gallery/graduation": "/people#graduation",
    "/gallery/portraits": "/people#portraits",
    "/gallery/family": "/people#families",
    "/book": "/people",
    "/contact": "/about",
  },
});
