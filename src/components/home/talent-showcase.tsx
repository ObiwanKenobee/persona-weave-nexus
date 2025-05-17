
import { useState } from 'react';
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const featuredTalents = [
  {
    id: '1',
    name: 'Alex Morgan',
    role: 'Model & Influencer',
    avatarUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    verified: true,
    categories: ['Fashion', 'Lifestyle']
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Digital Artist',
    avatarUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    verified: true,
    categories: ['3D Art', 'NFT Creator']
  },
  {
    id: '3',
    name: 'Sophia Williams',
    role: 'Brand Ambassador',
    avatarUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    verified: true,
    categories: ['Cosmetics', 'Fitness']
  },
  {
    id: '4',
    name: 'James Wilson',
    role: 'Content Creator',
    avatarUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    verified: false,
    categories: ['Tech', 'Travel']
  }
];

const TalentShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredTalents = activeTab === 'all' 
    ? featuredTalents 
    : featuredTalents.filter(talent => 
        talent.categories.some(category => 
          category.toLowerCase().includes(activeTab.toLowerCase())
        )
      );
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Featured Talents</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover verified professionals ready to collaborate with your brand
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <GradientButton asChild variant="outline" className="bg-none">
              <Link to="/talents" className="flex items-center">
                View All Talents <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </GradientButton>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'all' 
                ? 'bg-persona-purple text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveTab('fashion')}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'fashion' 
                ? 'bg-persona-purple text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Fashion
          </button>
          <button 
            onClick={() => setActiveTab('art')}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'art' 
                ? 'bg-persona-purple text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Digital Art
          </button>
          <button 
            onClick={() => setActiveTab('fitness')}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'fitness' 
                ? 'bg-persona-purple text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Fitness
          </button>
          <button 
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === 'tech' 
                ? 'bg-persona-purple text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Tech
          </button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTalents.map((talent, index) => (
            <motion.div
              key={talent.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={`/talent/${talent.id}`} className="block group">
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-4">
                  <img 
                    src={talent.avatarUrl} 
                    alt={talent.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-persona-black/70 via-transparent to-transparent"></div>
                  
                  {talent.verified && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-persona-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-medium">{talent.name}</h3>
                    <p className="text-white/80 text-sm">{talent.role}</p>
                    
                    <div className="mt-2 flex flex-wrap gap-2">
                      {talent.categories.map((category, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalentShowcase;
