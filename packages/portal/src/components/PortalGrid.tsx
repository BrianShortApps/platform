import type { ReactNode } from "react";

type PortalGridColumns = 1 | 2 | 3 | 4;

type PortalGridProps = {
  columns?: PortalGridColumns;
  children: ReactNode;
};

export const PortalGrid = ({ columns = 2, children }: PortalGridProps) => {
  return (
    <div className={`portal-grid portal-grid--${columns}`}>{children}</div>
  );
};
