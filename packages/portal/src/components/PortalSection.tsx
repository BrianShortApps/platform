import type { ReactNode } from "react";

type PortalSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export const PortalSection = ({
  title,
  description,
  children,
}: PortalSectionProps) => {
  return (
    <section className="portal-section">
      <header className="portal-section__header">
        <h2 className="portal-section__title">{title}</h2>

        {description && (
          <p className="portal-section__description">{description}</p>
        )}
      </header>

      <div className="portal-section__content">{children}</div>
    </section>
  );
};
