import { X } from "lucide-react";

import Logo from "@/components/layout/logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <div
      className={`
      fixed inset-0 z-50
      bg-black
      transition-all duration-300

      ${
        open
          ? "translate-x-0"
          : "-translate-x-full"
      }
    `}
    >
      <div className="flex items-center justify-between p-5">

        <Logo />

        <button onClick={onClose}>
          <X className="h-8 w-8 text-white" />
        </button>

      </div>

      <nav className="mt-10 flex flex-col gap-12 px-6">

        <a
          href="/"
          onClick={onClose}
          className="text-2xl text-white"
        >
          Home
        </a>

        <a
          href="/favorites"
          onClick={onClose}
          className="text-2xl text-white"
        >
          Favorites
        </a>

      </nav>
    </div>
  );
}