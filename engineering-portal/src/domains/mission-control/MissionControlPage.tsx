import { Dashboard } from '../../features/dashboard/Dashboard';
import { MissionStatus } from '../../features/mission-control/MissionStatus';
import { KnowledgeSummaryPanel } from './KnowledgeSummaryPanel';

export function MissionControlPage() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Brian Short Apps Platform</p>
        <h1>Mission Control</h1>
        <p className="lede">
          The command center for structured engineering knowledge, platform
          governance, reusable packages, and application architecture.
        </p>
      </section>

      <MissionStatus />
      <KnowledgeSummaryPanel />
      <Dashboard />
    </>
  );
}