import { Wrench, Database, Brain, FileBarChart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
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
            <motion.div 
              key={index} 
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveStep(index)}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-8 left-full w-8 h-px bg-border translate-x-4 z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: (index + 1) * 0.3 }}
                  viewport={{ once: true }}
                />
              )}
              
              <motion.div 
                className={`bg-background rounded-2xl p-8 shadow-card transition-all duration-300 relative ${
                  activeStep === index ? 'shadow-lg scale-105' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Step number */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {index + 1}
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ rotateY: -90 }}
                  whileInView={{ rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <step.icon className="h-12 w-12 text-primary" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-slate-dark mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {step.title}
                </motion.h3>
                
                <motion.p 
                  className="text-accent font-medium text-sm mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.7 }}
                  viewport={{ once: true }}
                >
                  {step.description}
                </motion.p>
                
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                >
                  {step.detail}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;