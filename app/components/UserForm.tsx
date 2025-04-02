'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import LoadingSpinner from './LoadingSpinner';

type FormData = {
  name: string;
  city: string;
  age: number;
  salary: number;
  property: string;
  education: string;
  occupation: string;
};

type EstimationResult = {
  estimate: string;
  explanation: string;
  error?: string;
};

export default function UserForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<EstimationResult | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/estimate-dowry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to get estimation');
      }

      const estimationResult = await response.json();
      setResult(estimationResult);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to get estimation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <Toaster position="top-center" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 mb-8 border border-gray-100 dark:border-gray-800"
      >
        <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center">
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            Personal Details
          </span>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full ml-4"></div>
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white transition-colors shadow-sm"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* City Field */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                City
              </label>
              <input
                id="city"
                type="text"
                {...register('city', { required: 'City is required' })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white transition-colors shadow-sm"
                placeholder="Enter your city"
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  {errors.city.message}
                </p>
              )}
            </div>

            {/* Age Field */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Age
              </label>
              <input
                id="age"
                type="number"
                {...register('age', { 
                  required: 'Age is required',
                  min: { value: 18, message: 'Age must be at least 18' },
                  max: { value: 100, message: 'Age must be less than 100' },
                })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white transition-colors shadow-sm"
                placeholder="Enter your age"
              />
              {errors.age && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  {errors.age.message}
                </p>
              )}
            </div>

            {/* Education Field - NEW */}
            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Education
              </label>
              <select
                id="education"
                {...register('education')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white transition-colors shadow-sm"
                defaultValue=""
              >
                <option value="" disabled>Select your highest education</option>
                <option value="high_school">High School</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD or Doctorate</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Occupation Field - NEW */}
            <div>
              <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Occupation
              </label>
              <input
                id="occupation"
                type="text"
                {...register('occupation')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white transition-colors shadow-sm"
                placeholder="E.g. Software Engineer, Doctor, etc."
              />
            </div>

            {/* Salary Field */}
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Annual Salary (₹)
              </label>
              <input
                id="salary"
                type="number"
                {...register('salary', { 
                  required: 'Salary is required',
                  min: { value: 0, message: 'Salary cannot be negative' },
                })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white transition-colors shadow-sm"
                placeholder="Enter your annual salary"
              />
              {errors.salary && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  {errors.salary.message}
                </p>
              )}
            </div>

            {/* Property Field */}
            <div>
              <label htmlFor="property" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Property Value (₹) - Optional
              </label>
              <input
                id="property"
                type="text"
                {...register('property')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white transition-colors shadow-sm"
                placeholder="Enter property value (if any)"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-10">
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-50 transition-opacity"></span>
              {isLoading ? (
                <div className="flex items-center">
                  <LoadingSpinner size="sm" color="white" showText={false} />
                  <span className="ml-2">Calculating...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <span>Calculate Dowry Estimate</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Results Section */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-100 dark:border-gray-800"
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center">
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Dowry Estimation Results
            </span>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full ml-4"></div>
          </h2>
          
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-inner">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Estimated Amount
              </h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                {result.estimate}
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
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
                Explanation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {result.explanation}
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border-l-4 border-yellow-500 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0"
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
              <p>
                This estimate is provided for informational purposes only and should not be considered financial advice.
                Actual dowry amounts may vary based on cultural, social, and personal factors.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
} 