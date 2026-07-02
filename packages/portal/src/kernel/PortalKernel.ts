import type { PortalContextValue, PortalStatusItem } from "../types";
import { getNavigationFromPortalModules } from "../services/modules";
import type { PortalModule } from "../services/modules";
import { ModuleRegistry } from "./ModuleRegistry";
import { StatusService } from "./StatusService";

type PortalKernelConfig = {
  appName: string;
  modules: PortalModule[];
  activeModuleId?: string;
  currentUser?: PortalContextValue["currentUser"];
  theme?: PortalContextValue["theme"];
  onNavigate?: (moduleId: string) => void;
  statusItems?: PortalStatusItem[];
};

export class PortalKernel {
  private readonly moduleRegistry: ModuleRegistry;
  private readonly statusService: StatusService;
  private readonly config: PortalKernelConfig;

  constructor(config: PortalKernelConfig) {
    this.config = config;
    this.moduleRegistry = new ModuleRegistry(config.modules);
    this.statusService = new StatusService(config.statusItems);
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
      statusItems: this.statusService.getStatusItems(activeModule?.statusItems),
    };
  }
}
