// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: "https://juanmderosa-developer.com",
  integrations: [react(), sitemap(), playformCompress()],
  output: "server",
  adapter: vercel(),
});
