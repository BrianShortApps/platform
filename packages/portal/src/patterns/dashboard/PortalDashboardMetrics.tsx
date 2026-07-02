import type { ReactNode } from "react";
import { PortalGrid } from "../../components/PortalGrid";

type PortalDashboardMetricsProps = {
  children: ReactNode;
};

export const PortalDashboardMetrics = ({
  children,
}: PortalDashboardMetricsProps) => {
  return <PortalGrid columns={4}>{children}</PortalGrid>;
};
