import { platformKnowledgeService } from '../../services/knowledgeRegistryService';

export function KnowledgeSummaryPanel() {
  const nodes = platformKnowledgeService.nodes.getAll();

  const documentationCount = nodes.filter(
    (node) => node.kind === 'documentation',
  ).length;

  const workflowCount = nodes.filter((node) => node.kind === 'workflow').length;

  const relationships = platformKnowledgeService.relationships.getAll();

  const relationshipTypeCount = new Set(
    relationships.map((relationship) => relationship.type),
  ).size;

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Knowledge Contracts
      </p>

      <h2 className="mt-3 text-2xl font-bold text-slate-50">
        Shared Knowledge Registry
      </h2>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        Documentation and workflow domains are now registered as shared
        KnowledgeNode records.
      </p>

      <div className="mt-5 grid gap-3 md:grid-cols-5">
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Total Nodes
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-50">
            {nodes.length}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Documentation
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-50">
            {documentationCount}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Workflows
          </p>
          <p className="mt-2 text-2xl font-bold text-slate-50">
            {workflowCount}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Relationships
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-50">
                {relationships.length}
            </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Relationship Types
            </p>
            <p className="mt-2 text-2xl font-bold text-slate-50">
                {relationshipTypeCount}
            </p>
            </div>
      </div>
    </section>
  );
}