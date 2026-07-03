import { ChevronLeft, ChevronRight } from "lucide-react";

interface TrendingNavigationProps {
  onPrevious: () => void;

  onNext: () => void;
}

export default function TrendingNavigation({
  onPrevious,
  onNext,
}: TrendingNavigationProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="
          absolute
          left-2
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-black/70
          p-3
          text-white
          backdrop-blur
        "
      >
        <ChevronLeft />
      </button>

      <button
        onClick={onNext}
        className="
          absolute
          right-2
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-black/70
          p-3
          text-white
          backdrop-blur
        "
      >
        <ChevronRight />
      </button>
    </>
  );
}