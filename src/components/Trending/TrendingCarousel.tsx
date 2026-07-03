import type { Movie } from "@/types/movie";

import { useCarousel } from "@/hooks/useCarousel";

import TrendingCard from "./TrendingCard";
import TrendingNavigation from "./TrendingNavigation";

interface TrendingCarouselProps {
  films: Movie[];
}

export default function TrendingCarousel({
  films,
}: TrendingCarouselProps) {
  const {
    currentItems,
    next,
    previous,
  } = useCarousel({
    items: films,

    itemsPerPage: 5,
  });

  return (
    <div className="relative">

      <TrendingNavigation
        onPrevious={previous}
        onNext={next}
      />

      <div
        className="
          grid
          grid-cols-5
          gap-6
        "
      >
        {currentItems.map((film, index) => (
          <TrendingCard
            key={film.id}
            film={film}
            rank={index + 1}
          />
        ))}
      </div>

    </div>
  );
}