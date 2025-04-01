'use client';

import { motion } from 'framer-motion';

type TabSelectorProps = {
  activeTab: 'dowry' | 'alimony';
  setActiveTab: (tab: 'dowry' | 'alimony') => void;
};

export default function TabSelector({ activeTab, setActiveTab }: TabSelectorProps) {
  return (
    <div className="flex justify-center mb-10">
      <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex shadow-md">
        <TabButton 
          isActive={activeTab === 'dowry'} 
          onClick={() => setActiveTab('dowry')}
          label="Dowry Calculator"
          subtitle="👨 For Grooms"
          icon="💰"
        />
        <TabButton 
          isActive={activeTab === 'alimony'} 
          onClick={() => setActiveTab('alimony')}
          label="Alimony Calculator"
          subtitle="👩 For Wives"
          icon="⚖️"
        />
      </div>
    </div>
  );
}

type TabButtonProps = {
  isActive: boolean;
  onClick: () => void;
  label: string;
  subtitle: string;
  icon: string;
};

function TabButton({ isActive, onClick, label, subtitle, icon }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 rounded-lg transition-all duration-300 flex flex-col items-center min-w-[180px]`}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-white dark:bg-gray-700 rounded-lg shadow-md"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <span className={`relative z-10 font-medium flex items-center gap-2 ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300'}`}>
        {icon} {label}
      </span>
      <span className={`relative z-10 text-xs mt-1 ${isActive ? 'text-secondary' : 'text-gray-500 dark:text-gray-400'}`}>
        {subtitle}
      </span>
    </button>
  );
} 