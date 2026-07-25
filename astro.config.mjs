// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://DMARU9.github.io",
  base: "/",

  integrations: [],
  vite: {
    plugins: [tailwindcss()]
  }
});
