import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  output: "server",
  adapter: netlify(),
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
