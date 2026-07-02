import type { PortalModule } from "../services/modules";
import type { PortalUser } from "../types";

export class PermissionService {
  canAccessModule(module: PortalModule, user?: PortalUser): boolean {
    if (!module.permissions || module.permissions.length === 0) {
      return true;
    }

    if (!user?.permissions) {
      return false;
    }

    return module.permissions.every((permission) =>
      user.permissions?.includes(permission),
    );
  }

  getAccessibleModules(
    modules: PortalModule[],
    user?: PortalUser,
  ): PortalModule[] {
    return modules.filter((module) => this.canAccessModule(module, user));
  }
}
