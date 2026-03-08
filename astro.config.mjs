// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Jua",
        cssVariable: "--font-jua",
        fallbacks: ["Comic Sans MS", "cursive"],
        weights: ["400"],
        subsets: ["latin"],
      },
    ],
  },
});
