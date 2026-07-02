import { usePortal } from "../contexts/PortalContext";
import { getVisibleNavigationItems } from "../services/navigation";

export const SideNavigation = () => {
  const { navigation, currentUser, activeNavigationItemId, onNavigate } =
    usePortal();

  const visibleNavigation = getVisibleNavigationItems(navigation, currentUser);

  return (
    <aside className="portal-sidenav">
      <div className="portal-sidenav__header">
        <div className="portal-sidenav__eyebrow">Workspace</div>
        <div className="portal-sidenav__title">Modules</div>
      </div>

      <nav className="portal-sidenav__nav" aria-label="Application navigation">
        {visibleNavigation.map((item) => {
          const isActive = item.id === activeNavigationItemId;

          return (
            <button
              key={item.id}
              className={`portal-sidenav__item${
                isActive ? " portal-sidenav__item--active" : ""
              }`}
              type="button"
              onClick={() => onNavigate?.(item.id)}
            >
              {item.icon && (
                <span className="portal-sidenav__icon">{item.icon}</span>
              )}

              <span className="portal-sidenav__item-content">
                <span className="portal-sidenav__item-label">{item.label}</span>
                <span className="portal-sidenav__item-meta">
                  {item.description ?? "Open workspace"}
                </span>
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
