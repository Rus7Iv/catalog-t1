import React, { useEffect } from 'react'

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return null;
}

export default SmoothScroll;
