import { PortalLayout } from "./PortalLayout";
import { PortalRenderer } from "./PortalRenderer";
import { PortalProvider } from "../contexts/PortalContext";
import { PortalKernel } from "../kernel/PortalKernel";
import type { PortalContextValue, PortalStatusItem } from "../types";
import type { PortalModule } from "../services/modules";

type PortalRuntimeProps = {
  appName: string;
  modules: PortalModule[];
  activeModuleId?: string;
  currentUser?: PortalContextValue["currentUser"];
  theme?: PortalContextValue["theme"];
  onNavigate?: (moduleId: string) => void;
  statusItems?: PortalStatusItem[];
};

export const PortalRuntime = (config: PortalRuntimeProps) => {
  const portalKernel = new PortalKernel(config);

  return (
    <PortalProvider value={portalKernel.toContextValue()}>
      <PortalLayout>
        <PortalRenderer />
      </PortalLayout>
    </PortalProvider>
  );
};
