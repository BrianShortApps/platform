import type { ButtonHTMLAttributes, ReactNode } from "react";

type PortalButtonVariant = "primary" | "secondary" | "ghost";

type PortalButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: PortalButtonVariant;
  children: ReactNode;
};

export const PortalButton = ({
  variant = "secondary",
  children,
  className = "",
  ...props
}: PortalButtonProps) => {
  return (
    <button
      className={`portal-button portal-button--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};
