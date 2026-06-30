import type { ReactNode } from 'react';

type ExplorerCardMetadataItem = {
  label: string;
  value: ReactNode;
};

type ExplorerCardProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  badge?: ReactNode;
  metadata?: ExplorerCardMetadataItem[];
};

export function ExplorerCard({
  eyebrow,
  title,
  description,
  badge,
  metadata = [],
}: ExplorerCardProps) {
  return (
    <article className="explorer-card">
      {(eyebrow || badge) && (
        <div className="explorer-card-header">
          {eyebrow && <span className="explorer-card-eyebrow">{eyebrow}</span>}
          {badge && <strong className="explorer-card-badge">{badge}</strong>}
        </div>
      )}

      <h2>{title}</h2>

      {description && <p>{description}</p>}

      {metadata.length > 0 && (
        <dl className="explorer-card-metadata">
          {metadata.map((item) => (
            <div className="explorer-card-metadata-item" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}