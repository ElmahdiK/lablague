import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://elmahdik.github.io',
  base: 'lablague',
  integrations: [react()]
});