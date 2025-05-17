
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const SmartContractSection = () => {
  return (
    <section className="py-20 relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-persona-purple/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-persona-purple/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Smart Contract Ecosystem</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure, transparent, and automatic talent agreements with blockchain-powered contracts
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif">Revolutionizing Talent Contracts</h3>
            <p className="text-gray-600">
              Our smart contract system transforms the talent booking process with automated payments, 
              transparent terms, and immutable records on the Ethereum network.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-100 p-6 hover-card hover:border-persona-purple/20">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-persona-purple/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-persona-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Secure Escrow Payments</h4>
                    <p className="text-gray-600 text-sm">
                      Funds are held in escrow until contract conditions are met and verified, protecting both parties.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-100 p-6 hover-card hover:border-persona-purple/20">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-persona-purple/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-persona-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Template Contracts</h4>
                    <p className="text-gray-600 text-sm">
                      Choose from pre-built contract templates for appearances, collaborations, and licensing agreements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-100 p-6 hover-card hover:border-persona-purple/20">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-persona-purple/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-persona-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Milestone Automation</h4>
                    <p className="text-gray-600 text-sm">
                      Set performance milestones with automatic payment releases when objectives are achieved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <GradientButton asChild className="flex items-center">
              <Link to="/smart-contracts">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </GradientButton>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#1a1f2c] to-[#2d3748] p-6 rounded-xl shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-persona-purple/20 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm">Smart Contract</div>
                </div>
                
                <div className="space-y-4 text-gray-200 text-sm font-mono">
                  <div className="text-purple-400">
                    // PersonaLink Brand Collaboration Contract
                  </div>
                  <div>
                    <span className="text-blue-400">pragma </span>
                    <span className="text-purple-400">solidity</span>
                    <span> ^0.8.0;</span>
                  </div>
                  
                  <div>
                    <span className="text-blue-400">contract </span>
                    <span className="text-green-400">BrandCollaboration</span>
                    <span> {'{'}</span>
                  </div>
                  
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-blue-400">address </span>
                      <span>public</span>
                      <span className="text-blue-400"> immutable </span>
                      <span>talent;</span>
                    </div>
                    <div>
                      <span className="text-blue-400">address </span>
                      <span>public</span>
                      <span className="text-blue-400"> immutable </span>
                      <span>brand;</span>
                    </div>
                    <div>
                      <span className="text-blue-400">uint256 </span>
                      <span>public</span>
                      <span> payment;</span>
                    </div>
                    <div>
                      <span className="text-blue-400">uint256 </span>
                      <span>public</span>
                      <span> deadline;</span>
                    </div>
                    <div>
                      <span className="text-blue-400">bool </span>
                      <span>public</span>
                      <span> completed;</span>
                    </div>
                    <div>
                      <span className="text-blue-400">string </span>
                      <span>public</span>
                      <span> deliverables;</span>
                    </div>
                    
                    <div className="pt-2">
                      <span className="text-blue-400">modifier </span>
                      <span className="text-yellow-400">onlyBrand</span>
                      <span>() {'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span>require(msg.sender == brand, </span>
                      <span className="text-green-300">"Only brand can call"</span>
                      <span>);</span>
                    </div>
                    <div className="pl-4">
                      <span>_;</span>
                    </div>
                    <div>
                      <span>{'}'}</span>
                    </div>
                    
                    <div className="pt-2">
                      <span className="text-blue-400">constructor</span>
                      <span>(</span>
                      <span className="text-blue-400">address </span>
                      <span>_talent, </span>
                      <span className="text-blue-400">string memory </span>
                      <span>_deliverables, </span>
                      <span className="text-blue-400">uint256 </span>
                      <span>_deadline) </span>
                      <span>payable {'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span>talent = _talent;</span>
                    </div>
                    <div className="pl-4">
                      <span>brand = msg.sender;</span>
                    </div>
                    <div className="pl-4">
                      <span>payment = msg.value;</span>
                    </div>
                    <div className="pl-4">
                      <span>deliverables = _deliverables;</span>
                    </div>
                    <div className="pl-4">
                      <span>deadline = _deadline;</span>
                    </div>
                    <div>
                      <span>{'}'}</span>
                    </div>
                    
                    <div className="pt-2">
                      <span className="text-blue-400">function </span>
                      <span className="text-yellow-400">completeContract</span>
                      <span className="text-purple-300">() </span>
                      <span className="text-blue-400">external </span>
                      <span className="text-yellow-400">onlyBrand </span>
                      <span>{'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span>completed = true;</span>
                    </div>
                    <div className="pl-4">
                      <span>payable(talent).transfer(payment);</span>
                    </div>
                    <div>
                      <span>{'}'}</span>
                    </div>
                  </div>
                  
                  <div>
                    <span>{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 transform rotate-3">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium">Contract Verified</h5>
                    <p className="text-xs text-gray-500">0x71C...8F3e</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartContractSection;
