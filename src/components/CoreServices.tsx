import { Video, BarChart3, Search, Target, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const coreServices = [
  {
    icon: Video,
    title: "YouTube Strategy & Production",
    description: "Complete video production and strategic planning to maximize your channel's growth potential.",
    features: [
      "Professional video editing & motion graphics",
      "Data-driven content strategy & optimization"
    ],
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: BarChart3,
    title: "Growth Analytics & Insights",
    description: "Advanced analytics and performance tracking to understand your audience and optimize content.",
    features: [
      "Detailed performance analytics & reporting",
      "Audience insights & behavior analysis"
    ],
    color: "from-secondary/20 to-secondary/5"
  },
  {
    icon: Search,
    title: "YouTube SEO",
    description: "Comprehensive SEO optimization to improve discoverability and rank higher in search results.",
    features: [
      "Keyword research & optimization",
      "Title, description & tag optimization"
    ],
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Target,
    title: "YouTube Ads",
    description: "Strategic advertising campaigns to accelerate growth and reach your target audience effectively.",
    features: [
      "Targeted ad campaign creation & management",
      "ROI optimization & conversion tracking"
    ],
    color: "from-secondary/20 to-secondary/5"
  }
];

const CoreServices = () => {
  return (
    <>
      {/* Header Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
                Our Core Services
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold">
              <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
                Everything Your Channel Needs to Thrive
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              From concept to viral success—we provide the complete toolkit for sustainable YouTube growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stacking Cards Section */}
      <section id="core-services" className="relative">
        <div className="max-w-4xl mx-auto px-6">
          {coreServices.map((service, index) => (
            <div
              key={service.title}
              className="sticky group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] hover:-translate-y-2 mb-6"
              style={{
                top: `${80}px`,
                zIndex: 50 + index,
                marginBottom: index === coreServices.length - 1 ? '120px' : '24px'
              }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 space-y-4">
                {/* Icon & Title Row */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 pt-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pb-16">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/50 backdrop-blur border border-primary/30">
            <p className="text-lg font-semibold">
              Ready to scale your channel with our proven systems?
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-10 py-6 h-auto"
              onClick={() => window.open('https://app.reclaim.ai/m/arsh-growumedia/m', '_blank')}
            >
              Get Your Custom Strategy
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreServices;
