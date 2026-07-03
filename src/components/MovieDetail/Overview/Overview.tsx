interface OverviewProps {
  overview: string;
}

export default function Overview({
  overview,
}: OverviewProps) {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-5xl">

        <h2 className="mb-8 text-4xl font-bold">
          Overview
        </h2>

        <p
          className="
            leading-9
            text-zinc-300
          "
        >
          {overview}
        </p>

      </div>

    </section>
  );
}