import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type InputVariant = "default" | "error";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
  variant?: InputVariant;
}

export function Input({
  label,
  helperText,
  errorText,
  variant = errorText ? "error" : "default",
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className={styles.field}>
      {label && <span className={styles.label}>{label}</span>}

      <input
        id={inputId}
        className={[
          styles.input,
          styles[variant],
          className,
        ].join(" ")}
        aria-invalid={variant === "error"}
        {...props}
      />

      {errorText ? (
        <span className={styles.errorText}>{errorText}</span>
      ) : helperText ? (
        <span className={styles.helperText}>{helperText}</span>
      ) : null}
    </label>
  );
}