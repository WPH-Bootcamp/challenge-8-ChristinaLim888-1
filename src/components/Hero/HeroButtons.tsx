interface HeroButtonsProps {
  onTrailer?: () => void;

  onDetail?: () => void;
}

export default function HeroButtons({
  onTrailer,
  onDetail,
}: HeroButtonsProps) {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button
        onClick={onTrailer}
        className="
          rounded-full
          bg-red-700
          px-8
          py-3
          font-semibold
          text-white
          transition
          hover:bg-red-600
        "
      >
        ▶ Watch Trailer
      </button>

      <button
        onClick={onDetail}
        className="
          rounded-full
          border
          border-zinc-700
          bg-black/30
          px-8
          py-3
          font-semibold
          text-white
          backdrop-blur-md
          transition
          hover:bg-white/10
        "
      >
        See Detail
      </button>
    </div>
  );
}