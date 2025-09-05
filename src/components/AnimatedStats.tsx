import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState({ savings: 0, days: 0, roi: 0 });

  const targetValues = {
    savings: 15,
    days: 30,
    roi: 4
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = Math.min(currentStep / steps, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        setCounts({
          savings: Math.round(targetValues.savings * easeOutCubic),
          days: Math.round(targetValues.days * easeOutCubic),
          roi: Math.round(targetValues.roi * easeOutCubic)
        });

        if (progress >= 1) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const stats = [
    { 
      value: counts.savings, 
      suffix: "%", 
      label: "Energy Reduction", 
      color: "text-primary" 
    },
    { 
      value: counts.days, 
      suffix: "", 
      label: "Days to Results", 
      color: "text-accent" 
    },
    { 
      value: counts.roi, 
      suffix: "x", 
      label: "ROI Multiplier", 
      color: "text-primary" 
    }
  ];

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-mint-soft to-background rounded-xl border border-primary/10"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
          className="text-center"
        >
          <motion.div 
            className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-1`}
            animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
          >
            {stat.value}{stat.suffix}
          </motion.div>
          <div className="text-xs text-muted-foreground font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedStats;