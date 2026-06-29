import type { HTMLAttributes, ReactNode } from "react";
import { Surface } from "../Surface";
import styles from "./Panel.module.css";

type PanelVariant = "default" | "elevated" | "inset";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  description?: string;
  actions?: ReactNode;
  variant?: PanelVariant;
}

export function Panel({
  children,
  title,
  description,
  actions,
  variant = "default",
  className = "",
  ...props
}: PanelProps) {
  return (
    <Surface
      variant={variant}
      className={[styles.panel, className].join(" ")}
      {...props}
    >
      {(title || description || actions) && (
        <div className={styles.header}>
          <div>
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
          </div>

          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      )}

      <div className={styles.content}>{children}</div>
    </Surface>
  );
}