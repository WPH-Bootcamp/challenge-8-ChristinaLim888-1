interface RatingProps {
  value: number;
}

export default function Rating({
  value,
}: RatingProps) {
  return (
    <div className="flex items-center gap-1 text-sm font-medium text-yellow-400">
      <span>⭐</span>

      <span>{value.toFixed(1)}</span>
    </div>
  );
}

/*
Kenapa dibuat?

Daripada nanti menulis:

⭐ {film.vote_average.toFixed(1)}

di:

MovieCard
Hero
Movie Detail
Favorite

cukup:

<Rating value={film.vote_average} />

*/