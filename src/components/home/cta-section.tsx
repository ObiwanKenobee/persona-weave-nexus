
import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-persona-purple-light to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-persona-purple/10 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
              Ready to Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-700">Talent Journey</span>?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join PersonaLink today to unlock AR portfolios, smart contracts, and a global community of brands and talent.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <GradientButton size="lg" asChild>
                <Link to="/signup">
                  Get Started Free
                </Link>
              </GradientButton>
              <Button size="lg" variant="outline" asChild>
                <Link to="/demo" className="flex items-center">
                  Request Demo <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 hover-card"
          >
            <div className="w-14 h-14 bg-persona-purple-light rounded-xl flex items-center justify-center text-persona-purple mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">For Talent</h3>
            <p className="text-gray-600 mb-4">
              Create immersive AR portfolios, sign secure contracts, and connect with global brands.
            </p>
            <Link to="/for-talent" className="text-persona-purple font-medium flex items-center">
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 hover-card"
          >
            <div className="w-14 h-14 bg-persona-purple-light rounded-xl flex items-center justify-center text-persona-purple mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">For Brands</h3>
            <p className="text-gray-600 mb-4">
              Discover verified talent, preview in AR, and streamline collaboration with smart contracts.
            </p>
            <Link to="/for-brands" className="text-persona-purple font-medium flex items-center">
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-6 hover-card"
          >
            <div className="w-14 h-14 bg-persona-purple-light rounded-xl flex items-center justify-center text-persona-purple mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">For Agencies</h3>
            <p className="text-gray-600 mb-4">
              Manage multiple talents, track performance, and simplify booking administration.
            </p>
            <Link to="/for-agencies" className="text-persona-purple font-medium flex items-center">
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
