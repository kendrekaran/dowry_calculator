'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TabSelector from '../components/TabSelector';
import UserForm from '../components/UserForm';
import AlimonyForm from '../components/AlimonyForm';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'dowry' | 'alimony'>('dowry');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 relative overflow-hidden">

      
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Header activeTab={activeTab} />
        <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="py-8">
          {activeTab === 'dowry' ? <UserForm /> : <AlimonyForm />}
        </main>
      </div>
      
      <Footer activeTab={activeTab} />
    </div>
  );
}
