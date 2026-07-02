import type { PortalNavigationItem } from "../types";
import type { PortalModule } from "../services/modules";
import { getNavigationFromPortalModules } from "../services/modules";

export class NavigationService {
  private readonly modules: PortalModule[];

  constructor(modules: PortalModule[]) {
    this.modules = [...modules];
  }

  getNavigationItems(): PortalNavigationItem[] {
    return getNavigationFromPortalModules(this.modules);
  }
}
