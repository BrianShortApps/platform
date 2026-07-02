import type { ReactNode } from "react";
import { PortalPage } from "../../components/PortalPage";

type PortalManagementProps = {
  children: ReactNode;
};

export const PortalManagement = ({ children }: PortalManagementProps) => {
  return <PortalPage>{children}</PortalPage>;
};
