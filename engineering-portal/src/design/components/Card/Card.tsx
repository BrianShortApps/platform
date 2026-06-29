import type { HTMLAttributes, ReactNode } from "react";
import { Surface } from "../Surface";
import "./Card.css";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  title?: string;
  description?: string;
};

export function Card({
  children,
  title,
  description,
  className = "",
  ...props
}: CardProps) {
  return (
    <Surface className={`bsa-card ${className}`} {...props}>
      {(title || description) && (
        <div className="bsa-card__header">
          {title && <h2 className="bsa-card__title">{title}</h2>}
          {description && <p className="bsa-card__description">{description}</p>}
        </div>
      )}

      <div className="bsa-card__content">{children}</div>
    </Surface>
  );
}