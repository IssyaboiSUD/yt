'use client';

import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectCard from './components/ProjectCard';
import styles from './page.module.css';

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=320&h=180&fit=crop",
      views: "1.2K views",
      date: "2 weeks ago"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=320&h=180&fit=crop",
      views: "856 views",
      date: "1 month ago"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with interactive maps and forecasts",
      thumbnail: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=320&h=180&fit=crop",
      views: "2.1K views",
      date: "3 weeks ago"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Analytics platform for social media performance tracking",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&h=180&fit=crop",
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
      id: 6,
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
