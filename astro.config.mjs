import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://htet-wai-yan.github.io",
  integrations: [mdx()],

  output: "server",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});

