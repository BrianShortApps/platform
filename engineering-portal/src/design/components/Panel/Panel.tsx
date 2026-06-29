import type { HTMLAttributes, ReactNode } from "react";
import { Surface } from "../Surface";
import styles from "./Panel.module.css";

type PanelVariant = "default" | "elevated" | "inset";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  title?: string;

  subtitle?: string;

  description?: string;

  actions?: ReactNode;

  footer?: ReactNode;

  variant?: PanelVariant;
}

export function Panel({
  children,
  title,
  subtitle,
  description,
  actions,
  footer,
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

            {subtitle && (
                <p className={styles.subtitle}>
                    {subtitle}
                </p>
            )}

            {description && (
                <p className={styles.description}>
                    {description}
                </p>
            )}
        </div>

          {actions && <div className={styles.actions}>{actions}</div>}
        </div>
      )}

      <div className={styles.content}>{children}</div>
      {footer && (
        <div className={styles.footer}>
            {footer}
        </div>
    )}
    </Surface>
  );
}