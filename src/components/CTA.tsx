import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.2)_0%,transparent_70%)] animate-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-card/30 backdrop-blur border border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.3)]">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight">
              Ready to Build Your
              <br />
              <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
                YouTube Empire?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a free strategy session and discover exactly how we'll grow your channel, increase revenue, and build a lasting audience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-10 py-7 h-auto group"
              onClick={() => navigate('/booking')}
            >
              <Calendar className="mr-2" />
              Book Your Free Call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-100" />
              30-minute session
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-200" />
              Custom strategy included
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
