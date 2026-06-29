import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  isLoading = false,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "bsa-button",
        `bsa-button--${variant}`,
        `bsa-button--${size}`,
        isLoading ? "bsa-button--loading" : "",
        className,
      ].join(" ")}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="bsa-button__spinner" aria-hidden="true" />
      ) : (
        leftIcon && <span className="bsa-button__icon">{leftIcon}</span>
      )}

      <span>{children}</span>

      {!isLoading && rightIcon && (
        <span className="bsa-button__icon">{rightIcon}</span>
      )}
    </button>
  );
}