import type { PortalNavigationItem, PortalUser } from '../types';

export const canAccessNavigationItem = (
  item: PortalNavigationItem,
  user?: PortalUser,
): boolean => {
  if (!item.requiredPermissions || item.requiredPermissions.length === 0) {
    return true;
  }

  if (!user?.permissions) {
    return false;
  }

  return item.requiredPermissions.every((permission) =>
    user.permissions?.includes(permission),
  );
};

export const getVisibleNavigationItems = (
  navigation: PortalNavigationItem[],
  user?: PortalUser,
): PortalNavigationItem[] => {
  return navigation.filter((item) => canAccessNavigationItem(item, user));
};