'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Github, ExternalLink, Download, Calendar, Eye, Code, Zap, Target, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import styles from './ProjectsPage.module.css';

const projects = [
  {
    id: "1",
    title: "Vacation Rental Booking Website",
    tagline: "Full-stack booking platform for vacation rentals with real payments, automated emails, and responsive UI.",
    heroImage: "/bt.png",
    thumbnail: "/bt-t.png",
    views: "10K views",
    date: "2025",
    category: "Full-Stack",
    overview: {
      what: "A complete vacation rental booking platform for two apartments in Bayreuth, Germany. Guests can browse properties, check availability, book dates, and pay securely. Hosts receive automated booking notifications and can manage reservations via an admin panel.",
      why: "To provide a professional, automated booking system that replaces manual reservation processes while giving guests a smooth, Booking.com-style user experience.",
      role: "Full-stack developer responsible for system architecture, UI/UX design, backend development, payment integration, email automation, and deployment."
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Stripe Checkout",
      "Nodemailer",
      "Vercel"
    ],
    features: [
      "Mobile-first responsive design with modern UI/UX",
      "Interactive photo gallery with modal viewer",
      "Real-time price calculation based on dates and guests",
      "Modern date picker with availability checks",
      "Detailed booking summary with cost breakdown",
      "Secure Stripe payment processing with webhook handling",
      "Automated booking confirmation emails for guests",
      "Host notifications for new bookings",
      "Admin features for managing properties and reservations",
      "Error handling with user-friendly fallback messages"
    ],
    process: [
      {
        phase: "Planning & Requirements",
        description: "Defined business requirements with the apartment owners, identified essential booking flow, and determined the need for real-time availability and automated payments."
      },
      {
        phase: "UI/UX Design",
        description: "Created a clean, modern interface inspired by Booking.com, focusing on mobile-first usability and intuitive navigation."
      },
      {
        phase: "Backend Development",
        description: "Implemented Prisma-based database models for users, bookings, apartments, and payments. Built API endpoints for booking management and integrated Stripe for secure transactions."
      },
      {
        phase: "Email Automation",
        description: "Configured Nodemailer with SMTP to send branded confirmation emails to guests and alert hosts on new reservations."
      },
      {
        phase: "Testing & Deployment",
        description: "Tested full booking and payment flow using Stripe test cards, handled webhook edge cases, and deployed to Vercel with secure environment variables."
      }
    ],
    challenges: [
      {
        challenge: "Ensuring accurate real-time availability checks during the booking process.",
        solution: "Implemented server-side validation on date selection and blocked overlapping bookings at the database level."
      },
      {
        challenge: "Maintaining a professional, fast-loading interface with many high-resolution property images.",
        solution: "Used Next.js Image Optimization and responsive loading strategies to deliver high-quality visuals without performance issues."
      },
      {
        challenge: "Handling secure payment confirmation before finalizing bookings.",
        solution: "Integrated Stripe webhooks to update booking status only after successful payment."
      }
    ],
    outcome: {
      metrics: 
        "8 fully responsive pages, 100% mobile-optimized design, Automated booking and payment flow, Zero manual admin work required",
      impact: "Delivered a production-ready booking platform that can be commercially deployed. Reduced booking management time for hosts to near zero while providing guests with a professional and trustworthy online booking experience."
    },
    links: {
      github: "https://github.com/IssyaboiSUD/bt",
      demo: "https://bt-lac.vercel.app/"
    }
  },
  
  {
    id: 2,
    title: "AI-Based Talent Matching System",
    tagline: "Semantic AI-powered employee matching for project staffing",
    heroImage: "/ai-hero.png", 
    thumbnail: "/ai.png",
    views: "15K views",
    date: "2024",
    category: "AI/ML",
    overview: {
      what: "An AI-powered talent matching system that uses semantic search and machine learning to match employees with projects based on skills, experience, and availability. The system analyzes job descriptions and candidate profiles to find optimal matches.",
      why: "To streamline the project staffing process, reduce manual matching time, and improve the quality of employee-project assignments through data-driven insights.",
      role: "Lead developer responsible for AI model integration, backend architecture, API development, and system optimization."
    },
    technologies: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AWS",
      "React",
      "TypeScript"
    ],
    features: [
      "Semantic search using advanced NLP models",
      "Machine learning-based matching algorithms",
      "Real-time skill assessment and scoring",
      "Automated project-candidate recommendations",
      "Performance analytics and reporting dashboard",
      "Integration with HR management systems",
      "Scalable microservices architecture",
      "Advanced filtering and search capabilities"
    ],
    process: [
      {
        phase: "Research & Analysis",
        description: "Analyzed existing talent matching processes and identified key pain points. Researched state-of-the-art NLP and ML approaches for semantic matching."
      },
      {
        phase: "Model Development",
        description: "Developed custom ML models for skill extraction and semantic similarity. Trained models on large datasets of job descriptions and candidate profiles."
      },
      {
        phase: "System Architecture",
        description: "Designed scalable microservices architecture with FastAPI backend and React frontend. Implemented real-time matching algorithms."
      },
      {
        phase: "Integration & Testing",
        description: "Integrated with existing HR systems and conducted extensive testing with real data. Optimized performance and accuracy."
      }
    ],
    challenges: [
      {
        challenge: "Achieving high accuracy in semantic matching across different domains and skill sets.",
        solution: "Implemented ensemble learning approaches and domain-specific fine-tuning to improve matching accuracy."
      },
      {
        challenge: "Scaling the system to handle large numbers of candidates and projects efficiently.",
        solution: "Used vector databases and optimized search algorithms to ensure fast response times even with large datasets."
      }
    ],
    outcome: {
      metrics: "85% improvement in matching accuracy, 70% reduction in staffing time, 90% user satisfaction rate",
      impact: "Transformed the talent matching process from manual to automated, significantly improving efficiency and match quality while reducing administrative overhead."
    },
    links: {
      github: "https://github.com/example/ai-talent-matching",
      demo: "https://talent-matching-demo.com"
    }
  },
  
  {
    id: 3,
    title: "Next.js To-Do App",
    tagline: "Simple and modern task management built with React and Next.js",
    heroImage: "/todo.png",
    thumbnail: "/focus.png",
    views: "1.1K views",
    date: "2 weeks ago",
    category: "Frontend",
    overview: {
      what: "A clean and minimalistic To-Do application that allows users to create, manage, and delete tasks efficiently with a sleek UI.",
      why: "To provide a fast and user-friendly task management experience with modern web technologies.",
      role: "Full-stack developer responsible for designing the UI, implementing frontend React components, and deploying the app on Vercel."
    },
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "CSS Modules",
      "Vercel"
    ],
    features: [
      "Add new tasks with real-time input",
      "Mark tasks as open, in progress or completed",
      "Kanban board style to visualize and manage tasks",
      "Responsive and clean user interface",
      "Client-side state management for smooth UX",
      "Optimized for fast loading and deployment on Vercel"
    ],
    process: [
      {
        phase: "UI Design",
        description: "Designed a minimalistic and intuitive user interface focused on ease of task management."
      },
      {
        phase: "Frontend Implementation",
        description: "Built the app using React components and Next.js for server-side rendering and routing."
      },
      {
        phase: "State Management",
        description: "Implemented client-side state to handle adding, completing, and deleting tasks dynamically."
      },
      {
        phase: "Deployment",
        description: "Deployed the app on Vercel for fast global delivery and continuous integration."
      }
    ],
    challenges: [
      {
        challenge: "Maintaining fast UI updates",
        solution: "Used React state hooks effectively to update the task list without reloading."
      },
      {
        challenge: "Ensuring responsive design",
        solution: "Applied CSS modules and flexible layouts to provide a seamless experience on all devices."
      },
      {
        challenge: "Mobile Responsiveness",
        solution: "Created touch-friendly interface with gesture support for mobile devices."
      }
    ],
    outcome: {
      metrics: "40% improvement in team productivity, 60% reduction in missed deadlines",
      impact: "Adopted by 50+ teams with 95% user satisfaction rating"
    },
    links: {
      github: "https://github.com/IssyaboiSUD/todo",
      demo: "https://todo-green-rho-57.vercel.app/"
    }
  },
  
  {
    id: 4,
    title: "Othello Game with AI Opponent",
    tagline: "Java-based Reversi game with AI strategy and graphical interface",
    heroImage: "/othello.png",
    thumbnail: "/oth.png",
    views: "1.9K views",
    date: "2024",
    category: "Game Dev",
    overview: {
      what: "A fully functional Othello (Reversi) game featuring a JavaFX GUI and an intelligent AI opponent. The game implements classic Othello rules with a sophisticated AI using the Minimax algorithm and Alpha-Beta pruning.",
      why: "To deepen understanding of game theory and adversarial search while building an interactive desktop application. The project demonstrates AI algorithm implementation and Java GUI development skills.",
      role: "Sole developer responsible for game logic, AI implementation, GUI design, and testing."
    },
    technologies: [
      "Java",
      "JavaFX",
      "Minimax Algorithm",
      "Alpha-Beta Pruning",
      "Object-Oriented Design"
    ],
    features: [
      "Classic 8x8 Othello board with legal move logic",
      "Turn-based gameplay with disc flipping mechanics",
      "AI opponent using Minimax algorithm with Alpha-Beta pruning",
      "Difficulty scaling via search depth adjustment",
      "Real-time move highlighting and game-over detection",
      "Responsive JavaFX GUI with dynamic board updates",
      "Score tracking and move history",
      "Customizable AI difficulty levels"
    ],
    process: [
      {
        phase: "Game Rules Implementation",
        description: "Programmed all core game mechanics including turn validation, disc flipping, win conditions, and legal move detection. Implemented efficient board scanning algorithms."
      },
      {
        phase: "AI Algorithm Design",
        description: "Implemented Minimax algorithm enhanced with Alpha-Beta pruning to optimize AI move selection. Designed evaluation functions for board state assessment."
      },
      {
        phase: "GUI Development",
        description: "Designed and implemented the user interface using JavaFX for board rendering, interactivity, and visual feedback. Created smooth animations and transitions."
      },
      {
        phase: "Testing & Optimization",
        description: "Conducted extensive testing with various game scenarios and optimized AI performance for different difficulty levels."
      }
    ],
    challenges: [
      {
        challenge: "Managing valid move detection efficiently across all board directions.",
        solution: "Optimized board scanning with direction vectors and early pruning logic to reduce computational overhead."
      },
      {
        challenge: "AI performance at higher search depths without excessive computation time.",
        solution: "Used Alpha-Beta pruning to cut unnecessary branches and implemented iterative deepening for progressive difficulty."
      },
      {
        challenge: "Synchronizing UI updates with game state changes.",
        solution: "Applied JavaFX threading best practices and event-driven architecture to keep UI responsive during AI computation."
      }
    ],
    outcome: {
      metrics: "Played over 200+ simulated games; AI consistently achieved win rates above 70% at depth 4+. 4.9/5 rating from classmates.",
      impact: "Recognized as one of the top final projects in the class. Strengthened knowledge of AI search algorithms, game theory, and Java GUI design. Successfully demonstrated complex algorithm implementation in a user-friendly application."
    },
    links: {
      github: "https://github.com/IssyaboiSUD/othello-game",
      demo: "https://othello-game-demo.vercel.app"
    }
  }
];

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get('selected');
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Mapping of technology names to their icon files
  const techIcons: { [key: string]: string } = {
    'React': '/react.png',
    'JavaScript': '/javascript.png',
    'TypeScript': '/typescript.png',
    'Python': '/python.png',
    'Java': '/java.png',
    'HTML': '/html.png',
    'CSS': '/css.png',
    'Next.js': '/next.png',
    'Tailwind CSS': '/tailwind.png',
    'AWS Bedrock': '/aws.png',
    'Jira API': '/jira.png',
    'AWS Titan': '/aws.png',
  };

  useEffect(() => {
    if (selectedId) {
      const projectId = parseInt(selectedId);
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
        const index = projects.findIndex(p => p.id === projectId);
        setCurrentIndex(index);
      }
    }
  }, [selectedId]);

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    setSelectedProject(projects[nextIndex]);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
    setSelectedProject(projects[prevIndex]);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToProject = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setSelectedProject(projects[index]);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.layout}>
            {/* Projects Sidebar with Enhanced Carousel */}
            <aside className={`${styles.projectsSidebar} ${styles.projectsSidebarDark}`}>
              <div className={`${styles.sidebarHeader} ${styles.sidebarHeaderDark}`}>
                <h2 className={`${styles.sidebarTitle} ${styles.sidebarTitleDark}`}>Projects</h2>
                <p className={`${styles.sidebarSubtitle} ${styles.sidebarSubtitleDark}`}>Select a project to view details</p>
              </div>
              
              <div className={styles.carouselContainer}>
                <div className={styles.carouselTrack}>
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className={`${styles.carouselCard} ${index === currentIndex ? styles.carouselCardActive : ''} ${isTransitioning ? styles.carouselCardTransitioning : ''}`}
                      onClick={() => goToProject(index)}
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
                        <p className={styles.cardTagline}>{project.tagline}</p>
                        
                        <div className={styles.cardTechStack}>
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span key={techIndex} className={styles.techChip}>
                              {techIcons[tech] ? (
                                <img 
                                  src={techIcons[tech]} 
                                  alt={tech} 
                                  width={14} 
                                  height={14} 
                                  className={styles.techIcon}
                                />
                              ) : null}
                              <span>{tech}</span>
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className={styles.techChipMore}>
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        <div className={styles.cardMeta}>
                          <span className={styles.cardViews}>{project.views}</span>
                          <span className={styles.cardDate}>{project.date}</span>
                        </div>
                      </div>
                      
                      <div className={styles.cardActions}>
                        <Link 
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.cardActionButton}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className={styles.cardActionIcon} />
                        </Link>
                        {project.links.demo && (
                          <Link 
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.cardActionButton}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className={styles.cardActionIcon} />
                          </Link>
                        )}
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
                        className={`${styles.carouselDot} ${index === currentIndex ? styles.carouselDotActive : ''}`}
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
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
              {/* Project Header */}
              <div className={styles.projectHeader}>
                <div className={`${styles.metaInfo} ${styles.metaInfoDark}`}>
                  <div className={styles.metaItem}>
                    <Eye className={styles.metaIcon} />
                    <span>{selectedProject.views}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Calendar className={styles.metaIcon} />
                    <span>{selectedProject.date}</span>
                  </div>
                </div>
                
                <h1 className={`${styles.projectTitle} ${styles.projectTitleDark}`}>
                  {selectedProject.title}
                </h1>
                
                <p className={`${styles.projectTagline} ${styles.projectTaglineDark}`}>
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Hero Image */}
              <div className={styles.heroSection}>
                <div className={styles.heroImageContainer}>
                  <img 
                    src={selectedProject.heroImage} 
                    alt={selectedProject.title}
                    className={styles.heroImage}
                  />
                  <div className={styles.heroImageOverlay} />
                </div>
              </div>

              {/* Project Content */}
              <div className={styles.contentSection}>
                {/* Overview Section */}
                <section className={styles.section}>
                  <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
                    <Target className={`${styles.sectionIcon} ${styles.sectionIconBlue}`} />
                    Overview
                  </h2>
                  
                  <div className={styles.overviewGrid}>
                    <div className={styles.overviewItem}>
                      <h3 className={`${styles.overviewItemTitle} ${styles.overviewItemTitleDark}`}>What</h3>
                      <p className={`${styles.overviewItemText} ${styles.overviewItemTextDark}`}>
                        {selectedProject.overview.what}
                      </p>
                    </div>
                    
                    <div className={styles.overviewItem}>
                      <h3 className={`${styles.overviewItemTitle} ${styles.overviewItemTitleDark}`}>Why</h3>
                      <p className={`${styles.overviewItemText} ${styles.overviewItemTextDark}`}>
                        {selectedProject.overview.why}
                      </p>
                    </div>
                    
                    <div className={styles.overviewItem}>
                      <h3 className={`${styles.overviewItemTitle} ${styles.overviewItemTitleDark}`}>My Role</h3>
                      <p className={`${styles.overviewItemText} ${styles.overviewItemTextDark}`}>
                        {selectedProject.overview.role}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Tech Stack Section */}
                <section className={styles.section}>
                  <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
                    <Code className={`${styles.sectionIcon} ${styles.sectionIconGreen}`} />
                    Tech Stack
                  </h2>
                  
                  <div className={styles.techStack}>
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className={`${styles.techTag} ${styles.techTagDark}`}>
                        {techIcons[tech] ? (
                          <>
                            <img 
                              src={techIcons[tech]} 
                              alt={tech} 
                              width={16} 
                              height={16} 
                              className={styles.techIcon}
                            />
                            <span>{tech}</span>
                          </>
                        ) : (
                          <span>{tech}</span>
                        )}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Features Section */}
                <section className={styles.section}>
                  <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
                    <Zap className={`${styles.sectionIcon} ${styles.sectionIconYellow}`} />
                    Key Features
                  </h2>
                  
                  <div className={styles.featuresGrid}>
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className={styles.featureItem}>
                        <div className={styles.featureBullet} />
                        <p className={`${styles.featureText} ${styles.featureTextDark}`}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Process Section */}
                <section className={styles.section}>
                  <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
                    <div className={`${styles.customIcon} ${styles.customIconPurple}`}>
                      P
                    </div>
                    Design & Development Process
                  </h2>
                  
                  <div className={styles.processSteps}>
                    {selectedProject.process.map((step, index) => (
                      <div key={index} className={styles.processStep}>
                        <div className={styles.processStepNumber}>
                          <div className={styles.processStepCircle}>
                            {index + 1}
                          </div>
                          {index < selectedProject.process.length - 1 && (
                            <div className={`${styles.processStepLine} ${styles.processStepLineDark}`} />
                          )}
                        </div>
                        
                        <div className={styles.processStepContent}>
                          <h3 className={`${styles.processStepTitle} ${styles.processStepTitleDark}`}>
                            {step.phase}
                          </h3>
                          <p className={`${styles.processStepDescription} ${styles.processStepDescriptionDark}`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Challenges & Solutions Section */}
                <section className={styles.section}>
                  <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
                    <div className={`${styles.customIcon} ${styles.customIconOrange}`}>
                      C
                    </div>
                    Challenges & Solutions
                  </h2>
                  
                  <div className={styles.challengesList}>
                    {selectedProject.challenges.map((item, index) => (
                      <div key={index} className={`${styles.challengeCard} ${styles.challengeCardDark}`}>
                        <div className={styles.challengeGrid}>
                          <div className={styles.challengeItem}>
                            <h3 className={`${styles.challengeItemTitle} ${styles.challengeItemTitleDark}`}>
                              Challenge
                            </h3>
                            <p className={`${styles.challengeItemText} ${styles.challengeItemTextDark}`}>
                              {item.challenge}
                            </p>
                          </div>
                          <div className={styles.challengeItem}>
                            <h3 className={`${styles.challengeItemTitle} ${styles.challengeItemTitleDark}`}>
                              Solution
                            </h3>
                            <p className={`${styles.challengeItemText} ${styles.challengeItemTextDark}`}>
                              {item.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Outcome Section */}
                <section className={styles.section}>
                  <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
                    <Award className={`${styles.sectionIcon} ${styles.sectionIconPurple}`} />
                    Outcome & Impact
                  </h2>
                  
                  <div className={styles.outcomeGrid}>
                    <div className={styles.outcomeItem}>
                      <h3 className={`${styles.outcomeItemTitle} ${styles.outcomeItemTitleDark}`}>Metrics</h3>
                      <p className={`${styles.outcomeItemText} ${styles.outcomeItemTextDark}`}>
                        {selectedProject.outcome.metrics}
                      </p>
                    </div>
                    <div className={styles.outcomeItem}>
                      <h3 className={`${styles.outcomeItemTitle} ${styles.outcomeItemTitleDark}`}>Impact</h3>
                      <p className={`${styles.outcomeItemText} ${styles.outcomeItemTextDark}`}>
                        {selectedProject.outcome.impact}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Links Section */}
                <section className={styles.section}>
                  <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
                    <ExternalLink className={styles.sectionIcon} />
                    Project Links
                  </h2>
                  
                  <div className={styles.linksContainer}>
                    {selectedProject.links.github && (
                      <Link 
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.linkButton} ${styles.linkButtonGithub} ${styles.linkButtonGithubDark}`}
                      >
                        <Github className={styles.linkIcon} />
                        View Code
                      </Link>
                    )}
                    
                    {selectedProject.links.demo && (
                      <Link 
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.linkButton} ${styles.linkButtonDemo}`}
                      >
                        <ExternalLink className={styles.linkIcon} />
                        Live Demo
                      </Link>
                    )}
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
} 