import type { Movie } from "@/types/movie";

import MoviePoster from "./MoviePoster";
import MovieTitle from "./MovieTitle";
import Rating from "./Rating";

interface MovieCardProps {
  film: Movie;
}

export default function MovieCard({
  film,
}: MovieCardProps) {
  return (
    <article className="overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition hover:scale-105">
      <MoviePoster
        posterPath={film.poster_path}
        title={film.title}
      />

      <div className="space-y-2 p-4">
        <MovieTitle
          title={film.title}
        />

        <Rating
          value={film.vote_average}
        />
      </div>
    </article>
  );
}
/*
Perhatikan

MovieCard sekarang tidak tahu bagaimana membuat poster.

MovieCard juga tidak tahu bagaimana membuat rating.

Dia hanya menyusun.

Persis seperti Home menyusun Hero dan MovieSection.
*/