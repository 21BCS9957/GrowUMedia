import { Play, ExternalLink, TrendingUp } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "Adee VSL v2",
    thumbnail: "/Case Study/Adee VSL v2.png",
    client: "Adee",
    category: "VSL Campaign",
    results: "2.5M+ Views"
  },
  {
    id: 2,
    title: "Brian VSL",
    thumbnail: "/Case Study/Brian VSL.png",
    client: "Brian",
    category: "Video Sales Letter",
    results: "1.8M+ Views"
  },
  {
    id: 3,
    title: "Hairdao VSL",
    thumbnail: "/Case Study/Hairdao VSL.png",
    client: "Hairdao",
    category: "Crypto Campaign",
    results: "3.2M+ Views"
  },
  {
    id: 4,
    title: "Kamikaze VSL v2",
    thumbnail: "/Case Study/Kamikaze VSL v2.png",
    client: "Kamikaze",
    category: "Marketing Campaign",
    results: "4.1M+ Views"
  },
  {
    id: 5,
    title: "Kamikaze VSL v3",
    thumbnail: "/Case Study/Kamikaze VSL v3.png",
    client: "Kamikaze",
    category: "Follow-up Campaign",
    results: "2.9M+ Views"
  },
  {
    id: 6,
    title: "Kamikaze VSL v4",
    thumbnail: "/Case Study/Kamikaze VSL v4.png",
    client: "Kamikaze",
    category: "Optimization Test",
    results: "3.7M+ Views"
  },
  {
    id: 7,
    title: "Michelle Platti VSL",
    thumbnail: "/Case Study/Michelle Platti VSL.png",
    client: "Michelle Platti",
    category: "Personal Brand",
    results: "1.6M+ Views"
  },
  {
    id: 8,
    title: "Tom VSL",
    thumbnail: "/Case Study/tom vsl.png",
    client: "Tom",
    category: "Business Growth",
    results: "2.3M+ Views"
  }
];

const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Success Stories
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Our Client{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real results from real clients. See how we've helped channels achieve viral success and massive growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer ${
                hoveredIndex === index 
                  ? 'border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.3)] -translate-y-2 scale-105' 
                  : 'border-border hover:border-primary/30'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-card to-muted">
                <img
                  src={study.thumbnail}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}>
                  <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center shadow-lg shadow-primary/50 hover:bg-primary transition-colors">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Results Badge */}
                <div className="absolute top-3 right-3">
                  <div className="px-3 py-1 bg-primary/90 backdrop-blur rounded-full text-xs font-semibold text-primary-foreground">
                    {study.results}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur rounded-full text-xs font-medium text-white">
                    {study.category}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-card">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className={`font-bold transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-primary' : 'text-foreground'
                    }`}>
                      {study.client}
                    </h3>
                    <ExternalLink className={`w-4 h-4 transition-all duration-300 ${
                      hoveredIndex === index ? 'text-primary scale-110' : 'text-muted-foreground'
                    }`} />
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {study.title}
                  </p>

                  {/* Progress Bar Animation */}
                  <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ${
                        hoveredIndex === index ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 -z-10" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur border border-primary/30">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Want Results Like These?</h3>
              <p className="text-muted-foreground text-sm">
                Join our successful clients and start your growth journey today.
              </p>
            </div>
            
            <button className="group px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-sm">
              View All Case Studies
              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;