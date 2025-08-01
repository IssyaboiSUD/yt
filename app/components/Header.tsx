'use client';

import { useState } from 'react';
import { Menu, Search, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';
import { useTheme } from '../contexts/ThemeContext';
import Image from 'next/image';

interface HeaderProps {
  sidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
}

export default function Header({ sidebarCollapsed, onToggleSidebar }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  // Define search keywords and their corresponding routes
  const searchKeywords: { [key: string]: string } = {
    'project': '/projects',
    'home': '/',
    'projects': '/projects',
    'portfolio': '/projects',
    'work': '/projects',
    'experience': '/about',
    'education': '/about',
    'about': '/about',
    'cv' : '/about',
    'contact': '/contact',
    'resume': '/about',
    'skills': '/about',
    'languages': '/about',
    'bioinformatics': '/about',
    'it specialist': '/about',
    'software engineer': '/about',
    'developer': '/about',
    'programming': '/projects',
    'coding': '/projects',
    'react': '/projects',
    'javascript': '/projects',
    'python': '/projects',
    'java': '/projects',
    'nextjs': '/projects',
    'typescript': '/projects',
    'github': '/contact',
    'linkedin': '/contact',
    'email': '/contact',
    'message': '/contact',
    'reach out': '/contact',
    'get in touch': '/contact',
    'location': '/contact',
    'address': '/contact',
    'phone': '/contact',
    'phone number': '/contact',
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    
    // Check for exact matches first
    if (searchKeywords[query]) {
      router.push(searchKeywords[query]);
      setSearchQuery('');
      return;
    }

    // Check for partial matches
    for (const [keyword, route] of Object.entries(searchKeywords)) {
      if (query.includes(keyword) || keyword.includes(query)) {
        router.push(route);
        setSearchQuery('');
        return;
      }
    }

    // If no match found, show a subtle indication (you could add a toast notification here)
    console.log('No matching page found for:', searchQuery);
    
    // Optional: Navigate to projects page as default search result
    router.push('/');
    setSearchQuery('');
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        {onToggleSidebar && (
          <button 
            className={styles.menuButton}
            onClick={onToggleSidebar}
          >
            <Menu size={24} />
          </button>
        )}
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Sudarshan</span>
          </div>
        </Link>
      </div>

      <div className={styles.centerSection}>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search projects, about, contact..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>

      <div className={styles.rightSection}>
        <button 
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        
        <a href="/contact">
        <button className={styles.contactButton}>
          
          Contact Me
          
        </button>
        </a>
        
        <div className={styles.socialMenuContainer}>
          <button 
            className={styles.socialButton}
            onClick={() => setShowSocialMenu(!showSocialMenu)}
          >
            <img src="/at-sign.png" alt="Social" width={24} height={24} className={styles.iconImg} />
          </button>
          
          {showSocialMenu && (
            <div className={styles.socialMenu}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <img src="/github.png" alt="GitHub" width={20} height={20} className={styles.iconImg} />
                <span>GitHub</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <img src="/instagram.png" alt="Instagram" width={20} height={20} className={styles.iconImg} />
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <img src="/linkedin.png" alt="LinkedIn" width={20} height={20} className={styles.iconImg} />
                <span>LinkedIn</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
} 