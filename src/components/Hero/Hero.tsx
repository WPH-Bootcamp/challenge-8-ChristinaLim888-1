import type { Movie } from "@/types/movie";

import Container from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroOverlay from "./HeroOverlay";

interface HeroProps {
  film: Movie;
}

export default function Hero({
  film,
}: HeroProps) {
  return (
    <section
      className="
        relative
        h-screen
        overflow-hidden
      "
    >
      <HeroBackground
        backdropPath={film.backdrop_path}
      />

      <HeroOverlay />

      <Container>
        <HeroContent
          film={film}
        />
      </Container>
    </section>
  );
}