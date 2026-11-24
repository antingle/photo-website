import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://anthonyinglephotos.com",
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
