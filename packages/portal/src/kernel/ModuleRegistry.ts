import type { PortalModule } from "../services/modules";

export class ModuleRegistry {
  private readonly modules: PortalModule[];

  constructor(modules: PortalModule[]) {
    this.modules = [...modules];
  }

  getAll(): PortalModule[] {
    return [...this.modules].sort((first, second) => {
      return (first.order ?? 0) - (second.order ?? 0);
    });
  }

  getById(moduleId?: string): PortalModule | undefined {
    if (!moduleId) {
      return this.getAll()[0];
    }

    return this.modules.find((module) => module.id === moduleId);
  }
}
