import type { ComponentType } from 'react';

export type ActiveExplorerId =
  | 'artifacts'
  | 'repositories'
  | 'services'
  | 'apis'
  | 'documentation';

export type PlannedExplorerId = 'workflows';

export type ExplorerId = ActiveExplorerId | PlannedExplorerId;

export type ExplorerStatus = 'available' | 'in-development' | 'planned';

export type ExplorerRegistryItem = {
  id: ExplorerId;
  title: string;
  description: string;
  status: ExplorerStatus;
  category: 'knowledge' | 'source' | 'platform' | 'operations';
  version: string;
  component?: ComponentType;
};