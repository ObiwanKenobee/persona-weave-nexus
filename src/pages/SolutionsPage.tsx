
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Sparkles, ArrowRight, Check, Lightbulb, Users2, Eye, FileCheck, Upload, PenTool, Share } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SolutionsPage = () => {
  const [activeTab, setActiveTab] = useState("brands");
  
  useEffect(() => {
    // Update page title
    document.title = "Solutions | PersonaLink";
  }, []);
  
  const solutions = {
    brands: {
      title: "For Brands",
      subtitle: "Find and connect with authentic talent for your campaigns",
      features: [
        "Search verified talent with proven engagement metrics",
        "Preview AR portfolios to see talent in your brand context",
        "Smart contract booking with transparent terms",
        "Direct communication channels with talents",
        "Performance analytics and campaign reporting",
        "Simplified payment and escrow handling"
      ],
      caseStudies: [
        {
          name: "LuxeStyle Fashion",
          description: "Increased campaign engagement by 35% by finding perfect-fit influencers through AR portfolio preview",
          results: "35% higher engagement"
        },
        {
          name: "TechVision Inc",
          description: "Cut talent acquisition time by 50% while improving creative output quality for product launches",
          results: "50% faster talent acquisition"
        },
        {
          name: "GreenEco Products",
          description: "Discovered niche sustainability advocates that increased product conversions by 28%",
          results: "28% higher conversion rate"
        }
      ]
    },
    talent: {
      title: "For Talent",
      subtitle: "Showcase your work in AR and get discovered by top brands",
      features: [
        "Create immersive AR portfolios that stand out",
        "Get verified status to improve booking opportunities",
        "Protect your work with smart contract agreements",
        "Track views and engagement with your portfolio",
        "Receive secure payments through escrow system",
        "Build your reputation with verified reviews"
      ],
      caseStudies: [
        {
          name: "Jordan K., Model",
          description: "Doubled booking rate after creating an interactive AR portfolio showcasing versatile looks",
          results: "100% increase in bookings"
        },
        {
          name: "Maria T., Digital Artist",
          description: "Started receiving international project requests after showcasing 3D work in AR",
          results: "Global client reach"
        },
        {
          name: "Alex W., Fitness Coach",
          description: "Increased consultation fees by 75% by demonstrating technique through AR previews",
          results: "75% higher rates"
        }
      ]
    },
    agencies: {
      title: "For Agencies",
      subtitle: "Manage your talent roster and streamline client bookings",
      features: [
        "Centralized talent management dashboard",
        "Bulk AR portfolio creation tools",
        "Client booking and contract management",
        "Revenue and performance analytics",
        "White-label agency portal options",
        "Commission tracking and automated payments"
      ],
      caseStudies: [
        {
          name: "Elite Model Management",
          description: "Reduced administrative overhead by 40% while increasing talent visibility for clients",
          results: "40% reduced overhead"
        },
        {
          name: "Creative Minds Agency",
          description: "Expanded client roster by 65% after implementing AR portfolios for all represented talent",
          results: "65% client growth"
        },
        {
          name: "Talent First Group",
          description: "Streamlined contract process reduced booking time from 2 weeks to 3 days",
          results: "80% faster booking process"
        }
      ]
    }
  };
  
  const icons = {
    brands: <Briefcase className="h-6 w-6" />,
    talent: <Sparkles className="h-6 w-6" />,
    agencies: <Users2 className="h-6 w-6" />
  };
  
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-700">
                  Solutions for Everyone
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Discover how PersonaLink revolutionizes talent discovery, booking, and collaboration for the digital age
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Tabs defaultValue="brands" className="w-full" onValueChange={setActiveTab} value={activeTab}>
                  <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-gray-100 rounded-full">
                    <TabsTrigger 
                      value="brands" 
                      className={`rounded-full py-3 text-base data-[state=active]:text-white data-[state=active]:shadow-none ${
                        activeTab === "brands" ? "bg-persona-purple data-[state=active]:bg-persona-purple" : ""
                      }`}
                    >
                      For Brands
                    </TabsTrigger>
                    <TabsTrigger 
                      value="talent"
                      className={`rounded-full py-3 text-base data-[state=active]:text-white data-[state=active]:shadow-none ${
                        activeTab === "talent" ? "bg-persona-purple data-[state=active]:bg-persona-purple" : ""
                      }`}
                    >
                      For Talent
                    </TabsTrigger>
                    <TabsTrigger 
                      value="agencies"
                      className={`rounded-full py-3 text-base data-[state=active]:text-white data-[state=active]:shadow-none ${
                        activeTab === "agencies" ? "bg-persona-purple data-[state=active]:bg-persona-purple" : ""
                      }`}
                    >
                      For Agencies
                    </TabsTrigger>
                  </TabsList>
                  
                  {Object.keys(solutions).map((key) => (
                    <TabsContent key={key} value={key} className="mt-6">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex items-center justify-center mb-6">
                          <div className="bg-persona-purple-light p-3 rounded-full">
                            {icons[key]}
                          </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-medium text-center mb-2">
                          {solutions[key].title}
                        </h2>
                        <p className="text-gray-600 text-center mb-8 max-w-xl mx-auto">
                          {solutions[key].subtitle}
                        </p>
                      </motion.div>
                    </TabsContent>
                  ))}
                </Tabs>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                  Powerful Solutions for {solutions[activeTab].title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Leverage our platform to transform how you discover, connect, and collaborate in the digital talent ecosystem
                </p>
                
                <ul className="space-y-4">
                  {solutions[activeTab].features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="mr-3 bg-persona-purple-light p-1 rounded-full mt-1">
                        <Check className="h-4 w-4 text-persona-purple" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-10">
                  <GradientButton asChild size="lg">
                    <Link to={activeTab === "brands" ? "/for-brands" : activeTab === "talent" ? "/for-talent" : "/for-agencies"}>
                      Learn More About {solutions[activeTab].title}
                    </Link>
                  </GradientButton>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-1 rounded-2xl shadow-xl">
                  <img 
                    src={activeTab === "brands" 
                      ? "https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                      : activeTab === "talent"
                        ? "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
                        : "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                    }
                    alt={`${solutions[activeTab].title} Solution`}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="bg-gradient-to-br from-purple-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                See how others have transformed their approach with PersonaLink
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {solutions[activeTab].caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{study.name}</CardTitle>
                      <div className="inline-block bg-persona-purple-light text-persona-purple font-medium text-sm py-1 px-3 rounded-full mt-2">
                        {study.results}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{study.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="group">
                View More Case Studies
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600">
                A simple yet powerful process designed for {solutions[activeTab].title.toLowerCase()}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-16 relative">
                {/* Connecting line */}
                <div className="hidden md:block absolute top-16 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-violet-500 to-purple-600"></div>
                
                {[
                  {
                    icon: <Users className="h-10 w-10 text-white" />,
                    title: activeTab === "brands" ? "Find Perfect Talent" : activeTab === "talent" ? "Create AR Portfolio" : "Manage Talent Roster",
                    description: activeTab === "brands" 
                      ? "Search and filter through our verified talent database with precise criteria." 
                      : activeTab === "talent" 
                        ? "Upload your work and create immersive AR experiences to showcase your skills."
                        : "Add and organize your talent with our streamlined management tools."
                  },
                  {
                    icon: <Eye className="h-10 w-10 text-white" />,
                    title: activeTab === "brands" ? "Preview in AR" : activeTab === "talent" ? "Get Discovered" : "Streamline Bookings",
                    description: activeTab === "brands" 
                      ? "Experience talent work in augmented reality before making booking decisions." 
                      : activeTab === "talent" 
                        ? "Get featured in search results and recommendations for relevant opportunities."
                        : "Manage client requests and talent availability in one centralized system."
                  },
                  {
                    icon: <FileCheck className="h-10 w-10 text-white" />,
                    title: activeTab === "brands" ? "Smart Contracts" : activeTab === "talent" ? "Secure Bookings" : "Track Performance",
                    description: activeTab === "brands" 
                      ? "Finalize arrangements with transparent, secure blockchain contracts." 
                      : activeTab === "talent" 
                        ? "Accept jobs with protected terms and secure payment processing."
                        : "Monitor talent performance, client satisfaction, and revenue metrics."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="relative z-10">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg mb-6">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-violet-600 to-purple-700 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-8 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-3">
                  Ready to get started?
                </h2>
                <p className="text-white/90 text-lg max-w-xl">
                  Join thousands of {activeTab === "brands" ? "brands" : activeTab === "talent" ? "talents" : "agencies"} already transforming their approach with PersonaLink
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/signup">Sign Up Free</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <Link to="/demo">Request Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
