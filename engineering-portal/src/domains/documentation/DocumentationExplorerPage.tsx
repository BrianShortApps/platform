import { documentationCatalog } from './documentationCatalog';

const statusLabel = {
  draft: 'Draft',
  approved: 'Approved',
  deprecated: 'Deprecated',
} as const;

const typeLabel = {
  architecture: 'Architecture',
  adr: 'ADR',
  runbook: 'Runbook',
  'api-spec': 'API Spec',
  workflow: 'Workflow',
  guide: 'Guide',
  standard: 'Standard',
} as const;

export function DocumentationExplorerPage() {
  return (
    <main className="space-y-8">
      <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Foundation 004
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50">
          Documentation Explorer
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Structured engineering documentation for architecture, decisions,
          runbooks, standards, workflows, and platform guidance.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {documentationCatalog.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                {typeLabel[item.type]}
              </span>

              <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                {statusLabel[item.status]}
              </span>
            </div>

            <h2 className="mt-4 text-xl font-semibold text-slate-50">
              {item.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {item.summary}
            </p>

            <dl className="mt-5 grid gap-3 text-sm text-slate-300">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Owner
                </dt>
                <dd className="mt-1">{item.owner}</dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Version
                </dt>
                <dd className="mt-1">{item.version}</dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Last Reviewed
                </dt>
                <dd className="mt-1">{item.lastReviewed}</dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}