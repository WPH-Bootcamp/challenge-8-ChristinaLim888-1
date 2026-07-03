import { Clapperboard } from "lucide-react";

interface EmptyStateProps {
  title?: string;

  description?: string;

  buttonText?: string;

  onClick?: () => void;
}

export default function EmptyState({
  title = "Data Empty",

  description = "You don't have a favorite movie yet",

  buttonText = "Explore Movie",

  onClick,
}: EmptyStateProps) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">

      <div className="text-center">

        <Clapperboard
          size={96}
          className="mx-auto mb-8 text-zinc-500"
        />

        <h2 className="mb-3 text-3xl font-bold text-white">
          {title}
        </h2>

        <p className="mb-8 text-zinc-400">
          {description}
        </p>

        {onClick && (
          <button
            onClick={onClick}
            className="rounded-full bg-red-700 px-10 py-3 font-semibold transition hover:bg-red-600"
          >
            {buttonText}
          </button>
        )}

      </div>

    </section>
  );
}
/*
<EmptyState
  onClick={() => navigate("/")}
/>
*/