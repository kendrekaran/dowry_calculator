'use client';
import { motion } from 'framer-motion';

type HeaderProps = {
  activeTab: 'dowry' | 'alimony';
};

export default function Header({ activeTab }: HeaderProps) {
  const title = activeTab === 'dowry' ? 'Dowry Calculator' : 'Alimony Calculator';
  const subtitle = activeTab === 'dowry' ? 'For Male Users' : 'For Female Users';
  const description = activeTab === 'dowry' 
    ? 'Enter your details below to receive an intelligent estimation of dowry based on your profile, powered by advanced AI analysis.'
    : 'Enter your details below to receive an intelligent estimation of alimony based on your situation, powered by advanced AI analysis.';
  
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };
  
  const decorativeItems = [
    { delay: 0.1, rotate: -15, translateX: -80, translateY: -20 },
    { delay: 0.2, rotate: 25, translateX: 90, translateY: -40 },
    { delay: 0.3, rotate: -10, translateX: -60, translateY: 40 },
    { delay: 0.25, rotate: 15, translateX: 70, translateY: 20 },
  ];

  return (
    <header className="relative text-center py-16 md:py-20 px-4 overflow-hidden">
   
      
      <motion.div
        key={activeTab}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.h1 
          variants={childVariants}
          className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          {title}
        </motion.h1>
        
        <motion.div
          variants={childVariants}
          className="mb-6"
        >
          <span className="inline-block text-lg px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">
            {subtitle}
          </span>
        </motion.div>
        
        <motion.p 
          variants={childVariants}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
        
        <motion.div
          variants={childVariants} 
          className="mt-8 flex justify-center items-center"
        >
          <div className="h-1 w-12 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full mr-3" />
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
          <div className="h-1 w-12 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full ml-3" />
        </motion.div>
      </motion.div>
    </header>
  );
} 