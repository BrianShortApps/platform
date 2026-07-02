import { usePortal } from "../contexts/PortalContext";

export const StatusBar = () => {
  const { statusItems } = usePortal();

  return (
    <footer className="portal-statusbar">
      <div className="portal-statusbar__left">
        <span className="portal-statusbar__indicator" />
        <span className="portal-statusbar__ready">Ready</span>
      </div>

      <div className="portal-statusbar__items">
        {statusItems.map((item) => (
          <div key={item.id} className="portal-statusbar__item">
            <span className="portal-statusbar__label">{item.label}</span>
            <span className="portal-statusbar__value">{item.value}</span>
          </div>
        ))}
      </div>
    </footer>
  );
};
