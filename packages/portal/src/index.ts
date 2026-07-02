export type {
  PortalContextValue,
  PortalNavigationItem,
  PortalStatusItem,
  PortalTheme,
  PortalUser,
} from "./types";

export { PortalLayout } from "./components/PortalLayout";
export { SideNavigation } from "./components/SideNavigation";
export { StatusBar } from "./components/StatusBar";
export { TopBar } from "./components/TopBar";
export { Workspace } from "./components/Workspace";

export {
  PortalContext,
  PortalProvider,
  usePortal,
} from "./contexts/PortalContext";

export {
  canAccessNavigationItem,
  getVisibleNavigationItems,
} from "./services/navigation";

export type { PortalModule } from "./services/modules";

export {
  getNavigationFromPortalModules,
  getPortalModuleById,
  getSortedPortalModules,
} from "./services/modules";

export { PortalKernel } from "./kernel/PortalKernel";
export { ModuleRegistry } from "./runtime/ModuleRegistry";
export { NavigationService } from "./runtime/NavigationService";
export { StatusService } from "./runtime/StatusService";
export { PermissionService } from "./runtime/PermissionService";

import "./styles/portal.css";
