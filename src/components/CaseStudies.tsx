import { Play, ExternalLink, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "Adee VSL v2",
    thumbnail: "/Case Study/Adee VSL v2.png",
    client: "Adee"
  },
  {
    id: 2,
    title: "Brian VSL",
    thumbnail: "/Case Study/Brian VSL.png",
    client: "Brian"
  },
  {
    id: 3,
    title: "Hairdao VSL",
    thumbnail: "/Case Study/Hairdao VSL.png",
    client: "Hairdao"
  },
  {
    id: 4,
    title: "Kamikaze VSL v2",
    thumbnail: "/Case Study/Kamikaze VSL v2.png",
    client: "Kamikaze"
  },
  {
    id: 5,
    title: "Michelle Platti VSL",
    thumbnail: "/Case Study/Michelle Platti VSL.png",
    client: "Michelle Platti"
  },
  {
    id: 6,
    title: "Tom VSL",
    thumbnail: "/Case Study/tom vsl.png",
    client: "Tom"
  }
];

const CaseStudies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Duplicate case studies for seamless loop (only need 2 sets)
  const duplicatedCaseStudies = [...caseStudies, ...caseStudies];

  const scrollLeft = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        return caseStudies.length - 1;
      }
      return newIndex;
    });

    setTimeout(() => setIsTransitioning(false), 500);
  };

  const scrollRight = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      if (newIndex >= caseStudies.length) {
        return 0;
      }
      return newIndex;
    });

    setTimeout(() => setIsTransitioning(false), 500);
  };





  return (
    <section id="case-studies" className="py-32 relative overflow-hidden">
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

          <div className="relative">
            {/* Decorative Brackets */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-primary/30 text-6xl font-thin hidden md:block">
              [
            </div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-primary/30 text-6xl font-thin hidden md:block">
              ]
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-medium leading-tight">
              Our Client{" "}
              <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            Real results from real clients. See how we've helped channels achieve viral success and massive growth.
          </p>
        </div>

        {/* Case Studies Horizontal Scroll */}
        <div className="relative max-w-7xl mx-auto mb-16">
          {/* Scroll Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </button>

          {/* Transform Container */}
          <div className="overflow-hidden px-16 py-4">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (320 + 24)}px)`,
                width: `${duplicatedCaseStudies.length * (320 + 24)}px`
              }}
            >
              {duplicatedCaseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer flex-shrink-0 w-80 ${hoveredIndex === index
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
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                      }`}>
                      <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center shadow-lg shadow-primary/50 hover:bg-primary transition-colors">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>




                  </div>

                  {/* Content */}
                  <div className="p-6 bg-card">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-bold transition-colors duration-300 ${hoveredIndex === index ? 'text-primary' : 'text-foreground'
                          }`}>
                          {study.client}
                        </h3>
                        <ExternalLink className={`w-4 h-4 transition-all duration-300 ${hoveredIndex === index ? 'text-primary scale-110' : 'text-muted-foreground'
                          }`} />
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {study.title}
                      </p>

                      {/* Progress Bar Animation */}
                      <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ${hoveredIndex === index ? 'w-full' : 'w-0'
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
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </button>
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

            <button 
              className="group px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-sm"
              onClick={() => window.open('https://app.reclaim.ai/m/arsh-growumedia/m', '_blank')}
            >
              Book Strategy Call
              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;