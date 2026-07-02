import type { ReactNode } from "react";
import { PortalGrid } from "../../components/PortalGrid";

type PortalDashboardPanelsProps = {
  children: ReactNode;
};

export const PortalDashboardPanels = ({
  children,
}: PortalDashboardPanelsProps) => {
  return <PortalGrid columns={2}>{children}</PortalGrid>;
};
