"use client"

import { ChevronDown, Calculator, DollarSign, Heart, FileText, Globe, ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-rose-100 to-rose-200">
      {/* Navigation - Improved with glassmorphism */}
<header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-rose-100 shadow-sm">
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
    <div className="flex items-center gap-4 sm:gap-12 w-full sm:w-auto justify-between">
      <div className="flex items-center gap-3">
        <motion.div 
          className="relative h-8 w-8 sm:h-10 sm:w-10"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full shadow-md"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut" 
            }}
          ></motion.div>
          <motion.div 
            className="absolute inset-1 bg-white rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="h-4 w-4 sm:h-5 sm:w-5 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full"
              animate={{ 
                boxShadow: ['0px 0px 0px rgba(225, 29, 72, 0.3)', '0px 0px 8px rgba(225, 29, 72, 0.6)', '0px 0px 0px rgba(225, 29, 72, 0.3)']
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.span 
          className="font-bold text-base sm:text-lg bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >MarriageMath</motion.span>
      </div>
      <button 
        className="block sm:hidden text-gray-700 hover:text-rose-600 transition-colors z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    <nav className="hidden sm:flex items-center gap-4 md:gap-8">
      <motion.a 
        href="#" 
        className="font-medium text-gray-700 hover:text-rose-600 transition-colors relative group"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        Home
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
      </motion.a>
      <motion.a 
        href="#features" 
        className="font-medium text-gray-700 hover:text-rose-600 transition-colors relative group"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        Features
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
      </motion.a>
      <motion.a 
        href="#faq" 
        className="font-medium text-gray-700 hover:text-rose-600 transition-colors relative group"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        FAQ
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
      </motion.a>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Link href="/calculator" className="font-medium text-gray-700 hover:text-rose-600 transition-colors relative group">
          Calculator
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
        </Link>
      </motion.div>
    </nav>
    <motion.div
      className="hidden sm:block"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="/calculator" className="bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-rose-300/50 group">
        <Calculator size={16} className="group-hover:rotate-12 transition-transform" />
        <span>Calculate Now</span>
      </Link>
    </motion.div>
  </div>

  {/* Mobile Navigation Menu */}
  <AnimatePresence>
    {mobileMenuOpen && (
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-rose-50 via-rose-100 to-rose-200 z-40 flex flex-col pt-20 px-6 overflow-y-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-6 py-6">
          <a 
            href="#" 
            className="text-xl font-medium text-gray-800 border-b border-rose-200 pb-4 hover:text-rose-600 transition-colors flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="mr-3 bg-rose-100 h-10 w-10 rounded-full flex items-center justify-center">🏠</span>
            Home
          </a>
          <a 
            href="#features" 
            className="text-xl font-medium text-gray-800 border-b border-rose-200 pb-4 hover:text-rose-600 transition-colors flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="mr-3 bg-rose-100 h-10 w-10 rounded-full flex items-center justify-center">✨</span>
            Features
          </a>
          <a 
            href="#faq" 
            className="text-xl font-medium text-gray-800 border-b border-rose-200 pb-4 hover:text-rose-600 transition-colors flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="mr-3 bg-rose-100 h-10 w-10 rounded-full flex items-center justify-center">❓</span>
            FAQ
          </a>
          <Link 
            href="/calculator" 
            className="text-xl font-medium text-gray-800 border-b border-rose-200 pb-4 hover:text-rose-600 transition-colors flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="mr-3 bg-rose-100 h-10 w-10 rounded-full flex items-center justify-center">🧮</span>
            Calculator
          </Link>
        </div>
        
        <div className="mt-8">
          <Link 
            href="/calculator" 
            className="w-full bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white py-4 rounded-xl flex items-center justify-center gap-3 shadow-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Calculator size={20} />
            <span className="font-medium">Calculate Now</span>
          </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* Mobile Calculate Button - only show when menu is closed */}
  {!mobileMenuOpen && (
    <div className="sm:hidden w-full flex justify-center mt-2 mb-2">
      <Link 
        href="/calculator" 
        className="bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-rose-300/50 group w-full max-w-xs mx-4 justify-center"
      >
        <Calculator size={16} className="group-hover:rotate-12 transition-transform" />
        <span className="font-medium">Calculate Now</span>
      </Link>
    </div>
  )}
</header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-32 w-32 bg-rose-300 rounded-full opacity-20 blur-3xl hidden sm:block"></div>
        <div className="absolute bottom-40 right-10 h-64 w-64 bg-rose-400 rounded-full opacity-20 blur-3xl hidden sm:block"></div>
        
        {/* Value Badge - Improved with animation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2
            }}
          >
            <div className="relative bg-gradient-to-r from-rose-500 to-rose-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <motion.span 
                className="font-medium text-base sm:text-lg"
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.2, 1, 1.2, 1]
                }}
                transition={{ 
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 1.5
                }}
              >💰</motion.span>
              <span className="font-semibold tracking-wide">Dowry & Alimony Calculator</span>
              <motion.span 
                className="text-yellow-300 text-base sm:text-lg"
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.2, 1, 1.2, 1]
                }}
                transition={{ 
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 1.5,
                  delay: 0.5
                }}
              >⚖️</motion.span>
            </div>
          </motion.div>
        </div>

        {/* Hero Section - Improved with better typography and layout */}
        <div className="text-center mb-12 sm:mb-20 relative">
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-8 leading-tight px-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Make Informed Financial</span>
            <motion.span 
              className="block bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent mt-1 sm:mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >Decisions About Marriage</motion.span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Our comprehensive calculator helps you understand the financial implications 
            of marriage and divorce in India, providing accurate insights based on 
            current legal guidelines and precedents.
          </motion.p>
        </div>

        {/* CTA Buttons - Improved with animations and styling */}
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-32 px-2 sm:px-0">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 1 }}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="w-full sm:w-auto"
  >
    <Link href="/calculator"
      className="bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-medium flex items-center gap-2 sm:gap-3 shadow-xl transition-all duration-300 hover:shadow-rose-300/50 hover:scale-105 transform group w-full sm:w-auto justify-center sm:justify-start text-sm sm:text-base md:text-lg"
    >
      <Calculator size={18} className="group-hover:rotate-12 transition-transform duration-300" />
      <span>Calculate Your Situation</span>
      <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
    </Link>
  </motion.div>
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 1.1 }}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="w-full sm:w-auto"
  >
    <a href="#features"
      className="relative overflow-hidden border-2 border-rose-500 text-rose-600 hover:text-white px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-medium transition-all duration-300 group w-full flex justify-center text-sm sm:text-base md:text-lg"
    >
      <span className="relative z-10">Learn More</span>
    </a>
  </motion.div>
</div>

        {/* Stats Overview - Improved with better cards and hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <motion.div 
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-rose-200 group relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <motion.div 
                className="bg-gradient-to-br from-rose-400 to-rose-600 text-white p-4 rounded-2xl inline-block mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <DollarSign size={28} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Average Dowry</h3>
              <p className="text-gray-600 mb-6">Ranges from ₹5-10 lakh in most cases, with metropolitan areas seeing higher figures</p>
              <motion.div 
                className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ₹5-10 lakh
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-rose-200 group relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <motion.div 
                className="bg-gradient-to-br from-rose-400 to-rose-600 text-white p-4 rounded-2xl inline-block mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Heart size={28} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Divorce Rate</h3>
              <p className="text-gray-600 mb-6">India has one of the lowest divorce rates globally, but metro cities show higher percentages</p>
              <motion.div 
                className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ~1.1%
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-rose-200 group relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <motion.div 
                className="bg-gradient-to-br from-rose-400 to-rose-600 text-white p-4 rounded-2xl inline-block mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <DollarSign size={28} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Alimony Amount</h3>
              <p className="text-gray-600 mb-6">Typical alimony in India ranges between 20-30% of the spouse's income per court precedents</p>
              <motion.div 
                className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                20-30%
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Feature Section - Performance Optimized */}
        <div id="features" className="mb-32 scroll-mt-24">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-rose-100 text-rose-700 rounded-full font-medium mb-4">Features</div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">Our Calculator Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools to help you navigate the financial aspects of marriage and divorce in India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex gap-6 hover:shadow-xl transition-shadow duration-200 hover:border-rose-200">
              <div className="bg-gradient-to-br from-rose-400 to-rose-600 text-white h-16 w-16 flex items-center justify-center rounded-2xl shrink-0">
                <Calculator size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Dowry Estimator</h3>
                <p className="text-gray-600">Calculate potential dowry amounts based on socioeconomic factors, geographical location, and family background.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex gap-6 hover:shadow-xl transition-shadow duration-200 hover:border-rose-200">
              <div className="bg-gradient-to-br from-rose-400 to-rose-600 text-white h-16 w-16 flex items-center justify-center rounded-2xl shrink-0">
                <Globe size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Alimony Calculator</h3>
                <p className="text-gray-600">Estimate potential alimony payments based on income, marriage duration, custody arrangements, and legal precedents.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex gap-6 hover:shadow-xl transition-shadow duration-200 hover:border-rose-200">
              <div className="bg-gradient-to-br from-rose-400 to-rose-600 text-white h-16 w-16 flex items-center justify-center rounded-2xl shrink-0">
                <FileText size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Legal Resources</h3>
                <p className="text-gray-600">Access to comprehensive information about marriage, divorce, and financial rights under Indian law.</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex gap-6 hover:shadow-xl transition-shadow duration-200 hover:border-rose-200">
              <div className="bg-gradient-to-br from-rose-400 to-rose-600 text-white h-16 w-16 flex items-center justify-center rounded-2xl shrink-0">
                <ChevronDown size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Trend Analysis</h3>
                <p className="text-gray-600">View current trends in dowry practices and alimony settlements across different regions of India.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section - Performance Optimized */}
        <div id="faq" className="mb-32 scroll-mt-24">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-rose-100 text-rose-700 rounded-full font-medium mb-4">FAQ</div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about dowry and alimony in India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-rose-500 text-2xl font-light">Q.</span>
                Is dowry legal in India?
              </h3>
              <p className="text-gray-600 pl-8">
                <span className="text-rose-500 text-2xl font-light">A.</span> No, dowry is illegal in India under the Dowry Prohibition Act of 1961. However, it remains a common practice in many parts of the country despite legal prohibitions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-rose-500 text-2xl font-light">Q.</span>
                Who can claim alimony in India?
              </h3>
              <p className="text-gray-600 pl-8">
                <span className="text-rose-500 text-2xl font-light">A.</span> Both men and women can claim alimony in India, though it's more commonly awarded to women. The court considers factors like income, education, and marriage duration.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-rose-500 text-2xl font-light">Q.</span>
                How is alimony calculated?
              </h3>
              <p className="text-gray-600 pl-8">
                <span className="text-rose-500 text-2xl font-light">A.</span> Indian courts typically consider the spouse's income, standard of living during marriage, marriage duration, and financial needs when calculating alimony amounts.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="text-rose-500 text-2xl font-light">Q.</span>
                What is the difference between alimony and maintenance?
              </h3>
              <p className="text-gray-600 pl-8">
                <span className="text-rose-500 text-2xl font-light">A.</span> Alimony is typically a lump sum payment, while maintenance is ongoing financial support paid monthly. Both aim to provide financial security after separation.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action - Improved with better gradient and layout */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-800 rounded-3xl opacity-90"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          ></motion.div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/800/400')] mix-blend-overlay rounded-3xl bg-center bg-cover opacity-20"></div>
          <div className="relative bg-gradient-to-br from-rose-500 to-rose-700 text-white p-16 rounded-3xl shadow-2xl text-center overflow-hidden">
            <motion.div 
              className="absolute top-0 right-0 h-64 w-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-0 left-0 h-64 w-64 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2
              }}
            ></motion.div>
            
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >Ready to Calculate Your Situation?</motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Our comprehensive calculator provides accurate insights based on your specific circumstances and current legal guidelines.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/calculator" className="inline-block bg-white text-rose-600 hover:bg-rose-50 px-10 py-5 rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-md group">
                <motion.span 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Get Started Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>
      
    </div>
  )
}