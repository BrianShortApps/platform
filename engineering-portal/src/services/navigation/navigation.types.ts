import type { ActiveExplorerId } from '../explorers';

export type AppView =
  | 'mission-control'
  | 'framework-showcase'
  | ActiveExplorerId;

export type NavigationItem = {
  id: AppView;
  label: string;
  group: 'mission' | 'domains' | 'system';
  status?: 'available' | 'in-development' | 'planned';
};