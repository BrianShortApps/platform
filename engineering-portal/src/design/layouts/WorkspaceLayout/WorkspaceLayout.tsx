import type { ReactNode } from "react";
import styles from "./WorkspaceLayout.module.css";

interface WorkspaceLayoutProps {
  sidebar?: ReactNode;
  header?: ReactNode;
  children: ReactNode;
}

export function WorkspaceLayout({
  sidebar,
  header,
  children,
}: WorkspaceLayoutProps) {
  return (
    <div className={styles.shell}>
      {sidebar && <aside className={styles.sidebar}>{sidebar}</aside>}

      <div className={styles.main}>
        {header && <header className={styles.header}>{header}</header>}

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}