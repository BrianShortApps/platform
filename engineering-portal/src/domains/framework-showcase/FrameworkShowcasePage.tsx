import {
  getExplorerStats,
  getExplorerStatusLabel,
  loadExplorerRegistry,
} from '../../services/explorers';

import type { ActiveExplorerId } from '../../services/explorers';
import type { AppView } from '../../services/navigation';

type FrameworkShowcasePageProps = {
  onNavigate?: (view: AppView) => void;
};

const frameworkSteps = [
  'Domain Model',
  'Adapter',
  'Service',
  'Explorer Definition',
  'Workspace Framework',
  'Results + Inspector',
];

function getStatusClassName(status: string) {
  return `showcase-status showcase-status-${status}`;
}

export function FrameworkShowcasePage({ onNavigate }: FrameworkShowcasePageProps) {
  const explorers = loadExplorerRegistry();
  const stats = getExplorerStats();

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Workspace Framework</p>

        <h1>Framework Showcase</h1>

        <p className="lede">
          The BrianShortApps Explorer Framework provides a consistent, reusable
          experience for browsing engineering knowledge across artifacts,
          repositories, services, APIs, documentation, and workflows.
        </p>
      </section>

      <section className="mission-status" aria-label="Explorer registry status">
        <div>
          <span>Total Explorers</span>
          <strong>{stats.total}</strong>
        </div>

        <div>
          <span>Available</span>
          <strong>{stats.available}</strong>
        </div>

        <div>
          <span>In Development</span>
          <strong>{stats.inDevelopment}</strong>
        </div>

        <div>
          <span>Planned</span>
          <strong>{stats.planned}</strong>
        </div>
      </section>

      <section className="showcase-section">
        <div className="section-heading">
          <p className="eyebrow">Explorer Catalog</p>
          <h2>One registry. Multiple engineering domains.</h2>
        </div>

        <div className="showcase-grid" aria-label="Explorer modules">
          {explorers.map((explorer) => (
            <article className="showcase-card" key={explorer.id}>
              <span className={getStatusClassName(explorer.status)}>
                {getExplorerStatusLabel(explorer.status)}
              </span>

              <h3>{explorer.title}</h3>
              <p>{explorer.description}</p>
              {explorer.component && (
                <button
                    type="button"
                    className="showcase-card-action"
                    onClick={() => onNavigate?.(explorer.id as ActiveExplorerId)}
                >
                    Open Explorer
                </button>
                )}
            </article>
          ))}
        </div>
      </section>

      <section className="framework-map" aria-label="Framework architecture">
        <div>
          <p className="eyebrow">Architecture Pattern</p>
          <h2>Domain code adapts to the framework.</h2>
          <p>
            Each explorer supplies its own model, adapter, service, inspector,
            and definition. The registry provides a single source of truth for
            platform explorer metadata.
          </p>
        </div>

        <div className="framework-steps">
          {frameworkSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </section>
    </>
  );
}