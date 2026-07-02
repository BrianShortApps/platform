import type { ReactNode } from "react";

type PortalPageProps = {
  children: ReactNode;
};

export const PortalPage = ({ children }: PortalPageProps) => {
  return <div className="portal-page">{children}</div>;
};
