
import { useRef } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const ARPreviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  
  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-persona-purple-light/20 to-white -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">AR Portfolio Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bring talent portfolios to life with augmented reality experiences that wow clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl font-serif">Immersive Talent Showcasing</h3>
            <p className="text-gray-600">
              PersonaLink's WebXR technology lets talent display their work in interactive 3D environments, 
              creating memorable experiences that stand out to potential clients.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-persona-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-persona-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Cross-platform compatibility</h4>
                  <p className="text-sm text-gray-600">Works on smartphones, tablets and AR headsets</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-persona-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-persona-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Easy creation tools</h4>
                  <p className="text-sm text-gray-600">No programming needed - upload your content and generate AR</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-persona-purple/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-persona-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Analytics integration</h4>
                  <p className="text-sm text-gray-600">Track views, engagement and conversion for each AR experience</p>
                </div>
              </div>
            </div>
            
            <GradientButton asChild>
              <Link to="/ar-portfolio">
                Explore AR Portfolio
              </Link>
            </GradientButton>
          </div>
          
          <motion.div style={{ y, opacity }} className="relative order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-persona-purple to-violet-600 rounded-xl blur opacity-30"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg p-2">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                  alt="AR Portfolio Demo" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/80 backdrop-blur-sm text-persona-black text-xs px-3 py-1 rounded-full">
                    AR Preview
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-persona-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 bg-white rounded-lg shadow-xl p-3 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium">Emma Wilson</p>
                  <p className="text-xs text-gray-500">Using AR to showcase her portfolio</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ARPreviewSection;
