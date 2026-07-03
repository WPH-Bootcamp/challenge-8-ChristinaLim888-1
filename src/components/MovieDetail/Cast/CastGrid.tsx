import type { Cast } from "@/types/person";

import CastCard from "./CastCard";

interface CastGridProps {
  casts: Cast[];
}

export default function CastGrid({
  casts,
}: CastGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-6

        sm:grid-cols-3

        lg:grid-cols-5
      "
    >
      {casts.map((cast) => (
        <CastCard
          key={cast.id}
          image={cast.profile_path}
          name={cast.name}
          character={cast.character}
        />
      ))}
    </div>
  );
}