type FooterProps = {
  activeTab: 'dowry' | 'alimony';
};

export default function Footer({ activeTab }: FooterProps) {
  const title = activeTab === 'dowry' ? 'Dowry Calculator' : 'Alimony Calculator';
  const disclaimer = activeTab === 'dowry'
    ? 'This application is for educational purposes only. The calculations provided are estimates and should not be considered financial advice. Actual dowry amounts may vary based on cultural, social, and personal factors.'
    : 'This application is for educational purposes only. The calculations provided are estimates and should not be considered legal advice. Please consult with a qualified legal professional for guidance specific to your situation.';

  return (
    <footer className="py-8 mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {title}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-500">
          <p>
            {disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
} 