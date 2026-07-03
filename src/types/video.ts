/*
Endpoint
GET /movie/{id}/videos
Response aslinya memiliki banyak properti.
Tetapi kita hanya memakai trailer YouTube.

Catatan Penting
Di endpoint /movie/{movie_id}/videos, TMDB sebenarnya mengembalikan objek dengan properti id dan results, bukan response yang memiliki page, total_pages, dan total_results.

Ini penting mengapa kita harus selalu melihat response API sebelum membuat type.
*/

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
}

export interface MovieVideos {
  id: number;
  results: Video[];
}

