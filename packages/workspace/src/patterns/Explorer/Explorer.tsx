import type { ReactNode } from 'react';
import type { ExplorerDefinition } from './Explorer.types.js';

export type ExplorerProps = {
  definition: ExplorerDefinition;
  children: ReactNode;
};

export function Explorer({ definition, children }: ExplorerProps) {
  return (
    <section className="workspace-explorer">
      <header className="workspace-explorer-header">
        {definition.eyebrow && (
          <p className="workspace-explorer-eyebrow">{definition.eyebrow}</p>
        )}

        <h1>{definition.title}</h1>

        {definition.description && (
          <p className="workspace-explorer-description">
            {definition.description}
          </p>
        )}
      </header>

      <div className="workspace-explorer-content">{children}</div>
    </section>
  );
}