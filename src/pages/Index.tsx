import Header from "@/components/Header";
import TrustStrip from "@/components/TrustStrip";
import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import QuickFeatures from "@/components/QuickFeatures";
import USP from "@/components/USP";
import ROIWidget from "@/components/ROIWidget";
import Proof from "@/components/Proof";
import PricingCTA from "@/components/PricingCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StructuredData type="organization" />
      <StructuredData type="product" />
      <StructuredData type="faq" />
      <Header />
      <TrustStrip />
      <main>
        <Hero />
        <WhyItMatters />
        <ProblemSolution />
        <HowItWorks />
        <QuickFeatures />
        <USP />
        <ROIWidget />
        <Proof />
        <PricingCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;