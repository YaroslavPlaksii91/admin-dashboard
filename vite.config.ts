import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@routes': '/src/routes',
      '@services': '/src/services',
      '@utils': '/src/utils',
      '@styles': '/src/styles',
      '@hooks': '/src/hooks',
      '@store': '/src/store',
    },
  },
});
