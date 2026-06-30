export type EngineeringApiStatus = 'active' | 'planned' | 'deprecated';

export type EngineeringApiType = 'rest' | 'graphql' | 'webhook' | 'internal';

export type EngineeringApi = {
  id: string;
  name: string;
  type: EngineeringApiType;
  status: EngineeringApiStatus;
  owner: string;
  description: string;
  basePath: string;
  provider: string;
  service: string;
};