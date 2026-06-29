import type { EngineeringArtifact } from '../../services/artifacts';

type ArtifactCardProps = {
  artifact: EngineeringArtifact;
};

export function ArtifactCard({ artifact }: ArtifactCardProps) {
  return (
    <article className="artifact-card">
      <div className="artifact-card-meta">
        <span>{artifact.id}</span>
        <span>{artifact.type}</span>
      </div>

      <h2>{artifact.title}</h2>
      <p>{artifact.description}</p>

      <strong>{artifact.status}</strong>
    </article>
  );
}