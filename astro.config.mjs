import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://kokushin.github.io',
  base: '/cccms',
  output: 'static',
  build: {
    assets: '_astro'
  },
  integrations: [react()]
});
