import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kokushin.github.io',
  base: '/cccms',
  output: 'static',
  build: {
    assets: '_astro'
  }
});
