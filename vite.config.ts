import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        glowna: resolve(__dirname, 'index.html'),
        kontakt: resolve(__dirname, 'kontakt/index.html'),
        szybkiStart: resolve(__dirname, 'szybki-start/index.html'),
        zglosKawal: resolve(__dirname, 'zglos/index.html')
      }
    }
  }
});