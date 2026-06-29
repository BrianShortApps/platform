import type { ReactNode } from "react";
import { Surface } from "../Surface";
import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <Surface variant="inset" className={styles.emptyState}>
      {icon && <div className={styles.icon}>{icon}</div>}

      <div className={styles.copy}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      {action && <div className={styles.action}>{action}</div>}
    </Surface>
  );
}