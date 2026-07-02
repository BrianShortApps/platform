import type { ReactNode } from "react";
import { usePortal } from "../contexts/PortalContext";

type WorkspaceProps = {
  children: ReactNode;
};

export const Workspace = ({ children }: WorkspaceProps) => {
  const { activeModule } = usePortal();

  return (
    <main className="portal-workspace">
      {activeModule && (
        <header className="portal-workspace__header">
          <div>
            <p className="portal-workspace__eyebrow">Workspace</p>
            <h1 className="portal-workspace__title">{activeModule.title}</h1>
            {activeModule.description && (
              <p className="portal-workspace__description">
                {activeModule.description}
              </p>
            )}
          </div>

          <div className="portal-workspace__actions">
            <button className="portal-workspace__button" type="button">
              Refresh
            </button>
            <button className="portal-workspace__button" type="button">
              Settings
            </button>
          </div>
        </header>
      )}

      <div className="portal-workspace__content">{children}</div>
    </main>
  );
};
