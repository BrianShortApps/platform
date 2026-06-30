export type EngineeringServiceStatus = 'active' | 'planned' | 'deprecated';

export type EngineeringServiceType =
  | 'frontend'
  | 'backend'
  | 'package'
  | 'documentation'
  | 'infrastructure';

export type EngineeringService = {
  id: string;
  name: string;
  type: EngineeringServiceType;
  status: EngineeringServiceStatus;
  owner: string;
  description: string;
  repository: string;
  technology: string;
  lifecycle: 'foundation' | 'growth' | 'mature';
};