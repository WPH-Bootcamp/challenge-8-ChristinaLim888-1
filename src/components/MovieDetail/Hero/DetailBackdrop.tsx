import { getBackdropUrl } from "@/lib/utils";

interface DetailBackdropProps {
  backdropPath: string | null;
  title: string;
}

export default function DetailBackdrop({
  backdropPath,
  title,
}: DetailBackdropProps) {
  return (
    <>
      {/* Background Image */}
      <img
        src={getBackdropUrl(backdropPath)}
        alt={title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/70
        "
      />

      {/* Bottom Gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-48
          bg-gradient-to-t
          from-black
          via-black/60
          to-transparent
        "
      />
    </>
  );
}