import { getArtifactStats } from '../../services/artifacts';

export function MissionStatus() {
  const stats = getArtifactStats();

  return (
    <section className="mission-status">
      <div>
        <span>Total Artifacts</span>
        <strong>{stats.total}</strong>
      </div>
      <div>
        <span>Stable</span>
        <strong>{stats.stable}</strong>
      </div>
      <div>
        <span>Draft</span>
        <strong>{stats.draft}</strong>
      </div>
      <div>
        <span>Standards</span>
        <strong>{stats.standards}</strong>
      </div>
    </section>
  );
}