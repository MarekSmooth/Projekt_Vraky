import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        kontakt: resolve(__dirname, 'kontakt.html'),
        onas: resolve(__dirname, 'onas.html'),
        sluzby: resolve(__dirname, 'sluzby.html'),
        cookies: resolve(__dirname, 'cookies.html'),
        gdpr: resolve(__dirname, 'gdpr.html'),
        vop: resolve(__dirname, 'vop.html'),
      }
    }
  }
})
