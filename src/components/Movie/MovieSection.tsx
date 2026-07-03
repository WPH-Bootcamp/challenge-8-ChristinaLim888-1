import type { Movie } from "@/types/movie";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import MovieGrid from "./MovieGrid";

interface MovieSectionProps {
  title: string;
  films: Movie[];
}

export default function MovieSection({
  title,
  films,
}: MovieSectionProps) {
  return (
    <Section>
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            {title}
          </h2>
        </div>

        <MovieGrid
          films={films}
        />
      </Container>
    </Section>
  );
}