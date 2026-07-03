import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: ReactNode;
  className?: string;
}

export default function StatCard({
  icon,
  title,
  value,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        `
        flex
        h-36
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-zinc-800
        bg-black/70
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-red-500
        `,
        className
      )}
    >
      <div className="mb-3 text-yellow-400">
        {icon}
      </div>

      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <p className="mt-2 text-xl font-semibold text-white">
        {value}
      </p>
    </div>
  );
}