
import { useRef } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-persona-purple-light opacity-80"></div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
          <path
            fill="#E5DEFF"
            fillOpacity="0.4"
            d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,234.7C960,235,1056,213,1152,186.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div ref={containerRef} className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight">
            The Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-700">Talent Economy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl">
            PersonaLink connects talent with brands through smart contracts and augmented reality portfolios, revolutionizing the booking experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <GradientButton asChild size="lg">
              <Link to="/signup">
                Get Started Free
              </Link>
            </GradientButton>
            <GradientButton asChild size="lg" variant="outline" className="bg-none">
              <Link to="/ar-demo">
                Try AR Demo
              </Link>
            </GradientButton>
          </div>
          
          <div className="pt-4 text-sm text-gray-600 flex items-center gap-3">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="User" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="User" />
            </div>
            <span>Trusted by 10,000+ talents and brands</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`relative ${isMobile ? 'mt-10' : 'h-[500px]'}`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-persona-purple/10 rounded-full filter blur-3xl"></div>
          
          {/* 3D AR Portfolio mockup */}
          <div className="relative z-10">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="AR Portfolio" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-persona-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="bg-persona-purple text-white text-xs px-2 py-1 rounded-full inline-block mb-2 w-fit">AR Experience</span>
                <h3 className="text-white text-xl font-medium">Immersive Portfolio View</h3>
                <p className="text-white/80 text-sm">See your creations in augmented reality</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-10 -left-10 w-48 bg-white rounded-lg shadow-xl p-3 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Smart Contract Payment</p>
                  <p className="font-medium">$5,200 Earned</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-5 right-10 w-40 bg-white rounded-lg shadow-xl p-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Contract</p>
                  <p className="font-medium text-sm">Just Signed</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
