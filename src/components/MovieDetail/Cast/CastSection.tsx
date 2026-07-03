import type { Cast } from "@/types";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import CastGrid from "./CastGrid";

interface CastSectionProps {
  casts: Cast[];
}

export default function CastSection({
  casts,
}: CastSectionProps) {
  return (
    <Section>

      <Container>

        <h2
          className="
            mb-10
            text-4xl
            font-bold
          "
        >
          Cast & Crew
        </h2>

        <CastGrid
          casts={casts}
        />

      </Container>

    </Section>
  );
}