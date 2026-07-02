import type { PortalContextValue, PortalStatusItem } from "../types";
import type { PortalModule } from "../services/modules";
import { ModuleRegistry } from "../runtime/ModuleRegistry";
import { NavigationService } from "../runtime/NavigationService";
import { StatusService } from "../runtime/StatusService";

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
  private readonly navigationService: NavigationService;
  private readonly statusService: StatusService;
  private readonly config: PortalKernelConfig;

  constructor(config: PortalKernelConfig) {
    this.config = config;
    this.moduleRegistry = new ModuleRegistry(config.modules);
    this.navigationService = new NavigationService(
      this.moduleRegistry.getAll(),
    );
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
      navigation: this.navigationService.getNavigationItems(),
      activeNavigationItemId: activeModule?.id,
      onNavigate: this.config.onNavigate,
      statusItems: this.statusService.getStatusItems(activeModule?.statusItems),
    };
  }
}
