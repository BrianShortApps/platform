import type { ReactNode } from "react";
import { Surface } from "../Surface";
import { Status } from "../Status";
import styles from "./MetricCard.module.css";

type MetricTone = "neutral" | "success" | "warning" | "danger" | "info";

interface MetricCardProps {
  label: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  tone?: MetricTone;
  status?: string;
}

export function MetricCard({
  label,
  value,
  description,
  icon,
  tone = "neutral",
  status,
}: MetricCardProps) {
  return (
    <Surface className={styles.metricCard}>
      <div className={styles.header}>
        <div>
          <p className={styles.label}>{label}</p>
          <p className={styles.value}>{value}</p>
        </div>

        {icon && <div className={styles.icon}>{icon}</div>}
      </div>

      {(description || status) && (
        <div className={styles.footer}>
          {description && <p className={styles.description}>{description}</p>}
          {status && <Status tone={tone}>{status}</Status>}
        </div>
      )}
    </Surface>
  );
}