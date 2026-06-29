export type AppView = 'mission-control' | 'artifacts';

export type NavigationItem = {
  id: AppView;
  label: string;
  group: 'mission' | 'domains' | 'system';
};