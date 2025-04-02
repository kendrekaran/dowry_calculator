'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  // Check if we're in the browser, to avoid SSR issues
  const isBrowser = typeof window !== 'undefined';
  
  // Initialize theme from local storage or system preference
  const [theme, setTheme] = useState(() => {
    if (!isBrowser) return 'light';
    
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') || 'light';
    }
    
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light';
  });

  // Apply theme changes to document
  useEffect(() => {
    if (!isBrowser) return;
    
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, isBrowser]);

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Variants for animations
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: { opacity: 1, scale: 1, rotate: 0 }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors p-2"
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative w-full h-full">
        {/* Sun Icon */}
        <motion.div
          className="absolute inset-0 text-yellow-500 flex items-center justify-center"
          initial={theme === 'dark' ? 'visible' : 'hidden'}
          animate={theme === 'dark' ? 'hidden' : 'visible'}
          variants={iconVariants}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          className="absolute inset-0 text-blue-600 flex items-center justify-center"
          initial={theme === 'dark' ? 'hidden' : 'visible'}
          animate={theme === 'dark' ? 'visible' : 'hidden'}
          variants={iconVariants}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </motion.div>
      </div>
    </motion.button>
  );
} 