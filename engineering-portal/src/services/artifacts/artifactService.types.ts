export type ArtifactStatus = 'draft' | 'review' | 'approved' | 'stable';

export type EngineeringArtifact = {
  id: string;
  title: string;
  type: string;
  status: ArtifactStatus;
  owner: string;
  description: string;
};