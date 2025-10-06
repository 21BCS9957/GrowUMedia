import { MessageSquare, Target, Zap, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Strategy Call",
    description: "We dive deep into your goals, audience, and current challenges."
  },
  {
    icon: Target,
    title: "Custom Plan",
    description: "Get a tailored roadmap designed specifically for your channel's growth."
  },
  {
    icon: Zap,
    title: "Execution",
    description: "Our team handles everything while you focus on creating great content."
  },
  {
    icon: Rocket,
    title: "Scale & Optimize",
    description: "Continuous optimization to maximize views, engagement, and revenue."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black">
            Our <span className="text-primary">Proven Process</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From first call to viral success—here's how we make it happen.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <div className="text-center space-y-4 relative z-10">
                  <div className="inline-flex w-16 h-16 rounded-full bg-primary items-center justify-center mx-auto shadow-lg shadow-primary/30">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-bold text-primary uppercase tracking-wider">
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
