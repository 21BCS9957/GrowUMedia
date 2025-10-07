import { MessageSquare, Target, Zap, Rocket, ArrowRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: MessageSquare,
    title: "Strategy Call",
    description: "We dive deep into your goals, audience, and current challenges to understand your unique needs.",
    details: "30-minute consultation • Goal assessment • Audience analysis • Current performance review",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Custom Plan",
    description: "Get a tailored roadmap designed specifically for your channel's growth trajectory.",
    details: "Custom strategy document • Content calendar • SEO optimization plan • Growth milestones",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Execution",
    description: "Our team handles everything while you focus on creating great content that resonates.",
    details: "Video editing • Thumbnail design • Upload scheduling • SEO implementation",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Rocket,
    title: "Scale & Optimize",
    description: "Continuous optimization to maximize views, engagement, and revenue potential.",
    details: "Performance tracking • A/B testing • Strategy refinement • Revenue optimization",
    color: "from-green-500 to-emerald-500"
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              Our Methodology
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Our <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-500 bg-clip-text text-transparent">Proven Process</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From first call to viral success—here's our battle-tested methodology that's helped 60+ channels scale.
          </p>
        </div>

        {/* Interactive Process Steps */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block relative">
            {/* Animated Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary animate-pulse opacity-50" />
            </div>

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`group cursor-pointer transition-all duration-500 ${
                    activeStep === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step Card */}
                  <div className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                    activeStep === index 
                      ? 'bg-card border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.3)]' 
                      : 'bg-card/50 border-border hover:border-primary/30'
                  }`}>
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                    
                    {/* Step Number */}
                    <div className="absolute -top-4 left-8">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        activeStep === index 
                          ? 'bg-primary text-primary-foreground scale-110' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                    </div>

                    <div className="relative z-10 space-y-6">
                      {/* Icon */}
                      <div className={`inline-flex w-16 h-16 rounded-2xl items-center justify-center transition-all duration-300 ${
                        activeStep === index 
                          ? `bg-gradient-to-br ${step.color} shadow-lg scale-110` 
                          : 'bg-primary/10 group-hover:bg-primary/20'
                      }`}>
                        <step.icon className={`w-8 h-8 transition-colors duration-300 ${
                          activeStep === index ? 'text-white' : 'text-primary'
                        }`} />
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${
                          activeStep === index ? 'text-primary' : 'text-foreground'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                        
                        {/* Details (shown on active) */}
                        <div className={`transition-all duration-500 overflow-hidden ${
                          activeStep === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pt-3 border-t border-border/50">
                            <p className="text-xs text-muted-foreground/80 leading-relaxed">
                              {step.details}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Arrow (except last step) */}
                      {index < steps.length - 1 && (
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
                          <ArrowRight className={`w-6 h-6 transition-all duration-300 ${
                            activeStep === index ? 'text-primary scale-110' : 'text-muted-foreground'
                          }`} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary">STEP {index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 backdrop-blur">
            <p className="text-lg font-semibold">
              Ready to experience our proven process?
            </p>
            <button className="group px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
