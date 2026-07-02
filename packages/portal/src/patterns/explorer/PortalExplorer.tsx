import type { ReactNode } from "react";
import { PortalPage } from "../../components/PortalPage";

type PortalExplorerProps = {
  children: ReactNode;
};

export const PortalExplorer = ({ children }: PortalExplorerProps) => {
  return <PortalPage>{children}</PortalPage>;
};
