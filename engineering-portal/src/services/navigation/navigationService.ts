import type { NavigationItem } from './navigation.types';

export function loadNavigation(): NavigationItem[] {
  return [
    { id: 'mission-control', label: 'Overview', group: 'mission' },
    { id: 'artifacts', label: 'Artifact Explorer', group: 'domains' },
  ];
}