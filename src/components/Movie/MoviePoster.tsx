import { getPosterUrl } from "@/lib/utils";

interface MoviePosterProps {
  posterPath: string | null;
  title: string;
}

export default function MoviePoster({
  posterPath,
  title,
}: MoviePosterProps) {
  return (
    <img
      src={getPosterUrl(posterPath)}
      alt={title}
      className="aspect-[2/3] w-full rounded-xl object-cover"
    />
  );
}
/*
Kenapa dipisah?

Karena nanti dipakai di:

MovieCard
Favorite
Search
Similar Movies

Bahkan nanti Hero juga bisa memakai versi Backdrop.
*/