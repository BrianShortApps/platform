import { usePortal } from "../contexts/PortalContext";

export const TopBar = () => {
  const { appName, currentUser } = usePortal();

  return (
    <header className="portal-topbar">
      <div className="portal-topbar__brand">{appName}</div>

      <div className="portal-topbar__user">
        {currentUser?.name ?? "Unknown User"}
      </div>
    </header>
  );
};
