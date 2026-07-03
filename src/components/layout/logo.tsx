import { Tv } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Tv className="h-7 w-7 fill-white text-white" />

      <span className="text-3xl font-bold text-white">
        Movie
      </span>
    </div>
  );
}