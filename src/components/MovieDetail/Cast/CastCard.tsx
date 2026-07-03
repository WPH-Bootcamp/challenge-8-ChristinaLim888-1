import { getImageUrl } from "@/lib/utils";

interface CastCardProps {
  image: string | null;

  name: string;

  character: string;
}

export default function CastCard({
  image,
  name,
  character,
}: CastCardProps) {
  return (
    <div
      className="
        group
      "
    >
      <img
        src={getImageUrl(image, "w185")}
        alt={name}
        className="
          aspect-[2/3]
          w-full
          rounded-2xl
          object-cover
          transition
          duration-300
          group-hover:scale-105
        "
      />

      <h3
        className="
          mt-4
          font-semibold
        "
      >
        {name}
      </h3>

      <p
        className="
          text-sm
          text-zinc-400
        "
      >
        {character}
      </p>

    </div>
  );
}