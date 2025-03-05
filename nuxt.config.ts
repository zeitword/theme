import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    plugins: [
      import("@tailwindcss/vite").then((tailwindcss) => {
        return tailwindcss.default(); // Call .default()
      }),
    ],
  },

  css: [resolve(currentDir, "assets/css/main.css")],

  image: {
    provider: "vercel",
    dir: "public", // Consider 'assets/images'
  },

  modules: ["@nuxt/image"],
});
