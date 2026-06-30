import { ExplorerCard } from '../ExplorerCard';

import type { EngineeringArtifact } from '../../services/artifacts';

type ArtifactCardProps = {
  artifact: EngineeringArtifact;
};

export function ArtifactCard({ artifact }: ArtifactCardProps) {
  return (
    <ExplorerCard
      eyebrow={artifact.id}
      title={artifact.title}
      description={artifact.description}
      badge={artifact.status}
      metadata={[
        {
          label: 'Type',
          value: artifact.type,
        },
        {
          label: 'Owner',
          value: artifact.owner,
        },
      ]}
    />
  );
}