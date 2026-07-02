import { usePortal } from "../contexts/PortalContext";
import { getVisibleNavigationItems } from "../services/navigation";

export const SideNavigation = () => {
  const { navigation, currentUser, activeNavigationItemId, onNavigate } =
    usePortal();

  const visibleNavigation = getVisibleNavigationItems(navigation, currentUser);

  return (
    <aside className="portal-sidenav">
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
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
