import { MessageCircle, Star, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  "/Whatsapp Testimonial Images/image.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-22 225046.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-22 231848.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-22 232207.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-22 232619.png",
  "/Whatsapp Testimonial Images/Screenshot 2025-09-22 233151.png"
];

const WhatsAppTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* WhatsApp-themed background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-8 h-8 rounded-full bg-green-500" />
        <div className="absolute top-40 right-32 w-6 h-6 rounded-full bg-green-400" />
        <div className="absolute bottom-32 left-1/4 w-10 h-10 rounded-full bg-green-600" />
        <div className="absolute bottom-20 right-20 w-4 h-4 rounded-full bg-green-300" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur">
            <Phone className="w-4 h-4 text-green-500" />
            <span className="text-sm font-semibold text-green-500 uppercase tracking-wider">
              Direct from WhatsApp
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Real Messages from{" "}
            <span className="bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Happy Clients
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Authentic conversations that show the real impact of our YouTube growth services.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Featured Testimonial */}
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                {/* Simple Card Design */}
                <div className="relative bg-card rounded-2xl overflow-hidden border border-green-500/20 shadow-2xl">
                  {/* WhatsApp Header */}
                  <div className="bg-green-500 p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-white">
                      <p className="font-semibold text-sm">Happy Client</p>
                      <p className="text-xs opacity-80">Online</p>
                    </div>
                  </div>
                  
                  {/* Screenshot Content */}
                  <div className="bg-muted overflow-hidden">
                    <img
                      src={testimonials[currentIndex]}
                      alt="WhatsApp testimonial"
                      className="w-full h-auto object-contain transition-all duration-500"
                      onError={(e) => {
                        console.log('Image failed to load:', testimonials[currentIndex]);
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <div className="text-3xl font-black text-green-500 mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <div className="text-3xl font-black text-green-500 mb-2">4.9★</div>
                  <p className="text-sm text-muted-foreground">Client Rating</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-6">Why Clients Love Working With Us</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Instant Communication</h4>
                    <p className="text-sm text-muted-foreground">Direct WhatsApp support for real-time updates and quick responses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proven Results</h4>
                    <p className="text-sm text-muted-foreground">Consistent growth and engagement improvements across all client channels.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Personal Touch</h4>
                    <p className="text-sm text-muted-foreground">Dedicated support that treats your success as our own priority.</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-green-500 w-8' 
                  : 'bg-muted-foreground/30 hover:bg-green-500/50'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur border border-green-500/20 shadow-[0_0_60px_rgba(34,197,94,0.1)]">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Ready to Join Our Success Stories?</h3>
              <p className="text-muted-foreground max-w-md">
                Start your journey to YouTube success and become our next happy client testimonial.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Get Started Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-6 py-3 border border-green-500/30 hover:border-green-500/50 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2">
                View All Testimonials
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppTestimonials;