import { RouterTile } from '@/typings';

export const collaborationTiles: Array<RouterTile> = [
  { name: 'Auditions', title: 'Przesłuchania do chóru' },
  { name: 'Concerts', title: 'Koncerty' },
  { name: 'WeddingsAndLiturgy', title: 'Śluby / Oprawa liturgii' },
];

export const snackbarMessages: {
  [key: string]: string;
} = {
  copySuccess: 'Skopiowano pomyślnie',
  copyError: 'Błąd w kopiowaniu',
};
