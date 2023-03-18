import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "astro/config";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs()],
  experimental: {
    assets: true,
  },
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
