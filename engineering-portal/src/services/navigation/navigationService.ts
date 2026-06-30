import { loadActiveExplorers } from '../explorers';

import type { NavigationItem } from './navigation.types';

export function loadNavigation(): NavigationItem[] {
  const platformItems: NavigationItem[] = [
    { id: 'mission-control', label: 'Overview', group: 'mission' },
    { id: 'framework-showcase', label: 'Framework Showcase', group: 'mission' },
  ];

  const explorerItems: NavigationItem[] = loadActiveExplorers().map(
    (explorer) => ({
      id: explorer.id,
      label: explorer.title,
      group: 'domains',
      status: explorer.status,
    }),
  );

  return [...platformItems, ...explorerItems];
}