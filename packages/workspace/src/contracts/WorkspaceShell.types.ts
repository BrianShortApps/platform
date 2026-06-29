export type WorkspaceStatus = 'healthy' | 'warning' | 'critical' | 'offline';

export type WorkspaceNavigationItem = {
  id: string;
  label: string;
  group: string;
};

export type WorkspaceStatusItem = {
  label: string;
  value: string;
};

export type WorkspaceShellDefinition = {
  title: string;
  organization: string;
  foundation?: string;
  sprint?: string;
  sprintName?: string;
  status: WorkspaceStatus;
  navigation: WorkspaceNavigationItem[];
  statusItems: WorkspaceStatusItem[];
};