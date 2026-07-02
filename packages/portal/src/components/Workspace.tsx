import type { ReactNode } from "react";

type WorkspaceProps = {
  children: ReactNode;
};

export const Workspace = ({ children }: WorkspaceProps) => {
  return <main className="portal-workspace">{children}</main>;
};
