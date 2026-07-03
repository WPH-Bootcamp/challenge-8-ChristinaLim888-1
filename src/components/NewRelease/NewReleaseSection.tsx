import { useMemo, useState } from "react";

import type { Movie } from "@/types/movie";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import MovieGrid from "@/components/Movie/MovieGrid";

import LoadMoreButton from "./LoadMoreButton";

interface NewReleaseSectionProps {
  films: Movie[];
}

const INITIAL_MOVIES = 15;

const LOAD_MORE_COUNT = 10;

export default function NewReleaseSection({
  films,
}: NewReleaseSectionProps) {
  const [visibleCount, setVisibleCount] =
    useState(INITIAL_MOVIES);

  const visibleMovies = useMemo(() => {
    return films.slice(0, visibleCount);
  }, [films, visibleCount]);

  const hasMore =
    visibleCount < films.length;

  function handleLoadMore() {
    setVisibleCount((prev) =>
      Math.min(
        prev + LOAD_MORE_COUNT,
        films.length
      )
    );
  }

  return (
    <Section>
      <Container>

        <div className="mb-10 flex items-center justify-between">

          <h2 className="text-4xl font-bold text-white">
            New Release
          </h2>

          <p className="text-zinc-400">
            {visibleMovies.length} Movies
          </p>

        </div>

        <MovieGrid
          films={visibleMovies}
        />

        {hasMore && (
          <LoadMoreButton
            onClick={handleLoadMore}
          />
        )}

      </Container>
    </Section>
  );
}