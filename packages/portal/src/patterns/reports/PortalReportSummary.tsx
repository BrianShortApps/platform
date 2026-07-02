import { PortalGrid } from "../../components/PortalGrid";
import { PortalMetric } from "../../components/PortalMetric";

type PortalReportSummaryItem = {
  id: string;
  label: string;
  value: string | number;
  trend?: string;
};

type PortalReportSummaryProps = {
  items: PortalReportSummaryItem[];
};

export const PortalReportSummary = ({ items }: PortalReportSummaryProps) => {
  return (
    <PortalGrid columns={4}>
      {items.map((item) => (
        <PortalMetric
          key={item.id}
          label={item.label}
          value={item.value}
          trend={item.trend}
        />
      ))}
    </PortalGrid>
  );
};
