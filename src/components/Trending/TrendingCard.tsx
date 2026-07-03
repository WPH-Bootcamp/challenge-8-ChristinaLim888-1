import type { Movie } from "@/types/movie";

import MovieCard from "@/components/Movie/MovieCard";

interface TrendingCardProps {
  film: Movie;

  rank: number;
}

export default function TrendingCard({
  film,
  rank,
}: TrendingCardProps) {
  return (
    <div className="relative">
      <div
        className="
          absolute
          left-3
          top-3
          z-10
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-black/80
          font-bold
          text-white
        "
      >
        {rank}
      </div>

      <MovieCard film={film} />
    </div>
  );
}