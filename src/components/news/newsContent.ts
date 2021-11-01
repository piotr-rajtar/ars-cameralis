import { Post } from '@/typings';

export const posts: Array<Post> = [
  {
    id: '0',
    title: 'Akcja rekrutacja!',
    description:
      'Tegoroczny nabór bardzo nam się udał, spójrzcie sami! I do tego nie wszyscy załapali się na zdjęcie, więc jest nas jeszcze więcej! Same utalentowane, wspaniałe i przesympatyczne osoby dołączyły w tym roku do naszego zespołu. Życzymy im dużo satysfakcji i wielu artystycznych wrażeń!',
    image: '/images/rekrutacja.avif',
    image_f: '/images/rekrutacja_f.avif',
    image_thumb: '/images/thumbs/rekrutacja_thumb.webp',
    image_type: 'image/avif',
    image_type_f: 'image/webp',
    image_alt:
      'Przedstawienie nowo przyjętcyh członków chóru w śmiesznych pozach',
    image_ratio: {
      width: 4,
      height: 3,
    },
    date: '26.10.2021',
  },
  {
    id: '1',
    title: 'Chodźże do nas! Nabór do chóru Ars Cameralis',
    description:
      'Poszukujemy wszystkich głosów do naszego zespołu (sopran, mezzosopran, alt, tenor, baryton, bas). Gwarantujemy przyjacielską atmosferę podczas prób, rozwój głosu i słuchu, satysfakcję ze wspólnego śpiewania, a także udział w ciekawych projektach. Umiejętność czytania nut nie jest konieczna. Czekamy na osoby muzykalne, wesołe, sumienne, chętne do nauki i wspólnego śpiewania różnorodnego repertuaru.',
    image: '/images/poster.avif',
    image_f: '/images/poster_f.webp',
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
