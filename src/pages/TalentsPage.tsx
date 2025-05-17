
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Search, Filter, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Sample talent data
const talentData = [
  {
    id: "1",
    name: "Alex Morgan",
    role: "Model & Influencer",
    avatarUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    verified: true,
    categories: ["Fashion", "Lifestyle"],
    followers: "1.2M",
    engagementRate: "3.8%",
    location: "Los Angeles, CA",
    popularWith: ["Luxury Brands", "Fashion Houses"]
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Digital Artist",
    avatarUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    verified: true,
    categories: ["3D Art", "NFT Creator"],
    followers: "845K",
    engagementRate: "4.2%",
    location: "New York, NY",
    popularWith: ["Tech Companies", "Gaming Studios"]
  },
  {
    id: "3",
    name: "Sophia Williams",
    role: "Brand Ambassador",
    avatarUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    verified: true,
    categories: ["Cosmetics", "Fitness"],
    followers: "950K",
    engagementRate: "5.1%",
    location: "Miami, FL",
    popularWith: ["Beauty Brands", "Wellness Companies"]
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Content Creator",
    avatarUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    verified: false,
    categories: ["Tech", "Travel"],
    followers: "680K",
    engagementRate: "3.5%",
    location: "Austin, TX",
    popularWith: ["Travel Companies", "Tech Startups"]
  },
  {
    id: "5",
    name: "Emma Davis",
    role: "Fashion Blogger",
    avatarUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    verified: true,
    categories: ["Fashion", "Beauty"],
    followers: "1.5M",
    engagementRate: "4.7%",
    location: "London, UK",
    popularWith: ["Fashion Retailers", "Luxury Brands"]
  },
  {
    id: "6",
    name: "Ryan Thompson",
    role: "Fitness Influencer",
    avatarUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    verified: true,
    categories: ["Fitness", "Nutrition"],
    followers: "890K",
    engagementRate: "6.2%",
    location: "Chicago, IL",
    popularWith: ["Sportswear Brands", "Supplement Companies"]
  }
];

const TalentsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = ["all", "fashion", "digital art", "fitness", "tech", "beauty", "travel"];
  
  const filteredTalents = talentData.filter(talent => {
    // Filter by search term
    if (searchTerm && !talent.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !talent.role.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filter by category
    if (activeCategory !== "all") {
      return talent.categories.some(category => 
        category.toLowerCase().includes(activeCategory.toLowerCase())
      );
    }
    
    return true;
  });

  useEffect(() => {
    // Update page title
    document.title = "Talents | PersonaLink";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-700">
                  Discover Verified Talent
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Find and collaborate with authenticated professionals for your next project
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col md:flex-row items-center gap-4 justify-center"
              >
                <div className="relative w-full md:w-auto md:flex-grow max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    type="text"
                    placeholder="Search by name or specialty"
                    className="pl-10 py-6 rounded-full border-gray-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="w-full md:w-auto flex items-center gap-2">
                  <Filter size={16} />
                  <span>Filter</span>
                  <ChevronDown size={16} />
                </Button>
                <GradientButton className="w-full md:w-auto">
                  Find Talent
                </GradientButton>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Categories */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`rounded-full px-6 ${
                    activeCategory === category 
                      ? "bg-persona-purple text-white" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Talent Grid */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTalents.map((talent, index) => (
                <motion.div
                  key={talent.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-[3/4]">
                      <img 
                        src={talent.avatarUrl}
                        alt={talent.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-persona-black/70 via-transparent to-transparent"></div>
                      
                      {talent.verified && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-persona-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      )}
                      
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white text-xl font-medium">{talent.name}</h3>
                        <p className="text-white/80 text-sm">{talent.role}</p>
                        
                        <div className="mt-3 flex flex-wrap gap-2">
                          {talent.categories.map((category, idx) => (
                            <Badge key={idx} variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-none">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Followers</p>
                          <p className="font-semibold">{talent.followers}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Engagement</p>
                          <p className="font-semibold">{talent.engagementRate}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{talent.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Popular with</p>
                        <div className="flex flex-wrap gap-2">
                          {talent.popularWith.map((item, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-persona-purple-light text-persona-purple">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="mt-5">
                        <Link to={`/talent/${talent.id}`}>
                          <GradientButton className="w-full">View Profile</GradientButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredTalents.length === 0 && (
              <div className="text-center py-20">
                <Users size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium mb-2">No talents found</h3>
                <p className="text-gray-500">
                  Try adjusting your search or filters to find talents that match your criteria
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-br from-violet-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Are you a talent looking to get discovered?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Create your AR portfolio, connect with brands, and get verified on PersonaLink
              </p>
              <GradientButton size="lg" asChild>
                <Link to="/signup">Join as Talent</Link>
              </GradientButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TalentsPage;
