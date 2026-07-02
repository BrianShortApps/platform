import type { ReactNode } from "react";
import { PortalPage } from "../../components/PortalPage";

type PortalSettingsProps = {
  children: ReactNode;
};

export const PortalSettings = ({ children }: PortalSettingsProps) => {
  return <PortalPage>{children}</PortalPage>;
};
