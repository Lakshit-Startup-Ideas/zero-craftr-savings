import { AlertTriangle, CheckCircle, Gauge, BarChart3, FileOutput, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProblemSolution = () => {
  const problems = [
    "Legacy meters give monthly snapshots, not minute-level insight.",
    "Multi-line operations leak energy during idle cycles.",
    "Manual reporting for ESG is slow and error-prone."
  ];

  const solutions = [
    {
      icon: Gauge,
      title: "Real-time dashboards & automatic anomaly detection."
    },
    {
      icon: Settings,
      title: "Actionable recommendations (machine-level & shift-level)."
    },
    {
      icon: FileOutput,
      title: "One-click monthly ESG reports and exportable PDFs."
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problem */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-dark">
                Manufacturing plants waste energy because they lack continuous, automated visibility.
              </h3>
            </div>
            
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-destructive flex-shrink-0" />
                  <p className="text-muted-foreground">{problem}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-dark">
                ZeroCraftr — continuous IoT telemetry + ML insights for operational and sustainability wins.
              </h3>
            </div>
            
            <ul className="space-y-6">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10">
                    <solution.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-slate-dark font-medium pt-2">{solution.title}</p>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;