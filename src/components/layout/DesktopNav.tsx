import Logo from "@/components/layout/logo";

export default function DesktopNav() {
  return (
    <div className="hidden items-center justify-between lg:flex">

      <div className="flex items-center gap-16">

        <Logo />

        <nav className="flex gap-10">

          <a
            href="/"
            className="text-white transition hover:text-red-500"
          >
            Home
          </a>

          <a
            href="/favorites"
            className="text-white transition hover:text-red-500"
          >
            Favorites
          </a>

        </nav>

      </div>

      <input
        placeholder="Search Movie"
        className="
          h-12
          w-72
          rounded-xl
          bg-zinc-900/70
          px-4
          text-white
          outline-none
          backdrop-blur-md
        "
      />

    </div>
  );
}