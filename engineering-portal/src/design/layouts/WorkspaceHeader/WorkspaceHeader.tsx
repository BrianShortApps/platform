import type { ReactNode } from "react";
import styles from "./WorkspaceHeader.module.css";

interface WorkspaceHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
  meta?: ReactNode;
}

export function WorkspaceHeader({
  title,
  description,
  eyebrow,
  actions,
  meta,
}: WorkspaceHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.copy}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}

        <div>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}
        </div>

        {meta && <div className={styles.meta}>{meta}</div>}
      </div>

      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}