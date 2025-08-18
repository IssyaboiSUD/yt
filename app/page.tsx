'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import styles from './page.module.css';
import { useTheme } from './contexts/ThemeContext';

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [heroText, setHeroText] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const heroMessages = [
    "Hello",
    "I am Sudarshan",
    "Let's build something together"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroText((prev) => (prev + 1) % heroMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 2,
      title: "AI Based Talent Matching System ",
      description: "Semantic AI-powered employee matching for project staffing",
      thumbnail: "/ai.png",
      views: "1.2K views",
      date: "2 weeks ago"
    },
    {
      id: 3,
      title: "Next.js To-Do App",
      description: "Simple and modern task management built with React and Next.js",
      views: "1.2M views",
      thumbnail: "/focus.png",
      date: "1 month ago"
    },
    {
      id: 1,
      title: "Vacation Rental Booking Website",
      description: "Full-stack booking platform for vacation rentals with real payments, automated emails, and responsive UI",
      thumbnail: "bt.png",
      views: "2.1K views",
      date: "3 weeks ago"
    },
    {
      id: 6,
      title: "Othello Game with AI Opponent",
      description: "Java-based Reversi game with AI strategy and graphical interface",
      thumbnail: "othello.png",
      views: "1.5K views",
      date: "1 week ago"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "Mobile app for tracking workouts and fitness goals",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=320&h=180&fit=crop",
      views: "3.2K views",
      date: "2 months ago"
    },
    {
      id: 4,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot powered by machine learning algorithms",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=320&h=180&fit=crop",
      views: "4.7K views",
      date: "3 months ago"
    }
  ];

  return (
    <div className={styles.container}>
      <Header 
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className={styles.main}>
        <Sidebar collapsed={sidebarCollapsed} />
        <div className={`${styles.content} ${sidebarCollapsed ? styles.sidebarCollapsed : ''}`}>
          {/* Hero Section */}
          <div className={`${styles.heroSection} ${isDark ? styles.heroSectionDark : ''}`}>
            <div className={styles.heroText}>
              <span className={styles.heroMessage}>{heroMessages[heroText]}</span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
