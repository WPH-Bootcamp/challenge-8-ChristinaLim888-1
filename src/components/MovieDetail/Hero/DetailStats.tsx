import {
  CalendarDays,
  Film,
  Star,
} from "lucide-react";

import StatCard from "./StatCard";

interface DetailStatsProps {
  rating: number;

  genre: string;

  ageLimit: string;
}

export default function DetailStats({
  rating,
  genre,
  ageLimit,
}: DetailStatsProps) {
  return (
    <div
      className="
        mt-8

        grid

        grid-cols-1

        gap-5

        md:grid-cols-3
      "
    >
      <StatCard
        icon={
          <Star
            size={28}
            fill="currentColor"
          />
        }
        title="Rating"
        value={`${rating.toFixed(1)}/10`}
      />

      <StatCard
        icon={<Film size={28} />}
        title="Genre"
        value={genre}
      />

      <StatCard
        icon={<CalendarDays size={28} />}
        title="Age Limit"
        value={ageLimit}
      />
    </div>
  );
}