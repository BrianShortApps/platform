import type { ComponentType, ReactNode } from "react";
import type { PortalNavigationItem, PortalStatusItem } from "../types";

export type PortalModule = {
  id: string;
  title: string;
  component: ComponentType;
  icon?: ReactNode;
  category?: string;
  order?: number;
  permissions?: string[];
  statusItems?: PortalStatusItem[];
};

export const getSortedPortalModules = (
  modules: PortalModule[],
): PortalModule[] => {
  return [...modules].sort((first, second) => {
    return (first.order ?? 0) - (second.order ?? 0);
  });
};

export const getNavigationFromPortalModules = (
  modules: PortalModule[],
): PortalNavigationItem[] => {
  return getSortedPortalModules(modules).map((module) => ({
    id: module.id,
    label: module.title,
    route: `/${module.id}`,
    icon: module.icon,
    requiredPermissions: module.permissions,
  }));
};

export const getPortalModuleById = (
  modules: PortalModule[],
  moduleId?: string,
): PortalModule | undefined => {
  if (!moduleId) {
    return getSortedPortalModules(modules)[0];
  }

  return modules.find((module) => module.id === moduleId);
};
