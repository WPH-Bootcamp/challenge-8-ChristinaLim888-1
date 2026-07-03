import Spinner from "./Spinner";

interface LoadingProps {
  message?: string;
}

export default function Loading({
  message = "Loading...",
}: LoadingProps) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black">

      <div className="flex flex-col items-center gap-6">

        <Spinner size={52} />

        <p className="text-zinc-300">
          {message}
        </p>

      </div>

    </section>
  );
}

/*
Cara Pemakaian
Loading
import { Loading } from "@/components/feedback";

if (isLoading) {
  return <Loading />;
}

atau

return <Loading message="Fetching movies..." />;

*/