import { Edit3, Repeat, TrendingUp, Upload } from "lucide-react";

const services = [
  {
    icon: Edit3,
    title: "Video Editing",
    description: "Professional editing that captures attention and keeps viewers engaged from start to finish."
  },
  {
    icon: Repeat,
    title: "Content Repurposing",
    description: "Turn your long-form content into viral shorts, clips, and social media gold."
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven strategies tailored to your niche, audience, and business goals."
  },
  {
    icon: Upload,
    title: "Publishing Systems",
    description: "Streamlined workflows that handle everything from thumbnails to scheduling."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black">
            Everything You Need to <span className="text-primary">Dominate YouTube</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Full-service YouTube growth, handled by experts who live and breathe the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)] hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
