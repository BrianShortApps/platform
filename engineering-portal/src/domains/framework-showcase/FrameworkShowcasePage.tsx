type ExplorerStatus = 'Available' | 'In Development' | 'Coming Soon';

type ExplorerCard = {
  title: string;
  description: string;
  status: ExplorerStatus;
};

const explorers: ExplorerCard[] = [
  {
    title: 'Artifact Explorer',
    description: 'Browse engineering artifacts produced by platform work packages.',
    status: 'Available',
  },
  {
    title: 'Repository Explorer',
    description: 'Validate the framework with source repository visibility.',
    status: 'Available',
  },
  {
    title: 'Service Explorer',
    description: 'Map applications, packages, and internal services.',
    status: 'In Development',
  },
  {
    title: 'API Explorer',
    description: 'Catalog APIs, endpoints, ownership, and integration boundaries.',
    status: 'Coming Soon',
  },
  {
    title: 'Documentation Explorer',
    description: 'Surface guides, references, architecture notes, and decision records.',
    status: 'Coming Soon',
  },
  {
    title: 'Workflow Explorer',
    description: 'Track engineering workflows, operating procedures, and release paths.',
    status: 'Coming Soon',
  },
];

const frameworkSteps = [
  'Domain Model',
  'Adapter',
  'Service',
  'Explorer Definition',
  'Workspace Framework',
  'Results + Inspector',
];

function getStatusClassName(status: ExplorerStatus) {
  return `showcase-status showcase-status-${status
    .toLowerCase()
    .replaceAll(' ', '-')}`;
}

export function FrameworkShowcasePage() {
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

      <section className="showcase-section">
        <div className="section-heading">
          <p className="eyebrow">Explorer Catalog</p>
          <h2>One framework. Multiple engineering domains.</h2>
        </div>

        <div className="showcase-grid" aria-label="Explorer modules">
          {explorers.map((explorer) => (
            <article className="showcase-card" key={explorer.title}>
              <span className={getStatusClassName(explorer.status)}>
                {explorer.status}
              </span>

              <h3>{explorer.title}</h3>
              <p>{explorer.description}</p>
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
            and definition. The shared workspace framework owns the reusable
            explorer shell, results layout, selection state, and inspection
            experience.
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