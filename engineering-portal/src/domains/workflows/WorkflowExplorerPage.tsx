import { workflowCatalog } from './workflowCatalog';

const statusLabel = {
  draft: 'Draft',
  active: 'Active',
  deprecated: 'Deprecated',
} as const;

const typeLabel = {
  delivery: 'Delivery',
  review: 'Review',
  release: 'Release',
  incident: 'Incident',
  documentation: 'Documentation',
  architecture: 'Architecture',
  lifecycle: 'Lifecycle',
} as const;

export function WorkflowExplorerPage() {
  return (
    <main className="space-y-8">
      <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Foundation 004
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50">
          Workflow Explorer
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Structured engineering workflows for delivery, review, documentation,
          API lifecycle, release, and platform operations.
        </p>
      </section>

      <section className="grid gap-4">
        {workflowCatalog.map((workflow) => (
          <article
            key={workflow.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                {typeLabel[workflow.type]}
              </span>

              <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                {statusLabel[workflow.status]}
              </span>
            </div>

            <h2 className="mt-4 text-xl font-semibold text-slate-50">
              {workflow.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {workflow.summary}
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Inputs
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {workflow.inputs.map((input) => (
                    <li key={input}>• {input}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Outputs
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {workflow.outputs.map((output) => (
                    <li key={output}>• {output}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Stages
              </h3>

              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {workflow.stages.map((stage, index) => (
                  <div
                    key={stage.id}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      Step {index + 1}
                    </p>

                    <h4 className="mt-2 text-sm font-semibold text-slate-100">
                      {stage.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-5 flex flex-wrap gap-2">
              {workflow.tags.map((tag) => (
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