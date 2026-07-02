import type { ReactNode } from "react";

type PortalSettingsGroupProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export const PortalSettingsGroup = ({
  title,
  description,
  children,
}: PortalSettingsGroupProps) => {
  return (
    <section className="portal-settings-group">
      <header>
        <h3 className="portal-settings-group__title">{title}</h3>
        {description && (
          <p className="portal-settings-group__description">{description}</p>
        )}
      </header>

      <div className="portal-settings-group__body">{children}</div>
    </section>
  );
};
