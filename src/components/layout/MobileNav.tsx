import { Menu } from "lucide-react";

import Logo from "@/components/layout/logo";

interface MobileNavProps {
  onOpen: () => void;
}

export default function MobileNav({
  onOpen,
}: MobileNavProps) {
  return (
    <div className="flex items-center justify-between lg:hidden">

      <Logo />

      <button onClick={onOpen}>
        <Menu className="h-8 w-8 text-white" />
      </button>

    </div>
  );
}