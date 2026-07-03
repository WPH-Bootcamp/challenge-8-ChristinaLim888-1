import type { Movie } from "@/types/movie";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import TrendingCarousel from "./TrendingCarousel";

interface TrendingSectionProps {
  films: Movie[];
}

export default function TrendingSection({
  films,
}: TrendingSectionProps) {
  return (
    <Section>

      <Container>

        <h2 className="mb-8 text-4xl font-bold text-white">
          Trending Now
        </h2>

        <TrendingCarousel
          films={films}
        />

      </Container>

    </Section>
  );
}