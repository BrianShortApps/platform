import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Status.module.css";

type StatusTone = "neutral" | "success" | "warning" | "danger" | "info";

interface StatusProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tone?: StatusTone;
  showDot?: boolean;
}

export function Status({
  children,
  tone = "neutral",
  showDot = true,
  className = "",
  ...props
}: StatusProps) {
  return (
    <span
      className={[styles.status, styles[tone], className].join(" ")}
      {...props}
    >
      {showDot && <span className={styles.dot} aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
}