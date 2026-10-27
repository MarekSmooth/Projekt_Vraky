import { defineSite } from '../regional/helpers.js'

export default defineSite({
  id: 'breclav',
  city: 'Břeclav',
  okres: 'Břeclav',

  meta: {
    title: 'Autovraky Břeclav – výkup a ekologická likvidace aut, odtah zdarma',
    description: 'Výkup autovraků v Břeclavi, Hustopečích, Mikulově a okolí. Odtah zdarma, výplata od 2 500 Kč, ekologická likvidace a vyřízení zániku vozidla. Tel. 731 071 218.',
  },

  hero: {
    title: 'Výkup a ekologická likvidace autovraků Břeclav',
    subtitle: 'Odtah zdarma z Břeclavska, Hustopečska i Mikulovska',
    lead: 'Vykoupíme vaše nepotřebné auto v Břeclavi, Hustopečích, Mikulově i v okolních vinařských obcích. Odtah máte zdarma, peníze na ruku a o likvidaci i zánik vozidla v registru se postaráme my.',
  },

  intro: {
    title: 'Spolehlivý výkup autovraků na Břeclavsku',
    imageAlt: 'Odtah autovraků v okrese Břeclav',
    paragraphs: [
      'Na jihu Moravy jezdíme pro autovraky už přes deset let. Na Břeclavsku odvážíme stará osobní auta od rodinných domů i ze sídlišť, ale často také dosloužilé dodávky a pick-upy, které roky jezdily do vinohradů, na pole nebo pro malé firmy.',
      'Z našeho zázemí u Brna se na Břeclavsko dostaneme rychle po dálnicích D2 a D52, takže vrak obvykle odvezeme v termínu, který vám vyhovuje. Odtah je zdarma v celém okrese.',
      'Hned při naložení dostanete protokol o převzetí vozidla s razítkem a podpisem. Auto pak předáme do oprávněného zařízení k ekologické likvidaci a všechny doklady vám předáme, jakmile budou hotové.',
    ],
  },

  services: {
    title: 'Co pro vás na Břeclavsku uděláme',
    lead: 'Stačí jeden telefonát – o naložení, papíry i odhlášení auta se postaráme my.',
    cards: [
      { icon: 'Odtah.webp', title: 'Bezplatný odtah', text: 'Pro auto si přijedeme do Břeclavi, Hustopečí, Mikulova i do každé obce v okrese. Odtah nic nestojí a vůz nemusí být pojízdný.' },
      { icon: 'postaramese.webp', title: 'Osobní auta i dodávky', text: 'Vykupujeme osobní auta i malé užitkové vozy a dodávky do 3,5 t (kategorie M1 a N1). U jiných typů vozidel se domluvíme individuálně.' },
      { icon: 'Vyplata.webp', title: 'Výplata na místě', text: 'Za kompletní vůz vyplácíme od 2 500 Kč – v hotovosti při naložení, nebo převodem na účet.' },
      { icon: 'Ekologicka.webp', title: 'Ekologická likvidace', text: 'Autovrak skončí v oprávněném zařízení, kde se z něj odborně odstraní nebezpečné látky a materiály se dál využijí. Nic neskončí v přírodě.' },
      { icon: 'Komplet.webp', title: 'Zánik vozidla za vás', text: 'Na základě plné moci vyřídíme zánik vozidla v registru. Na úřad v Břeclavi, Hustopečích ani Mikulově chodit nemusíte.' },
      { icon: 'Flexibilita.webp', title: 'Odvoz i o víkendu', text: 'Přes týden nemáte čas? Po dohodě přijedeme večer, v sobotu i ve svátek.' },
    ],
  },

  area: {
    title: 'Odtah autovraků po celém Břeclavsku',
    text: 'Jezdíme do celého okresu Břeclav – od Lanžhota a Břeclavi přes Lednicko-valtický areál a Pálavu až po Hustopeče a Klobouky u Brna. Mezi místa, kam jezdíme nejčastěji, patří:',
    towns: [
      'Břeclav', 'Hustopeče', 'Mikulov', 'Valtice', 'Lednice', 'Podivín', 'Velké Pavlovice',
      'Klobouky u Brna', 'Lanžhot', 'Velké Bílovice', 'Rakvice', 'Zaječí', 'Šakvice', 'Pasohlávky',
      'Dolní Věstonice', 'Drnholec', 'Dolní Dunajovice', 'Kobylí', 'Moravská Nová Ves', 'Tvrdonice',
      'Hrušky', 'Ladná', 'Strachotín', 'Velké Němčice',
    ],
  },

  faq: [
    { q: 'Kolik dostanu za starou dodávku nebo pick-up?', a: 'Za kompletní dodávku nebo pick-up do 3,5 t vyplácíme stejně jako za osobní auto nejméně 2 500 Kč, u některých typů i víc. Přesnou částku vám řekneme po telefonu podle typu a stavu vozu.' },
    { q: 'Je odtah z Mikulova nebo Hustopečí taky zdarma?', a: 'Ano. Odtah je zdarma v celém okrese Břeclav – v Břeclavi, Hustopečích, Mikulově i v každé menší obci.' },
    { q: 'Vykupujete i havarovaná auta, která by šla opravit?', a: 'Ano. Mladší auta, zhruba od roku výroby 2015, po nehodě nebo s technickou závadou vykupujeme k dalšímu využití. V takovém případě vždy hned zajistíme přepis na nového majitele.' },
    { q: 'Co se s autem stane po odvozu?', a: 'V oprávněném zařízení se z vozu nejprve odstraní provozní kapaliny, baterie a další nebezpečné součásti. Kov, plasty, sklo a použitelné díly se dál recyklují. O převzetí vozidla do zařízení dostanete potvrzení.' },
    { q: 'Potřebuji k předání technický průkaz?', a: 'Ideálně ano – velký technický průkaz nebo osvědčení o registraci a doklad totožnosti majitele. Když vám něco z toho chybí, zavolejte, poradíme, jak postupovat.' },
    { q: 'Kdy si můžu zrušit povinné ručení?', a: 'Ve chvíli, kdy máte doklad o ekologické likvidaci, případně protokol o zániku vozidla v registru. Ten pošlete své pojišťovně a pojištění se ukončí.' },
  ],

  contactLead: 'Zavolejte nám, kde na Břeclavsku auto stojí – na ceně i termínu odvozu se domluvíme hned.',
  formPlaceholder: 'Např.: VW Transporter, r. v. 2003, bez STK, stojí v Hustopečích.',

  // Adresy z původního webu na WordPressu
  legacyRedirects: [
    ['index\\.php/.*', '/'],
  ],
})
