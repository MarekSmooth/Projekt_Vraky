import { readFileSync } from 'fs'
import { resolve, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(HERE, '..', '..')
const PARTIALS = resolve(HERE, 'partials')

// Soubory z public/, které potřebuje i každý regionální web
const SHARED_PUBLIC = ['okresy-brno.geojson', 'plnamoc.pdf', 'favicon.png', 'apple-touch-icon.png', 'og-image.jpg']

// <!-- @partial nav --> vloží sites/regional/partials/nav.html
function includePartials(html) {
  let prev
  do {
    prev = html
    html = html.replace(/<!--\s*@partial\s+([\w-]+)\s*-->/g, (_, name) =>
      readFileSync(resolve(PARTIALS, `${name}.html`), 'utf8'))
  } while (html !== prev)
  return html
}

// {{klic}} nahradí hodnotou z dat webu; neznámý klíč je chyba, ať se překlep neobjeví na webu
function fillPlaceholders(html, data, file) {
  return html.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, key) => {
    const value = key.split('.').reduce((obj, k) => obj?.[k], data)
    if (value === undefined) throw new Error(`[regional] ${file}: chybí hodnota pro {{${key}}}`)
    return value
  })
}

export function regionalSite(data) {
  return {
    name: 'regional-site',
    enforce: 'post',

    // publicDir je vypnutý, v dev režimu proto sdílené soubory servírujeme ručně
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const name = req.url.split('?')[0].slice(1)
        if (!SHARED_PUBLIC.includes(name)) return next()
        res.end(readFileSync(resolve(ROOT, 'public', name)))
      })
    },

    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const page = basename(ctx.filename, '.html')
        const pageData = { ...data, page: data.pages[page] ?? {} }
        return fillPlaceholders(includePartials(html), pageData, ctx.filename)
      }
    },

    generateBundle: {
      order: 'post',
      handler(_, bundle) {
        // sites/regional/index.html -> index.html (odkazy na assety jsou absolutní, cesta HTML je jedno)
        for (const file of Object.values(bundle)) {
          if (file.fileName.endsWith('.html')) file.fileName = basename(file.fileName)
        }

        for (const name of SHARED_PUBLIC) {
          this.emitFile({ type: 'asset', fileName: name, source: readFileSync(resolve(ROOT, 'public', name)) })
        }

        const htaccess = readFileSync(resolve(HERE, 'htaccess.txt'), 'utf8')
        this.emitFile({ type: 'asset', fileName: '.htaccess', source: fillPlaceholders(htaccess, data, 'htaccess.txt') })

        this.emitFile({
          type: 'asset',
          fileName: 'robots.txt',
          source: `User-agent: *\nAllow: /\n\nSitemap: ${data.url}sitemap.xml\n`
        })

        // Právní stránky mají noindex (jsou stejné na všech doménách), v sitemapě je jen úvod
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
            `  <url>\n    <loc>${data.url}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`
        })
      }
    }
  }
}
