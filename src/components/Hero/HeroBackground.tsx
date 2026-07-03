import { getBackdropUrl } from "@/lib/utils";

interface HeroBackgroundProps {
  backdropPath: string | null;
}

export default function HeroBackground({
  backdropPath,
}: HeroBackgroundProps) {
  return (
    <img
      src={getBackdropUrl(backdropPath)}
      alt="Hero Background"
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
      "
    />
  );
}