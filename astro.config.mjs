import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  output: "server",
  adapter: netlify()
});