import styles from "./WorkspaceBreadcrumbs.module.css";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface WorkspaceBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function WorkspaceBreadcrumbs({ items }: WorkspaceBreadcrumbsProps) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={`${item.label}-${index}`} className={styles.item}>
            {item.href && !isLast ? (
              <a href={item.href} className={styles.link}>
                {item.label}
              </a>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}

            {!isLast && <span className={styles.separator}>/</span>}
          </span>
        );
      })}
    </nav>
  );
}