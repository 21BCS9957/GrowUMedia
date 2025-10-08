import { Edit3, Repeat, TrendingUp, Upload, Play, Scissors, BarChart3, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Edit3,
    title: "Video Editing",
    description: "Professional editing that captures attention and keeps viewers engaged from start to finish.",
    features: ["Color grading & correction", "Motion graphics", "Sound design", "Transitions & effects"],
    color: "from-blue-500 to-cyan-500",
    bgPattern: "bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)]"
  },
  {
    icon: Repeat,
    title: "Content Repurposing",
    description: "Turn your long-form content into viral shorts, clips, and social media gold.",
    features: ["Long-form to shorts", "Multi-platform optimization", "Viral clip identification", "Social formatting"],
    color: "from-purple-500 to-pink-500",
    bgPattern: "bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1),transparent)]"
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven strategies tailored to your niche, audience, and business goals.",
    features: ["Channel audits", "Competitive research", "SEO optimization", "Trend analysis"],
    color: "from-green-500 to-emerald-500",
    bgPattern: "bg-[radial-gradient(circle_at_20%_70%,rgba(34,197,94,0.1),transparent)]"
  },
  {
    icon: Upload,
    title: "Publishing Systems",
    description: "Streamlined workflows that handle everything from thumbnails to scheduling.",
    features: ["Upload scheduling", "Metadata optimization", "Thumbnail creation", "Community management"],
    color: "from-orange-500 to-red-500",
    bgPattern: "bg-[radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.1),transparent)]"
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '60s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Complete Solution
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Dominate YouTube
            </span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Full-service YouTube growth, handled by experts who live and breathe the platform.
          </p>
        </div>

        {/* Enhanced Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${hoveredIndex === index
                ? 'bg-card border-primary/50 shadow-[0_0_60px_hsl(var(--primary)/0.3)] -translate-y-4 scale-105'
                : 'bg-card/50 border-border hover:border-primary/30 hover:-translate-y-2'
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 ${service.bgPattern} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

              {/* Floating Number */}
              <div className="absolute -top-4 -right-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${hoveredIndex === index
                  ? 'bg-primary text-primary-foreground scale-110'
                  : 'bg-muted/50 text-muted-foreground'
                  }`}>
                  {index + 1}
                </div>
              </div>

              <div className="relative z-10 space-y-6">
                {/* Enhanced Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${hoveredIndex === index
                    ? `bg-gradient-to-br ${service.color} shadow-lg shadow-primary/30 scale-110 rotate-3`
                    : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}>
                    <service.icon className={`w-8 h-8 transition-all duration-300 ${hoveredIndex === index ? 'text-white scale-110' : 'text-primary'
                      }`} />
                  </div>

                  {/* Glow Effect */}
                  {hoveredIndex === index && (
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} opacity-30 blur-xl animate-pulse`} />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${hoveredIndex === index ? 'text-primary' : 'text-foreground'
                    }`}>
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Feature List (appears on hover) */}
                <div className={`transition-all duration-500 overflow-hidden ${hoveredIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="pt-4 border-t border-border/50">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Learn More Button (appears on hover) */}
                <div className={`transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                  <button className="group/btn flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur border border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.2)]">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Ready to Transform Your Channel?</h3>
              <p className="text-muted-foreground max-w-md">
                Let our expert team handle everything while you focus on creating amazing content.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="group px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/30"
                onClick={() => window.open('https://app.reclaim.ai/m/arsh-growumedia/m', '_blank')}
              >
                <Play className="w-4 h-4" />
                Get Started Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                className="px-8 py-4 border border-border hover:border-primary/50 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                onClick={() => window.open('https://app.reclaim.ai/m/arsh-growumedia/m', '_blank')}
              >
                <Calendar className="w-4 h-4" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
