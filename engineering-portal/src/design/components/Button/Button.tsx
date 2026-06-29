import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "bsa-button",
        `bsa-button--${variant}`,
        `bsa-button--${size}`,
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}