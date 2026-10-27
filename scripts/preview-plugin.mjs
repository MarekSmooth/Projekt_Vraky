// Testovací náhled všech webů na GitHub Pages (mareksmooth.github.io/Projekt_Vraky/).
// Aktivní jen s proměnnou PREVIEW_BASE (např. "/Projekt_Vraky/"), ostré buildy neovlivní:
//  - stránky dostanou noindex, aby náhled nekonkuroval ostrým doménám ve vyhledávání
//  - odkazy na ostré domény (rozcestník, patička) vedou na náhledy ostatních webů

export const PREVIEW_BASE = process.env.PREVIEW_BASE || ''

const DOMAINS = {
  'vraky-brno.cz': '',
  'autovraky-vyskov.cz': 'vyskov/',
  'autovraky-blansko.cz': 'blansko/',
  'autovraky-breclav.cz': 'breclav/',
}

export function previewPlugin() {
  if (!PREVIEW_BASE) return null

  return {
    name: 'preview-site',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html
          .replace(/<meta name="robots" content="[^"]*"\s*\/?>/g, '<meta name="robots" content="noindex, nofollow" />')
          .replace(/href="https:\/\/(?:www\.)?([a-z-]+\.cz)\//g, (match, domain) =>
            domain in DOMAINS ? `href="${PREVIEW_BASE}${DOMAINS[domain]}` : match)
      }
    }
  }
}
