import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  vite: {
    plugins: [tailwindcss()],
  },

  css: [resolve(currentDir, "./") + "/app/assets/css/main.css"],

  imports: {
    dirs: ["types"],
  },

  image: {
    provider: "vercel",
    dir: "public",
  },

  alias: {
    "@": resolve(currentDir, "./"),
  },

  modules: ["@nuxt/image"],
});
