'use client';

import Link from 'next/link';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>


      <div className={styles.main}>
        <div className={styles.content}>
          
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <div className={styles.heroLeft}>
                <h1 className={styles.heroTitle}>SOFTWARE ENGINEER</h1>
                <p className={styles.heroDescription}>
                  Passionate about creating intuitive and engaging user experiences. 
                  Specialize in transforming ideas into beautifully crafted products.
                </p>
                <div className={styles.heroStats}>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>+2</div>
                    <div className={styles.statLabel}>YEARS OF<br />EXPERIENCE</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>+4</div>
                    <div className={styles.statLabel}>PROJECTS<br />COMPLETED</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>1</div>
                    <div className={styles.statLabel}>AWARD<br />RECEIVED</div>
                  </div>
                </div>
              </div>
              <div className={styles.heroRight}>
                <div className={styles.profileCard}>
                  <div className={styles.profileImage}>
                    <img src="/profile.jpeg" alt="Sudarshan Dahal" />
                  </div>
                  <div className={styles.profileInfo}>
                    <h2 className={styles.profileName}>Sudarshan Dahal</h2>
                    <p className={styles.profileDescription}>
                      Learn and evolve, build and grow.
                    </p>
                    <div className={styles.socialLinks}>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <img src="/github.png" alt="GitHub" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <img src="/linkedin.png" alt="LinkedIn" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <img src="/instagram.png" alt="Instagram" />
                      </a>
                    </div>
                    <div className={styles.downloadSection}>
                      <a href="/resume.pdf" download className={styles.downloadBtn}>
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className={styles.educationSection}>
            <h2 className={styles.sectionTitle}>EDUCATION &<br />ACADEMIC</h2>
            <div className={styles.educationList}>
              <div className={styles.educationItem}>
                <div className={styles.educationHeader}>
                  <div className={styles.educationLogo}>
                    <img src="/lmu-logo.png" alt="LMU Munich" />
                  </div>
                  <div className={styles.educationDetails}>
                    <h3>B.Sc. Bioinformatics</h3>
                    <span className={styles.institution}>LMU Munich</span>
                    <span className={styles.period}>2021 - 2025</span>
                  </div>
                </div>
                <p>Interdisciplinary program combining biology, computer science, and mathematics to analyze complex biological data and develop computational solutions.</p>
                <div className={styles.achievements}>
                  <span>Machine Learning</span>
                  <span>Statistics</span>
                  <span>Programming</span>
                </div>
              </div>
              <div className={styles.educationItem}>
                <div className={styles.educationHeader}>
                  <div className={styles.educationLogo}>
                    <img src="/HM.png" alt="Hochschule für angewandte Wissenschaften" />
                  </div>
                  <div className={styles.educationDetails}>
                    <h3>Bachelor of Optometry</h3>
                    <span className={styles.institution}>Munich University of Applied Sciences</span>
                    <span className={styles.period}>2018 - 2022</span>
                  </div>
                </div>
                <p>Practice-oriented program covering optometry, vision science, anatomy, physiology, and business aspects, including hands-on training.</p>
                <div className={styles.achievements}>
                  <span>Anatomy</span>
                  <span>Physiology</span>
                  <span>Diagnostics and Treatment</span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className={styles.experienceSection}>
            <h2 className={styles.sectionTitle}>2 YEARS OF<br />EXPERIENCE</h2>
            <div className={styles.experienceList}>
              <div className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <div className={styles.experienceLogo}>
                    <img src="/randstad-logo.png" alt="Randstad" />
                  </div>
                  <div className={styles.experienceDetails}>
                    <h3>IT Services and Operations</h3>
                    <span className={styles.company}>Randstad Digital Germany</span>
                    <span className={styles.period}>Jul 2023 - Present</span>
                  </div>
                </div>
                <p>Monitored servers and networks, resolved VPN and device issues, configured laptops/accounts, and supported IT operations with Intune, Azure, and Google Admin.</p>
              </div>
              <div className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <div className={styles.experienceLogo}>
                    <div className={styles.placeholderLogo}>🎓</div>
                  </div>
                  <div className={styles.experienceDetails}>
                    <h3>Student Developer</h3>
                    <span className={styles.company}>LMU Munich</span>
                    <span className={styles.period}>Jun 2022 - Dec 2024</span>
                  </div>
                </div>
                <p>Developed and implemented academic projects, collaborated closely with peers and professors on research initiatives.</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className={styles.skillsSection}>
            <h2 className={styles.sectionTitle}>SKILLS &<br />TECHNOLOGIES</h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <img src="/java.png" alt="Java" />
                </div>
                <h3>Java</h3>
                <p>Programming Language</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <img src="/python.png" alt="Python" />
                </div>
                <h3>Python</h3>
                <p>Programming Language</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <img src="/javascript.png" alt="JavaScript" />
                </div>
                <h3>JavaScript</h3>
                <p>Programming Language</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <img src="/typescript.png" alt="TypeScript" />
                </div>
                <h3>TypeScript</h3>
                <p>Programming Language</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <img src="/react.png" alt="React" />
                </div>
                <h3>React</h3>
                <p>Frontend Framework</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <img src="/next.png" alt="Next.js" />
                </div>
                <h3>Next.js</h3>
                <p>React Framework</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <img src="/html.png" alt="HTML" />
                </div>
                <h3>HTML</h3>
                <p>Markup Language</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <img src="/css.png" alt="CSS" />
                </div>
                <h3>CSS</h3>
                <p>Styling Language</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <img src="/sql.png" alt="SQL" />
                </div>
                <h3>SQL</h3>
                <p>Database Language</p>
              </div>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <img src="/scrum-logo.png" alt="Scrum" />
                </div>
                <h3>Scrum</h3>
                <p>Agile Methodology</p>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className={styles.languagesSection}>
            <h2 className={styles.sectionTitle}>LANGUAGES &<br />PROFICIENCY</h2>
            <div className={styles.languagesGrid}>
              <div className={styles.languageCard}>
                <div className={styles.languageFlag}>
                  <img src="/uk.png" alt="English Flag" />
                </div>
                <div className={styles.languageInfo}>
                  <h3>English</h3>
                  <p>Native or Bilingual</p>
                </div>
              </div>
              <div className={styles.languageCard}>
                <div className={styles.languageFlag}>
                  <img src="/nepal.png" alt="Nepali Flag" />
                </div>
                <div className={styles.languageInfo}>
                  <h3>Nepali</h3>
                  <p>Native or Bilingual</p>
                </div>
              </div>
              <div className={styles.languageCard}>
                <div className={styles.languageFlag}>
                  <img src="/germany.png" alt="German Flag" />
                </div>
                <div className={styles.languageInfo}>
                  <h3>German</h3>
                  <p>Almost Native</p>
                </div>
              </div>
              <div className={styles.languageCard}>
                <div className={styles.languageFlag}>
                  <img src="/italy.png" alt="Italian Flag" />
                </div>
                <div className={styles.languageInfo}>
                  <h3>Italian</h3>
                  <p>Fluent</p>
                </div>
              </div>
              <div className={styles.languageCard}>
                <div className={styles.languageFlag}>
                  <img src="/spain.png" alt="Spanish Flag" />
                </div>
                <div className={styles.languageInfo}>
                  <h3>Spanish</h3>
                  <p>Conversational</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
} 