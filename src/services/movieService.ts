// import { Movie, MovieResponse } from '@/types/movie';
// TODO: Create service functions to fetch data from TMDB API
// Reference: https://developer.themoviedb.org/reference/intro/getting-started

import api from "@/lib/axios";

import type {
  MovieResponse,
  MovieDetail,
  MovieCredits,
  MovieVideos,
} from "@/types";

export const movieService = {
  // ✅ Query Parameter (?page=1)
  // Endpoint: GET /movie/popular
  async getPopularMovies(
    page: number
  ): Promise<MovieResponse> {
    const response = await api.get<MovieResponse>(
      "/movie/popular",
      {
        params: {
          page,
        },
      }
    );

    return response.data;
  },

  // ✅ Query Parameter (?page=1)
  // Endpoint: GET /movie/now_playing
  async getNowPlayingMovies(
    page: number
  ): Promise<MovieResponse> {
    const response = await api.get<MovieResponse>(
      "/movie/now_playing",
      {
        params: {
          page,
        },
      }
    );

    return response.data;
  },

  // ✅ Path Parameter (/movie/550)
  // Endpoint: GET /movie/{movie_id}
  async getMovieDetails(
    movieId: number
  ): Promise<MovieDetail> {
    const response = await api.get<MovieDetail>(
      `/movie/${movieId}`
    );

    return response.data;
  },

  // ✅ Path Parameter (/movie/550/credits)
  // Endpoint: GET /movie/{movie_id}/credits
  async getMovieCredits(
    movieId: number
  ): Promise<MovieCredits> {
    const response = await api.get<MovieCredits>(
      `/movie/${movieId}/credits`
    );

    return response.data;
  },

  // ✅ Path Parameter (/movie/550/videos)
  // Endpoint: GET /movie/{movie_id}/videos
  async getMovieVideos(
    movieId: number
  ): Promise<MovieVideos> {
    const response = await api.get<MovieVideos>(
      `/movie/${movieId}/videos`
    );

    return response.data;
  },

  // ✅ Path Parameter (/movie/550/similar)
  // Endpoint: GET /movie/{movie_id}/similar
  async getSimilarMovies(
    movieId: number
  ): Promise<MovieResponse> {
    const response = await api.get<MovieResponse>(
      `/movie/${movieId}/similar`
    );

    return response.data;
  },

  // ✅ Query Parameter (?query=batman&page=1)
  // Endpoint: GET /search/movie
  async searchMovies(
    query: string,
    page: number
  ): Promise<MovieResponse> {
    const response = await api.get<MovieResponse>(
      "/search/movie",
      {
        params: {
          query,
          page,
        },
      }
    );

    return response.data;
  },
};

// TODO: Implement getPopularMovies function
// Endpoint: GET /movie/popular

// TODO: Implement getNowPlayingMovies function
// Endpoint: GET /movie/now_playing

// TODO: Implement getMovieDetails function
// Endpoint: GET /movie/{movie_id}

// TODO: Implement searchMovies function
// Endpoint: GET /search/movie

// TODO: Add more endpoints as needed
/*
Sekarang Perhatikan Pola Besarnya

Saya ingin Anda melihat sesuatu.

Semua function yang kita buat ternyata hanya terdiri dari dua pola.

Pola A
List Data
* Popular
* Now Playing
* Similar
* Search

Selalu : Promise<MovieResponse> karena response memiliki

{
   page,
   results:[]
}

Pola B
Single Object
* Movie Detail
* Credits
* Videos

Selalu : 
* Promise<MovieDetail>
* Promise<MovieCredits>
* Promise<MovieVideos>

karena response adalah satu object.

Cast : Orang yg tampil di layar
Crew : Orang yg bekerja di belakang layar

Misalnya kita menonton film Avengers.
Yang kita lihat di layar adalah
* Iron Man
* Captain America
* Thor
Mereka dimainkan oleh aktor. Itulah yang disebut Cast

Sedangkan yang membuat filmnya
* Sutradara
* Penulis naskah
* Editor
* Composer
* Cinematographer
Mereka tidak tampil di layar. Mereka disebut Crew

Cast selalu mempunyai Character karena mereka memerankan seseorang maka nya interface itu kita:
export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}
Ada property Character

Crew itu tdk memainkan karakter, contohnta Director, Original Music Composser, Director of photography
Mereka tidak punya karakter tapi punya job
export interface Crew {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path: string | null;
} Ada property job
*/