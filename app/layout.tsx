import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import { HeaderScrollEffect } from "./components/HeaderScrollEffect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sudarshan - Portfolio",
  description: "Sudarshan's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.variable}>
        {/* Global Navigation Header */}
        <nav className="globalNavigation">
          <div className="navContainer">
            <Link href="/" className="navLogo">
              Sudarshan
            </Link>
            <div className="navLinks">
              <Link href="/" className="navLink" title="Home">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </Link>
              <Link href="/projects" className="navLink" title="Projects">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="7" height="7" x="3" y="3" rx="1"/>
                  <rect width="7" height="7" x="14" y="3" rx="1"/>
                  <rect width="7" height="7" x="14" y="14" rx="1"/>
                  <rect width="7" height="7" x="3" y="14" rx="1"/>
                </svg>
              </Link>
              <Link href="/about" className="navLink" title="About">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="5"/>
                  <path d="M20 21a8 8 0 1 0-16 0"/>
                </svg>
              </Link>
              <Link href="/contact" className="navLink" title="Contact">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </Link>
            </div>
          </div>
        </nav>
        <HeaderScrollEffect />
        {children}
        
        {/* Global Footer */}
        <footer className="globalFooter">
          <div className="footerContent">
            <div className="footerText">
              <p>&copy; 2025 Sudarshan Dahal. All rights reserved.</p>
              <p>Created by <span className="footerCreator">Sudarshan Dahal</span></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
