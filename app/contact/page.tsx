'use client';

import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <div className={`${styles.container} ${styles.containerDark}`}>
      <div className={styles.content}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={`${styles.title} ${styles.titleDark}`}>
            Let's Connect
          </h1>
          <p className={`${styles.subtitle} ${styles.subtitleDark}`}>
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out!
          </p>
        </div>

        {/* Main Section */}
        <div className={styles.mainSection}>
          {/* Contact Information Section */}
          <div className={styles.infoSection}>
            <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
              Get in touch
            </h2>
            
            <div className={styles.contactInfo}>
              <div className={`${styles.contactItem} ${styles.contactItemDark}`}>
                <div className={`${styles.contactIcon} ${styles.emailIcon}`}>
                  <Mail className={styles.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={`${styles.contactTitle} ${styles.contactTitleDark}`}>
                    Email
                  </h3>
                  <a 
                    href="mailto:sdrshndahal@gmail.com"
                    className={`${styles.contactLink} ${styles.contactLinkDark}`}
                  >
                    sdrshndahal@gmail.com
                  </a>
                </div>
              </div>
              
              <div className={`${styles.contactItem} ${styles.contactItemDark}`}>
                <div className={`${styles.contactIcon} ${styles.githubIcon}`}>
                  <Github className={styles.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={`${styles.contactTitle} ${styles.contactTitleDark}`}>
                    GitHub
                  </h3>
                  <a 
                    href="https://github.com/IssyaboiSUD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.contactLink} ${styles.contactLinkDark}`}
                  >
                    github.com/IssyaboiSUD
                  </a>
                </div>
              </div>
              
              <div className={`${styles.contactItem} ${styles.contactItemDark}`}>
                <div className={`${styles.contactIcon} ${styles.linkedinIcon}`}>
                  <Linkedin className={styles.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={`${styles.contactTitle} ${styles.contactTitleDark}`}>
                    LinkedIn
                  </h3>
                  <a 
                    href="https://www.linkedin.com/in/sudarshan-dahal-a5738823a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.contactLink} ${styles.contactLinkDark}`}
                  >
                    linkedin.com/in/sudarshan-dahal
                  </a>
                </div>
              </div>
              
              <div className={`${styles.contactItem} ${styles.contactItemDark}`}>
                <div className={`${styles.contactIcon} ${styles.locationIcon}`}>
                  <MapPin className={styles.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={`${styles.contactTitle} ${styles.contactTitleDark}`}>
                    Location
                  </h3>
                  <p className={`${styles.contactText} ${styles.contactTextDark}`}>
                    Munich, Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Illustration Section */}
        <div className={styles.illustrationSection}>
          <div className={`${styles.illustration} ${styles.illustrationDark}`}>
            <div className={styles.illustrationContent}>
              <div className={styles.illustrationIcon}>
                <Mail className={styles.illustrationMailIcon} />
              </div>
              <h3 className={`${styles.illustrationTitle} ${styles.illustrationTitleDark}`}>
                Ready to work together?
              </h3>
              <p className={`${styles.illustrationText} ${styles.illustrationTextDark}`}>
                Whether you have a project in mind, want to discuss opportunities, 
                or just want to say hello, I'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 