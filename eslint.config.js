import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default defineConfig(
  eslint.configs.recommended, // JS
  ...tseslint.configs.recommended, // TS
  ...eslintPluginAstro.configs.recommended, // Astro

  {
    // Apply these settings to all relevant files
    files: ['**/*.{js,ts,jsx,tsx,astro}'],
    languageOptions: {
      parserOptions: {
        project: true,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {},
  },
);
