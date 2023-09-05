import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@layout': '/src/layout',
      '@pages': '/src/pages',
      '@redux': '/src/redux',
      '@assets': '/src/assets',
      '@routes': '/src/routes',
      '@services': '/src/services',
      '@utils': '/src/utils',
    },
  },
});
