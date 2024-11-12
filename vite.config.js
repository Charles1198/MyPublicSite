import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/MyPublicSite',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
});
