import { TriangleAlert } from "lucide-react";

interface ErrorProps {
  title?: string;

  message?: string;

  onRetry?: () => void;
}

export default function ErrorState({
  title = "Something went wrong",
  message = "Please try again later.",
  onRetry,
}: ErrorProps) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">

      <div className="text-center">

        <TriangleAlert
          className="mx-auto mb-6 text-red-500"
          size={80}
        />

        <h2 className="mb-3 text-3xl font-bold text-white">
          {title}
        </h2>

        <p className="mb-8 text-zinc-400">
          {message}
        </p>

        {onRetry && (
          <button
            onClick={onRetry}
            className="rounded-full bg-red-600 px-8 py-3 font-medium transition hover:bg-red-700"
          >
            Try Again
          </button>
        )}

      </div>

    </section>
  );
}
/*
Error
import { Error } from "@/components/feedback";

if (isError) {
  return (
    <Error
      onRetry={() => refetch()}
    />
  );
}
*/