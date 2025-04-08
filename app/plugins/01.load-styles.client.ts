// Import the main CSS file using the alias defined in the layer's nuxt.config
import "@/app/assets/css/main.css";

export default defineNuxtPlugin(() => {
  // This plugin doesn't need to do anything else.
  // The act of importing the CSS file above is enough
  // for Nuxt's build process to include it.
});
