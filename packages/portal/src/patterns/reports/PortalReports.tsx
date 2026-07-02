import type { ReactNode } from "react";
import { PortalPage } from "../../components/PortalPage";

type PortalReportsProps = {
  children: ReactNode;
};

export const PortalReports = ({ children }: PortalReportsProps) => {
  return <PortalPage>{children}</PortalPage>;
};
