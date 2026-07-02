import type { ReactNode } from "react";
import { usePortal } from "../contexts/PortalContext";
import { PortalBadge } from "./PortalBadge";
import { PortalButton } from "./PortalButton";
import { PortalSection } from "./PortalSection";
import { PortalToolbar } from "./PortalToolbar";

type WorkspaceProps = {
  children: ReactNode;
};

export const Workspace = ({ children }: WorkspaceProps) => {
  const { activeModule } = usePortal();

  return (
    <main className="portal-workspace">
      {activeModule && (
        <PortalSection
          title={activeModule.title}
          description={activeModule.description}
        >
          <PortalToolbar>
            <PortalToolbar.Left>
              <PortalBadge variant="success">Active Module</PortalBadge>
            </PortalToolbar.Left>

            <PortalToolbar.Right>
              <PortalButton variant="ghost">Refresh</PortalButton>

              <PortalButton variant="secondary">Settings</PortalButton>
            </PortalToolbar.Right>
          </PortalToolbar>
        </PortalSection>
      )}

      <div className="portal-workspace__content">{children}</div>
    </main>
  );
};
