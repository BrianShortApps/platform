type PortalExplorerItem = {
  id: string;
  title: string;
  description?: string;
  type?: string;
};

type PortalExplorerListProps = {
  items: PortalExplorerItem[];
};

export const PortalExplorerList = ({ items }: PortalExplorerListProps) => {
  return (
    <div className="portal-explorer-list">
      {items.map((item) => (
        <article key={item.id} className="portal-explorer-list__item">
          <div className="portal-explorer-list__type">
            {item.type ?? "Item"}
          </div>

          <div className="portal-explorer-list__title">{item.title}</div>

          {item.description && (
            <div className="portal-explorer-list__description">
              {item.description}
            </div>
          )}
        </article>
      ))}
    </div>
  );
};
