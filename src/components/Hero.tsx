import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackInitiateCheckout } from "@/lib/metaPixel";
import StatsCard from "./StatsCard";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundImage: 'url(/new.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent" style={{ fontFamily: 'Manrope, sans-serif' }}>
            YouTube as a Revenue Channel,
            <br />
            for Established Companies
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We build revenue-first YouTube systems that drive pipeline, lower CAC, and scale with your GTM motion.
          </p>

          <div className="flex justify-center items-center pt-4">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 h-auto group"
              onClick={() => {
                trackInitiateCheckout();
                navigate('/booking');
              }}
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

            {/* Infinite Scrolling Logos Marquee */}
            <div className="marquee-container overflow-hidden relative w-full">
              <div className="marquee-wrapper flex animate-marquee">
                {/* First set of logos */}
                <div className="marquee-content flex items-center justify-center min-w-max">
                  {[
                     { name: "Catalyst", logo: "/Company%20Logo/Catalyst.png" },
                     { name: "Cerebrum DAO", logo: "/Company%20Logo/cerebrum-dao-1.png" },
                    { name: "Molecule", logo: "/Company%20Logo/molecule.png" },
                    { name: "Hairdao", logo: "/Company%20Logo/Hairdao.png" },
                    { name: "The Product Fox", logo: "/Company%20Logo/The%20Product%20Fox%20.png" },
                    { name: "Haynow", logo: "/Company%20Logo/Haynow.png" },
                    { name: "Vista Social", logo: "/Company%20Logo/Vistasocial.png" },
                    { name: "Athena DAO", logo: "/Company%20Logo/Athena%20DAO.png" },
                    { name: "First Choice Investment", logo: "/Company%20Logo/firstchoiceinvestment.png" },
                    { name: "Client 4", logo: "/Company%20Logo/image%20(4).png" },
                    { name: "F2H", logo: "/Company%20Logo/F2H.png" },
                    { name: "Modern Stoa", logo: "/Company%20Logo/Modern%20Stoa.png" },
                    { name: "Unchained Podcast", logo: "/Company%20Logo/Unchained-Podcast-Artwork-2000x2000-1.png" },
                
                  ].map((client, index) => (
                    <div 
                      key={`first-${index}`} 
                      className="logo-item flex-shrink-0 mx-3 sm:mx-4 md:mx-6 flex items-center justify-center w-24 h-12 sm:w-28 sm:h-14 md:w-36 md:h-18 lg:w-40 lg:h-20"
                    >
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        loading="lazy"
                        className="max-w-full max-h-full w-auto h-auto object-contain filter brightness-100 contrast-110 saturate-110 hover:brightness-110 hover:contrast-120 hover:saturate-120 transition-all duration-300 hover:scale-105"
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          height: 'auto',
                          width: 'auto'
                        }}
                        onError={(e) => {
                          console.warn(`Failed to load logo: ${client.logo}`);
                          e.currentTarget.style.display = 'none';
                        }}
                        onLoad={(e) => {
                          // Handle SVG visibility issues
                          if (client.logo.endsWith('.svg')) {
                            e.currentTarget.style.filter = 'brightness(1.05) contrast(1.15) saturate(1.1)';
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="marquee-content flex items-center justify-center min-w-max">
                  {[
                     { name: "Catalyst", logo: "/Company%20Logo/Catalyst.png" },
                     { name: "Cerebrum DAO", logo: "/Company%20Logo/cerebrum-dao-1.png" },
                    { name: "Molecule", logo: "/Company%20Logo/molecule.png" },
                    { name: "Hairdao", logo: "/Company%20Logo/Hairdao.png" },
                    { name: "The Product Fox", logo: "/Company%20Logo/The%20Product%20Fox%20.png" },
                    { name: "Haynow", logo: "/Company%20Logo/Haynow.png" },
                    { name: "Vista Social", logo: "/Company%20Logo/Vistasocial.png" },
                    { name: "Athena DAO", logo: "/Company%20Logo/Athena%20DAO.png" },
                    { name: "First Choice Investment", logo: "/Company%20Logo/firstchoiceinvestment.png" },
                    { name: "Client 4", logo: "/Company%20Logo/image%20(4).png" },
                    { name: "F2H", logo: "/Company%20Logo/F2H.png" },
                    { name: "Image", logo: "/Company%20Logo/image.png" },
                    { name: "Modern Stoa", logo: "/Company%20Logo/Modern%20Stoa.png" },
                    { name: "Client 5", logo: "/Company%20Logo/logowhite-2.svg" },
                    { name: "Unchained Podcast", logo: "/Company%20Logo/Unchained-Podcast-Artwork-2000x2000-1.png" },
                  ].map((client, index) => (
                    <div 
                      key={`second-${index}`} 
                      className="logo-item flex-shrink-0 mx-3 sm:mx-4 md:mx-6 flex items-center justify-center w-24 h-12 sm:w-28 sm:h-14 md:w-36 md:h-18 lg:w-40 lg:h-20"
                      aria-hidden="true"
                    >
                      <img
                        src={client.logo}
                        alt=""
                        loading="lazy"
                        className="max-w-full max-h-full w-auto h-auto object-contain filter brightness-100 contrast-110 saturate-110 hover:brightness-110 hover:contrast-120 hover:saturate-120 transition-all duration-300 hover:scale-105"
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          height: 'auto',
                          width: 'auto'
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        onLoad={(e) => {
                          // Handle SVG visibility issues
                          if (client.logo.endsWith('.svg')) {
                            e.currentTarget.style.filter = 'brightness(1.05) contrast(1.15) saturate(1.1)';
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
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
