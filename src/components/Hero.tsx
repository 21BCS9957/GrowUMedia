import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react";
import StatsCard from "./StatsCard";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundImage: 'url(/new.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <span className="text-white">YouTube</span>{" "}
            <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Growth Engines
            </span>
            ,
            <br />
            <span className="text-white">Built</span>{" "}
            <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              for Scale
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">

          </p>

          <div className="flex justify-center items-center pt-4">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 h-auto group"
              onClick={() => window.open('https://app.reclaim.ai/m/arsh-growumedia/m', '_blank')}
            >
              Book Free Strategy Session
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Client Logos Section */}
          <div className="pt-16 pb-8">
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                Trusted by Industry Leaders
              </p>
            </div>

            {/* Auto-scrolling logos */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-12 items-center">
                {/* First set of logos */}
                {[
                  { name: "Athena DAO", logo: "/Company Logo/Athena DAO.png" },
                  { name: "Cerebrum DAO", logo: "/Company Logo/cerebrum-dao-1.png" },
                  { name: "Haynow", logo: "/Company Logo/Haynow.png" },
                  { name: "Client 4", logo: "/Company Logo/image (4).png" },
                  { name: "Client 5", logo: "/Company Logo/logowhite-2.svg" },
                  { name: "Molecule", logo: "/Company Logo/molecule.png" },
                  { name: "Unchained Podcast", logo: "/Company Logo/Unchained-Podcast-Artwork-2000x2000-1.png" },
                  { name: "Vista Social", logo: "/Company Logo/Vistasocial.png" },
                ].map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-24 h-12 flex items-center justify-center transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-105"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  { name: "Athena DAO", logo: "/Company Logo/Athena DAO.png" },
                  { name: "Cerebrum DAO", logo: "/Company Logo/cerebrum-dao-1.png" },
                  { name: "Haynow", logo: "/Company Logo/Haynow.png" },
                  { name: "Client 4", logo: "/Company Logo/image (4).png" },
                  { name: "Client 5", logo: "/Company Logo/logowhite-2.svg" },
                  { name: "Molecule", logo: "/Company Logo/molecule.png" },
                  { name: "Unchained Podcast", logo: "/Company Logo/Unchained-Podcast-Artwork-2000x2000-1.png" },
                  { name: "Vista Social", logo: "/Company Logo/Vistasocial.png" },
                ].map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-24 h-12 flex items-center justify-center transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-105"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-5xl mx-auto">
            <StatsCard
              stat="5X"
              description="Average Channel Growth Across Clients"
              icon={TrendingUp}
            />
            <StatsCard
              stat="$10M+"
              description="Tracked revenue for business channels across Youtube"
              icon={DollarSign}
            />
            <StatsCard
              stat="60+"
              description="Channels Scaled, From Launch to Legacy"
              icon={Users}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
