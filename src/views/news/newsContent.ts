import { Post } from '@/typings';

export const posts: Post[] = [
  {
    id: '0',
    title: 'Rozpoczęliśmy cykl warsztatów',
    description:
      'Trwa cykl warsztatów chóralnych, które przeprowadzamy w ramach nowego projektu, współfinansowanego przez Województwo Małopolskie w ramach programu "Małopolskie Chóry - Małopolska Rozśpiewana". Do końca roku zaprezentujemy Wam efekty naszej pracy. Stay tuned!<br /><br />Projekt zrealizowano przy wsparciu finansowym Województwa Małopolskiego.',
    image: '/images/logo_malopolska.png',
    image_thumb: '/images/thumbs/logo_malopolska_thumb.webp',
    image_type: 'image/png',
    image_alt: 'Różnobarwna litera M, będąca logiem województwa Małopolskiego',
    image_ratio: {
      width: 3,
      height: 2,
    },
    date: '09.11.2021',
  },
  {
    id: '1',
    title: 'Akcja rekrutacja!',
    description:
      'Tegoroczny nabór bardzo nam się udał, spójrzcie sami! I do tego nie wszyscy załapali się na zdjęcie, więc jest nas jeszcze więcej! Same utalentowane, wspaniałe i przesympatyczne osoby dołączyły w tym roku do naszego zespołu. Życzymy im dużo satysfakcji i wielu artystycznych wrażeń!',
    image: '/images/rekrutacja.avif',
    image_mobile: '/images/mobiles/rekrutacja_mobile.avif',
    image_f: '/images/rekrutacja_f.webp',
    image_mobile_f: '/images/mobiles/rekrutacja_mobile_f.webp',
    image_thumb: '/images/thumbs/rekrutacja_thumb.webp',
    image_type: 'image/avif',
    image_type_f: 'image/webp',
    image_alt:
      'Przedstawienie nowo przyjętych członków chóru w śmiesznych pozach',
    image_ratio: {
      width: 4,
      height: 3,
    },
    date: '26.10.2021',
  },
  {
    id: '2',
    title: 'Chodźże do nas! Nabór do chóru Ars Cameralis',
    description:
      'Poszukujemy wszystkich głosów do naszego zespołu (sopran, mezzosopran, alt, tenor, baryton, bas). Gwarantujemy przyjacielską atmosferę podczas prób, rozwój głosu i słuchu, satysfakcję ze wspólnego śpiewania, a także udział w ciekawych projektach. Umiejętność czytania nut nie jest konieczna. Czekamy na osoby muzykalne, wesołe, sumienne, chętne do nauki i wspólnego śpiewania różnorodnego repertuaru.',
    image: '/images/poster.avif',
    image_mobile: '/images/mobiles/poster_mobile.avif',
    image_f: '/images/poster_f.webp',
    image_mobile_f: '/images/mobiles/poster_mobile_f.webp',
    image_thumb: '/images/thumbs/poster_thumb.webp',
    image_type: 'image/avif',
    image_type_f: 'image/webp',
    image_alt:
      'Niebieski plakat z napisem chór zapraszający do dołączenia do zespołu. Informuje o datach przesłuchań które będą jedynastego i osiemnastego października o godzinie osiemnastej piętnaście w instytucie muzykologii uniwersytetu jagiellońskiego przy ulicy westerplatte dziesięć',
    image_ratio: {
      width: 2,
      height: 3,
    },
    date: '03.10.2021',
  },
];
