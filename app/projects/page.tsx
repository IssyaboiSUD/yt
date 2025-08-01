'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import { ArrowLeft, Github, ExternalLink, Download, Calendar, Eye, Code, Zap, Target, Award } from 'lucide-react';
import Link from 'next/link';
import styles from './ProjectsPage.module.css';
import { useTheme } from '../contexts/ThemeContext';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    tagline: "A full-stack e-commerce solution built with React and Node.js",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=320&h=180&fit=crop",
    views: "1.2K views",
    date: "2 weeks ago",
    overview: {
      what: "A comprehensive e-commerce platform that provides a seamless shopping experience for both customers and administrators.",
      why: "To create a modern, scalable e-commerce solution that handles the complete customer journey from browsing to checkout.",
      role: "Full-stack developer responsible for frontend, backend, database design, and deployment."
    },
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Secure payment integration",
      "Admin dashboard for inventory management",
      "Order tracking and management"
    ],
    process: [
      {
        phase: "Research & Planning",
        description: "Analyzed existing e-commerce solutions and identified key features needed for a modern platform."
      },
      {
        phase: "Design & Prototyping",
        description: "Created wireframes and user flows focusing on intuitive navigation and seamless checkout experience."
      },
      {
        phase: "Development",
        description: "Built the application using React for frontend, Node.js/Express for backend, and MongoDB for data storage."
      },
      {
        phase: "Testing & Deployment",
        description: "Implemented comprehensive testing and deployed to production with CI/CD pipeline."
      }
    ],
    challenges: [
      {
        challenge: "Payment Security",
        solution: "Implemented Stripe with proper security measures and PCI compliance."
      },
      {
        challenge: "Scalability",
        solution: "Used microservices architecture and implemented caching strategies for better performance."
      },
      {
        challenge: "Real-time Updates",
        solution: "Integrated WebSocket connections for live inventory updates and order status changes."
      }
    ],
    outcome: {
      metrics: "50% faster checkout process, 30% increase in conversion rate",
      impact: "Successfully launched with 1000+ active users and $50K+ in monthly transactions"
    },
    links: {
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://demo-ecommerce-platform.vercel.app",
      caseStudy: "/case-studies/ecommerce-platform.pdf"
    }
  },
  {
    id: 2,
    title: "Task Management App",
    tagline: "A collaborative task management application with real-time updates",
    heroImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=320&h=180&fit=crop",
    views: "856 views",
    date: "1 month ago",
    overview: {
      what: "A real-time collaborative task management application designed for teams to organize and track their work efficiently.",
      why: "To solve the problem of scattered task management and improve team productivity through centralized, real-time collaboration.",
      role: "Lead developer responsible for architecture, real-time features, and team coordination."
    },
    technologies: ["React", "Firebase", "Material-UI", "React DnD", "Socket.io"],
    features: [
      "Real-time task updates and collaboration",
      "Drag-and-drop task organization",
      "Team member assignment and roles",
      "Progress tracking and analytics",
      "Deadline management with notifications",
      "File attachment and comments"
    ],
    process: [
      {
        phase: "User Research",
        description: "Interviewed 20+ project managers to understand pain points in current task management tools."
      },
      {
        phase: "UX Design",
        description: "Designed intuitive drag-and-drop interface with clear visual hierarchy and status indicators."
      },
      {
        phase: "Real-time Implementation",
        description: "Built real-time collaboration using Firebase and Socket.io for instant updates across all users."
      },
      {
        phase: "Testing & Launch",
        description: "Conducted beta testing with 5 teams and launched with feedback-driven improvements."
      }
    ],
    challenges: [
      {
        challenge: "Real-time Synchronization",
        solution: "Implemented conflict resolution strategies and optimistic updates for smooth user experience."
      },
      {
        challenge: "Performance with Large Datasets",
        solution: "Used virtualization for task lists and implemented efficient data fetching patterns."
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
      github: "https://github.com/yourusername/task-management-app",
      demo: "https://task-management-demo.vercel.app",
      caseStudy: "/case-studies/task-management-app.pdf"
    }
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    title: "Fitness Tracking App",
    tagline: "Mobile app for tracking workouts and fitness goals",
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=320&h=180&fit=crop",
    views: "3.2K views",
    date: "2 months ago",
    overview: {
      what: "A comprehensive fitness tracking mobile application designed to help users achieve their health and fitness goals.",
      why: "To create a motivating and comprehensive fitness platform that goes beyond basic workout tracking.",
      role: "Mobile developer focused on React Native development, health integrations, and user experience."
    },
    technologies: ["React Native", "Firebase", "Redux", "Health APIs", "Video Streaming", "Push Notifications"],
    features: [
      "Workout planning and scheduling",
      "Progress tracking with photos and metrics",
      "Nutrition and calorie tracking",
      "Social features and challenges",
      "Wearable device integration",
      "Video workout guides and tutorials"
    ],
    process: [
      {
        phase: "User Research",
        description: "Conducted interviews with fitness enthusiasts to understand their tracking needs and pain points."
      },
      {
        phase: "Mobile Design",
        description: "Designed intuitive mobile interface optimized for one-handed use during workouts."
      },
      {
        phase: "Health Integration",
        description: "Integrated with Apple Health and Google Fit for seamless data synchronization."
      },
      {
        phase: "Social Features",
        description: "Built community features including challenges, leaderboards, and social sharing."
      }
    ],
    challenges: [
      {
        challenge: "Cross-platform Compatibility",
        solution: "Used React Native with platform-specific optimizations for consistent experience."
      },
      {
        challenge: "Health Data Privacy",
        solution: "Implemented secure data handling and user consent mechanisms for health information."
      },
      {
        challenge: "Offline Functionality",
        solution: "Built offline-first architecture with local data storage and sync capabilities."
      }
    ],
    outcome: {
      metrics: "100K+ downloads, 70% user retention after 30 days",
      impact: "Helped users lose 50,000+ pounds collectively with 4.9/5 star rating"
    },
    links: {
      github: "https://github.com/yourusername/fitness-tracking-app",
      demo: "https://fitness-app-demo.vercel.app",
      caseStudy: "/case-studies/fitness-tracking-app.pdf"
    }
  },
  {
    id: 6,
    title: "AI Chat Assistant",
    tagline: "Intelligent chatbot powered by machine learning algorithms",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=320&h=180&fit=crop",
    views: "4.7K views",
    date: "3 months ago",
    overview: {
      what: "An intelligent AI-powered chatbot that provides personalized assistance and support across various domains.",
      why: "To create a conversational AI that can understand context and provide helpful, accurate responses.",
      role: "AI/ML developer responsible for NLP models, conversation flow, and system architecture."
    },
    technologies: ["Python", "TensorFlow", "OpenAI API", "FastAPI", "PostgreSQL", "Docker"],
    features: [
      "Natural language processing and understanding",
      "Context-aware conversations",
      "Multi-language support",
      "Sentiment analysis and emotion detection",
      "Integration with external APIs",
      "Learning and improvement over time"
    ],
    process: [
      {
        phase: "Model Research",
        description: "Evaluated different NLP models and selected the most suitable for conversational AI."
      },
      {
        phase: "Training Data Preparation",
        description: "Curated and preprocessed large datasets for training the conversation model."
      },
      {
        phase: "Model Training",
        description: "Trained custom models for intent recognition, entity extraction, and response generation."
      },
      {
        phase: "Integration & Testing",
        description: "Integrated with web interface and conducted extensive testing with real conversations."
      }
    ],
    challenges: [
      {
        challenge: "Context Management",
        solution: "Implemented sophisticated conversation memory and context tracking mechanisms."
      },
      {
        challenge: "Response Quality",
        solution: "Used ensemble methods and human-in-the-loop validation for better response quality."
      },
      {
        challenge: "Scalability",
        solution: "Built microservices architecture with load balancing for handling multiple conversations."
      }
    ],
    outcome: {
      metrics: "95% intent recognition accuracy, 3.2M+ conversations handled",
      impact: "Reduced customer support tickets by 60% and improved customer satisfaction by 40%"
    },
    links: {
      github: "https://github.com/yourusername/ai-chat-assistant",
      demo: "https://ai-chat-demo.vercel.app",
      caseStudy: "/case-studies/ai-chat-assistant.pdf"
    }
  }
];

export default function ProjectsPage() {
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
    'Tailwind CSS': '/tailwind.png'
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