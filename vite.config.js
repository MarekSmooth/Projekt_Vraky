import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Projects_Vraky/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        kontakt: resolve(__dirname, 'kontakt.html'),
        onas: resolve(__dirname, 'onas.html'),
        sluzby: resolve(__dirname, 'sluzby.html'),
        gdpr: resolve(__dirname, 'gdpr.html'),
        vop: resolve(__dirname, 'vop.html'),
        cookies: resolve(__dirname, 'cookies.html'),
      }
    }
  },
  server: {
    open: true
  }
})
