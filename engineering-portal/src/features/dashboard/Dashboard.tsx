import { ArtifactCard } from '../../components/ArtifactCard';
import { loadArtifacts } from '../../services/artifacts';

export function Dashboard() {
  const artifacts = loadArtifacts();

  return (
    <section className="mission-grid">
      {artifacts.map((artifact) => (
        <ArtifactCard artifact={artifact} key={artifact.id} />
      ))}
    </section>
  );
}