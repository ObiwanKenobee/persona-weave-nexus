
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md py-4 shadow-sm">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-700">
            PersonaLink
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/talents" className="text-gray-800 hover:text-persona-purple transition-colors font-medium">
            Talents
          </Link>
          <Link to="/ar-portfolio" className="text-gray-800 hover:text-persona-purple transition-colors font-medium">
            AR Portfolio
          </Link>
          <div className="relative group">
            <button className="flex items-center text-gray-800 hover:text-persona-purple transition-colors font-medium">
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
              <div className="py-1">
                <Link to="/for-brands" className="block px-4 py-2 text-sm text-gray-700 hover:bg-persona-purple-light">
                  For Brands
                </Link>
                <Link to="/for-talent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-persona-purple-light">
                  For Talent
                </Link>
                <Link to="/for-agencies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-persona-purple-light">
                  For Agencies
                </Link>
              </div>
            </div>
          </div>
          <Link to="/pricing" className="text-gray-800 hover:text-persona-purple transition-colors font-medium">
            Pricing
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <GradientButton asChild>
            <Link to="/signup">Join Now</Link>
          </GradientButton>
        </div>
        
        <button 
          className="block md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/talents" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-persona-purple-light rounded-md">
              Talents
            </Link>
            <Link to="/ar-portfolio" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-persona-purple-light rounded-md">
              AR Portfolio
            </Link>
            <Link to="/for-brands" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-persona-purple-light rounded-md">
              For Brands
            </Link>
            <Link to="/for-talent" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-persona-purple-light rounded-md">
              For Talent
            </Link>
            <Link to="/for-agencies" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-persona-purple-light rounded-md">
              For Agencies
            </Link>
            <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-persona-purple-light rounded-md">
              Pricing
            </Link>
            <div className="flex flex-col space-y-2 mt-4 px-3">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login">Sign In</Link>
              </Button>
              <GradientButton asChild className="w-full">
                <Link to="/signup">Join Now</Link>
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
