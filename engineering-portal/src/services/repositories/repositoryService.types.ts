export type RepositoryStatus = 'active' | 'planned' | 'archived';

export type RepositoryType = 'application' | 'package' | 'documentation';

export type EngineeringRepository = {
  id: string;
  name: string;
  type: RepositoryType;
  status: RepositoryStatus;
  owner: string;
  description: string;
  path: string;
  primaryTechnology: string;
};