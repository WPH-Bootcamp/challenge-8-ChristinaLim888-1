import type { MovieDetail } from "@/types";

import Container from "@/components/layout/Container";

import DetailBackdrop from "./DetailBackdrop";
import DetailContent from "./DetailContent";
import DetailPoster from "./DetailPoster";

interface DetailHeroProps {
  movie: MovieDetail;

  onWatchTrailer?: () => void;

  onFavorite?: () => void;

  isFavorite?: boolean;
}

export default function DetailHero({
  movie,
  onWatchTrailer,
  onFavorite,
  isFavorite,
}: DetailHeroProps) {
  return (
    <section
      className="
        relative

        min-h-screen

        overflow-hidden
      "
    >
      <DetailBackdrop
        backdropPath={movie.backdrop_path}
        title={movie.title}
      />

      <Container>

        <div
          className="
            relative

            z-10

            flex

            min-h-screen

            flex-col

            items-center

            justify-center

            gap-16

            py-28

            lg:flex-row

            lg:items-end
          "
        >

          <DetailPoster
            posterPath={movie.poster_path}
            title={movie.title}
          />

          <div className="flex-1">

            <DetailContent
              title={movie.title}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
              genre={
                movie.genres.length > 0
                  ? movie.genres[0].name
                  : "-"
              }
              ageLimit="PG-13"
              onWatchTrailer={onWatchTrailer}
              onFavorite={onFavorite}
              isFavorite={isFavorite}
            />

          </div>

        </div>

      </Container>
    </section>
  );
}