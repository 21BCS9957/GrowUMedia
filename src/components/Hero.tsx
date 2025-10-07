import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StatsCard from "./StatsCard";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24" style={{ backgroundImage: 'url(/new.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur">
              'meh' channel to YouTube royalty
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            YouTube <span className="text-primary">Growth Engines</span>,
            <br />
            Built for Scale
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto group"
              onClick={() => window.open('https://app.reclaim.ai/m/arsh-growumedia/m', '_blank')}
            >
              Book Free Strategy Session
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
              View Our Work
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-5xl mx-auto">
            <StatsCard
              stat="300%"
              description="Average Channel Growth Across Clients"
              icon="📈"
            />
            <StatsCard
              stat="$5M+"
              description="Tracked revenue for business channels across Youtube"
              icon="💰"
            />
            <StatsCard
              stat="60+"
              description="Channels Scaled, From Launch to Legacy"
              icon="▶️"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
