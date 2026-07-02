import type { ReactNode } from "react";

type PortalToolbarProps = {
  children: ReactNode;
};

type PortalToolbarSectionProps = {
  children: ReactNode;
};

export const PortalToolbar = ({ children }: PortalToolbarProps) => {
  return <div className="portal-toolbar">{children}</div>;
};

PortalToolbar.Left = function PortalToolbarLeft({
  children,
}: PortalToolbarSectionProps) {
  return <div className="portal-toolbar__left">{children}</div>;
};

PortalToolbar.Right = function PortalToolbarRight({
  children,
}: PortalToolbarSectionProps) {
  return <div className="portal-toolbar__right">{children}</div>;
};
