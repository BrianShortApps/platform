import { platformConstitution } from './platformConstitution';

export function PlatformConstitutionPage() {
  return (
    <main className="space-y-8">
      <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {platformConstitution.version}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50">
          {platformConstitution.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          {platformConstitution.subtitle}
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {platformConstitution.principles.map((principle) => (
          <article
            key={principle.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-50">
              {principle.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {principle.description}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Engineering Workflow
        </p>

        <h2 className="mt-4 text-2xl font-bold text-slate-50">
          Work Package Delivery Model
        </h2>

        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {[
            'Architecture Intent',
            'Component Package',
            'Incremental Implementation',
            'Build Verification',
            'Visual Verification',
            'Commit & Push',
            'Architecture Recap',
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Step {index + 1}
              </p>

              <p className="mt-2 text-sm font-medium text-slate-200">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}