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
export { PortalRuntime } from "./components/PortalRuntime";
export { PortalRenderer } from "./components/PortalRenderer";
export { PortalCard } from "./components/PortalCard";
export { PortalMetric } from "./components/PortalMetric";
export { PortalSection } from "./components/PortalSection";
export { PortalGrid } from "./components/PortalGrid";
export { PortalBadge } from "./components/PortalBadge";
export { PortalButton } from "./components/PortalButton";

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
export { ThemeService } from "./runtime/ThemeService";

import "./styles/portal.css";
