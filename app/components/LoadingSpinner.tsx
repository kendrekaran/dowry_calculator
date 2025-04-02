'use client';

import { motion } from 'framer-motion';

type LoadingSpinnerProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  showText?: boolean;
  text?: string;
};

export default function LoadingSpinner({
  size = 'md',
  color = 'primary',
  showText = true,
  text = 'Loading...'
}: LoadingSpinnerProps) {
  // Define size values
  const sizeMap = {
    sm: {
      container: 'h-5 w-5',
      circle: 16,
      strokeWidth: 2,
      textSize: 'text-xs'
    },
    md: {
      container: 'h-8 w-8',
      circle: 24,
      strokeWidth: 3,
      textSize: 'text-sm'
    },
    lg: {
      container: 'h-12 w-12',
      circle: 36,
      strokeWidth: 4,
      textSize: 'text-base'
    }
  };

  // Define color values
  const colorMap = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    white: 'text-white'
  };

  const { container, circle, strokeWidth, textSize } = sizeMap[size];
  const textColor = colorMap[color];

  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 1.5
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className={`${container} ${colorMap[color]}`}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      >
        <svg
          className="w-full h-full"
          viewBox={`0 0 ${circle * 2} ${circle * 2}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={circle}
            cy={circle}
            r={circle - strokeWidth}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{ pathLength: 0.2, opacity: 0.2 }}
            animate={{ 
              pathLength: [0.2, 0.8, 0.2],
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="opacity-25"
          />
          <motion.circle
            cx={circle}
            cy={circle}
            r={circle - strokeWidth}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * (circle - strokeWidth)}
            strokeDashoffset={2 * Math.PI * (circle - strokeWidth) * 0.4}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={spinTransition}
          />
        </svg>
      </motion.div>
      
      {showText && (
        <motion.p 
          className={`mt-2 ${textSize} font-medium ${textColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
} 