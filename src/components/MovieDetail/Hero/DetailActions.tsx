import {
  Heart,
  Play,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface DetailActionsProps {
  onWatchTrailer?: () => void;

  onFavorite?: () => void;

  isFavorite?: boolean;
}

export default function DetailActions({
  onWatchTrailer,
  onFavorite,
  isFavorite = false,
}: DetailActionsProps) {
  return (
    <div
      className="
        mt-8
        flex
        flex-wrap
        gap-4
      "
    >
      <Button
        size="lg"
        className="
          rounded-full
          bg-red-600
          px-8
          hover:bg-red-700
        "
        onClick={onWatchTrailer}
      >
        <Play
          className="mr-2"
          size={18}
          fill="currentColor"
        />

        Watch Trailer
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="
          rounded-full
          border-zinc-600
          bg-black/40
          px-8
          backdrop-blur-md
        "
        onClick={onFavorite}
      >
        <Heart
          size={18}
          className="mr-2"
          fill={isFavorite ? "currentColor" : "none"}
        />

        Favorite
      </Button>
    </div>
  );
}