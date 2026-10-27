import { defineSite } from '../regional/helpers.js'

export default defineSite({
  id: 'blansko',
  city: 'Blansko',
  okres: 'Blansko',

  meta: {
    title: 'Autovraky Blansko – výkup a ekologická likvidace aut, odtah zdarma',
    description: 'Výkup autovraků v Blansku, Boskovicích, Letovicích i v Moravském krasu. Odtah zdarma, výplata od 2 500 Kč, ekologická likvidace a zánik vozidla za vás. Tel. 731 071 218.',
  },

  hero: {
    title: 'Výkup a ekologická likvidace autovraků Blansko',
    subtitle: 'Odtah zdarma z Blanenska, Boskovicka i Moravského krasu',
    lead: 'Nepotřebné auto vám odvezeme z Blanska, Boskovic, Letovic i z malých obcí na Drahanské vrchovině. Zaplatíme za něj, předáme ho k ekologické likvidaci a zánik vozidla vyřídíme na úřadě za vás.',
  },

  intro: {
    title: 'Autovrak na Blanensku? Odvezeme ho za vás',
    imageAlt: 'Odtah autovraků v okrese Blansko',
    paragraphs: [
      'Blanensko je kraj kopců, lesů a úzkých silnic – a právě tady často zůstávají stát auta, která už dosloužila. Vrak v garáži u chalupy, za stodolou nebo na kraji pozemku se svépomocí odváží těžko. Přijedeme s vlastním odtahovým vozem a auto naložíme, i když už nenastartuje.',
      'Velká část okresu leží v Chráněné krajinné oblasti Moravský kras. Odstavené auto, ze kterého unikají oleje a další kapaliny, tu škodí o to víc. Proto každý vrak předáváme do oprávněného zařízení, kde se nebezpečné látky bezpečně odstraní a materiály se dál recyklují.',
      'Za kompletní auto vám zaplatíme, odtah je v celém okrese Blansko zdarma a doklad o převzetí dostanete hned při naložení.',
    ],
  },

  services: {
    title: 'Naše služby na Blanensku',
    lead: 'Od jednoho telefonátu až po odhlášení auta z registru – všechno zařídíme my.',
    cards: [
      { icon: 'Odtah.webp', title: 'Odtah z města i z kopců', text: 'Přijedeme do Blanska a Boskovic, do obcí na Drahanské vrchovině i na Malé Hané. Odtah je zdarma a auto nemusí být pojízdné.' },
      { icon: 'Vyplata.webp', title: 'Výkupní cena předem', text: 'Kompletní osobní a malá užitková auta (M1, N1) vykupujeme od 2 500 Kč. Kolik dostanete, se dozvíte už při prvním telefonátu.' },
      { icon: 'Ekologicka.webp', title: 'Likvidace podle zákona', text: 'Vozidlo předáme k ekologické likvidaci do zařízení s oprávněním ke sběru autovraků. Dostanete o tom potvrzení pro úřady i pojišťovnu.' },
      { icon: 'Komplet.webp', title: 'Zánik vozidla bez front', text: 'S vaší plnou mocí vyřídíme zánik vozidla v registru za vás, takže nemusíte na úřad do Blanska ani do Boskovic.' },
      { icon: 'Flexibilita.webp', title: 'Termín podle vás', text: 'Na chalupu jezdíte až v sobotu? Po dohodě vrak odvezeme i o víkendu, večer nebo ve svátek.' },
      { icon: 'postaramese.webp', title: 'Havarovaná a poškozená auta', text: 'Mladší vozy (přibližně od roku výroby 2015) po nehodě nebo s technickou závadou vykoupíme k dalšímu využití a zajistíme jejich přepis.' },
    ],
  },

  area: {
    title: 'Kde na Blanensku jezdíme',
    text: 'Pokrýváme celý okres Blansko – od Adamova a Moravského krasu na jihu přes Blansko a Boskovice až po Letovice a Velké Opatovice na severu. Nejčastěji jezdíme do těchto měst a obcí:',
    towns: [
      'Blansko', 'Boskovice', 'Letovice', 'Adamov', 'Kunštát', 'Rájec-Jestřebí', 'Velké Opatovice',
      'Jedovnice', 'Olešnice', 'Lysice', 'Černá Hora', 'Sloup', 'Ostrov u Macochy', 'Křtiny',
      'Doubravice nad Svitavou', 'Skalice nad Svitavou', 'Svitávka', 'Lipůvka', 'Ráječko', 'Vavřinec',
      'Šebrov-Kateřina', 'Bořitov', 'Spešov', 'Knínice u Boskovic',
    ],
  },

  faq: [
    { q: 'Kolik zaplatíte za autovrak v Blansku?', a: 'Kompletní osobní nebo malé užitkové auto vykupujeme od 2 500 Kč. Přesná částka se odvíjí od typu vozu a toho, jestli mu nechybí motor nebo jiné podstatné díly. Řekneme vám ji hned po telefonu, ještě než přijedeme.' },
    { q: 'Odvezete auto i z chalupy nebo zahrady v Moravském krasu?', a: 'Ano, pokud se k autu dostane odtahový vůz. Když stojí na hůře přístupném místě, popište nám to při domluvě a řekneme vám, jak to vyřešíme.' },
    { q: 'Co potřebuji k předání auta?', a: 'Velký technický průkaz nebo osvědčení o registraci a doklad totožnosti majitele. Pokud auto předává někdo jiný, stačí plná moc s neověřeným podpisem – vzor najdete v sekci Jak to funguje.' },
    { q: 'Auto je napsané na zesnulého příbuzného. Dá se to vyřešit?', a: 'Ano. Je potřeba doložit, kdo může s autem nakládat – zpravidla usnesením z dědického řízení. Zavolejte nám a projdeme s vámi, co přesně bude potřeba.' },
    { q: 'Musím auto před odvozem vyklidit?', a: 'Vyndejte si z něj prosím osobní věci a doklady. Provozní kapaliny vypouštět nemusíte – o to se postará zařízení, které auto ekologicky zlikviduje.' },
    { q: 'Odhlásíte auto i z registru vozidel?', a: 'Ano. Na základě vaší plné moci vyřídíme zánik vozidla v registru a protokol vám předáme. S ním pak jen zrušíte povinné ručení.' },
  ],

  contactLead: 'Napište nebo zavolejte, kde na Blanensku auto stojí – domluvíme se na ceně i termínu odvozu.',
  formPlaceholder: 'Např.: Ford Focus, r. v. 2004, nenastartuje, stojí v Boskovicích.',
})
