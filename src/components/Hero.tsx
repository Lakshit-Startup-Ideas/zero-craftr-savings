import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-factory.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-dark">
                Cut Energy, Carbon & Waste —{" "}
                <span className="text-primary">See Real Savings</span> in 30 Days
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Plug-and-play IoT + AI that finds energy waste, predicts inefficiencies, 
                and delivers fast ROI for manufacturing plants.
              </h2>
              
              <p className="text-sm text-muted-foreground">
                No engineers, no long installs — sensors + our edge gateway ship in days. 
                Measurable savings in weeks.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-cta group">
                Book Demo — See a 30-day PoV
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Get Free ROI Estimate
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Factory floor with energy monitoring overlays showing IoT sensors and data dashboards"
                className="w-full h-auto"
              />
              
              {/* Video play overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer hover:bg-black/30 transition-colors">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;