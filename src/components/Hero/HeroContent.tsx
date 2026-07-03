import type { Movie } from "@/types/movie";

import HeroButtons from "./HeroButtons";

interface HeroContentProps {
  film: Movie;
}

export default function HeroContent({
  film,
}: HeroContentProps) {
  return (
    <div
      className="
        relative
        z-20
        flex
        h-full
        max-w-xl
        items-center
      "
    >
      <div>
        <h1
          className="
            text-5xl
            font-bold
            text-white
          "
        >
          {film.title}
        </h1>

        <p
          className="
            mt-6
            line-clamp-4
            text-lg
            leading-8
            text-zinc-300
          "
        >
          {film.overview}
        </p>

        <HeroButtons />
      </div>
    </div>
  );
}