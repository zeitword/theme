import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    plugins: [
      import("@tailwindcss/vite").then((tailwindcss) => {
        return tailwindcss.default();
      }),
    ],
  },

  css: [resolve(currentDir, "assets/css/main.css")],

  image: {
    provider: "vercel",
    dir: "public",
  },

  alias: {
    "@": resolve(currentDir, "./"),
    "base-theme": resolve(currentDir, "./"),
  },

  modules: ["@nuxt/image"],
});
