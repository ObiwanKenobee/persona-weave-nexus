
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Image, Smartphone, Layout, Eye, Download, Share2, Users, Upload, PenTool, Share, FileCheck } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: <Image className="h-10 w-10 text-persona-purple" />,
    title: "3D Model Import",
    description: "Upload 3D models in common formats like GLB, GLTF or OBJ for AR visualization"
  },
  {
    icon: <Smartphone className="h-10 w-10 text-persona-purple" />,
    title: "Mobile AR Previews",
    description: "Generate QR codes that allow clients to view your portfolio in AR on any device"
  },
  {
    icon: <Layout className="h-10 w-10 text-persona-purple" />,
    title: "Interactive Scenes",
    description: "Create immersive environments that showcase your talents in virtual spaces"
  },
  {
    icon: <Eye className="h-10 w-10 text-persona-purple" />,
    title: "Live Analytics",
    description: "Track views, engagement, and interaction with your AR portfolio pieces"
  },
  {
    icon: <Download className="h-10 w-10 text-persona-purple" />,
    title: "Client Asset Downloads",
    description: "Allow brands to download approved previews and materials for planning"
  },
  {
    icon: <Share2 className="h-10 w-10 text-persona-purple" />,
    title: "Social Sharing",
    description: "Share your AR portfolio directly to social media with embedded 3D previews"
  }
];

const testimonials = [
  {
    quote: "My AR portfolio helped me land three major fashion campaigns. Brands can see my work in context before booking.",
    author: "Mia Chen",
    role: "Fashion Model",
    avatarUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    quote: "The interactive 3D scenes allow clients to visualize my design work in their own spaces. Game changer for conversions.",
    author: "Jake Reynolds",
    role: "3D Artist",
    avatarUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    quote: "I've booked twice as many speaking engagements since creating my AR portfolio showing my stage presence.",
    author: "Sophia Williams",
    role: "Public Speaker",
    avatarUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

const ARPortfolioPage = () => {
  useEffect(() => {
    // Update page title
    document.title = "AR Portfolio | PersonaLink";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-700">
                  Bring Your Portfolio to Life with AR
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Create immersive augmented reality experiences that showcase your talents in ways traditional portfolios never could. Let brands experience your work in their own environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <GradientButton size="lg" asChild>
                    <Link to="/signup">Create AR Portfolio</Link>
                  </GradientButton>
                  <Button variant="outline" size="lg">
                    See Examples
                  </Button>
                </div>
                
                <div className="flex items-center mt-10">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/photo-${1580000000000 + i * 10000}`} 
                          alt="User avatar" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="ml-4 text-sm text-gray-600">
                    <span className="font-semibold">500+</span> talents upgraded to AR portfolios this month
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl shadow-xl p-1">
                    <div className="bg-white rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                        alt="AR Portfolio Preview" 
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full">
                          <svg className="w-16 h-16 text-persona-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 flex items-center">
                    <div className="bg-persona-purple-light p-2 rounded-lg mr-3">
                      <Smartphone className="h-6 w-6 text-persona-purple" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Scan to view in AR</p>
                      <p className="text-xs text-gray-500">Works on any smartphone</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Powerful AR Portfolio Tools
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to create immersive augmented reality experiences
                that showcase your talents in revolutionary ways
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="bg-persona-purple-light p-3 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="bg-gradient-to-br from-purple-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600">
                Create and share your AR portfolio in three simple steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  number: "01",
                  title: "Upload Your Work",
                  description: "Import your content, 3D models, and media assets through our simple drag-and-drop interface.",
                  icon: <Upload className="h-8 w-8 text-persona-purple" />
                },
                {
                  number: "02",
                  title: "Design AR Experience",
                  description: "Arrange, customize and create interactive AR scenes with our intuitive editor.",
                  icon: <PenTool className="h-8 w-8 text-persona-purple" />
                },
                {
                  number: "03",
                  title: "Share & Get Booked",
                  description: "Generate a link or QR code that lets clients experience your work in AR anywhere.",
                  icon: <Share className="h-8 w-8 text-persona-purple" />
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
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-600">
                      {step.number}
                    </span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="bg-persona-purple-light p-3 rounded-lg w-fit mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                What Talents Say
              </h2>
              <p className="text-lg text-gray-600">
                Hear from professionals who have transformed their careers with AR portfolios
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 shadow-md relative"
                >
                  <div className="absolute -top-6 left-8 bg-white rounded-full p-1 shadow-md">
                    <img 
                      src={testimonial.avatarUrl}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="pt-6">
                    <p className="italic text-gray-600 mb-6">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-violet-600 to-purple-700 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Ready to showcase your talent in AR?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who are getting discovered through immersive AR portfolios
              </p>
              <Button size="lg" variant="secondary" asChild className="font-medium">
                <Link to="/signup">Create Your AR Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ARPortfolioPage;
