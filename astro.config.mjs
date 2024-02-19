import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel({ imageService: true, webAnalytics: { enabled: true } }),
  output: "hybrid",
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
  redirects: {
    "/": "/gallery/graduation", // this is not ideal, but its for logical navigation in gallery
    "/gallery": "gallery/graduation",
  },
});
