import type { ReactNode } from "react";
import { SideNavigation } from "./SideNavigation";
import { StatusBar } from "./StatusBar";
import { TopBar } from "./TopBar";
import { Workspace } from "./Workspace";

type PortalLayoutProps = {
  children: ReactNode;
};

export const PortalLayout = ({ children }: PortalLayoutProps) => {
  return (
    <div className="portal-layout">
      <TopBar />

      <div className="portal-layout__body">
        <SideNavigation />
        <Workspace>{children}</Workspace>
      </div>

      <StatusBar />
    </div>
  );
};
