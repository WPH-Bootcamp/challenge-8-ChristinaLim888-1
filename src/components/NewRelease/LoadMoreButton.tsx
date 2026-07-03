interface LoadMoreButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function LoadMoreButton({
  onClick,
  disabled = false,
}: LoadMoreButtonProps) {
  return (
    <div className="mt-12 flex justify-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className="
          rounded-full
          border
          border-zinc-700
          bg-zinc-900
          px-8
          py-3
          text-white
          transition-all
          duration-300

          hover:border-red-500
          hover:bg-red-600

          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Load More
      </button>
    </div>
  );
}