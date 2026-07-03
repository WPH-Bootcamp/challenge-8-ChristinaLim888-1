import { getPosterUrl } from "@/lib/utils";

interface DetailPosterProps {
  posterPath: string | null;

  title: string;
}

export default function DetailPoster({
  posterPath,
  title,
}: DetailPosterProps) {
  return (
    <div
      className="
        w-full

        max-w-[320px]

        overflow-hidden

        rounded-3xl

        border

        border-white/20

        shadow-2xl
      "
    >
      <img
        src={getPosterUrl(posterPath)}
        alt={title}
        className="
          aspect-[2/3]

          h-full

          w-full

          object-cover

          transition-transform

          duration-500

          hover:scale-105
        "
      />
    </div>
  );
}