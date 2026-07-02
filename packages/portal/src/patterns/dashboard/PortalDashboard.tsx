import type { ReactNode } from "react";
import { PortalPage } from "../../components/PortalPage";

type PortalDashboardProps = {
  children: ReactNode;
};

export const PortalDashboard = ({ children }: PortalDashboardProps) => {
  return (
    <PortalPage>
      <div className="portal-dashboard">{children}</div>
    </PortalPage>
  );
};
