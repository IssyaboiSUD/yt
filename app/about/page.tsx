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
      companyLogo: "/randstad-logo.png",
      companyName: "Randstad Digital Germany",
      jobTitle: "IT Services and Operations",
      employmentType: "Work Study",
      dates: "Jul 2023 - Present",
      duration: "2 yrs 2 mos",
      location: "München, Bayern, Deutschland"
    }
  ];

  const education = [
    {
      id: 1,
      institutionLogo: "/lmu-logo.png",
      institutionName: "Ludwig-Maximilians-Universität München",
      degree: "Bachelor, Bioinformatik",
      dates: "2020 - 2023"
    }
  ];

  const certifications = [
    {
      id: 1,
      logo: "/scrum-logo.png",
      name: "Professional Scrum Product Owner I",
      organization: "Scrum.org",
      issueDate: "Issued Nov 2024",
      credentialUrl: "https://www.credly.com/badges/5ad50002-8e98-476f-9563-8b45d91415ba/linked_in?t=snpz3z"
    }
  ];

  const skills = [
    "Confluence",
    "Jira", 
    "Zabbix",
    "MySQL",
    "Python",
    "Bioinformatics",
    "Data Analysis",
    "Scrum",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript"
  ];

  const languages = [
    { name: "Deutsch", proficiency: "Full professional proficiency" },
    { name: "Englisch", proficiency: "Native or bilingual proficiency" },
    { name: "Hindi", proficiency: "Native or bilingual proficiency" },
    { name: "Marathi", proficiency: "Native or bilingual proficiency" },
    { name: "Sanskrit", proficiency: "Elementary proficiency" }
  ];

  return (
    <PageLayout>
      <div className={`${styles.container} ${isDark ? styles.containerDark : ''}`}>
        {/* Header Section */}
        <div className={`${styles.header} ${isDark ? styles.headerDark : ''}`}>
          <div className={styles.coverPhoto}>
            <div className={styles.profileImage}>
              <img 
                src="/profile.jpeg" 
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

        {/* Main Content - LinkedIn Style Sections */}
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
            <div className={styles.sectionContent}>
              {experience.map((exp) => (
                <div key={exp.id} className={styles.experienceItem}>
                  <div className={styles.companyInfo}>
                    <div className={styles.companyLogo}>
                      <img src={exp.companyLogo} alt="Company Logo" className={styles.logoImage} />
                    </div>
                    <div className={styles.companyDetails}>
                      <h3 className={`${styles.jobTitle} ${isDark ? styles.jobTitleDark : ''}`}>{exp.jobTitle}</h3>
                      <p className={`${styles.companyName} ${isDark ? styles.companyNameDark : ''}`}>{exp.companyName}</p>
                      <p className={`${styles.employmentType} ${isDark ? styles.employmentTypeDark : ''}`}>{exp.employmentType}</p>
                      <p className={`${styles.dates} ${isDark ? styles.datesDark : ''}`}>{exp.dates} · {exp.duration}</p>
                      <p className={`${styles.location} ${isDark ? styles.locationDark : ''}`}>{exp.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className={`${styles.section} ${isDark ? styles.sectionDark : ''}`}>
            <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>Education</h2>
            <div className={styles.sectionContent}>
              {education.map((edu) => (
                <div key={edu.id} className={styles.educationItem}>
                  <div className={styles.institutionInfo}>
                    <div className={styles.institutionLogo}>
                      <img src={edu.institutionLogo} alt="Institution Logo" className={styles.logoImage} />
                    </div>
                    <div className={styles.institutionDetails}>
                      <h3 className={`${styles.institutionName} ${isDark ? styles.institutionNameDark : ''}`}>{edu.institutionName}</h3>
                      <p className={`${styles.degree} ${isDark ? styles.degreeDark : ''}`}>{edu.degree}</p>
                      <p className={`${styles.dates} ${isDark ? styles.datesDark : ''}`}>{edu.dates}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className={`${styles.section} ${isDark ? styles.sectionDark : ''}`}>
            <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>Licenses & certifications</h2>
            <div className={styles.sectionContent}>
              {certifications.map((cert) => (
                <div key={cert.id} className={styles.certificationItem}>
                  <div className={styles.certificationInfo}>
                    <div className={styles.certificationLogo}>
                      <img src={cert.logo} alt="Certification Logo" className={styles.logoImage} />
                    </div>
                    <div className={styles.certificationDetails}>
                      <h3 className={`${styles.certificationName} ${isDark ? styles.certificationNameDark : ''}`}>{cert.name}</h3>
                      <p className={`${styles.organization} ${isDark ? styles.organizationDark : ''}`}>{cert.organization}</p>
                      <p className={`${styles.issueDate} ${isDark ? styles.issueDateDark : ''}`}>{cert.issueDate}</p>
                    </div>
                  </div>
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className={styles.credentialButton}>
                    Show credential ↗
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className={`${styles.section} ${isDark ? styles.sectionDark : ''}`}>
            <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>Skills</h2>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={`${styles.skillName} ${isDark ? styles.skillNameDark : ''}`}>{skill}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className={`${styles.section} ${isDark ? styles.sectionDark : ''}`}>
            <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>Languages</h2>
            <div className={styles.sectionContent}>
              {languages.map((language, index) => (
                <div key={index} className={styles.languageItem}>
                  <div className={`${styles.languageName} ${isDark ? styles.languageNameDark : ''}`}>{language.name}</div>
                  <div className={`${styles.languageProficiency} ${isDark ? styles.languageProficiencyDark : ''}`}>{language.proficiency}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 