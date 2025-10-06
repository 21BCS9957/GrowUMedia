interface StatsCardProps {
  stat: string;
  description: string;
  icon: string;
}

const StatsCard = ({ stat, description, icon }: StatsCardProps) => {
  return (
    <div className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-slide-up">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-5xl font-black text-primary">{stat}</span>
          <span className="text-4xl">{icon}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
