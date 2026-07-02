import { usePortal } from "../contexts/PortalContext";

export const PortalRenderer = () => {
  const { activeModule } = usePortal();

  if (!activeModule) {
    return null;
  }

  const ActiveModuleComponent = activeModule.component;

  return <ActiveModuleComponent />;
};
