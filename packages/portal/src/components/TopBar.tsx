import { usePortal } from "../contexts/PortalContext";

export const TopBar = () => {
  const { appName, currentUser } = usePortal();

  return (
    <header className="portal-topbar">
      <div className="portal-topbar__identity">
        <div className="portal-topbar__mark">BSA</div>
        <div>
          <div className="portal-topbar__brand">{appName}</div>
          <div className="portal-topbar__subtitle">Portal Foundation</div>
        </div>
      </div>

      <div className="portal-topbar__actions">
        <div className="portal-topbar__search">Search coming soon</div>
        <button className="portal-topbar__button" type="button">
          Alerts
        </button>
        <div className="portal-topbar__user">
          {currentUser?.name ?? "Unknown User"}
        </div>
      </div>
    </header>
  );
};
