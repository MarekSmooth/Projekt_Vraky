// Společné stavební bloky regionálních webů. Každý sites/<web>/site.js volá defineSite()
// s vlastními texty a dostane zpět plochý objekt, který plugin dosadí do šablon.

// Šířka loga v src/assets/images/logos/<id>.webp (výška je u všech 320 px)
const LOGO_WIDTH = { vyskov: 637, blansko: 674, breclav: 662 }

export const SITES = {
  brno:    { label: 'Brno a okolí', url: 'https://vraky-brno.cz/' },
  vyskov:  { label: 'Vyškov',       url: 'https://www.autovraky-vyskov.cz/' },
  blansko: { label: 'Blansko',      url: 'https://www.autovraky-blansko.cz/' },
  breclav: { label: 'Břeclav',      url: 'https://www.autovraky-breclav.cz/' },
}

const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const CARD = 'bg-gray-100/95 dark:bg-grayish-800/95 rounded-xl p-4 md:p-5 text-center'

const card = ({ icon, title, text }) => `
            <div class="${CARD}">
              <img src="/src/assets/images/icons/${icon}" alt="" width="80" height="80" class="mx-auto mb-3 h-16 md:h-20 w-auto" loading="lazy" />
              <h3 class="text-base md:text-lg font-semibold mb-2 text-green-600 dark:text-green-300">${title}</h3>
              <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">${text}</p>
            </div>`

const faqItem = ({ q, a }) => `
            <details class="group bg-gray-100/95 dark:bg-grayish-800/95 rounded-xl p-4 md:p-5">
              <summary class="cursor-pointer list-none flex justify-between items-start gap-4 font-semibold text-sm md:text-base text-green-700 dark:text-green-300">
                <span>${q}</span>
                <span class="text-xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p class="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-300">${a}</p>
            </details>`

const town = name => `
                <li class="px-3 py-1 rounded-full bg-green-600/15 dark:bg-green-400/10 text-green-800 dark:text-green-300 text-sm">${name}</li>`

// Rozcestník lokalit – stejný markup a pořadí jako na vraky-brno.cz (index.html, „Lokace“)
const SWITCHER_ORDER = ['brno', 'breclav', 'vyskov', 'blansko']

const SWITCHER_GRAPHIC = `
                <div class="location-graphic hidden md:block">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2" opacity="0.3"/>
                    <circle cx="20" cy="20" r="12" fill="currentColor" opacity="0.2"/>
                    <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.4"/>
                    <circle cx="20" cy="20" r="2" fill="currentColor"/>
                  </svg>
                </div>`

const SWITCHER_SEPARATOR = `
              <div class="hidden md:flex items-center justify-center relative h-1 md:h-auto">
                <div class="location-separator relative"></div>
              </div>`

function switcher(currentId) {
  return SWITCHER_ORDER.map((id, i) => {
    const { label, url } = SITES[id]
    const rounded = i === 0 ? ' rounded-t-xl md:rounded-l-2xl md:rounded-t-none'
      : i === SWITCHER_ORDER.length - 1 ? ' rounded-b-xl md:rounded-r-2xl md:rounded-b-none' : ''
    const cls = `location-btn bg-transparent text-white p-2 md:p-3${rounded} w-full md:w-1/4 text-left hover:bg-black/20 transition-all duration-300 relative`
    const inner = `
                <div class="flex flex-col gap-1">
                  <div class="text-base md:text-lg font-bold">${label}</div>
                </div>${SWITCHER_GRAPHIC}`
    // Aktuální web je tlačítko, ostatní odkazují na své domény
    return id === currentId
      ? `
              <button data-location="${id}" class="${cls}">${inner}
              </button>`
      : `
              <a href="${url}" target="_blank" rel="noopener" data-location="${id}" class="${cls} block">${inner}
              </a>`
  }).join(SWITCHER_SEPARATOR)
}

