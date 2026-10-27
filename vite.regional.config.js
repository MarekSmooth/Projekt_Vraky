import { defineConfig } from 'vite'
import { resolve } from 'path'
import { existsSync } from 'fs'
import { pathToFileURL } from 'url'
import { regionalSite } from './sites/regional/plugin.js'

// Regionální weby (autovraky-vyskov.cz, ...) – web se vybírá přes --mode:
//   vite build -c vite.regional.config.js --mode vyskov  ->  dist-sites/vyskov
export default defineConfig(async ({ mode }) => {
  const sitePath = resolve(__dirname, 'sites', mode, 'site.js')
  if (!existsSync(sitePath)) {
    throw new Error(`Neznámý web "${mode}". Použij --mode vyskov | blansko | breclav`)
  }
  const { default: site } = await import(pathToFileURL(sitePath).href)
  const page = name => resolve(__dirname, 'sites/regional', `${name}.html`)

  return {
    base: '/',
    publicDir: false,
    plugins: [regionalSite(site)],
    build: {
      outDir: `dist-sites/${mode}`,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          index: page('index'),
          gdpr: page('gdpr'),
          vop: page('vop'),
          cookies: page('cookies'),
        }
      }
    },
    server: {
      open: '/sites/regional/index.html'
    }
  }
})
