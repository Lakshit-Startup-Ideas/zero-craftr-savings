import { Wrench, Database, Brain, FileBarChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Wrench,
      title: "Install sensors & gateway",
      description: "1–3 business days",
      detail: "Deploy plug-and-play sensors on critical lines with our edge gateway for instant connectivity."
    },
    {
      icon: Database,
      title: "Data streams to cloud + edge AI", 
      description: "Real-time analytics",
      detail: "Continuous telemetry flows to our platform where machine learning models detect patterns and anomalies."
    },
    {
      icon: Brain,
      title: "Actions & savings: alerts, reports",
      description: "Weekly optimization playbooks", 
      detail: "Get actionable recommendations at machine and shift level, plus automated ESG reporting."
    }
  ];

  return (
    <section className="py-20 bg-gradient-industrial">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-dark mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From sensors to savings — explained in 60 seconds
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-8 h-px bg-border translate-x-4 z-10" />
              )}
              
              <div className="bg-background rounded-2xl p-8 shadow-card group-hover:shadow-lg transition-all duration-300 relative">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                <div className="mb-6">
                  <step.icon className="h-12 w-12 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-dark mb-2">
                  {step.title}
                </h3>
                
                <p className="text-accent font-medium text-sm mb-3">
                  {step.description}
                </p>
                
                <p className="text-muted-foreground">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;