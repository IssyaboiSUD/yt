'use client';

import { useEffect, useState } from 'react';

export function HeaderScrollEffect() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down and past the header height
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const header = document.querySelector('.globalNavigation');
    if (header) {
      if (isHeaderVisible) {
        header.classList.remove('header-hidden');
      } else {
        header.classList.add('header-hidden');
      }
    }
  }, [isHeaderVisible]);

  return null; // This component doesn't render anything visible
}
