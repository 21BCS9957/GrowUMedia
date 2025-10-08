import { Play, Quote, Star, X, ArrowLeft } from "lucide-react";
import { useState } from "react";

const allTestimonials = [
  {
    id: 1,
    name: "Flow With Adee",
    title: "Fitness Channel",
    channel: "@Flow With Adee",
    subscribers: "2.3M",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    quote: "GUMO transformed my channel completely. From 50K to 2.3M subscribers in just 18 months!",
    rating: 5,
    results: "+2.2M subscribers",
    timeframe: "18 months"
  },
  {
    id: 2,
    name: "HayNow",
    title: "Business Coach",
    channel: "@HayNow",
    subscribers: "890K",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    quote: "The editing quality and strategy advice helped me reach my first million views in a single video.",
    rating: 5,
    results: "+800K subscribers",
    timeframe: "12 months"
  },
  {
    id: 3,
    name: "Tom Zenner",
    title: "Lifestyle Creator",
    channel: "@Tom Zenner",
    subscribers: "1.5M",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    quote: "Professional editing that matches my vision perfectly. My engagement rates doubled!",
    rating: 5,
    results: "+1.2M subscribers",
    timeframe: "15 months"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    title: "Beauty & Lifestyle",
    channel: "@SarahBeauty",
    subscribers: "750K",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    quote: "GUMO's editing style perfectly captured my brand aesthetic. My videos now look incredibly professional!",
    rating: 5,
    results: "+650K subscribers",
    timeframe: "10 months"
  },
  {
    id: 5,
    name: "Tech Reviews Pro",
    title: "Technology Channel",
    channel: "@TechReviewsPro",
    subscribers: "1.8M",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    quote: "The technical editing quality is outstanding. Complex tech reviews made simple and engaging.",
    rating: 5,
    results: "+1.5M subscribers",
    timeframe: "14 months"
  },
  {
    id: 6,
    name: "Cooking with Maria",
    title: "Food & Recipe Channel",
    channel: "@CookingWithMaria",
    subscribers: "920K",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    quote: "My cooking videos went from amateur to professional overnight. The food styling shots are incredible!",
    rating: 5,
    results: "+800K subscribers",
    timeframe: "11 months"
  },
  {
    id: 7,
    name: "Gaming Master",
    title: "Gaming Content",
    channel: "@GamingMaster",
    subscribers: "3.2M",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    quote: "Epic gaming montages and perfect timing. My highlight reels are now viral-worthy!",
    rating: 5,
    results: "+2.8M subscribers",
    timeframe: "20 months"
  },
  {
    id: 8,
    name: "Mindful Living",
    title: "Wellness & Meditation",
    channel: "@MindfulLiving",
    subscribers: "580K",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    quote: "Peaceful, calming edits that perfectly match my meditation content. Subscriber growth has been amazing!",
    rating: 5,
    results: "+520K subscribers",
    timeframe: "9 months"
  },
  {
    id: 9,
    name: "Travel Adventures",
    title: "Travel Vlogger",
    channel: "@TravelAdventures",
    subscribers: "1.4M",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    quote: "Cinematic travel videos that transport viewers. My content now feels like a Netflix documentary!",
    rating: 5,
    results: "+1.1M subscribers",
    timeframe: "13 months"
  }
];

const TestimonialCard = ({ 
  testimonial, 
  index, 
  onVideoClick 
}: { 
  testimonial: typeof allTestimonials[0]; 
  index: number;
  onVideoClick: (testimonial: typeof allTestimonials[0]) => void;
}) => {
  const handleVideoClick = () => {
    onVideoClick(testimonial);
  };

  return (
    <div
      className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Video Thumbnail */}
      <div
        className="relative aspect-video cursor-pointer overflow-hidden bg-gradient-to-br from-black to-card"
        onClick={handleVideoClick}
      >
        <img
          src={testimonial.thumbnail}
          alt={`${testimonial.name} testimonial`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:opacity-80 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg shadow-primary/50">
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Results Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            {testimonial.results} in {testimonial.timeframe}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Quote */}
        <div className="mb-4">
          <Quote className="w-6 h-6 text-primary mb-2 opacity-60" />
          <p className="text-foreground leading-relaxed italic">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Creator Info */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            <p className="text-xs text-primary font-medium">{testimonial.channel}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-foreground">{testimonial.subscribers}</div>
            <div className="text-xs text-muted-foreground">subscribers</div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>
    </div>
  );
};

// Video Modal Component
const VideoModal = ({ 
  testimonial, 
  isOpen, 
  onClose 
}: { 
  testimonial: typeof allTestimonials[0] | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!isOpen || !testimonial) return null;

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center transition-colors duration-200"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Video Container */}
        <div className="relative bg-black aspect-video">
          <iframe
            src={getYouTubeEmbedUrl(testimonial.videoUrl)}
            title={`${testimonial.name} testimonial`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Testimonial Info */}
        <div className="p-6 bg-card">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-muted-foreground mb-3 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-primary font-medium">
                  {testimonial.channel}
                </span>
                <span className="text-muted-foreground">{testimonial.subscribers} subscribers</span>
                <span className="px-2 py-1 bg-green-500/10 rounded-full text-green-600 text-xs font-medium">
                  {testimonial.results}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsPage = () => {
  const [modalTestimonial, setModalTestimonial] = useState<typeof allTestimonials[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (testimonial: typeof allTestimonials[0]) => {
    setModalTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTestimonial(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-6">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                All Client Testimonials
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
                Success Stories from Our Clients
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Watch how we've helped creators across different niches achieve massive growth and success on YouTube.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">15M+</div>
              <div className="text-muted-foreground">Total Subscribers Gained</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Videos Edited</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index} 
                onVideoClick={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        testimonial={modalTestimonial} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default TestimonialsPage;