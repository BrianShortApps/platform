import type { ReactNode } from "react";
import styles from "./WorkspaceSidebar.module.css";

export interface WorkspaceNavItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  active?: boolean;
}

interface WorkspaceSidebarProps {
  brand?: ReactNode;
  items: WorkspaceNavItem[];
  footer?: ReactNode;
}

export function WorkspaceSidebar({
  brand,
  items,
  footer,
}: WorkspaceSidebarProps) {
  return (
    <nav className={styles.sidebar} aria-label="Workspace navigation">
      {brand && <div className={styles.brand}>{brand}</div>}

      <div className={styles.nav}>
        {items.map((item) => {
          const content = (
            <>
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              <span>{item.label}</span>
            </>
          );

          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className={[styles.item, item.active ? styles.active : ""].join(" ")}
            >
              {content}
            </a>
          ) : (
            <button
              key={item.label}
              type="button"
              className={[styles.item, item.active ? styles.active : ""].join(" ")}
            >
              {content}
            </button>
          );
        })}
      </div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </nav>
  );
}