import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calculator } from "lucide-react";

const ROIWidget = () => {
  const [monthlySpend, setMonthlySpend] = useState("");
  const [uptime, setUptime] = useState("");
  const [energyCost, setEnergyCost] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const calculateROI = () => {
    const spend = parseFloat(monthlySpend) || 0;
    const savings = spend * 0.12; // 12% average savings
    const annualSavings = savings * 12;
    return { monthlySavings: savings, annualSavings };
  };

  const { monthlySavings, annualSavings } = calculateROI();

  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-background rounded-2xl shadow-card border border-primary/10 overflow-hidden">
          <div className="bg-gradient-hero text-primary-foreground p-8 text-center">
            <Calculator className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-2">Estimate Your Monthly Savings</h3>
            <p className="opacity-90">Get a quick ROI estimate based on your current energy spend</p>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <Label htmlFor="monthly-spend">Monthly Energy Spend ($)</Label>
                <Input
                  id="monthly-spend"
                  type="number"
                  placeholder="10,000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="uptime">Plant Uptime (%)</Label>
                <Input
                  id="uptime"
                  type="number"
                  placeholder="85"
                  value={uptime}
                  onChange={(e) => setUptime(e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="energy-cost">Current Energy Cost ($/kWh)</Label>
                <Input
                  id="energy-cost"
                  type="number"
                  step="0.01"
                  placeholder="0.12"
                  value={energyCost}
                  onChange={(e) => setEnergyCost(e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>

            {monthlySpend && (
              <div className="bg-mint-soft rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      ${monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Monthly Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">
                      ${annualSavings.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Annual Savings</div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="shadow-cta">
                    View Detailed Estimate
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Your ROI Estimate</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Based on typical ZeroCraftr deployments, plants with your energy spend see 
                      an average of 8-15% reduction in energy costs within 30 days.
                    </p>
                    <div className="bg-mint-soft p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          ROI in 4-6 months
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Typical payback period for pilot investment
                        </div>
                      </div>
                    </div>
                    <Button onClick={() => setIsOpen(false)} className="w-full">
                      Book Demo to Confirm
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Request Full ROI Calculator
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIWidget;