import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackInitiateCheckout } from "@/lib/metaPixel";
import StatsCard from "./StatsCard";
import { useState, useEffect, useRef } from "react";

// Mobile-optimized StatsCard component
const MobileStatsCard = ({ stat, description, icon: Icon }: { stat: string; description: string; icon: any }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Extract number and prefix/suffix from stat string
  const parseStatString = (statString: string) => {
    const match = statString.match(/^([^\d]*)(\d+)(.*)$/);
    if (match) {
      return {
        prefix: match[1] || '',
        number: parseInt(match[2]),
        suffix: match[3] || ''
      };
    }
    return { prefix: '', number: 0, suffix: statString };
  };

  const { prefix, number: targetNumber, suffix } = parseStatString(stat);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`mobile-stat-${targetNumber}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [targetNumber]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setAnimatedValue(targetNumber);
          clearInterval(timer);
        } else {
          setAnimatedValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetNumber]);

  return (
    <div
      id={`mobile-stat-${targetNumber}`}
      className="group relative p-4 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)] w-full h-full"
    >
      {/* Yellowish gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-yellow-300/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-3xl font-semibold bg-gradient-to-r from-amber-300/90 via-yellow-200/80 to-orange-300/90 bg-clip-text text-transparent">
            {prefix}{animatedValue}{suffix}
          </span>
          <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-4 h-4 text-yellow-400 group-hover:text-black transition-colors" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const statsData = [
    {
      stat: "5X",
      description: "Average Channel Growth Across Clients",
      icon: TrendingUp
    },
    {
      stat: "$10M+",
      description: "Tracked revenue for business channels across Youtube",
      icon: DollarSign
    },
    {
      stat: "60+",
      description: "Channels Scaled, From Launch to Legacy",
      icon: Users
    }
  ];

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Auto-advance functionality
  useEffect(() => {
    if (prefersReducedMotion || !isAutoPlaying) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide(prev => {
          const nextSlide = prev + 1;
          if (nextSlide >= statsData.length) {
            setIsAutoPlaying(false); // Stop at the end
            return prev;
          }
          
          // Scroll to next card
          if (carouselRef.current) {
            const cardWidth = carouselRef.current.scrollWidth / statsData.length;
            carouselRef.current.scrollTo({
              left: cardWidth * nextSlide,
              behavior: 'smooth'
            });
          }
          
          return nextSlide;
        });
      }, 3500);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, prefersReducedMotion, statsData.length]);

  // Resume auto-play after inactivity
  useEffect(() => {
    if (prefersReducedMotion) return;

    const checkInactivity = () => {
      const timeSinceLastInteraction = Date.now() - lastInteraction;
      if (timeSinceLastInteraction >= 7000 && !isAutoPlaying && currentSlide < statsData.length - 1) {
        setIsAutoPlaying(true);
      }
    };

    resumeTimeoutRef.current = setInterval(checkInactivity, 1000);

    return () => {
      if (resumeTimeoutRef.current) {
        clearInterval(resumeTimeoutRef.current);
      }
    };
  }, [lastInteraction, isAutoPlaying, currentSlide, statsData.length, prefersReducedMotion]);

  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setLastInteraction(Date.now());
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleDotClick = (index: number) => {
    handleUserInteraction();
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleUserInteraction();
    const touch = e.touches[0];
    carouselRef.current?.setAttribute('data-start-x', touch.clientX.toString());
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const startX = parseFloat(carouselRef.current?.getAttribute('data-start-x') || '0');
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    const threshold = 50;

    if (Math.abs(diff) > threshold && carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / statsData.length;
      let targetIndex = currentSlide;
      
      if (diff > 0 && currentSlide < statsData.length - 1) {
        targetIndex = currentSlide + 1;
      } else if (diff < 0 && currentSlide > 0) {
        targetIndex = currentSlide - 1;
      }
      
      if (targetIndex !== currentSlide) {
        setCurrentSlide(targetIndex);
        carouselRef.current.scrollTo({
          left: cardWidth * targetIndex,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundImage: 'url(/new.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20" />

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          {/* Hero Content Block - Heading + Subheading grouped together */}
          <div className="mb-12 md:mb-16">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent mb-6 md:mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
              YouTube as a Revenue Channel,
              <br />
              for Established Companies
            </h1>

            {/* Subheading - closely paired with heading */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We build revenue-first YouTube systems that drive pipeline, lower CAC, and scale with your GTM motion.
            </p>
          </div>

          {/* CTA Section - clearly separated for action */}
          <div className="mb-16 md:mb-20">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-10 py-7 h-auto group shadow-lg hover:shadow-xl transition-all duration-300"
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
          <div className="pt-8 md:pt-12 pb-8">
            <div className="text-center mb-8 md:mb-10">
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
          {/* Desktop/Tablet Layout (unchanged) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 pt-12 max-w-5xl mx-auto">
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

          {/* Mobile Carousel Layout */}
          <div className="md:hidden pt-8 px-4">
            {/* Slider Viewport - NO centering, NO padding */}
            <div 
              ref={carouselRef}
              className="slider-viewport overflow-x-auto scroll-smooth -mx-4"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch'
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onScroll={(e) => {
                const scrollLeft = e.currentTarget.scrollLeft;
                const cardWidth = e.currentTarget.scrollWidth / statsData.length;
                const newIndex = Math.round(scrollLeft / cardWidth);
                if (newIndex !== currentSlide) {
                  setCurrentSlide(newIndex);
                  handleUserInteraction();
                }
              }}
            >
              {/* Slider Track - flex with proper padding */}
              <div 
                className="slider-track flex gap-4"
                style={{ 
                  width: 'fit-content',
                  paddingLeft: '1rem',
                  paddingRight: '1rem'
                }}
              >
                {statsData.map((stat, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0"
                    style={{ 
                      flex: '0 0 auto',
                      scrollSnapAlign: 'start',
                      width: 'calc(100vw - 6rem)', // Account for container padding and track padding
                      minWidth: '280px' // Minimum width for smaller screens
                    }}
                  >
                    <MobileStatsCard
                      stat={stat.stat}
                      description={stat.description}
                      icon={stat.icon}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {statsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleDotClick(index);
                    // Scroll to the specific card
                    if (carouselRef.current) {
                      const cardWidth = carouselRef.current.scrollWidth / statsData.length;
                      carouselRef.current.scrollTo({
                        left: cardWidth * index,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-yellow-400 w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
