import type { ActiveExplorerId } from '../explorers';

export type AppView =
  | 'mission-control'
  | 'framework-showcase'
  | 'platform-constitution'
  | ActiveExplorerId;

export type NavigationItem = {
  id: AppView;
  label: string;
  group: 'mission' | 'domains' | 'system' | 'apis';
  status?: 'available' | 'in-development' | 'planned';
};