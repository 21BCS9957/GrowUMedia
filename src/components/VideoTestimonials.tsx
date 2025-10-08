import { Play, Quote, Star, ExternalLink } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Flow With Adee",
    title: "Fitness Channel",
    channel: "@Flow With Adee",
    subscribers: "2.3M",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual testimonial video
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Auto-generated YouTube thumbnail
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
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual testimonial video
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    quote: "The editing quality and strategy advice helped me reach my first million views in a single video.",
    rating: 5,
    results: "+800K subscribers",
    timeframe: "12 months"
  },
  {
    id: 3,
    name: " Tom Zenner",
    title: "Lifestyle Creator",
    channel: "@Tom Zenner",
    subscribers: "1.5M",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Replace with actual testimonial video
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    quote: "Professional editing that matches my vision perfectly. My engagement rates doubled!",
    rating: 5,
    results: "+1.2M subscribers",
    timeframe: "15 months"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleVideoClick = () => {
    window.open(testimonial.videoUrl, '_blank');
  };

  return (
    <div
      className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

        {/* External Link Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <ExternalLink className="w-4 h-4 text-white" />
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

const VideoTestimonials = () => {
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
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Client Success Stories
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
            Real Results from{" "}
            <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
              Real Creators
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch our clients share their success stories and see how we've helped them achieve massive growth on YouTube.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;