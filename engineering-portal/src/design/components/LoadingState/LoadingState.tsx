import { Surface } from "../Surface";
import styles from "./LoadingState.module.css";

interface LoadingStateProps {
  title?: string;
  description?: string;
}

export function LoadingState({
  title = "Loading...",
  description = "Please wait while we load your data.",
}: LoadingStateProps) {
  return (
    <Surface variant="inset" className={styles.loading}>
      <div className={styles.spinner} />

      <div className={styles.copy}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Surface>
  );
}