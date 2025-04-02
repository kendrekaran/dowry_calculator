'use client';

import { motion } from 'framer-motion';

type TabSelectorProps = {
  activeTab: 'dowry' | 'alimony';
  setActiveTab: (tab: 'dowry' | 'alimony') => void;
};

export default function TabSelector({ activeTab, setActiveTab }: TabSelectorProps) {
  return (
    <div className="flex justify-center mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl flex shadow-lg max-w-3xl w-full"
      >
        <TabButton 
          isActive={activeTab === 'dowry'} 
          onClick={() => setActiveTab('dowry')}
          label="Dowry Calculator"
          subtitle="For Male Users"
          icon="🤵"
          color="primary"
        />
        <TabButton 
          isActive={activeTab === 'alimony'} 
          onClick={() => setActiveTab('alimony')}
          label="Alimony Calculator"
          subtitle="For Female Users"
          icon="👰‍♀️"
          color="secondary"
        />
      </motion.div>
    </div>
  );
}

type TabButtonProps = {
  isActive: boolean;
  onClick: () => void;
  label: string;
  subtitle: string;
  icon: string;
  color: 'primary' | 'secondary';
};

function TabButton({ isActive, onClick, label, subtitle, icon, color }: TabButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-6 py-4 rounded-lg transition-all duration-300 flex flex-col items-center flex-1 ${!isActive && 'hover:bg-white/30 dark:hover:bg-gray-700/30'}`}
      whileHover={!isActive ? { scale: 1.02 } : {}}
      whileTap={!isActive ? { scale: 0.98 } : {}}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-white dark:bg-gray-700 rounded-lg shadow-md"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <span className="relative z-10 text-2xl mb-1">{icon}</span>
      <span className={`relative z-10 font-medium ${isActive ? `text-${color}` : 'text-gray-600 dark:text-gray-300'}`}>
        {label}
      </span>
      <span className={`relative z-10 text-xs mt-1 ${isActive ? `text-${color}` : 'text-gray-500 dark:text-gray-400'}`}>
        {subtitle}
      </span>
      
      {isActive && (
        <motion.div 
          layoutId="activeIndicator"
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-12 bg-${color} rounded-t-full`}
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  );
} 