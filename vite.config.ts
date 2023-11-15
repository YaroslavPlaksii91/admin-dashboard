import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    globDirectory: 'dist/',
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    swDest: 'dist/sw.js',
    globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js'],
  },
  outDir: 'dist',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
  manifest: {
    name: 'Admin Dashboard',
    short_name: 'Admin Dashboard',
    description: 'Modern Admin Dashboard for Seamless Management',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
});

export default defineConfig({
  plugins: [react(), vitePWA],
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
