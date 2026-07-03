// TODO: Define TypeScript interfaces for Movie data
// Hint: Check TMDB API documentation for the movie object structure
// https://developer.themoviedb.org/reference/movie-details

import type { PaginatedResponse } from "./api";

export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  adult: boolean;
  genres: Genre[];
}

export interface MovieDetail extends Movie {
  runtime: number;
  genres: Genre[];
}

export type MovieResponse = PaginatedResponse<Movie>;
/*
Kenapa tetap ada MovieResponse?
Karena ketika nanti kita membuat service, kita bisa menulis:
getPopularMovies(): Promise<MovieResponse>
Daripada
getPopularMovies(): Promise<PaginatedResponse<Movie>>
Keduanya sama.
*/

/*
Saya Ingin Memberi Satu Saran Lagi

Mulai sekarang, jangan langsung membuat interface.

Biasakan mengikuti alur berikut setiap kali menggunakan API:

1. Cari endpoint di dokumentasi
          ↓
2. Buka contoh Response
          ↓
3. Bandingkan dengan desain Figma
          ↓
4. Tandai field yang dipakai UI
          ↓
5. Baru buat interface
          ↓
6. Baru buat service
          ↓
7. Baru gunakan di React Query

Ini adalah alur yang saya sendiri gunakan saat mengerjakan proyek dengan API. Dengan kebiasaan ini, Anda akan menghindari dua masalah yang paling sering terjadi: membuat interface yang berlebihan dan membuat interface yang tidak sesuai dengan data yang benar-benar dikirim oleh API.
*/



/* Movie Detail harus mempunyai :
Poster
Title
Overview
Rating
Release Date
Genres
Runtime
Cast
Crew
Trailer
Recommendations

Berarti : Movie Interface > cukup memiliki properti yang dipakai.


Struktur movie.ts

Nanti kita akan membuat:
Genre
Movie
MovieDetail
ProductionCompany
ProductionCountry
SpokenLanguage
*/