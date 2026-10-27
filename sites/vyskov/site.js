import { defineSite } from '../regional/helpers.js'

export default defineSite({
  id: 'vyskov',
  city: 'Vyškov',
  okres: 'Vyškov',

  meta: {
    title: 'Autovraky Vyškov – výkup a ekologická likvidace aut, odtah zdarma',
    description: 'Výkup autovraků ve Vyškově, Bučovicích, Slavkově i Rousínově. Odtah zdarma, výplata od 2 500 Kč, ekologická likvidace a zánik vozidla bez starostí. Tel. 731 071 218.',
  },

  hero: {
    title: 'Výkup a ekologická likvidace autovraků Vyškov',
    subtitle: 'Odtah zdarma z celého Vyškovska',
    lead: 'Přijedeme pro vaše nepotřebné auto do Vyškova, Bučovic, Slavkova, Rousínova i do nejmenší obce v okrese. Vyplatíme výkupní cenu a vyřídíme zánik vozidla v registru – vy nikam chodit nemusíte.',
  },

  intro: {
    title: 'Autovraky na Vyškovsku řešíme už přes 10 let',
    imageAlt: 'Odtah autovraků v okrese Vyškov',
    paragraphs: [
      'Stojí vám na dvoře, v garáži nebo před domem auto, které už nikam nepojede? Na Vyškovsku jezdíme pro autovraky pravidelně – od sídlištních parkovišť ve Vyškově až po stodoly a zahrady v obcích pod Drahanskou vrchovinou. Auto naložíme na vlastní odtahový vůz, zaplatíme za něj a postaráme se o všechno, co po majiteli vraku vyžaduje zákon.',
      'Do okresu to od nás po dálnici D1 není daleko, takže termín odvozu se dá obvykle domluvit během pár dní. Odtah je v celém okrese Vyškov zdarma.',
      'Vozidlo předáme k ekologické likvidaci do zařízení, které k tomu má oprávnění. Provozní kapaliny, baterie a další nebezpečné části se tam odborně odstraní a kov, plasty i sklo se dál recyklují. Na rozdíl od nahodilých „výkupců“ z inzerátů od nás vždy dostanete protokol o převzetí s razítkem a podpisem hned na místě.',
    ],
  },

  services: {
    title: 'Co pro vás na Vyškovsku zajistíme',
    lead: 'Jedna domluva po telefonu – a o auto se postaráme od naložení až po odhlášení z registru.',
    cards: [
      { icon: 'Odtah.webp', title: 'Odtah autovraku zdarma', text: 'Pro auto přijedeme kamkoli v okrese Vyškov – k domu, do garáže, ke stodole i do autoservisu. Pojízdné být nemusí, naložíme ho sami.' },
      { icon: 'Vyplata.webp', title: 'Výkup za hotové', text: 'Za kompletní osobní nebo malé užitkové auto (kategorie M1 a N1) vyplácíme od 2 500 Kč. Konkrétní částku vám řekneme předem do telefonu.' },
      { icon: 'Ekologicka.webp', title: 'Ekologická likvidace', text: 'Vrak předáme do oprávněného zařízení ke sběru autovraků. Likvidace probíhá podle zákona o odpadech a vy za ni nic neplatíte.' },
      { icon: 'Komplet.webp', title: 'Zánik vozidla v registru', text: 'Na základě plné moci vyřídíme zánik vozidla (dříve trvalé vyřazení) za vás. Ušetříte si cestu na registr vozidel ve Vyškově.' },
      { icon: 'Flexibilita.webp', title: 'Odvoz i mimo pracovní dobu', text: 'Po dohodě přijedeme i večer, o víkendu nebo ve svátek – ať si kvůli vraku nemusíte brát dovolenou.' },
      { icon: 'postaramese.webp', title: 'Výkup havarovaných aut', text: 'Mladší auta (zhruba od roku výroby 2015) po nehodě, s poruchou motoru nebo poškozená vandaly vykupujeme k dalšímu využití. Přepis na nového majitele zajistíme hned.' },
    ],
  },

  area: {
    title: 'Odtah autovraků v celém okrese Vyškov',
    text: 'Jezdíme do celého okresu Vyškov – do měst i nejmenších obcí. Kromě samotného Vyškova a jeho místních částí, jako jsou Dědice, Nosálovice nebo Rychtářov, nejčastěji míříme do těchto míst:',
    towns: [
      'Vyškov', 'Bučovice', 'Slavkov u Brna', 'Rousínov', 'Ivanovice na Hané', 'Pustiměř', 'Drnovice',
      'Křenovice', 'Holubice', 'Hodějice', 'Šaratice', 'Otnice', 'Letonice', 'Kučerov', 'Dražovice',
      'Luleč', 'Krásensko', 'Habrovany', 'Lysovice', 'Brankovice', 'Nesovice', 'Švábenice',
      'Moravské Málkovice', 'Komořany',
    ],
  },

  faq: [
    { q: 'Kolik dostanu za autovrak ve Vyškově?', a: 'Za kompletní osobní nebo malé užitkové auto vyplácíme od 2 500 Kč. Výsledná částka záleží na typu a stavu vozu – stačí nám do telefonu říct značku, model, rok výroby a jestli autu nechybí motor nebo jiné větší díly. Cenu se dozvíte ještě před odvozem.' },
    { q: 'Platím něco za odtah z obce mimo Vyškov?', a: 'Ne. Odtah je zdarma v celém okrese Vyškov – ať auto stojí přímo ve městě, v Bučovicích, nebo v malé obci na Drahanské vrchovině.' },
    { q: 'Musím být u odvozu osobně?', a: 'Nemusíte. Auto může předat kdokoli s vaší plnou mocí (podpis nemusí být ověřený) a s technickým průkazem. Vzor plné moci najdete výše v sekci Jak to funguje.' },
    { q: 'Co když nemám technický průkaz?', a: 'Zavolejte nám. I bez technického průkazu se situace dá většinou vyřešit – podle konkrétního případu vám vysvětlíme, co bude potřeba.' },
    { q: 'Jak se dozvím, že je auto opravdu zlikvidované?', a: 'Protokol o převzetí dostanete hned při naložení. Po likvidaci vám předáme doklad o ekologické likvidaci, případně i protokol o zániku vozidla v registru – v termínu, na kterém se domluvíme.' },
    { q: 'Kdy můžu zrušit povinné ručení?', a: 'Jakmile máte doklad o ekologické likvidaci, případně o zániku vozidla v registru. S ním pojišťovně oznámíte zánik vozidla a pojištění se ukončí.' },
  ],

  contactLead: 'Zavolejte nám, odkud z Vyškovska auto potřebujete odvézt – cenu i termín domluvíme během jednoho hovoru.',
  formPlaceholder: 'Např.: Škoda Felicia, r. v. 2001, nepojízdná, stojí v Bučovicích.',

  // Adresy z původního webu na WordPressu
  legacyRedirects: [
    ['co-se-stane-s-vasim-autem/?', '/#postup'],
    ['ekologicka-likvidace/?', '/#sluzby'],
    ['sluzby/?', '/#sluzby'],
    ['kontakt/?', '/#kontakt'],
  ],
})
