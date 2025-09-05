import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section
      const scrolled = window.scrollY > 800;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isMinimized ? 'transform scale-75' : ''
      }`}
    >
      <div className="bg-primary text-primary-foreground rounded-2xl shadow-cta p-4 max-w-sm">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            {!isMinimized && (
              <div className="mb-3">
                <div className="font-semibold text-sm">Ready to cut energy waste?</div>
                <div className="text-xs opacity-90">Book a 30-day PoV demo</div>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-primary-foreground/70 hover:text-primary-foreground p-1"
          >
            {isMinimized ? <ArrowRight className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </button>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="secondary" 
            size={isMinimized ? "sm" : "default"}
            className="flex-1 bg-white/20 hover:bg-white/30 text-primary-foreground border-0"
          >
            {isMinimized ? "Demo" : "Book Demo"}
          </Button>
          {!isMinimized && (
            <Button 
              variant="outline" 
              size="default"
              className="border-white/30 text-primary-foreground hover:bg-white/10"
            >
              ROI Calc
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;