/*
Favorite berasal dari Zustand, bukan API.
Saya menyarankan menyimpan data seminimal mungkin.
Kenapa?
Karena localStorage akan menjadi lebih kecil dan store lebih ringan.
*/

export interface FavoriteMovie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
}



