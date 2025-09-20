// astro.config.mjs
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro'; // Import from the new package

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      // You can find these in your sanity.cli.ts file
      projectId: 'ubgedpgo',
      dataset: 'production',
      // Use the latest API version
      apiVersion: '2024-09-18',
      useCdn: false,
    }),
  ],
});