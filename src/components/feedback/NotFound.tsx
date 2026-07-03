import { SearchX } from "lucide-react";

interface NotFoundProps {
  title?: string;

  description?: string;
}

export default function NotFound({
  title = "Data Not Found",

  description = "Try other keywords",
}: NotFoundProps) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">

      <div className="text-center">

        <SearchX
          size={96}
          className="mx-auto mb-8 text-zinc-500"
        />

        <h2 className="mb-3 text-3xl font-bold text-white">
          {title}
        </h2>

        <p className="text-zinc-400">
          {description}
        </p>

      </div>

    </section>
  );
}
 

/* 
Search Tidak Ketemu
<NotFound />

atau

<NotFound
  title="Movie Not Found"
  description="Try another keyword"
/>
*/