// Fakta o firmě – stejná pro všechny regiony
const WHY = [
  { icon: 'Certifikat.webp', title: 'Přes 10 let praxe', text: 'Autovraky na jižní Moravě vykupujeme a likvidujeme více než deset let. Za tu dobu jsme pomohli tisícům zákazníků.' },
  { icon: 'Odtah.webp', title: 'Vlastní odtahové vozy', text: 'Jezdíme se třemi odtahovými speciály Iveco Daily. S přívěsem odvezeme i více aut najednou.' },
  { icon: 'Hotovo.webp', title: 'Protokol hned na místě', text: 'Při naložení vždy dostanete protokol o převzetí s razítkem a podpisem. Nikdy nezůstanete bez dokladu.' },
  { icon: 'Komplet.webp', title: 'Žádné skryté poplatky', text: 'Odtah, likvidace i vyřízení zániku vozidla jsou zdarma. Cenu za auto znáte předem.' },
]

export function defineSite(s) {
  const self = SITES[s.id]
  const url = self.url
  const domain = new URL(url).host
  const brand = `Autovraky ${s.city}`
  const others = Object.entries(SITES).filter(([id]) => id !== s.id)

  const link = ([, o], cls) => `<a href="${o.url}" class="${cls}">${o.label}</a>`
  const siblings = others.map(o => link(o, 'underline text-green-700 dark:text-green-500 hover:text-green-600'))

  const legal = (file, title, description) => ({
    title: `${title} – ${brand}`,
    description: esc(description),
    robots: 'noindex, follow',
    canonical: url + file,
  })

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: brand,
    description: s.meta.description,
    url,
    image: `${url}og-image.jpg`,
    telephone: '+420731071218',
    email: 'info@vraky-brno.cz',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'U Hřiště 290',
      addressLocality: 'Opatovice',
      postalCode: '664 61',
      addressCountry: 'CZ',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: `okres ${s.okres}` },
      ...s.area.towns.map(name => ({ '@type': 'City', name })),
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
    ],
    sameAs: ['https://www.facebook.com/profile.php?id=100063838452115'],
    parentOrganization: { '@type': 'Organization', name: 'Vraky Brno', url: SITES.brno.url },
  }

  return {
    id: s.id,
    url,
    domain,
    brand,
    city: s.city,
    okres: s.okres,
    logoWidth: String(LOGO_WIDTH[s.id]),
    year: String(new Date().getFullYear()),

    pages: {
      index: { title: esc(s.meta.title), description: esc(s.meta.description), robots: 'index, follow', canonical: url },
      gdpr: legal('gdpr.html', 'Zásady zpracování osobních údajů', `Zásady zpracování osobních údajů pro web ${domain}.`),
      vop: legal('vop.html', 'Obchodní podmínky', `Obchodní podmínky služeb poskytovaných prostřednictvím webu ${domain}.`),
      cookies: legal('cookies.html', 'Informace o používání cookies', `Informace o používání cookies na webu ${domain}.`),
    },

    hero: s.hero,
    switcher: switcher(s.id),
    intro: { ...s.intro, html: s.intro.paragraphs.map(p => `<p>${p}</p>`).join('\n              ') },
    services: { ...s.services, cards: s.services.cards.map(card).join('') },
    area: {
      title: s.area.title,
      html: `<p>${s.area.text}</p>`,
      towns: s.area.towns.map(town).join(''),
      siblings: `Auto stojí jinde? Pomůžeme vám také v regionech ${siblings.slice(0, -1).join(', ')} a ${siblings.at(-1)}.`,
    },
    why: { title: 'Proč si vybrat nás', cards: WHY.map(card).join('') },
    faq: s.faq.map(faqItem).join(''),
    contactLead: s.contactLead,
    formPlaceholder: esc(s.formPlaceholder),
    footerLinks: others.map(o => link(o, 'hover:underline hover:text-white')).join('\n              '),
    jsonld: JSON.stringify(jsonld, null, 2).replace(/</g, '\\u003c'),

    legacyRedirects: (s.legacyRedirects ?? [])
      .map(([from, to]) => `  RewriteRule ^${from}$ ${to} [R=301,L,NE]`)
      .join('\n') || '  # (žádné)',
  }
}
