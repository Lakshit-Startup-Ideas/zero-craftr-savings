import { Target, Zap, Microscope, Banknote } from "lucide-react";

const USP = () => {
  const usps = [
    {
      icon: Target,
      title: "Outcome-first pilots",
      description: "30-day PoV with guaranteed measurement."
    },
    {
      icon: Zap,
      title: "Minimal setup",
      description: "No PLC rework, plug-and-play sensors."
    },
    {
      icon: Microscope,
      title: "Machine-level resolution",
      description: "Insights at the asset level, not just site averages."
    },
    {
      icon: Banknote,
      title: "Built for SMBs",
      description: "Affordable, modular pricing — ROI in weeks, not months."
    }
  ];

  return (
    <section className="py-20 bg-mint-soft">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-dark mb-4">
            Why ZeroCraftr is best
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow group">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <usp.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <h3 className="font-bold text-slate-dark mb-2">
                {usp.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;