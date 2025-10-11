import { Play, Quote, Star, X } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Flow With Adee",
    title: "Yoga Instructor",
    channel: "@Flow With Adee",
    videoUrl: "https://www.youtube.com/watch?v=QCoObNPANxI&feature=youtu.be",
    quote: "GUM has played a pivotal role in scaling this channel’s audience from 500K to 1.6M subscribers in just 9 months.",
    rating: 5,
    results: "+1.4M subscribers",
    timeframe: "9 months"
  },
  {
    id: 2,
    name: "Andrew Verbinnen",
    title: "Cofounder HairDAO",
    channel: "@Anagen",
    videoUrl: "https://www.youtube.com/watch?v=uLm5--cS_Z4",
    quote: "With 100K+ views in just 28 days and a rapidly growing hair community, they’ve been instrumental in bringing our product to thousands of people and fueling our shared mission. ",
    rating: 5,
    results: "100X views just ",
    timeframe: "28 Days"
  },
  {
    id: 3,
    name: " Tom Zenner",
    title: "True Crime Authority",
    channel: "@Tom Zenner",
    videoUrl: "https://www.youtube.com/watch?v=TehJ9uHD_ZU&feature=youtu.be",
    quote: "The most efficient and growth-driven team I’ve ever had the pleasure of working with. ",
    rating: 5,
    results: "+68K subscribers",
    timeframe: "6 months"
  }
];

const TestimonialCard = ({
  testimonial,
  index,
  onVideoClick
}: {
  testimonial: typeof testimonials[0];
  index: number;
  onVideoClick: (testimonial: typeof testimonials[0]) => void;
}) => {
  // Extract YouTube video ID and generate thumbnail URL
  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleVideoClick = () => {
    onVideoClick(testimonial);
  };

  return (
    <div
      className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Video Thumbnail */}
      <div
        className="relative aspect-video cursor-pointer overflow-hidden bg-gradient-to-br from-black to-card"
        onClick={handleVideoClick}
      >
        <img
          src={getYouTubeThumbnail(testimonial.videoUrl)}
          alt={`${testimonial.name} testimonial`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:opacity-80 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg shadow-primary/50">
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Play Indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-primary/60 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-3 h-3 text-white ml-0.5" fill="currentColor" />
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
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
          <p className="text-xs text-primary font-medium">{testimonial.channel}</p>
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
  testimonial: typeof testimonials[0] | null;
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
            style={{ border: 0 }}
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

const VideoTestimonials = () => {
  const [modalTestimonial, setModalTestimonial] = useState<typeof testimonials[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (testimonial: typeof testimonials[0]) => {
    setModalTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTestimonial(null);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Recomendations
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
            <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
              Real Results for  Real Brands
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch our clients share their success stories and see how we've helped them achieve massive growth on YouTube.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              onVideoClick={openModal}
            />
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <Play className="w-5 h-5" />
            See More Testimonials
          </a>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        testimonial={modalTestimonial}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default VideoTestimonials;