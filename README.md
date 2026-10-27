# Vraky Brno - Webová stránka

Statická webová stránka pro služby odtahu a likvidace vozidel v okolí Brna.

🌐 **Live verze: https://mareksmooth.github.io/Projekt_Vraky/**

## 🚀 Technologie

- **Vite** - Rychlý build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Leaflet** - Interaktivní mapy
- **Vanilla JavaScript (ES Modules)** - Bez frameworků

## 📁 Struktura projektu

```
projekt/
├── src/
│   ├── assets/
│   │   ├── images/          # Všechny obrázky
│   │   │   ├── backgrounds/ # Pozadí stránky
│   │   │   ├── icons/       # Ikony a ilustrace
│   │   │   └── Logo.png     # Logo firmy
│   │   └── files/           # PDF, GeoJSON soubory
│   ├── scripts/
│   │   ├── main.js          # Hlavní vstupní bod
│   │   ├── navigation.js    # Navigace a theme toggle
│   │   ├── locations.js     # Výběr lokací
│   │   └── map.js           # Leaflet mapa
│   └── styles/
│       └── main.css         # Tailwind + custom styly
├── index.html
├── kontakt.html
├── onas.html
├── sluzby.html
├── gdpr.html
├── vop.html
├── cookies.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🛠️ Instalace a spuštění

### Instalace závislostí
```bash
npm install
```

### Vývoj (development server)
```bash
npm run dev
```
Server běží na `http://localhost:5173`

### Build pro produkci
```bash
npm run build
```
Výstup v složce `dist/`

### Preview produkčního buildu
```bash
npm run preview
```

## 🗺️ Regionální weby

Jednostránkové weby autovraky-vyskov.cz, autovraky-blansko.cz a autovraky-breclav.cz se staví ze stejného kódu jako hlavní web.

```
sites/
├── regional/            # společná šablona
│   ├── index.html       # jednostránkový web (sekce + partialy)
│   ├── gdpr.html, vop.html, cookies.html
│   ├── partials/        # head, nav, steps, contact, footer
│   ├── helpers.js       # skládá data webu do HTML, meta a JSON-LD
│   ├── htaccess.txt     # šablona .htaccess
│   └── plugin.js        # Vite plugin (partialy, {{proměnné}}, robots, sitemap)
├── vyskov/site.js       # texty a nastavení konkrétního webu
├── blansko/site.js
└── breclav/site.js
```

Texty se upravují jen v `sites/<web>/site.js`.

```bash
npm run dev:vyskov        # vývojový server
npm run build:vyskov      # -> dist-sites/vyskov
npm run build:regional    # všechny tři regionální weby
npm run build:all         # hlavní web + regionální weby
```

Na FTP dané domény se nahrává **obsah** složky `dist-sites/<web>/` (včetně skrytého `.htaccess`).

## ✨ Funkce

- **Responzivní design** - Optimalizováno pro mobil, tablet i desktop
- **Dark/Light mode** - Přepínání témat s uložením do localStorage
- **Multi-page aplikace** - Více HTML stránek s optimalizovaným buildem
- **Interaktivní mapa** - Zobrazení pokrytých okresů pomocí Leaflet
- **Výběr lokací** - Dynamická změna kontaktních údajů podle vybrané lokace

## 📝 Změny oproti původní verzi

### Optimalizace
- ✅ Odstranění React (nepoužívaný)
- ✅ Tailwind instalovaný lokálně (ne CDN)
- ✅ Veškerý JavaScript v modulech
- ✅ Žádný duplicitní kód
- ✅ Optimalizované buildy pro produkci

### Nová struktura
- ✅ Organizované obrázky v `src/assets/images/`
- ✅ Separované JavaScript moduly
- ✅ Centralizované styly
- ✅ Multi-page build konfigurace

## 🔧 Konfigurace

### Vite
- Base path: `/Projects_Vraky/` (pro GitHub Pages)
- Multi-page setup pro všechny HTML stránky

### Tailwind
- Dark mode: class-based
- Custom colors: `grayish` paleta
- Custom font: Inter

## 📦 Další kroky

Pro přidání kontaktního formuláře doporučuji:

1. **EmailJS** (nejjednodušší)
   ```bash
   npm install @emailjs/browser
   ```
   
2. **Formspree** - HTML integrace bez JS

3. **Netlify Forms** - pokud hostujete na Netlify

## 📄 Licence

© 2025 Vraky Brno. Všechna práva vyhrazena.
