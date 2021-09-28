import { RouterTile } from '@/typings';

export const repertoirTiles: Array<RouterTile> = [
  { name: 'VocalInstrumental', title: 'Kompozycje wokalno-instrumentalne' },
  { name: 'Acapella', title: 'Kompozycje a cappella' },
];
export const vocalInstrumentalMusic: Array<string> = [
  'M. Zieleński – Magnificat',
  'A. Vivaldi – Magnificat',
  'G. F. Handel – Alleluja',
  'G. G. Gorczycki – Laetatus sum',
  'J. K. Pawluśkiewicz – Nieszpory Ludźmierskie',
];
export const acapellaTiles: Array<RouterTile> = [
  { name: 'OldMusic', title: 'Muzyka dawna' },
  { name: 'CenturyMusic', title: 'Muzyka XX-XXI wieku' },
  { name: 'WorldAndFolkMusic', title: 'Muzyka świata i muzyka ludowa' },
  { name: 'EntertainmentMusic', title: 'Muzyka rozrywkowa' },
  { name: 'LiturgicalMusic', title: 'Repertuar liturgiczny (w tym ślubny)' },
  { name: 'PassionMusic', title: 'Utwory pasyjne' },
  { name: 'Carols', title: 'Kolędy' },
];
export const oldMusic: Array<string> = [
  'Bądź wiesioła Panno czysta',
  'Th. Tallis – If ye love me',
  'F. Lilius – Confitebor tibi Domine',
  'F. Lilius – Recordare Domine',
  'F. Lilius – Missa brevissima',
  'G. G. Gorczycki – Omni die dic Mariae',
];
export const centuryMusic: Array<string> = [
  'T. Paciorkiewicz – Ave Regina Caelorum',
  'A. Koszewski – Zdrowaś Królewno Wyborna',
  'O. Gjeilo – Ubi caritas',
  'J. Maklakiewicz – Kołysanka (Kochanie moje kochanie)',
];

export const worldAndFolkMusic: Array<string> = [
  'J. E. Moore – An Irish Blessing',
  'A. Perez Moya – El Rossinyol (pieśń katalońska)',
  'Opr. F. Rybicki – Hajze ino… (pieśń krakowska) ',
  'Opr. T. Szeligowski – W mojem ogródecku',
  'Opr. K. Mroszczyk – Ja za wodą',
  'Lube / opr. M. Bebak – Kon (pieśń rosyjska)',
  'Opr. M. Bebak – Oj to nie vieczer (pieśń rosyjska)',
  'M. Hronek – Prsi, prsi (pieśń słowacka)',
  'Bude Vecer (pieśń słowacka)',
  'Opr. M. Bebak – Sto mi e milo (pieśń macedońska)',
  'Ukuthula (pieśń afrykańska)',
  'Siyahamba (pieśń afrykańska)',
  'Opr. S. Stroman – Standing in the need of prayer (gospel)',
  'Swing low sweet chariet (spiritual)',
];

export const entertainmentMusic: Array<string> = [
  'C. Carter, J. Hudson – Goodnight, sweetheart',
  'J. Horner / arr. K. Shaw – My Heart Will Go On',
  'M. Masser / arr. J. Fischer – Nothing’s gonna change my love for you',
  'V. J. Martin / arr. S. S. Barret – Only you',
  'J. Larson / arr. R. Emerson – Season of Love',
  'G. Gershwin – Somebody loves me',
  'J. Wasowski / arr. A. Borzym – Stacyjka Zdrój',
];

export const liturgicalMusic: Array<string> = [
  'Bonum est praestolari',
  'Taize – Bój jest miłością',
  'Opr. J. Sykulski – Czego chcesz od nas, Panie',
  'J. Sykulski – Będę śpiewał Tobie',
  'S. Ziemiański – Boże, Tyś miłością',
  'P. Bębenek – Miłość doda nam skrzydeł',
  'P. Bębenek – Witaj, pokarmie',
  'P. Bębenek – Skosztujcie i zobaczcie',
  'P. Bębenek – Niechaj Cię, Panie',
  'J. Gałuszka – Oto są baranki młode',
  'Opr. P. Bębenek – Zbliżam się w pokorze',
  'Opr. P. Bębenek – Chrystus zmartwychwstan jest',
  'U. Rogala – Bądź wesoła, Panno z dziwnego',
  'Opr. J. Sykulski – O Matko miłościwa',
  'Opr. H. Kowalski – Miłosierna Matko Boża',
];

export const passionMusic: Array<string> = [
  'Anonim – Jezusa Judasz przedał',
  'G. G. Gorczycki – Stabat Mater',
  'Opr. P. Bębenek – Dobranoc głowo święta',
  'P. Bębenek – Do twarzy Chrystusa',
  'S. Stuligrosz / opr. C. Paciorek – Duszo Chrystusowa',
  'Opr. J. Sykulski – Boże mój',
  'R. Dubra – O crux ave',
  'Opr. J. Świder – Witaj cierniowa korono',
  'F. Cieszyński – Jezesu, bocze na mie',
  'H. M. Górecki – Jezu Chryste',
  'K. Penderecki – Ludu mój ludu',
  'J. Gałuszka – Zawitaj, Ukrzyżowany',
];

export const carols: Array<string> = [
  'Puer natus in Betleem (chorał)',
  'Opr. S. Niewiadomski – Gdy się Chrystus rodzi',
  'Opr. W. Sołtysik – W żłobie leży',
  'Opr. J. Świder – Lulajże Jezuniu',
  'Opr. J. Świder – Pospieszcie pastuszki',
  'D. Lasota – Przy wigilijnym stole',
  'Opr. W. Szaliński – Jezus malusieńki',
  'Nuż my dziś krześcijani (kancjonał staniątecki)',
  'Opr. W. Sołtysik – Pasterze mili',
  'Nad Betlejem w ciemną noc',
  'Gaudete (trad.)',
  'B. Pękiel – Magnum nomen Domini',
  'R. Dubra – Hodie Christus natus est (II)',
  'Szczedrik (trad.)',
  'M. Praetorius – Es ist ein Ros entsprungen',
  'Paśli pasterze woły',
  'Opr. H. Botor – Dzisiaj w Betlejem',
  'Opr. U. Dąbrowska – Oj maluśki',
];
