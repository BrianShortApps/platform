import type { HTMLAttributes, ReactNode } from "react";
import "./Surface.css";

type SurfaceVariant = "default" | "elevated" | "inset" | "hero";

type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: SurfaceVariant;
};

export function Surface({
  children,
  variant = "default",
  className = "",
  ...props
}: SurfaceProps) {
  return (
    <div className={`bsa-surface bsa-surface--${variant} ${className}`} {...props}>
      {children}
    </div>
  );
}