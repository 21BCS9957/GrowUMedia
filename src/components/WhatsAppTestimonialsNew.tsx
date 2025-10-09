import { MessageCircle } from "lucide-react";

const WhatsAppTestimonialsNew = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Client Feedback
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
            <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
              What Our Clients Really Say
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Authentic WhatsApp conversations showing real client satisfaction and results.
          </p>
        </div>

        {/* WhatsApp Testimonials Image */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-300">
            <img
              src="/whatsapp.png"
              alt="WhatsApp client testimonials collage"
              className="w-full h-auto object-contain"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                filter: 'contrast(1.02) brightness(1.02)'
              }}
            />
            
            {/* Overlay for better interaction */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>


      </div>
    </section>
  );
};

export default WhatsAppTestimonialsNew;