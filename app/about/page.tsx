'use client';

import { useState } from 'react';
import { 
  Mail,
  Linkedin,
  MapPin, 
  Calendar, 
  Building, 
  GraduationCap, 
  Star,
  Phone,
  ExternalLink,
  Plus,
  MessageCircle,
  Globe
} from 'lucide-react';
import PageLayout from '../components/PageLayout';
import styles from './AboutPage.module.css';
import { useTheme } from '../contexts/ThemeContext';

export default function AboutPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const experience = [
    {
      id: 1,
      title: "IT Specialist",
      company: "Randstad Digital Germany AG",
      location: "Munich, Germany",
      duration: "July 2023 - Present",
      description: "Network Monitoring, Hardware maintenance, Software configuration and support, IT Operations, ",
      achievements: [
        "Monitored servers and network infrastructure using Zabbix, promptly resolving issues to ensure system stability.",
        "Managed employee accounts and access rights, enabling seamless onboarding and softwareprovisioning",
        "Regularly used Microsoft Intune, Entra, Azure, Google Admin Console, Jira, Confluence, and CMDB to support IT operations and documentation"
      ]
    },
    
  ];

  const education = [
    {
      id: 1,
      degree: "B.Sc. Bioinformatics",
      school: "Ludwig-Maximilians-Universität München, Technische Universität München",
      location: "Munich, Germany",
      duration: "2021 - 2025",
    }
  ];

  const languages = [
    { name: "English", level: "Native", proficiency: 5 },
    { name: "German", level: "Fluent", proficiency: 5 },
    { name: "Nepali", level: "Native", proficiency: 5 },
    { name: "Spanish", level: "Conversational", proficiency: 3 },
    { name: "Italian", level: "Conversational", proficiency: 3 },
  ];

  const skills = [
    { name: "JavaScript", level: 5 },
    { name: "React", level: 5 },
    { name: "Next JS", level: 4 },
    { name: "TypeScript", level: 4 },
    { name: "Python", level: 4 },
    { name: "Java", level: 5 },
    { name: "R", level: 3 },
    { name: "MySQL", level: 4 },
    { name: "Git", level: 5 }
  ];

  return (
    <PageLayout>
      <div className={`${styles.container} ${isDark ? styles.containerDark : ''}`}>
        {/* Header Section */}
        <div className={`${styles.header} ${isDark ? styles.headerDark : ''}`}>
          <div className={styles.coverPhoto}>
            <div className={styles.profileImage}>
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQGV3w2pdk1Sag/profile-displayphoto-scale_400_400/B4EZgZIE19HIAg-/0/1752768204930?e=1756944000&v=beta&t=EDJAHRxokucvxwTkVeJcrrffoCNWObvfyTLGNrl3SNM" 
                alt="Sudarshan Profile"
              />
            </div>
          </div>
          
          <div className={styles.profileInfo}>
            <h1 className={`${styles.name} ${isDark ? styles.nameDark : ''}`}>Sudarshan Dahal</h1>
            <p className={`${styles.title} ${isDark ? styles.titleDark : ''}`}>Software Engineer</p>
          
            
            <div className={`${styles.locationInfo} ${isDark ? styles.locationInfoDark : ''}`}>
              <MapPin size={16} />
              <span>Munich, Germany</span>
              <span className={`${styles.separator} ${isDark ? styles.separatorDark : ''}`}>•</span>
              <span>500+ connections</span>
            </div>

            <div className={styles.contactInfo}>
              <a href="mailto:suddahal99@gmail.com" className={`${styles.contactLink} ${isDark ? styles.contactLinkDark : ''}`}>
                <Mail size={16} />
                <span>sudarshan.dahal@web.de</span>
              </a>
              <a href="tel:+491776760689" className={`${styles.contactLink} ${isDark ? styles.contactLinkDark : ''}`}>
                <Phone size={16} />
                <span>+49 177 6760689</span>
              </a>
            </div>

            <div className={styles.actionButtons}>
              <a 
                href="https://www.linkedin.com/in/sudarshan-dahal-a5738823a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.connectButton}
              >
                <Linkedin size={16} />
                <span>Connect on LinkedIn</span>
                <ExternalLink size={14} />
              </a>
              <button className={`${styles.messageButton} ${isDark ? styles.messageButtonDark : ''}`}>
                <MessageCircle size={16} />
                <span>Message</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content - Stacked Sections */}
        <div className={styles.mainContent}>
          {/* About Section */}
          <div className={`${styles.section} ${isDark ? styles.sectionDark : ''}`}>
            <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>About</h2>
            <p className={`${styles.aboutText} ${isDark ? styles.aboutTextDark : ''}`}>
              Passionate software engineer with expertise in full-stack development, 
              specializing in React, Node.js, and cloud technologies. Committed to 
              creating scalable, user-friendly applications that solve real-world problems. 
              Always eager to learn new technologies and contribute to innovative projects.
            </p>
          </div>

          {/* Experience Section */}
          <div className={`${styles.section} ${isDark ? styles.sectionDark : ''}`}>
            <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>Experience</h2>
            <div className={styles.experienceList}>
              {experience.map((exp, index) => (
                <div key={exp.id} className={`${styles.experienceItem} ${isDark ? styles.experienceItemDark : ''}`}>
                  <div className={styles.experienceHeader}>
                    <div className={styles.experienceTitle}>
                      <h3 className={`${isDark ? styles.experienceTitleDark : ''}`}>{exp.title}</h3>
                      <div className={`${styles.companyInfo} ${isDark ? styles.companyInfoDark : ''}`}>
                        <Building size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className={styles.experienceMeta}>
                      <div className={`${styles.location} ${isDark ? styles.locationDark : ''}`}>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className={`${styles.duration} ${isDark ? styles.durationDark : ''}`}>
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className={`${styles.experienceDescription} ${isDark ? styles.experienceDescriptionDark : ''}`}>{exp.description}</p>
                  <ul className={`${styles.achievements} ${isDark ? styles.achievementsDark : ''}`}>
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className={isDark ? styles.achievementItemDark : ''}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className={`${styles.section} ${isDark ? styles.sectionDark : ''}`}>
            <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>Education</h2>
            <div className={styles.educationList}>
              {education.map((edu) => (
                <div key={edu.id} className={`${styles.educationItem} ${isDark ? styles.educationItemDark : ''}`}>
                  <div className={styles.educationHeader}>
                    <div className={styles.educationTitle}>
                      <h3 className={`${isDark ? styles.educationTitleDark : ''}`}>{edu.degree}</h3>
                      <div className={`${styles.schoolInfo} ${isDark ? styles.schoolInfoDark : ''}`}>
                        <GraduationCap size={16} />
                        <span>{edu.school}</span>
                      </div>
                    </div>
                    <div className={styles.educationMeta}>
                      <div className={`${styles.location} ${isDark ? styles.locationDark : ''}`}>
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <div className={`${styles.duration} ${isDark ? styles.durationDark : ''}`}>
                        <Calendar size={14} />
                        <span>{edu.duration}</span>
                      </div> 
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className={`${styles.section} ${isDark ? styles.sectionDark : ''}`}>
            <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>Skills</h2>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} className={`${styles.skillItem} ${isDark ? styles.skillItemDark : ''}`}>
                  <div className={styles.skillInfo}>
                    <span className={`${styles.skillName} ${isDark ? styles.skillNameDark : ''}`}>{skill.name}</span>
                    <span className={`${styles.skillLevel} ${isDark ? styles.skillLevelDark : ''}`}>
                      {skill.level === 5 ? 'Expert' : 
                       skill.level === 4 ? 'Advanced' : 
                       skill.level === 3 ? 'Intermediate' : 'Beginner'}
                    </span>
                  </div>
                  <div className={styles.proficiencyBars}>
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`${styles.proficiencyBar} ${i < skill.level ? styles.filled : ''} ${isDark ? styles.proficiencyBarDark : ''}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className={`${styles.section} ${isDark ? styles.sectionDark : ''}`}>
            <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>Languages</h2>
            <div className={styles.languagesList}>
              {languages.map((lang, index) => (
                <div key={index} className={`${styles.languageItem} ${isDark ? styles.languageItemDark : ''}`}>
                  <div className={styles.languageInfo}>
                    <span className={`${styles.languageName} ${isDark ? styles.languageNameDark : ''}`}>{lang.name}</span>
                    <span className={`${styles.languageLevel} ${isDark ? styles.languageLevelDark : ''}`}>{lang.level}</span>
                  </div>
                  <div className={styles.proficiencyBars}>
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`${styles.proficiencyBar} ${i < lang.proficiency ? styles.filled : ''} ${isDark ? styles.proficiencyBarDark : ''}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 