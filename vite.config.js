import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Three static pages. File names are part of the public URLs
// (the printed QR code points to /pixel-powerpoint/words.html), so keep them.
const pages = {
  deck: resolve(import.meta.dirname, 'index.html'),
  words: resolve(import.meta.dirname, 'words.html'),
  script: resolve(import.meta.dirname, 'hennge.html'),
}

export default defineConfig({
  // GitHub Pages serves the site under /<repository>/
  base: process.env.BASE_PATH ?? '/pixel-powerpoint/',
  plugins: [vue()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: { rollupOptions: { input: pages } },
})
