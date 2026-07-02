import type { ReactNode } from "react";

type PortalManagementListItem = {
  id: string;
  title: string;
  description?: string;
  meta?: string;
  status?: ReactNode;
};

type PortalManagementListProps = {
  items: PortalManagementListItem[];
};

export const PortalManagementList = ({ items }: PortalManagementListProps) => {
  return (
    <div className="portal-management-list">
      {items.map((item) => (
        <article key={item.id} className="portal-management-list__item">
          <div>
            <div className="portal-management-list__title">{item.title}</div>

            {item.description && (
              <div className="portal-management-list__description">
                {item.description}
              </div>
            )}

            {item.meta && (
              <div className="portal-management-list__meta">{item.meta}</div>
            )}
          </div>

          {item.status && (
            <div className="portal-management-list__status">{item.status}</div>
          )}
        </article>
      ))}
    </div>
  );
};
