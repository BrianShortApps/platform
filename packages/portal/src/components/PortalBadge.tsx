import type { ReactNode } from "react";

type PortalBadgeVariant = "default" | "success" | "warning" | "danger" | "info";

type PortalBadgeProps = {
  children: ReactNode;
  variant?: PortalBadgeVariant;
};

export const PortalBadge = ({
  children,
  variant = "default",
}: PortalBadgeProps) => {
  return (
    <span className={`portal-badge portal-badge--${variant}`}>{children}</span>
  );
};
