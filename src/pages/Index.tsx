
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import ARPreviewSection from "@/components/home/ar-preview-section";
import TalentShowcase from "@/components/home/talent-showcase";
import SmartContractSection from "@/components/home/smart-contract-section";
import CTASection from "@/components/home/cta-section";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "PersonaLink | AR Talent Platform";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ARPreviewSection />
        <TalentShowcase />
        <SmartContractSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
