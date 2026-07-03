import { cn } from "@/lib/utils";

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface MyButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  children: ReactNode;

  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost";

  size?:
    | "sm"
    | "md"
    | "lg";
}

export default function MyButton({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: MyButtonProps) {

  return (
    <button
      className={cn(

        "rounded-full font-medium transition-all duration-300",

        {
          "bg-red-700 text-white hover:bg-red-600":
            variant === "primary",

          "bg-zinc-900 text-white border border-zinc-700 hover:border-red-500":
            variant === "secondary",

          "border border-zinc-700 text-white hover:bg-zinc-800":
            variant === "outline",

          "bg-transparent text-white hover:bg-zinc-800":
            variant === "ghost",

          "px-5 py-2 text-sm":
            size === "sm",

          "px-8 py-3":
            size === "md",

          "px-10 py-4 text-lg":
            size === "lg",
        },

        className
      )}

      {...props}
    >
      {children}
    </button>
  );
}
/* Cara Pemakaian:
Sekarang di EmptyState cukup

<Button onClick={onClick}>
    Explore Movie
</Button>

di Hero

<Button>
    Watch Trailer
</Button>

<Button variant="secondary">
    See Detail
</Button>

di Error

<Button onClick={refetch}>
    Try Again
</Button>

*/