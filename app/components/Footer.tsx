'use client';
import { motion } from 'framer-motion';

type FooterProps = {
  activeTab: 'dowry' | 'alimony';
};

export default function Footer({ activeTab }: FooterProps) {
  const title = activeTab === 'dowry' ? 'Dowry Calculator' : 'Alimony Calculator';
  const disclaimer = activeTab === 'dowry'
    ? 'This application is for educational purposes only. The calculations provided are estimates and should not be considered financial advice. Actual dowry amounts may vary based on cultural, social, and personal factors.'
    : 'This application is for educational purposes only. The calculations provided are estimates and should not be considered legal advice. Please consult with a qualified legal professional for guidance specific to your situation.';

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-12 mt-16 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Footer Logo/Title */}
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
              {title}
            </h3>
            <div className="mt-2 flex justify-center space-x-2">
              <span className="h-1 w-2 bg-primary/30 rounded-full"></span>
              <span className="h-1 w-8 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              <span className="h-1 w-2 bg-secondary/30 rounded-full"></span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {currentYear} {title}. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center group"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all group-hover:after:w-full">
                  Privacy Policy
                </span>
              </a>
              <a 
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center group"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all group-hover:after:w-full">
                  Terms of Service
                </span>
              </a>
              <a 
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center group"
              >
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all group-hover:after:w-full">
                  Contact Us
                </span>
              </a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center shadow-sm">
            <div className="flex items-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-left leading-relaxed">
                {disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
} 