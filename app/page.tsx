'use client';

import { useState } from 'react';
import styles from './page.module.css';

import { ArrowRight, Github, Linkedin, Mail, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Vacation Rental Booking Website",
      description: "Full-stack vacation rental booking platform with real payments and automated emails",
      thumbnail: "/bt-t.png",
      category: "Full-Stack",
      tech: ["Next.js", "React", "TypeScript", "Stripe"],
      demo: "https://bt-lac.vercel.app/",
      github: "https://github.com/IssyaboiSUD/bt"
    },
    {
      id: 2,
      title: "AI Talent Matching",
      description: "Semantic AI-powered employee matching for project staffing",
      thumbnail: "/ai.png",
      category: "AI/ML",
      tech: ["Python", "AWS Bedrock", "Next.js", "LangChain"],
      demo: "https://talent-matching-demo.com",
      github: "https://github.com/example/ai-talent-matching"
    },
    {
      id: 3,
      title: "Next.js To-Do App",
      description: "Modern task management with Kanban-style interface",
      thumbnail: "/focus.png",
      category: "Frontend",
      tech: ["React", "Next.js", "TypeScript", "CSS Modules"],
      demo: "https://todo-green-rho-57.vercel.app/",
      github: "https://github.com/IssyaboiSUD/todo"
    },
    {
      id: 4,
      title: "Othello Game",
      description: "Java-based Reversi game with intelligent AI opponent",
      thumbnail: "/oth.png",
      category: "Game Dev",
      tech: ["Java", "JavaFX", "Minimax", "AI"],
      demo: "https://othello-game-demo.vercel.app",
      github: "https://github.com/IssyaboiSUD/othello-game"
    }
  ];

  const skills = [
    { name: "React", icon: "/react.png", category: "Frontend" },
    { name: "Next.js", icon: "/next.png", category: "Full-Stack" },
    { name: "TypeScript", icon: "/typescript.png", category: "Language" },
    { name: "Python", icon: "/python.png", category: "Backend" },
    { name: "Java", icon: "/java.png", category: "Language" },
    { name: "AWS", icon: "/aws.png", category: "Cloud" },
    { name: "Tailwind", icon: "/tailwind.png", category: "Styling" },
    { name: "PostgreSQL", icon: "/file.svg", category: "Database" }
  ];

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveCardIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveCardIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToProject = (index: number) => {
    if (isTransitioning || index === activeCardIndex) return;
    setIsTransitioning(true);
    setActiveCardIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.content}>
          
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Hi, I'm <span className={styles.heroName}>Sudarshan</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Building digital experiences
              </p>
              <p className={styles.heroDescription}>
                Full-stack developer passionate about creating innovative solutions with modern technologies. 
                From AI-powered applications to responsive web platforms, I bring ideas to life.
              </p>
              <div className={styles.heroActions}>
                <Link href="/projects" className={styles.ctaPrimary}>
                  View My Work
                  <ArrowRight className={styles.ctaIcon} />
                </Link>
                <Link href="/contact" className={styles.ctaSecondary}>
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroImageContainer}>
                <div className={styles.heroImageWrapper}>
                  <img 
                    src="/profile.jpeg" 
                    alt="Sudarshan Dahal"
                    className={styles.heroImage}
                  />
                  <div className={styles.heroImageGlow} />
                </div>
              </div>
              
              {/* Scattered Skill Icons Background */}
              <div className={styles.scatteredIcons}>
                {/* Left side icons - positioned to the left of the photo */}
                <div className={styles.iconItem} style={{ top: '5%', right: '10%', animationDelay: '0s' }}>
                  <img src="/react.png" alt="React" />
                </div>
                <div className={styles.iconItem} style={{ top: '25%', right: '10%', animationDelay: '0.3s' }}>
                  <img src="/next.png" alt="Next.js" />
                </div>
                <div className={styles.iconItem} style={{ top: '40%', right: '10%', animationDelay: '0.6s' }}>
                  <img src="/typescript.png" alt="TypeScript" />
                </div>
                <div className={styles.iconItem} style={{ top: '55%', right: '10%', animationDelay: '0.9s' }}>
                  <img src="/python.png" alt="Python" />
                </div>
                <div className={styles.iconItem} style={{ top: '70%', right: '10%', animationDelay: '1.2s' }}>
                  <img src="/java.png" alt="Java" />
                </div>
                
                {/* Right side icons - positioned to the right of the photo */}
                <div className={styles.iconItem} style={{ top: '20%', right: '25%', animationDelay: '1.5s' }}>
                  <img src="/javascript.png" alt="JavaScript" />
                </div>
                <div className={styles.iconItem} style={{ top: '30%', right: '20%', animationDelay: '1.8s' }}>
                  <img src="/aws.png" alt="AWS" />
                </div>
                <div className={styles.iconItem} style={{ top: '45%', right: '25%', animationDelay: '2.1s' }}>
                  <img src="/tailwind.png" alt="Tailwind" />
                </div>
                <div className={styles.iconItem} style={{ top: '60%', right: '25%', animationDelay: '2.4s' }}>
                  <img src="/html.png" alt="HTML" />
                </div>
                <div className={styles.iconItem} style={{ top: '75%', right: '35%', animationDelay: '2.7s' }}>
                  <img src="/css.png" alt="CSS" />
                </div>
                
                {/* Top icons - positioned above the photo */}
                <div className={styles.iconItem} style={{ top: '8%', right: '40%', animationDelay: '3.0s' }}>
                  <img src="/sql.png" alt="SQL" />
                </div>
                <div className={styles.iconItem} style={{ top: '5%', right: '25%', animationDelay: '3.3s' }}>
                  <img src="/jira.png" alt="Jira" />
                </div>
                
                {/* Bottom icons - positioned below the photo */}
                <div className={styles.iconItem} style={{ bottom: '10%', left: '75%', animationDelay: '3.6s' }}>
                  <img src="/github.png" alt="GitHub" />
                </div>
                <div className={styles.iconItem} style={{ bottom: '8%', left: '55%', animationDelay: '3.9s' }}>
                  <img src="/file.svg" alt="Database" />
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className={styles.projectsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Featured Projects</h2>
              <p className={styles.sectionSubtitle}>Explore my latest work and technical achievements</p>
            </div>
            
            <div className={styles.projectsCarousel}>
              <div className={styles.carouselContainer}>
                <div className={styles.carouselTrack}>
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className={`${styles.carouselCard} ${isTransitioning ? styles.carouselCardTransitioning : ''}`}
                      onClick={() => window.location.href = `/projects?selected=${project.id}`}
                    >
                      <div className={styles.cardImageContainer}>
                        <img 
                          src={project.thumbnail} 
                          alt={project.title}
                          className={styles.cardImage}
                        />
                        <div className={styles.cardOverlay} />
                        <div className={styles.cardCategory}>
                          {project.category}
                        </div>
                      </div>
                      
                      <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                        <p className={styles.cardDescription}>{project.description}</p>
                        
                        <div className={styles.cardTechStack}>
                          {project.tech.slice(0, 3).map((tech, techIndex) => (
                            <span key={techIndex} className={styles.techChip}>
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className={styles.techChipMore}>
                              +{project.tech.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        <div className={styles.cardActions}>
                          <Link 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.cardActionButton}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className={styles.cardActionIcon} />
                            Code
                          </Link>
                          {project.demo && (
                            <Link 
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.cardActionButton}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className={styles.cardActionIcon} />
                              Demo
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Carousel Navigation */}
                <div className={styles.carouselNavigation}>
                  <button 
                    className={`${styles.carouselNavButton} ${styles.carouselNavButtonPrev}`}
                    onClick={prevProject}
                    disabled={isTransitioning}
                  >
                    <ChevronLeft className={styles.carouselNavIcon} />
                  </button>
                  
                  <div className={styles.carouselDots}>
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        className={styles.carouselDot}
                        onClick={() => goToProject(index)}
                        disabled={isTransitioning}
                      />
                    ))}
                  </div>
                  
                  <button 
                    className={`${styles.carouselNavButton} ${styles.carouselNavButtonNext}`}
                    onClick={nextProject}
                    disabled={isTransitioning}
                  >
                    <ChevronRight className={styles.carouselNavIcon} />
                  </button>
                </div>
              </div>
              
              <div className={styles.carouselFooter}>
                <Link href="/projects" className={styles.viewAllProjects}>
                  View All Projects
                  <ArrowRight className={styles.viewAllIcon} />
                </Link>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.skillsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
              <p className={styles.sectionSubtitle}>Tools and technologies I work with</p>
            </div>
            
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={skill.name} className={styles.skillCard}>
                  <div className={styles.skillIconContainer}>
                    <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                  </div>
                  <h3 className={styles.skillName}>{skill.name}</h3>
                  <span className={styles.skillCategory}>{skill.category}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className={styles.contactSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Let's Connect</h2>
              <p className={styles.sectionSubtitle}>Ready to build something amazing together?</p>
            </div>
            
            <div className={styles.contactContent}>
              <div className={styles.contactInfo}>
                <p className={styles.contactText}>
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className={styles.contactActions}>
                  <Link href="/contact" className={styles.contactButton}>
                    <Mail className={styles.contactIcon} />
                    Send Message
                  </Link>
                </div>
              </div>
              
              <div className={styles.socialLinks}>
                <Link href="https://github.com/IssyaboiSUD" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  <Github className={styles.socialIcon} />
                  <span>GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/sudarshan-dahal-a5738823a/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  <Linkedin className={styles.socialIcon} />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
