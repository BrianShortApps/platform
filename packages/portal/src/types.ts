import type { ReactNode } from "react";

export type PortalTheme = "light" | "dark" | "auto";

export type PortalNavigationItem = {
  id: string;
  label: string;
  route: string;
  icon?: ReactNode;
  requiredPermissions?: string[];
};

export type PortalStatusItem = {
  id: string;
  label: string;
  value: string;
};

export type PortalUser = {
  id: string;
  name: string;
  email?: string;
  permissions?: string[];
};

export type PortalContextValue = {
  appName: string;
  currentUser?: PortalUser;
  theme: PortalTheme;
  navigation: PortalNavigationItem[];
  statusItems: PortalStatusItem[];
  activeNavigationItemId?: string;
  onNavigate?: (itemId: string) => void;
};
