import { Play, Quote, Star, X, ArrowLeft } from "lucide-react";
import { useState } from "react";

const allTestimonials = [
  {
    id: 7,
    name: "Michelle Platti",
    title: "Content Creator",
    channel: "@Michelle",
    videoUrl: "https://www.youtube.com/watch?v=EGDKPHQjnCQ",
    quote: "Working with GUM has been a game-changer for our content strategy and growth.",
    rating: 5,
    results: "2X+ Revenue",
    timeframe: "1 months"
  },
  {
    id: 8,
    name: "Brian Feroldi",
    title: "Co-Founder",
    channel: "@Long Term Mindset",
    videoUrl: "https://www.youtube.com/watch?v=8ritZBOwUWo",
    quote: "The professional quality and strategic approach delivered outstanding results for our channel.",
    rating: 5,
    results: "outstanding  Results",
    timeframe: "2 months"
  },

  {
    id: 2,
    name: "KamiKaze Cash",
    title: " Finance Content Creator",
    channel: "@KamiKaze",
    videoUrl: "https://www.youtube.com/watch?v=FCeDFMbSOeE",
    quote: "GUM’s content strategy grew our views, converted them into paying clients, and increased revenue significantly",
    rating: 5,
    results: "120% increase in sales",
    timeframe: "6 months"
  },
  {
    id: 3,
    name: "Armando Novelo",
    title: "Co-Founder",
    channel: "@Super Mortgage Brothers",
    videoUrl: "https://www.youtube.com/watch?v=7VevPW_fOws",
    quote: "GUM’s approach helped us turn engagement into real business — our inbound sales inquiries doubled thanks to their strategy.",
    rating: 5,
    results: "2X Engagement",
    timeframe: "4 months"
  },
  {
    id: 4,
    name: "Noah Huisman",
    title: "Author",
    channel: "@Noah",
    videoUrl: "https://www.youtube.com/watch?v=DQgteTUJABs",
    quote: "The content GUM produced positioned my brand as premium, allowing us to launch high-ticket offers and boost revenue dramatically.",
    rating: 5,
    results: "4x Sales",
    timeframe: "5 months"
  },
  {
    id: 5,
    name: "Joe Soto",
    title: "Advisor",
    channel: "@Real Estate",
    videoUrl: "https://www.youtube.com/watch?v=L5_sMg2Uk68&t=23s",
    quote: "Our videos started generating qualified leads on autopilot — GUM’s work directly contributed to a noticeable spike in closed deals.",
    rating: 5,
    results: "Revenue grew by 95%",
    timeframe: "7 months"
  },
  {
    id: 6,
    name: "Denial Salinas",
    title: "Co-Founder",
    channel: "@TheSale.io",
    videoUrl: "https://www.youtube.com/watch?v=_dRW_QWhmzA&t=6s",
    quote: "GUM turned our channel into a revenue engine — our video strategy now drives consistent sales and client sign-ups every week.",
    rating: 5,
    results: "Generated 4x more qualified leads,",
    timeframe: "3 months"
  },


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
  // Extract YouTube video ID and generate thumbnail URL
  const getYouTubeThumbnail = (url: string, testimonialId?: number) => {
    // Special case for testimonial ID 5 - use placeholder
    if (testimonialId === 5) {
      return '/placeholder.svg';
    }

    // Handle different YouTube URL formats
    let videoId = '';

    if (url.includes('v=')) {
      videoId = url.split('v=')[1]?.split('&')[0]?.split('#')[0] || '';
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0]?.split('&')[0] || '';
    }

    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '/placeholder.svg';
  };

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
          src={getYouTubeThumbnail(testimonial.videoUrl, testimonial.id)}
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

            <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
                Success Stories from Our Clients
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we’ve helped businesses across industries drive massive growth and success on YouTube.
            </p>
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