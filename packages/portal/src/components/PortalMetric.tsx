type PortalMetricProps = {
  label: string;
  value: string | number;
  trend?: string;
};

export const PortalMetric = ({ label, value, trend }: PortalMetricProps) => {
  return (
    <article className="portal-metric">
      <div className="portal-metric__value">{value}</div>

      <div className="portal-metric__label">{label}</div>

      {trend && <div className="portal-metric__trend">{trend}</div>}
    </article>
  );
};
