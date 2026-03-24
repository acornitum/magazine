// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Archivo",
      cssVariable: "--font-archivo",
      weights: ["400 700"],
      subsets: ["latin"],
    },
    {
      provider: fontProviders.google(),
      name: "Jua",
      cssVariable: "--font-jua",
      fallbacks: ["Comic Sans MS", "cursive"],
      weights: ["400"],
      subsets: ["latin"],
    },
  ],
});
