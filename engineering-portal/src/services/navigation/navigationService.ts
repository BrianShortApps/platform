import type { NavigationItem } from './navigation.types';

export function loadNavigation(): NavigationItem[] {
  return [
    { id: 'mission-control', label: 'Overview', group: 'mission' },
    { id: 'framework-showcase', label: 'Framework Showcase', group: 'mission' },
    { id: 'artifacts', label: 'Artifact Explorer', group: 'domains' },
    { id: 'repositories', label: 'Repository Explorer', group: 'domains' },
    { id: 'services', label: 'Service Explorer', group: 'domains' },
  ];
}