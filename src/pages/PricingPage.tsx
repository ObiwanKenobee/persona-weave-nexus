
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CreditCard, XCircle, HelpCircle, User, Building, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const [selectedPlanType, setSelectedPlanType] = useState<"talent" | "brand" | "agency">("talent");
  
  useEffect(() => {
    // Update page title
    document.title = "Pricing | PersonaLink";
  }, []);
  
  const plans = {
    talent: [
      {
        name: "Free",
        price: { monthly: 0, annual: 0 },
        description: "Essentials for getting started",
        features: [
          { included: true, name: "Basic AR portfolio (1 scene)" },
          { included: true, name: "Public profile listing" },
          { included: true, name: "Up to 5 portfolio items" },
          { included: false, name: "Verified talent status" },
          { included: false, name: "Smart contract tools" },
          { included: false, name: "Analytics dashboard" }
        ],
        popular: false,
        buttonText: "Start for Free"
      },
      {
        name: "Pro",
        price: { monthly: 29, annual: 19 },
        description: "Everything you need to grow",
        features: [
          { included: true, name: "Advanced AR portfolio (5 scenes)" },
          { included: true, name: "Verified talent status" },
          { included: true, name: "Up to 25 portfolio items" },
          { included: true, name: "Basic analytics dashboard" },
          { included: true, name: "Smart contract tools" },
          { included: false, name: "Featured talent placement" }
        ],
        popular: true,
        buttonText: "Get Started"
      },
      {
        name: "Premium",
        price: { monthly: 79, annual: 59 },
        description: "For professional talent & creators",
        features: [
          { included: true, name: "Unlimited AR portfolio scenes" },
          { included: true, name: "Featured talent placement" },
          { included: true, name: "Unlimited portfolio items" },
          { included: true, name: "Advanced analytics dashboard" },
          { included: true, name: "Priority support" },
          { included: true, name: "Custom branding options" }
        ],
        popular: false,
        buttonText: "Go Premium"
      }
    ],
    brand: [
      {
        name: "Starter",
        price: { monthly: 49, annual: 39 },
        description: "Essential tools for small brands",
        features: [
          { included: true, name: "Access to talent directory" },
          { included: true, name: "Up to 10 talent bookings/month" },
          { included: true, name: "Basic contract templates" },
          { included: false, name: "AR preview functionality" },
          { included: false, name: "Campaign analytics" },
          { included: false, name: "Team collaboration" }
        ],
        popular: false,
        buttonText: "Start Now"
      },
      {
        name: "Business",
        price: { monthly: 149, annual: 119 },
        description: "Enhanced tools for growing brands",
        features: [
          { included: true, name: "Unlimited talent browsing" },
          { included: true, name: "Up to 50 talent bookings/month" },
          { included: true, name: "Advanced AR preview tools" },
          { included: true, name: "Campaign analytics dashboard" },
          { included: true, name: "Team collaboration (up to 5)" },
          { included: false, name: "Priority talent access" }
        ],
        popular: true,
        buttonText: "Choose Business"
      },
      {
        name: "Enterprise",
        price: { monthly: 399, annual: 299 },
        description: "Complete solution for large brands",
        features: [
          { included: true, name: "Unlimited talent bookings" },
          { included: true, name: "Priority talent access" },
          { included: true, name: "Custom contract templates" },
          { included: true, name: "Full AR preview & testing" },
          { included: true, name: "Unlimited team members" },
          { included: true, name: "Dedicated account manager" }
        ],
        popular: false,
        buttonText: "Contact Sales"
      }
    ],
    agency: [
      {
        name: "Essential",
        price: { monthly: 199, annual: 159 },
        description: "Tools for small agencies",
        features: [
          { included: true, name: "Manage up to 10 talents" },
          { included: true, name: "Basic booking management" },
          { included: true, name: "Standard contract templates" },
          { included: false, name: "White label portal" },
          { included: false, name: "Commission tracking" },
          { included: false, name: "Performance analytics" }
        ],
        popular: false,
        buttonText: "Get Started"
      },
      {
        name: "Professional",
        price: { monthly: 399, annual: 319 },
        description: "Full suite for growing agencies",
        features: [
          { included: true, name: "Manage up to 50 talents" },
          { included: true, name: "Advanced booking system" },
          { included: true, name: "Custom contract templates" },
          { included: true, name: "Basic white label portal" },
          { included: true, name: "Commission tracking" },
          { included: false, name: "API access" }
        ],
        popular: true,
        buttonText: "Choose Pro"
      },
      {
        name: "Elite",
        price: { monthly: 899, annual: 719 },
        description: "Enterprise-grade agency solution",
        features: [
          { included: true, name: "Unlimited talent management" },
          { included: true, name: "Full booking & scheduling system" },
          { included: true, name: "Fully customizable contracts" },
          { included: true, name: "Advanced white label portal" },
          { included: true, name: "Full analytics & reporting" },
          { included: true, name: "API access & custom integration" }
        ],
        popular: false,
        buttonText: "Contact Sales"
      }
    ]
  };
  
  const faqs = [
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features and will be charged the prorated difference. When downgrading, changes take effect at the end of your current billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial on all paid plans. No credit card is required to start your trial. You can explore all features risk-free before committing to a subscription."
    },
    {
      question: "How do the smart contracts work?",
      answer: "Our smart contracts are blockchain-based agreements that automatically execute when predefined conditions are met. They handle payment escrow, release schedules, and protect both parties with transparent terms and conditions."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, debit cards, PayPal, and several cryptocurrencies including Bitcoin, Ethereum, and USDC for subscription payments. Enterprise plans can also be paid via bank transfer."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time through your account settings. After cancellation, you'll continue to have access to your paid features until the end of your current billing period."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Absolutely. For larger organizations with specific needs, we offer custom enterprise solutions with dedicated support, custom integration work, and volume pricing. Contact our sales team to discuss your requirements."
    }
  ];
  
  const userTypeButtons = [
    { id: "talent", label: "For Talent", icon: <User className="h-5 w-5 mr-2" /> },
    { id: "brand", label: "For Brands", icon: <Building className="h-5 w-5 mr-2" /> },
    { id: "agency", label: "For Agencies", icon: <Users className="h-5 w-5 mr-2" /> }
  ];
  
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
                  Simple, Transparent Pricing
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-10">
                  Choose the perfect plan for your needs. No hidden fees or surprises.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="flex p-1 bg-gray-100 rounded-full mb-12 shadow-sm">
                  {userTypeButtons.map((button) => (
                    <Button 
                      key={button.id}
                      variant="ghost"
                      className={`rounded-full px-6 py-6 flex items-center ${
                        selectedPlanType === button.id 
                          ? "bg-white shadow-sm" 
                          : "hover:bg-gray-200/50"
                      }`}
                      onClick={() => setSelectedPlanType(button.id as "talent" | "brand" | "agency")}
                    >
                      {button.icon}
                      {button.label}
                    </Button>
                  ))}
                </div>
                
                <div className="flex items-center justify-center gap-3 mb-10">
                  <span className={`text-sm ${billingPeriod === "monthly" ? "font-medium text-persona-purple" : "text-gray-500"}`}>
                    Monthly
                  </span>
                  <Switch 
                    checked={billingPeriod === "annual"}
                    onCheckedChange={(checked) => setBillingPeriod(checked ? "annual" : "monthly")}
                    className="data-[state=checked]:bg-persona-purple"
                  />
                  <span className="flex items-center gap-2">
                    <span className={`text-sm ${billingPeriod === "annual" ? "font-medium text-persona-purple" : "text-gray-500"}`}>
                      Annual
                    </span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      Save 20%
                    </span>
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Pricing Cards */}
        <section className="py-10 mb-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans[selectedPlanType].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl shadow-lg ${plan.popular ? "border-2 border-persona-purple" : "border border-gray-200"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <span className="bg-persona-purple text-white text-sm font-medium px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-6 pb-8">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold">${plan.price[billingPeriod]}</span>
                      <span className="text-gray-500">
                        /mo{billingPeriod === "annual" && ", billed annually"}
                      </span>
                    </div>
                    
                    <GradientButton 
                      className={`w-full mb-6 ${plan.popular ? "" : "bg-none border"}`}
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link to="/signup">{plan.buttonText}</Link>
                    </GradientButton>
                    
                    <Separator className="mb-6" />
                    
                    <h4 className="text-sm font-medium mb-4">Plan includes:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          {feature.included ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? "" : "text-gray-400"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Feature Comparison */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Compare Features
              </h2>
              <p className="text-lg text-gray-600">
                Find the plan that's right for your needs
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 w-1/3">Feature</th>
                    {plans[selectedPlanType].map((plan, index) => (
                      <th key={index} className="py-4 px-6">
                        <span className={plan.popular ? "text-persona-purple font-medium" : ""}>
                          {plan.name}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { 
                      feature: "AR Portfolio Scenes", 
                      values: selectedPlanType === "talent" 
                        ? ["1 scene", "5 scenes", "Unlimited"] 
                        : ["Basic access", "Full access", "Custom access"]
                    },
                    { 
                      feature: "Smart Contracts", 
                      values: selectedPlanType === "talent" 
                        ? ["Not included", "Basic templates", "Custom contracts"] 
                        : ["Basic templates", "Advanced templates", "Custom templates"]
                    },
                    { 
                      feature: "Analytics Dashboard", 
                      values: selectedPlanType === "talent" 
                        ? ["Not included", "Basic analytics", "Advanced analytics"] 
                        : ["Basic reports", "Full dashboard", "Custom reporting"]
                    },
                    { 
                      feature: "Support Level", 
                      values: ["Email support", "Priority support", "Dedicated manager"]
                    },
                    { 
                      feature: selectedPlanType === "talent" 
                        ? "Portfolio Items" 
                        : selectedPlanType === "brand" 
                          ? "Talent Bookings" 
                          : "Talent Management", 
                      values: selectedPlanType === "talent" 
                        ? ["Up to 5", "Up to 25", "Unlimited"] 
                        : selectedPlanType === "brand"
                          ? ["Up to 10/month", "Up to 50/month", "Unlimited"]
                          : ["Up to 10 talents", "Up to 50 talents", "Unlimited"]
                    },
                    { 
                      feature: selectedPlanType === "talent" 
                        ? "Visibility Boost" 
                        : selectedPlanType === "brand" 
                          ? "Team Members" 
                          : "White Labeling", 
                      values: selectedPlanType === "talent" 
                        ? ["Not included", "Basic boost", "Featured placement"] 
                        : selectedPlanType === "brand"
                          ? ["1 user", "Up to 5 users", "Unlimited users"]
                          : ["Not included", "Basic branding", "Full customization"]
                    }
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-4 px-6 font-medium">{row.feature}</td>
                      {row.values.map((value, index) => (
                        <td key={index} className="py-4 px-6 text-center">
                          {value === "Not included" ? (
                            <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                          ) : (
                            value
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our pricing and plans
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-5">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem value={`faq-${index}`} className="border rounded-lg px-6 shadow-sm">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-violet-600 to-purple-700 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Ready to transform your {selectedPlanType === "talent" ? "career" : selectedPlanType === "brand" ? "campaigns" : "agency"}?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Start your 14-day free trial today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" asChild className="font-medium">
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <Link to="/demo">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Schedule Demo
                  </Link>
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

export default PricingPage;
