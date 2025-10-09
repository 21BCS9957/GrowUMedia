import { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface StatsCardProps {
  stat: string;
  description: string;
  icon: LucideIcon;
}

const StatsCard = ({ stat, description, icon: Icon }: StatsCardProps) => {
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

    const element = document.getElementById(`stat-${targetNumber}`);
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
      const duration = 2000; // 2 seconds
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
      id={`stat-${targetNumber}`}
      className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-yellow-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)] animate-slide-up"
    >
      {/* Yellowish gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-yellow-300/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-5xl font-semibold bg-gradient-to-r from-amber-300/90 via-yellow-200/80 to-orange-300/90 bg-clip-text text-transparent">
            {prefix}{animatedValue}{suffix}
          </span>
          <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-6 h-6 text-yellow-400 group-hover:text-black transition-colors" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
