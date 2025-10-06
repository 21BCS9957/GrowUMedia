import { Video, Scissors, BarChart3, Rocket, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const coreServices = [
  {
    icon: Video,
    title: "Professional Video Editing",
    description: "Transform raw footage into compelling stories that captivate and convert.",
    features: [
      "Color grading & correction",
      "Motion graphics & animations",
      "Sound design & mixing",
      "Thumbnail creation",
      "Quick turnaround times"
    ],
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Scissors,
    title: "Content Repurposing",
    description: "Maximize your content's reach across all platforms with strategic repurposing.",
    features: [
      "Long-form to shorts conversion",
      "Multi-platform optimization",
      "Viral clip identification",
      "Social media formatting",
      "Subtitle & caption generation"
    ],
    color: "from-secondary/20 to-secondary/5"
  },
  {
    icon: BarChart3,
    title: "Growth Strategy & Analytics",
    description: "Data-driven insights and strategies tailored to your unique audience and goals.",
    features: [
      "Channel audits & analysis",
      "Competitive research",
      "SEO optimization",
      "Trend identification",
      "Performance tracking"
    ],
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Rocket,
    title: "Full Publishing Management",
    description: "End-to-end content management so you can focus on creating while we handle the rest.",
    features: [
      "Upload scheduling",
      "Metadata optimization",
      "Playlist management",
      "Community engagement",
      "Brand consistency"
    ],
    color: "from-secondary/20 to-secondary/5"
  }
];

const CoreServices = () => {
  return (
    <section id="core-services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              Our Core Services
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black">
            Everything Your Channel Needs to <span className="text-primary">Thrive</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            From concept to viral success—we provide the complete toolkit for sustainable YouTube growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {coreServices.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-10 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.15)]"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <div className="inline-flex">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 pt-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/50 backdrop-blur border border-primary/30">
            <p className="text-lg font-semibold">
              Ready to scale your channel with our proven systems?
            </p>
            <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto">
              Get Your Custom Strategy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
