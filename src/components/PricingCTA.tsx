import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const PricingCTA = () => {
  const plans = [
    {
      name: "Starter Pilot",
      subtitle: "30-day PoV",
      description: "Up to 2 lines, baseline report, ROI estimate",
      cta: "Request Pilot",
      highlight: false
    },
    {
      name: "Pro",
      subtitle: "Multi-line",
      description: "Monthly subscription, multiple lines, 24/7 alerts",
      cta: "Contact Sales", 
      highlight: true
    },
    {
      name: "Enterprise",
      subtitle: "Multi-site",
      description: "Custom SLAs, white-glove onboarding",
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-slate-dark text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Simple pricing for measurable ROI
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Start with a 30-day PoV. Choose how you scale — per-line or per-site.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 transition-all ${
                plan.highlight 
                  ? 'bg-primary text-slate-dark ring-2 ring-primary transform scale-105' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className={`text-sm ${plan.highlight ? 'text-slate-dark/70' : 'text-white/70'}`}>
                  {plan.subtitle}
                </div>
              </div>
              
              <p className={`mb-8 ${plan.highlight ? 'text-slate-dark/80' : 'text-white/80'}`}>
                {plan.description}
              </p>
              
              <Button 
                className={`w-full ${
                  plan.highlight 
                    ? 'bg-slate-dark text-white hover:bg-slate-dark/90' 
                    : 'bg-primary text-slate-dark hover:bg-primary/90'
                }`}
                size="lg"
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">
            All plans include reporting, access to dashboards, and API exports.
          </p>
          <p className="text-sm text-white/50">
            Annual prepay discount available • Enterprise MSA & DPA available
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;