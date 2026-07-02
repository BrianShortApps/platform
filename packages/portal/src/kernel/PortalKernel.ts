import type { PortalContextValue } from "../types";
import { getNavigationFromPortalModules } from "../services/modules";
import type { PortalModule } from "../services/modules";
import { ModuleRegistry } from "./ModuleRegistry";

type PortalKernelConfig = {
  appName: string;
  modules: PortalModule[];
  activeModuleId?: string;
  currentUser?: PortalContextValue["currentUser"];
  theme?: PortalContextValue["theme"];
  onNavigate?: (moduleId: string) => void;
};

export class PortalKernel {
  private readonly moduleRegistry: ModuleRegistry;
  private readonly config: PortalKernelConfig;

  constructor(config: PortalKernelConfig) {
    this.config = config;
    this.moduleRegistry = new ModuleRegistry(config.modules);
  }

  getActiveModule(): PortalModule | undefined {
    return this.moduleRegistry.getById(this.config.activeModuleId);
  }

  toContextValue(): PortalContextValue {
    const activeModule = this.getActiveModule();

    return {
      appName: this.config.appName,
      currentUser: this.config.currentUser,
      theme: this.config.theme ?? "dark",
      navigation: getNavigationFromPortalModules(this.moduleRegistry.getAll()),
      activeNavigationItemId: activeModule?.id,
      onNavigate: this.config.onNavigate,
      statusItems: [...(activeModule?.statusItems ?? [])],
    };
  }
}
