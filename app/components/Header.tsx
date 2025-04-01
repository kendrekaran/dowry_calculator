'use client';
import { motion } from 'framer-motion';

type HeaderProps = {
  activeTab: 'dowry' | 'alimony';
};

export default function Header({ activeTab }: HeaderProps) {
  const title = activeTab === 'dowry' ? 'Dowry Calculator' : 'Alimony Calculator';
  const description = activeTab === 'dowry' 
    ? 'Enter your details below to receive an intelligent estimation of dowry based on your profile, powered by advanced AI analysis.'
    : 'Enter your details below to receive an intelligent estimation of alimony based on your situation, powered by advanced AI analysis.';

  return (
    <header className="text-center py-12 md:py-16 px-4">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>
      
      <motion.div 
        className="mt-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
      </motion.div>
    </header>
  );
} 