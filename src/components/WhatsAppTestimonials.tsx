import { MessageCircle, Users, TrendingUp, CheckCircle, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  "/Whatsapp Testimonial Images/image.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-22 225046.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-22 231848.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-22 232207.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-22 232619.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-22 233151.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-23 220807.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-23 231128.png"
];

const WhatsAppTestimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Client Feedback
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium leading-tight bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
            What Our Clients Really Say
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Authentic WhatsApp conversations showing real client satisfaction and results.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Scrolling Testimonials */}
          <div className="relative">
            <div className="h-[600px] overflow-y-auto scrollbar-hide space-y-4 pr-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'border-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.3)] scale-105' 
                      : 'border-border/50 hover:border-primary/30'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Sleek Header */}
                  <div className="bg-gradient-to-r from-card to-muted p-3 flex items-center gap-3 border-b border-border/50">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <MessageCircle className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                  
                  {/* Screenshot Content */}
                  <div className="bg-card">
                    <img
                      src={testimonial}
                      alt="WhatsApp testimonial"
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Glow Effect */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 -z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Client Satisfaction Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Client Satisfaction at the Heart of Everything</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our success is measured by your success. These authentic WhatsApp conversations show the real impact of our partnership with clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Satisfied Clients</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">4.9/5</div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">95%</div>
                <p className="text-sm text-muted-foreground">Client Retention</p>
              </div>
              
              <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Why Clients Choose Us</h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Direct Communication</p>
                    <p className="text-sm text-muted-foreground">Real-time WhatsApp support and updates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Proven Results</p>
                    <p className="text-sm text-muted-foreground">Consistent growth across all client channels</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Personal Approach</p>
                    <p className="text-sm text-muted-foreground">Dedicated support treating your success as our priority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppTestimonials;