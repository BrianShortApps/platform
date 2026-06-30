export type AppView =
  | 'mission-control'
  | 'framework-showcase'
  | 'artifacts'
  | 'repositories';

export type NavigationItem = {
  id: AppView;
  label: string;
  group: 'mission' | 'domains' | 'system';
};