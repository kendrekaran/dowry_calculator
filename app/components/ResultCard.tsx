'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ResultCardProps = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'neutral';
  animateDelay?: number;
  className?: string;
  highlight?: boolean;
};

export default function ResultCard({
  title,
  icon,
  children,
  variant = 'primary',
  animateDelay = 0,
  className = '',
  highlight = false,
}: ResultCardProps) {
  // Color configuration based on variant
  const variantStyles = {
    primary: {
      title: 'text-primary',
      gradient: 'from-primary to-secondary',
      bg: 'bg-white dark:bg-gray-900',
      border: highlight ? 'border-primary/30' : 'border-gray-100 dark:border-gray-800',
      shadow: highlight ? 'shadow-xl shadow-primary/5' : 'shadow-md',
    },
    secondary: {
      title: 'text-secondary',
      gradient: 'from-secondary to-primary',
      bg: 'bg-white dark:bg-gray-900',
      border: highlight ? 'border-secondary/30' : 'border-gray-100 dark:border-gray-800',
      shadow: highlight ? 'shadow-xl shadow-secondary/5' : 'shadow-md',
    },
    neutral: {
      title: 'text-gray-700 dark:text-gray-300',
      gradient: 'from-gray-400 to-gray-600',
      bg: 'bg-white dark:bg-gray-900',
      border: 'border-gray-100 dark:border-gray-800',
      shadow: 'shadow-md',
    },
  };

  const styles = variantStyles[variant];

  return (
    <motion.div
      className={`${styles.bg} rounded-lg ${styles.border} border ${styles.shadow} p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: animateDelay,
        ease: 'easeOut' 
      }}
    >
      <div className="flex items-center mb-3">
        {icon && (
          <div className={`${styles.title} mr-2`}>
            {icon}
          </div>
        )}
        <h3 className={`text-xl font-semibold ${styles.title} flex items-center relative`}>
          {title}
          {highlight && (
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
          )}
        </h3>
      </div>
      
      <div className={highlight ? `bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent` : ''}>
        {children}
      </div>
      
      {highlight && (
        <div className="mt-3 w-full flex justify-end">
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        </div>
      )}
    </motion.div>
  );
} 