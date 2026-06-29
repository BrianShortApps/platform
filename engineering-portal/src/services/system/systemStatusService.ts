import type { SystemStatusItem } from './systemStatus.types';

export function loadSystemStatus(): SystemStatusItem[] {
  return [
    { label: 'Artifact Engine', value: 'Connected' },
    { label: 'Git', value: 'main' },
    { label: 'Foundation', value: '003' },
    { label: 'Version', value: '0.1' },
    { label: 'Status', value: 'Healthy' },
  ];
}