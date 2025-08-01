'use client';

import { Home, User, FolderOpen, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

interface SidebarProps {
  collapsed: boolean;
}

export default function Sidebar({ collapsed }: SidebarProps) {
  const pathname = usePathname();
  
  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: User, label: 'About Me', href: '/about' },
    { icon: FolderOpen, label: 'Projects', href: '/projects' },
    { icon: Mail, label: 'Contact', href: '/contact' },
  ];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <nav className={styles.nav}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`${styles.menuItem} ${pathname === item.href ? styles.active : ''}`}
          >
            <div className={styles.menuIcon}>
              <item.icon size={24} />
            </div>
            {!collapsed && (
              <span className={styles.menuLabel}>{item.label}</span>
            )}
          </Link>
        ))}
      </nav>
      
      {!collapsed && (
        <div className={styles.sidebarFooter}>
          <div className={styles.sidebarSection}>
            <h3 className={styles.sectionTitle}>About</h3>
            <p className={styles.sectionText}>
              Full-stack developer passionate about creating innovative web applications.
            </p>
          </div>
        </div>
      )}
    </aside>
  );
} 