import type { ReactNode } from "react";
import { PortalDashboard } from "../dashboard/PortalDashboard";

type PortalOverviewProps = {
  children: ReactNode;
};

export const PortalOverview = ({ children }: PortalOverviewProps) => {
  return <PortalDashboard>{children}</PortalDashboard>;
};
