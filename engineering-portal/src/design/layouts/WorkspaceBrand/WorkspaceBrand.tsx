import type { ReactNode } from "react";
import styles from "./WorkspaceBrand.module.css";

interface WorkspaceBrandProps {
  name: string;
  description?: string;
  mark?: ReactNode;
}

export function WorkspaceBrand({
  name,
  description,
  mark,
}: WorkspaceBrandProps) {
  return (
    <div className={styles.brand}>
      {mark && <div className={styles.mark}>{mark}</div>}

      <div className={styles.copy}>
        <p className={styles.name}>{name}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}