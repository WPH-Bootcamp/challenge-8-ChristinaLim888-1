import DetailActions from "./DetailActions";
import DetailStats from "./DetailStats";

interface DetailContentProps {
  title: string;

  releaseDate: string;

  rating: number;

  genre: string;

  ageLimit: string;

  onWatchTrailer?: () => void;

  onFavorite?: () => void;

  isFavorite?: boolean;
}

export default function DetailContent({
  title,
  releaseDate,
  rating,
  genre,
  ageLimit,
  onWatchTrailer,
  onFavorite,
  isFavorite,
}: DetailContentProps) {
  return (
    <div className="flex flex-col justify-center">

      <p
        className="
          text-sm
          uppercase
          tracking-[0.25em]
          text-red-500
        "
      >
        Now Playing
      </p>

      <h1
        className="
          mt-3

          text-4xl

          font-bold

          leading-tight

          text-white

          md:text-6xl
        "
      >
        {title}
      </h1>

      <p
        className="
          mt-5

          text-lg

          text-zinc-300
        "
      >
        {releaseDate}
      </p>

      <DetailActions
        onWatchTrailer={onWatchTrailer}
        onFavorite={onFavorite}
        isFavorite={isFavorite}
      />

      <DetailStats
        rating={rating}
        genre={genre}
        ageLimit={ageLimit}
      />

    </div>
  );
}