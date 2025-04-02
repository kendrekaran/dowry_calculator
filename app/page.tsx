"use client"

import { ChevronDown, Calculator, DollarSign, Heart, FileText, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function Home() {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-rose-100 to-rose-200">
      {/* Navigation - Improved with glassmorphism */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-rose-100 shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full shadow-md"></div>
                <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                  <div className="h-5 w-5 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full"></div>
                </div>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent">MarriageMath</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="font-medium text-gray-700 hover:text-rose-600 transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#features" className="font-medium text-gray-700 hover:text-rose-600 transition-colors relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#faq" className="font-medium text-gray-700 hover:text-rose-600 transition-colors relative group">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
              </a>
              <Link href="/calculator" className="font-medium text-gray-700 hover:text-rose-600 transition-colors relative group">
                Calculator
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          <Link href="/calculator" className="bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-rose-300/50 group">
            <Calculator size={18} className="group-hover:rotate-12 transition-transform" />
            <span>Calculate Now</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-6 py-16 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-32 w-32 bg-rose-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 h-64 w-64 bg-rose-400 rounded-full opacity-20 blur-3xl"></div>
        
        {/* Value Badge - Improved with animation */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-700 blur-sm rounded-full transform scale-105"></div>
            <div className="relative bg-gradient-to-r from-rose-500 to-rose-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-3 shadow-lg">
              <span className="font-medium text-lg">💰</span>
              <span className="font-semibold tracking-wide">Dowry & Alimony Calculator</span>
              <span className="text-yellow-300 text-lg">⚖️</span>
            </div>
          </div>
        </div>

        {/* Hero Section - Improved with better typography and layout */}
        <div className="text-center mb-20 relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Make Informed Financial</span>
            <span className="block bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent mt-2">Decisions About Marriage</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Our comprehensive calculator helps you understand the financial implications 
            of marriage and divorce in India, providing accurate insights based on 
            current legal guidelines and precedents.
          </p>
        </div>

        {/* CTA Buttons - Improved with animations and styling */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <Link href="/calculator" 
                className="bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white px-10 py-5 rounded-xl font-medium flex items-center gap-3 shadow-xl transition-all duration-300 hover:shadow-rose-300/50 hover:scale-105 transform group">
            <Calculator size={22} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-lg">Calculate Your Situation</span>
            <ArrowRight size={18} className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </Link>
          <a href="#features" 
             className="relative overflow-hidden border-2 border-rose-500 text-rose-600 hover:text-white px-10 py-5 rounded-xl font-medium transition-all duration-300 group">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>

        {/* Stats Overview - Improved with better cards and hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-rose-200 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-rose-400 to-rose-600 text-white p-4 rounded-2xl inline-block mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <DollarSign size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Average Dowry</h3>
              <p className="text-gray-600 mb-6">Ranges from ₹5-10 lakh in most cases, with metropolitan areas seeing higher figures</p>
              <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">₹5-10 lakh</div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-rose-200 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-rose-400 to-rose-600 text-white p-4 rounded-2xl inline-block mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Divorce Rate</h3>
              <p className="text-gray-600 mb-6">India has one of the lowest divorce rates globally, but metro cities show higher percentages</p>
              <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">~1.1%</div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-rose-200 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-rose-400 to-rose-600 text-white p-4 rounded-2xl inline-block mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <DollarSign size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Alimony Amount</h3>
              <p className="text-gray-600 mb-6">Typical alimony in India ranges between 20-30% of the spouse's income per court precedents</p>
              <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">20-30%</div>
            </div>
          </div>
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
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-800 rounded-3xl opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/800/400')] mix-blend-overlay rounded-3xl bg-center bg-cover opacity-20"></div>
          <div className="relative bg-gradient-to-br from-rose-500 to-rose-700 text-white p-16 rounded-3xl shadow-2xl text-center overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-64 w-64 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <h2 className="text-4xl font-bold mb-6">Ready to Calculate Your Situation?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Our comprehensive calculator provides accurate insights based on your specific circumstances and current legal guidelines.
            </p>
            <Link href="/calculator" className="inline-block bg-white text-rose-600 hover:bg-rose-50 px-10 py-5 rounded-xl font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-md group">
              <span className="flex items-center gap-3">
                Get Started Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </main>
      
    </div>
  )
}