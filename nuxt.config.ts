import { fileURLToPath } from "url";
import { dirname, join, resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  css: [resolve(currentDir, "assets/css/main.css")],

  image: {
    provider: "vercel",
    dir: "public",
  },

  modules: ["@nuxt/image"],
});
