import { DollarSign, FileCheck, Zap } from "lucide-react";

const WhyItMatters = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save money",
      description: "Lower energy bills & reduce variable cost per unit.",
      color: "text-primary"
    },
    {
      icon: FileCheck,
      title: "Comply faster", 
      description: "Auto ESG & emissions reports for compliance and buyers.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Act faster",
      description: "Real-time alerts & suggestions to reduce waste.",
      color: "text-steel-blue"
    }
  ];

  return (
    <section className="py-16 bg-gradient-industrial">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 flex justify-center">
                <div className={`p-4 rounded-xl bg-background shadow-card group-hover:shadow-lg transition-shadow`}>
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-dark mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;