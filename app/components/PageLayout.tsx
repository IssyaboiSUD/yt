'use client';

import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={styles.container}>
      <Header 
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className={styles.main}>
        <Sidebar collapsed={sidebarCollapsed} />
        <div className={`${styles.content} ${sidebarCollapsed ? styles.sidebarCollapsed : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
} 