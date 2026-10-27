// Sestaví testovací náhled všech čtyř webů do dist-preview/ pro GitHub Pages:
//   dist-preview/            -> vraky-brno.cz
//   dist-preview/vyskov/     -> autovraky-vyskov.cz   (stejně blansko, breclav)
// Použití: npm run build:preview  (PREVIEW_BASE lze přepsat, výchozí /Projekt_Vraky/)
import { execSync } from 'child_process'
import { cpSync, rmSync, writeFileSync } from 'fs'

const base = process.env.PREVIEW_BASE || '/Projekt_Vraky/'
const env = { ...process.env, PREVIEW_BASE: base }
const run = cmd => execSync(cmd, { stdio: 'inherit', env })
const REGIONAL = ['vyskov', 'blansko', 'breclav']

rmSync('dist-preview', { recursive: true, force: true })

run('npx vite build --outDir dist-preview --emptyOutDir')
for (const id of REGIONAL) {
  run(`npx vite build -c vite.regional.config.js --mode ${id} --outDir dist-preview/${id} --emptyOutDir`)
}

// Náhled se nemá indexovat; CNAME a .htaccess patří jen ostrému hostingu
rmSync('dist-preview/CNAME', { force: true })
for (const dir of ['', ...REGIONAL.map(id => `${id}/`)]) {
  rmSync(`dist-preview/${dir}.htaccess`, { force: true })
}
writeFileSync('dist-preview/robots.txt', 'User-agent: *\nDisallow: /\n')

console.log(`\nNáhled je v dist-preview/ (base ${base})`)
