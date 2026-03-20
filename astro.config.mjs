// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://chunhuynh.github.io',
  base: '/tpe-ia',
  integrations: [
    icon({
      // Local SVGs live in src/icons/ — astro-icon serves them
      // as <Icon name="github" /> with no network request
      include: {
        heroicons: ['*'], // bundle all heroicons
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
