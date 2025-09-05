import { BarChart3, Bell, Calculator, FileBarChart } from "lucide-react";

const QuickFeatures = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Live Dashboards",
      description: "Real-time energy monitoring with machine-level visibility"
    },
    {
      icon: Bell,
      title: "Anomaly Alerts", 
      description: "Instant notifications when energy patterns deviate"
    },
    {
      icon: Calculator,
      title: "ROI Estimator",
      description: "Track savings and calculate return on investment"
    },
    {
      icon: FileBarChart,
      title: "Auto ESG Reports",
      description: "One-click PDF & CSV exports for compliance"
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-dark mb-4">
            Everything you need to optimize energy usage
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-slate-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFeatures;