export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface ApiResponse {
  success: boolean;
}

export interface ApiError {
  success: boolean;
  status_code: number;
  status_message: string;
}

/* Penjelasan :
Misalnya
PaginatedResponse<Movie>
maka TypeScript otomatis mengubahnya menjadi
{
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

*/
/*
Posisi results: T[], apakah bisa langsung results: Movie[]?

Jawabannya:

Bisa.

Tetapi ada perbedaan besar.

Cara pertama
interface MovieResponse {
  results: Movie[];
}

Ini hanya bisa dipakai untuk Movie.

Cara kedua
interface PaginatedResponse<T> {
  results: T[];
}

Ini bisa dipakai untuk apa saja.

Misalnya.

Movie.

type MovieResponse = PaginatedResponse<Movie>;

TV Show.

type TVResponse = PaginatedResponse<TVShow>;

Actor.

type ActorResponse = PaginatedResponse<Actor>;

Genre.

type GenreResponse = PaginatedResponse<Genre>;

Makanya Generic jauh lebih reusable.

*/