import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { styles } from "@/components/constants/styles";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(styles.layout.section, className)}
    >
      {children}
    </section>
  );
}

/* Yang Biasa : 
<section className={`${styles.layout.section} ${className ?? ""}`}>

*/