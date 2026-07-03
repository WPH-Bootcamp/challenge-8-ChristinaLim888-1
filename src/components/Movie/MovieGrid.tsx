import type { Movie } from "@/types/movie";

import MovieCard from "./MovieCard";

interface MovieGridProps {
  films: Movie[];
}

export default function MovieGrid({ films }: MovieGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-6

        sm:grid-cols-3

        lg:grid-cols-4

        xl:grid-cols-5
      "
    >
      {films.map((film) => (
        <MovieCard key={film.id} film={film} />
      ))}
    </div>
  );
}
