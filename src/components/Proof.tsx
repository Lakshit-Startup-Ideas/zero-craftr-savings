import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const Proof = () => {
  return (
    <section className="py-20 bg-gradient-industrial">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-dark mb-4">
              Real plants. Real savings.
            </h2>
          </div>

          {/* Case Study Card */}
          <div className="bg-background rounded-2xl shadow-card p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 text-primary font-semibold mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Case Study</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-dark mb-4">
                  Injection Molding Plant: 12% Energy Reduction in 45 Days
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  A 200-employee injection molding manufacturer deployed ZeroCraftr sensors 
                  across 3 production lines. Within 45 days, they identified idle cycle waste 
                  and optimized shift schedules, achieving measurable savings.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">12%</div>
                    <div className="text-xs text-muted-foreground">Energy Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">45</div>
                    <div className="text-xs text-muted-foreground">Days to Results</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-steel-blue">4.2</div>
                    <div className="text-xs text-muted-foreground">Month ROI</div>
                  </div>
                </div>

                <Button className="shadow-cta">
                  Get a Similar PoV
                </Button>
              </div>

              <div className="bg-mint-soft rounded-xl p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-slate-dark font-medium mb-4">
                  "ZeroCraftr showed us exactly where we were losing money. 
                  The recommendations were simple to implement, and we saw 
                  immediate results on our energy bills."
                </blockquote>
                <footer>
                  <div className="font-semibold text-slate-dark">Rajesh Kumar</div>
                  <div className="text-sm text-muted-foreground">Plant Manager, Advanced Plastics Ltd.</div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;