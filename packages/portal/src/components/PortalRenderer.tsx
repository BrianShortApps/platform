import { usePortal } from "../contexts/PortalContext";

export const PortalRenderer = () => {
  const { activeModule, navigation } = usePortal();

  if (!activeModule) {
    return (
      <section className="portal-empty-state">
        <p className="portal-empty-state__eyebrow">Portal</p>
        <h1 className="portal-empty-state__title">Select a module</h1>
        <p className="portal-empty-state__description">
          Choose a workspace from the navigation menu to begin.
        </p>

        <div className="portal-empty-state__modules">
          {navigation.map((item) => (
            <div key={item.id} className="portal-empty-state__module">
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const ActiveModuleComponent = activeModule.component;

  return <ActiveModuleComponent />;
};
