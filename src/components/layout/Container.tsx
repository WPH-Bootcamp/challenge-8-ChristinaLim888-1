import type { ReactNode } from "react";

import { styles } from "@/components/constants/styles";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div className={styles.layout.container}>
      {children}
    </div>
  );
}