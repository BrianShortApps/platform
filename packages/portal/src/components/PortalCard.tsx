import type { ReactNode } from "react";

type PortalCardProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export const PortalCard = ({ title, subtitle, children }: PortalCardProps) => {
  return (
    <section className="portal-card">
      {(title || subtitle) && (
        <header className="portal-card__header">
          {title && <h2 className="portal-card__title">{title}</h2>}
          {subtitle && <p className="portal-card__subtitle">{subtitle}</p>}
        </header>
      )}

      <div className="portal-card__body">{children}</div>
    </section>
  );
};
