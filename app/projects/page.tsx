'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import { ArrowLeft, Github, ExternalLink, Download, Calendar, Eye, Code, Zap, Target, Award } from 'lucide-react';
import Link from 'next/link';
import styles from './ProjectsPage.module.css';
import { useTheme } from '../contexts/ThemeContext';

const projects = [
  {
    id: "1",
    title: "Bayreuth Apartments – Vacation Rental Booking Website",
    tagline: "Full-stack booking platform for vacation rentals with real payments, automated emails, and responsive UI.",
    heroImage: "/bt.png",
    thumbnail: "/bt-t.png",
    views: "10K views",
    date: "2025",
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
      demo: "https://bt-lac.vercel.app/",
      caseStudy: "/case-studies/bayreuth-apartments"
    }
  },
  
  {
    id: 2,
    title: "AI-Based Talent Matching System",
    tagline: "Semantic AI-powered employee matching for project staffing",
    heroImage: "/ai-hero.png", 
    thumbnail: "/ai.png",
    views: "3.2K views",
    date: "2 months ago",
    overview: {
      what: "An AI agent that intelligently recommends employees for project staffing by analyzing skill profiles and Jira project request data.",
      why: "To streamline the employee allocation process and reduce manual effort in talent matching using semantic AI.",
      role: "Full-stack developer and ML engineer responsible for backend AI integration, API design, and frontend UI."
    },
    technologies: [
      "Python",
      "AWS Bedrock",
      "LangChain",
      "FAISS",
      "Next.js",
      "Jira API",
      "REST APIs",
      "Tailwind CSS"
    ],
    features: [
      "Automated employee recommendations for project requests (AFRAs)",
      "Semantic skill matching using Titan Embeddings and FAISS",
      "AI scoring and explanation generation via AWS Bedrock (Claude) and LangChain",
      "Responsive Next.js frontend for querying and displaying match results",
      "Match percentage and explanation of skill fit or gaps",
      "Integrated with Jira for live project request data"
    ],
    process: [
      {
        phase: "Model Research",
        description: "Explored semantic search techniques and evaluated embedding models including AWS Titan for skill matching."
      },
      {
        phase: "Data Integration",
        description: "Connected Jira APIs to ingest project request (AFRA) data and internal employee profiles."
      },
      {
        phase: "Embedding & Indexing",
        description: "Generated vector embeddings of skills and indexed them in FAISS for fast similarity search."
      },
      {
        phase: "Scoring & Explanation",
        description: "Used LangChain to orchestrate prompts and AWS Claude models to generate match scores and detailed justifications."
      },
      {
        phase: "Frontend Development",
        description: "Built a Next.js application for querying AFRA numbers and displaying ranked employee matches with explanations."
      }
    ],
    challenges: [
      { 
        challenge: "Unstructured Skill Data",
        solution: "Used embedding-based semantic comparison instead of brittle keyword matching."
      },
      {
        challenge: "Prompt Quality for Explanation",
        solution: "Refined prompts iteratively to improve Claude's explanation clarity and accuracy."
      },
      {
        challenge: "Scaling FAISS for large profiles",
        solution: "Used indexed vector shards and optimized search configurations to keep query latency low."
      }
    ],
    outcome: {
      metrics: "Top-5 employee match accuracy of 91% on validation data, reduced staffing decision time by 50%",
      impact: "Helped streamline internal staffing workflows and improved project-team fit across departments"
    },
    links: {
      github: "https://github.com/IssyaboiSUD/skillmatch",  
      demo: "https://skillmatch-xi.vercel.app/",
      caseStudy: "/case-studies/ai-chat-assistant.pdf"
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
    overview: {
      what: "A clean and minimalistic To-Do application that allows users to create, manage, and delete tasks efficiently with a sleek UI.",
      why: "To provide a fast and user-friendly task management experience with modern web technologies.",
      role: "Full-stack developer responsible for designing the UI, implementing frontend React components, and deploying the app on Vercel."
    },
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "CSS Modules",
      "Vercel"
      ],
    features: [
      "Add new tasks with real-time input",
      "Mark tasks as open, in progress or completed",
      "Kanban board style to visualize and manage tasks",
      "Responsive and clean user interface",
      "Client-side state management for smooth UX",
      "Optimized for fast loading and deployment on Vercel",
      
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
      demo: "https://todo-green-rho-57.vercel.app/",
      caseStudy: "/case-studies/task-management-app.pdf"
    }
  },
  {
    id: 4,
    title: "Weather Dashboard",
    tagline: "Real-time weather dashboard with interactive maps and forecasts",
    heroImage: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=320&h=180&fit=crop",
    views: "2.1K views",
    date: "3 weeks ago",
    overview: {
      what: "An interactive weather dashboard that provides comprehensive weather information with beautiful visualizations.",
      why: "To create a more engaging and informative weather experience that goes beyond basic forecasts.",
      role: "Frontend developer focused on data visualization, API integration, and user experience."
    },
    technologies: ["React", "TypeScript", "Chart.js", "Mapbox", "Weather API", "Tailwind CSS"],
    features: [
      "Real-time weather data from multiple sources",
      "Interactive weather maps and radar",
      "7-day and hourly forecasts",
      "Weather alerts and notifications",
      "Customizable dashboard widgets",
      "Location-based weather tracking"
    ],
    process: [
      {
        phase: "API Research",
        description: "Evaluated multiple weather APIs and selected the most reliable and comprehensive options."
      },
      {
        phase: "Data Visualization",
        description: "Designed custom charts and maps to present weather data in an intuitive and beautiful way."
      },
      {
        phase: "Performance Optimization",
        description: "Implemented caching strategies and optimized API calls for fast loading times."
      },
      {
        phase: "User Testing",
        description: "Gathered feedback from weather enthusiasts to refine the interface and features."
      }
    ],
    challenges: [
      {
        challenge: "API Rate Limits",
        solution: "Implemented intelligent caching and request batching to minimize API calls."
      },
      {
        challenge: "Real-time Updates",
        solution: "Used WebSocket connections for live weather updates without page refreshes."
      },
      {
        challenge: "Mobile Performance",
        solution: "Optimized map rendering and chart animations for smooth mobile experience."
      }
    ],
    outcome: {
      metrics: "2.5x faster load times, 80% user engagement increase",
      impact: "10,000+ daily active users with 4.8/5 star rating"
    },
    links: {
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
      caseStudy: "/case-studies/weather-dashboard.pdf"
    }
  },
  {
    id: 5,
    title: "Social Media Analytics",
    tagline: "Analytics platform for social media performance tracking",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&h=180&fit=crop",
    views: "1.5K views",
    date: "1 week ago",
    overview: {
      what: "A comprehensive social media analytics platform that helps businesses and content creators track their social media performance.",
      why: "To provide actionable insights that help users understand their audience and optimize their social media strategy.",
      role: "Full-stack developer responsible for data processing, visualization, and API integrations."
    },
    technologies: ["Next.js", "Python", "PostgreSQL", "Chart.js", "Social Media APIs", "AWS"],
    features: [
      "Multi-platform social media integration",
      "Real-time analytics and reporting",
      "Engagement and audience insights",
      "Competitor analysis tools",
      "Automated report generation",
      "Performance optimization recommendations"
    ],
    process: [
      {
        phase: "Data Architecture",
        description: "Designed scalable database schema to handle large volumes of social media data."
      },
      {
        phase: "API Integration",
        description: "Integrated with multiple social media platforms using their official APIs and web scraping where needed."
      },
      {
        phase: "Analytics Engine",
        description: "Built custom analytics algorithms to process and analyze social media metrics."
      },
      {
        phase: "Dashboard Development",
        description: "Created interactive dashboards with real-time data visualization and customizable reports."
      }
    ],
    challenges: [
      {
        challenge: "Data Processing Scale",
        solution: "Implemented batch processing and background jobs to handle millions of data points efficiently."
      },
      {
        challenge: "API Limitations",
        solution: "Created fallback mechanisms and data caching to handle API rate limits and downtime."
      },
      {
        challenge: "Real-time Analytics",
        solution: "Used WebSocket connections and server-sent events for live data updates."
      }
    ],
    outcome: {
      metrics: "Process 1M+ data points daily, 90% data accuracy",
      impact: "Used by 500+ businesses with $2M+ in revenue impact"
    },
    links: {
      github: "https://github.com/yourusername/social-media-analytics",
      demo: "https://social-analytics-demo.vercel.app",
      caseStudy: "/case-studies/social-media-analytics.pdf"
    }
  },
  {
    id: 6,
    title: "Othello Game with AI Opponent",
    tagline: "Java-based Reversi game with AI strategy and graphical interface",
    heroImage: "/othello.png",
    thumbnail: "/oth.png",
    views: "1.9K views",
    date: "6 months ago",
    overview: {
      what: "A fully functional Othello (Reversi) game featuring a JavaFX GUI and an intelligent AI opponent.",
      why: "To deepen understanding of game theory and adversarial search while building an interactive desktop application.",
      role: "Sole developer responsible for game logic, AI implementation, and GUI design."
    },
    technologies: ["Java", "JavaFX", "Minimax", "Alpha-Beta Pruning"],
    features: [
      "Classic 8x8 Othello board with legal move logic",
      "Turn-based gameplay with disc flipping mechanics",
      "AI opponent using Minimax algorithm with Alpha-Beta pruning",
      "Difficulty scaling via search depth adjustment",
      "Real-time move highlighting and game-over detection",
      "Responsive JavaFX GUI with dynamic board updates"
    ],
    process: [
      {
        phase: "Game Rules Implementation",
        description: "Programmed all core game mechanics including turn validation, disc flipping, and win conditions."
      },
      {
        phase: "AI Algorithm Design",
        description: "Implemented Minimax algorithm enhanced with Alpha-Beta pruning to optimize AI move selection."
      },
      {
        phase: "GUI Development",
        description: "Designed and implemented the user interface using JavaFX for board rendering and interactivity."
      }
    ],
    challenges: [
      {
        challenge: "Managing valid move detection efficiently",
        solution: "Optimized board scanning with direction vectors and early pruning logic."
      },
      {
        challenge: "AI performance at higher depths",
        solution: "Used Alpha-Beta pruning to cut unnecessary branches and improve evaluation speed."
      },
      {
        challenge: "Synchronizing UI updates with game state",
        solution: "Applied JavaFX threading best practices to keep UI responsive during AI computation."
      }
    ],
    outcome: {
      metrics: "Played over 200+ simulated games; AI consistently achieved win rates above 70% at depth 4+.",
      impact: "Recognized as one of the top final projects in the class; strengthened knowledge of AI search and Java GUI design."
    },
    links: {
      github: "https://github.com/yourusername/othello-game",
      demo: "https://othello-game-demo.vercel.app",
      caseStudy: "/case-studies/othello-game.pdf"
    }
  }
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get('selected');
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
      }
    }
  }, [selectedId]);

  return (
    <div className={styles.container}>
      <Header />
      
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.layout}>
            {/* Projects Sidebar */}
            <aside className={`${styles.projectsSidebar} ${isDark ? styles.projectsSidebarDark : ''}`}>
              <div className={`${styles.sidebarHeader} ${isDark ? styles.sidebarHeaderDark : ''}`}>
                <h2 className={`${styles.sidebarTitle} ${isDark ? styles.sidebarTitleDark : ''}`}>Projects</h2>
                <p className={`${styles.sidebarSubtitle} ${isDark ? styles.sidebarSubtitleDark : ''}`}>Select a project to view details</p>
              </div>
              
              <div className={styles.projectThumbnails}>
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`${styles.projectThumbnail} ${selectedProject.id === project.id ? styles.projectThumbnailActive : ''} ${isDark ? styles.projectThumbnailDark : ''} ${selectedProject.id === project.id && isDark ? styles.projectThumbnailActiveDark : ''}`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className={styles.thumbnailImageContainer}>
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className={styles.thumbnailImage}
                      />
                      <div className={styles.thumbnailOverlay} />
                    </div>
                    
                    <div className={styles.thumbnailContent}>
                      <h3 className={`${styles.thumbnailTitle} ${isDark ? styles.thumbnailTitleDark : ''}`}>{project.title}</h3>
                      <p className={`${styles.thumbnailTagline} ${isDark ? styles.thumbnailTaglineDark : ''}`}>{project.tagline}</p>
                      <div className={styles.thumbnailMeta}>
                        <span className={`${styles.thumbnailViews} ${isDark ? styles.thumbnailViewsDark : ''}`}>{project.views}</span>
                        <span className={`${styles.thumbnailDate} ${isDark ? styles.thumbnailDateDark : ''}`}>{project.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
              {/* Project Header */}
              <div className={styles.projectHeader}>
                <div className={`${styles.metaInfo} ${isDark ? styles.metaInfoDark : ''}`}>
                  <div className={styles.metaItem}>
                    <Eye className={styles.metaIcon} />
                    <span>{selectedProject.views}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Calendar className={styles.metaIcon} />
                    <span>{selectedProject.date}</span>
                  </div>
                </div>
                
                <h1 className={`${styles.projectTitle} ${isDark ? styles.projectTitleDark : ''}`}>
                  {selectedProject.title}
                </h1>
                
                <p className={`${styles.projectTagline} ${isDark ? styles.projectTaglineDark : ''}`}>
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
                  <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>
                    <Target className={`${styles.sectionIcon} ${styles.sectionIconBlue}`} />
                    Overview
                  </h2>
                  
                  <div className={styles.overviewGrid}>
                    <div className={styles.overviewItem}>
                      <h3 className={`${styles.overviewItemTitle} ${isDark ? styles.overviewItemTitleDark : ''}`}>What</h3>
                      <p className={`${styles.overviewItemText} ${isDark ? styles.overviewItemTextDark : ''}`}>
                        {selectedProject.overview.what}
                      </p>
                    </div>
                    
                    <div className={styles.overviewItem}>
                      <h3 className={`${styles.overviewItemTitle} ${isDark ? styles.overviewItemTitleDark : ''}`}>Why</h3>
                      <p className={`${styles.overviewItemText} ${isDark ? styles.overviewItemTextDark : ''}`}>
                        {selectedProject.overview.why}
                      </p>
                    </div>
                    
                    <div className={styles.overviewItem}>
                      <h3 className={`${styles.overviewItemTitle} ${isDark ? styles.overviewItemTitleDark : ''}`}>My Role</h3>
                      <p className={`${styles.overviewItemText} ${isDark ? styles.overviewItemTextDark : ''}`}>
                        {selectedProject.overview.role}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Tech Stack Section */}
                <section className={styles.section}>
                  <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>
                    <Code className={`${styles.sectionIcon} ${styles.sectionIconGreen}`} />
                    Tech Stack
                  </h2>
                  
                  <div className={styles.techStack}>
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className={`${styles.techTag} ${isDark ? styles.techTagDark : ''}`}>
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
                  <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>
                    <Zap className={`${styles.sectionIcon} ${styles.sectionIconYellow}`} />
                    Key Features
                  </h2>
                  
                  <div className={styles.featuresGrid}>
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className={styles.featureItem}>
                        <div className={styles.featureBullet} />
                        <p className={`${styles.featureText} ${isDark ? styles.featureTextDark : ''}`}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Process Section */}
                <section className={styles.section}>
                  <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>
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
                            <div className={`${styles.processStepLine} ${isDark ? styles.processStepLineDark : ''}`} />
                          )}
                        </div>
                        
                        <div className={styles.processStepContent}>
                          <h3 className={`${styles.processStepTitle} ${isDark ? styles.processStepTitleDark : ''}`}>
                            {step.phase}
                          </h3>
                          <p className={`${styles.processStepDescription} ${isDark ? styles.processStepDescriptionDark : ''}`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Challenges & Solutions Section */}
                <section className={styles.section}>
                  <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>
                    <div className={`${styles.customIcon} ${styles.customIconOrange}`}>
                      C
                    </div>
                    Challenges & Solutions
                  </h2>
                  
                  <div className={styles.challengesList}>
                    {selectedProject.challenges.map((item, index) => (
                      <div key={index} className={`${styles.challengeCard} ${isDark ? styles.challengeCardDark : ''}`}>
                        <div className={styles.challengeGrid}>
                          <div className={styles.challengeItem}>
                            <h3 className={`${styles.challengeItemTitle} ${isDark ? styles.challengeItemTitleDark : ''}`}>
                              Challenge
                            </h3>
                            <p className={`${styles.challengeItemText} ${isDark ? styles.challengeItemTextDark : ''}`}>
                              {item.challenge}
                            </p>
                          </div>
                          
                          <div className={styles.challengeItem}>
                            <h3 className={`${styles.challengeItemTitle} ${isDark ? styles.challengeItemTitleDark : ''}`}>
                              Solution
                            </h3>
                            <p className={`${styles.challengeItemText} ${isDark ? styles.challengeItemTextDark : ''}`}>
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
                  <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>
                    <Award className={`${styles.sectionIcon} ${styles.sectionIconGreen}`} />
                    Outcome & Impact
                  </h2>
                  
                  <div className={styles.outcomeGrid}>
                    <div className={styles.outcomeItem}>
                      <h3 className={`${styles.outcomeItemTitle} ${isDark ? styles.outcomeItemTitleDark : ''}`}>Metrics</h3>
                      <p className={`${styles.outcomeItemText} ${isDark ? styles.outcomeItemTextDark : ''}`}>
                        {selectedProject.outcome.metrics}
                      </p>
                    </div>
                    
                    <div className={styles.outcomeItem}>
                      <h3 className={`${styles.outcomeItemTitle} ${isDark ? styles.outcomeItemTitleDark : ''}`}>Impact</h3>
                      <p className={`${styles.outcomeItemText} ${isDark ? styles.outcomeItemTextDark : ''}`}>
                        {selectedProject.outcome.impact}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Links Section */}
                <section className={styles.section}>
                  <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>
                    Project Links
                  </h2>
                  
                  <div className={styles.linksContainer}>
                    <Link 
                      href={selectedProject.links.github}
                      className={`${styles.linkButton} ${styles.linkButtonGithub} ${isDark ? styles.linkButtonGithubDark : ''}`}
                    >
                      <Github className={styles.linkIcon} />
                      View Code
                    </Link>
                    
                    <Link 
                      href={selectedProject.links.demo}
                      className={`${styles.linkButton} ${styles.linkButtonDemo}`}
                    >
                      <ExternalLink className={styles.linkIcon} />
                      Live Demo
                    </Link>
                    
                    <Link 
                      href={selectedProject.links.caseStudy}
                      className={`${styles.linkButton} ${styles.linkButtonCaseStudy} ${isDark ? styles.linkButtonCaseStudyDark : ''}`}
                    >
                      <Download className={styles.linkIcon} />
                      Case Study
                    </Link>
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

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
} 