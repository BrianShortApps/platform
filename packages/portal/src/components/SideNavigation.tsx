import { usePortal } from "../contexts/PortalContext";
import { getVisibleNavigationItems } from "../services/navigation";

export const SideNavigation = () => {
  const { navigation, currentUser } = usePortal();
  const visibleNavigation = getVisibleNavigationItems(navigation, currentUser);

  return (
    <aside className="portal-sidenav">
      <nav className="portal-sidenav__nav" aria-label="Application navigation">
        {visibleNavigation.map((item) => (
          <a key={item.id} className="portal-sidenav__item" href={item.route}>
            {item.icon && (
              <span className="portal-sidenav__icon">{item.icon}</span>
            )}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};
