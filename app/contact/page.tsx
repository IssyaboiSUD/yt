'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import Header from '../components/Header';
import styles from './ContactPage.module.css';
import { useTheme } from '../contexts/ThemeContext';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // You can add actual form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`${styles.container} ${isDark ? styles.containerDark : ''}`}>
      <Header />
      
      <div className={styles.content}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={`${styles.title} ${isDark ? styles.titleDark : ''}`}>
            Let's Talk
          </h1>
          <p className={`${styles.subtitle} ${isDark ? styles.subtitleDark : ''}`}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and design.
          </p>
        </div>

        <div className={styles.mainSection}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={`${styles.label} ${isDark ? styles.labelDark : ''}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`${styles.input} ${isDark ? styles.inputDark : ''}`}
                  placeholder="Your name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={`${styles.label} ${isDark ? styles.labelDark : ''}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`${styles.input} ${isDark ? styles.inputDark : ''}`}
                  placeholder="yourmail@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={`${styles.label} ${isDark ? styles.labelDark : ''}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`${styles.textarea} ${isDark ? styles.textareaDark : ''}`}
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitButton} ${isDark ? styles.submitButtonDark : ''} ${isSubmitting ? styles.submitting : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className={styles.sendIcon} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.infoSection}>
            <h2 className={`${styles.sectionTitle} ${isDark ? styles.sectionTitleDark : ''}`}>
              Get in Touch
            </h2>
            
            <div className={styles.contactInfo}>
              <div className={`${styles.contactItem} ${isDark ? styles.contactItemDark : ''}`}>
                <div className={`${styles.contactIcon} ${styles.emailIcon}`}>
                  <Mail className={styles.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={`${styles.contactTitle} ${isDark ? styles.contactTitleDark : ''}`}>
                    Email
                  </h3>
                  <a 
                    href="mailto:sdrshndahal@gmail.com" 
                    className={`${styles.contactLink} ${isDark ? styles.contactLinkDark : ''}`}
                  >
                    sdrshndahal@gmail.com
                  </a>
                </div>
              </div>

              <div className={`${styles.contactItem} ${isDark ? styles.contactItemDark : ''}`}>
                <div className={`${styles.contactIcon} ${styles.githubIcon}`}>
                  <Github className={styles.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={`${styles.contactTitle} ${isDark ? styles.contactTitleDark : ''}`}>
                    GitHub
                  </h3>
                  <a 
                    href="https://github.com/IssyaboiSUD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${styles.contactLink} ${isDark ? styles.contactLinkDark : ''}`}
                  >
                    github.com/IssyaboiSUD
                  </a>
                </div>
              </div>

              <div className={`${styles.contactItem} ${isDark ? styles.contactItemDark : ''}`}>
                <div className={`${styles.contactIcon} ${styles.linkedinIcon}`}>
                  <Linkedin className={styles.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={`${styles.contactTitle} ${isDark ? styles.contactTitleDark : ''}`}>
                    LinkedIn
                  </h3>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${styles.contactLink} ${isDark ? styles.contactLinkDark : ''}`}
                  >
                    linkedin.com/in/Sudarshan
                  </a>
                </div>
              </div>

              <div className={`${styles.contactItem} ${isDark ? styles.contactItemDark : ''}`}>
                <div className={`${styles.contactIcon} ${styles.locationIcon}`}>
                  <MapPin className={styles.icon} />
                </div>
                <div className={styles.contactDetails}>
                  <h3 className={`${styles.contactTitle} ${isDark ? styles.contactTitleDark : ''}`}>
                    Location
                  </h3>
                  <p className={`${styles.contactText} ${isDark ? styles.contactTextDark : ''}`}>
                    Munich, Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Illustration Section */}
        <div className={styles.illustrationSection}>
          <div className={`${styles.illustration} ${isDark ? styles.illustrationDark : ''}`}>
                          <div className={styles.illustrationContent}>
                <div className={styles.illustrationIcon}>
                  <Mail className={styles.illustrationMailIcon} />
                </div>
                <h3 className={`${styles.illustrationTitle} ${isDark ? styles.illustrationTitleDark : ''}`}>
                  Ready to Collaborate?
                </h3>
                <p className={`${styles.illustrationText} ${isDark ? styles.illustrationTextDark : ''}`}>
                  Whether you have a project in mind or just want to say hello, I'd love to hear from you.
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
} 