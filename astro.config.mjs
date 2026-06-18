import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://manuel-mosquera.github.io',
  integrations: [tailwind({ applyBaseStyles: false })],
});
