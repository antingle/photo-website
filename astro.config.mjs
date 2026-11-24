import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  // Pages are prerendered by default; contact.astro opts out with `prerender = false`.
  output: "static",
  adapter: vercel({ imageService: true }),
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
  redirects: {
    "/": "/gallery/graduation", // this is not ideal, but its for logical navigation in gallery
    "/gallery": "/gallery/graduation",
  },
});
