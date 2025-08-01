'use client';

import { Play, Clock } from 'lucide-react';
import styles from './ProjectCard.module.css';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  views: string;
  date: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects?selected=${project.id}`} className={styles.link} prefetch={false}>
      <div className={styles.card}>
        <div className={styles.thumbnailContainer}>
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className={styles.thumbnail}
          />
          <div className={styles.overlay}>
            <div className={styles.playButton}>
              <Play size={20} fill="white" />
            </div>
          </div>
          <div className={styles.duration}>
            <Clock size={12} />
            <span>Demo</span>
          </div>
        </div>
        
        <div className={styles.cardContent}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.metadata}>
            <span className={styles.views}>{project.views}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.date}>{project.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 