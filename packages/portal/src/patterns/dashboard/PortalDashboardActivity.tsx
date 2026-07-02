type PortalDashboardActivityItem = {
  id: string;
  title: string;
  description?: string;
  timestamp?: string;
  status?: "success" | "warning" | "danger" | "info" | "default";
};

type PortalDashboardActivityProps = {
  items: PortalDashboardActivityItem[];
};

export const PortalDashboardActivity = ({
  items,
}: PortalDashboardActivityProps) => {
  return (
    <div className="portal-dashboard-activity">
      {items.map((item) => (
        <article key={item.id} className="portal-dashboard-activity__item">
          <span
            className={`portal-dashboard-activity__dot portal-dashboard-activity__dot--${
              item.status ?? "default"
            }`}
          />

          <div>
            <div className="portal-dashboard-activity__title">{item.title}</div>

            {item.description && (
              <div className="portal-dashboard-activity__description">
                {item.description}
              </div>
            )}

            {item.timestamp && (
              <div className="portal-dashboard-activity__timestamp">
                {item.timestamp}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};
