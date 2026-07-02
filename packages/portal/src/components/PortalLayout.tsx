import type { ReactNode } from "react";
import { usePortal } from "../contexts/PortalContext";
import { SideNavigation } from "./SideNavigation";
import { StatusBar } from "./StatusBar";
import { TopBar } from "./TopBar";
import { Workspace } from "./Workspace";

type PortalLayoutProps = {
  children: ReactNode;
};

export const PortalLayout = ({ children }: PortalLayoutProps) => {
  const { themeClassName } = usePortal();

  return (
    <div className={`portal-layout ${themeClassName}`}>
      <TopBar />

      <div className="portal-layout__body">
        <SideNavigation />
        <Workspace>{children}</Workspace>
      </div>

      <StatusBar />
    </div>
  );
};
