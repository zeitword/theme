import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

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
