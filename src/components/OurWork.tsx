import { Play, Pause, Filter, Grid3X3 } from "lucide-react";
import { useRef, useState } from "react";

const categories = [
  { id: "all", name: "All Work", count: 15 },
  { id: "podcast", name: "Podcast", count: 3 },
  { id: "talking-head", name: "Talking Head", count: 4 },
  { id: "documentary", name: "Documentary", count: 2 },
  { id: "corporate", name: "Corporate", count: 3 },
  { id: "entertainment", name: "Entertainment", count: 3 }
];

const videos = [
  {
    id: 1,
    title: "Charles Manson Documentary",
    description: "Deep dive investigative storytelling with professional editing",
    videoUrl: "/videos/charles_Manson_4.mp4",
    views: "2.5M",
    category: "documentary",
    thumbnail: "/videos/charles_Manson_4.mp4"
  },
  {
    id: 2,
    title: "Cuba Travel Experience",
    description: "Engaging talking head format with dynamic visuals",
    videoUrl: "/videos/Cuba intro.mp4",
    views: "1.4M",
    category: "talking-head",
    thumbnail: "/videos/Cuba intro.mp4"
  },
  {
    id: 3,
    title: "Time Management Mastery",
    description: "Entertainment content with motion graphics",
    videoUrl: "/videos/Use Time Wisely.mp4",
    views: "3.8M",
    category: "entertainment",
    thumbnail: "/videos/Use Time Wisely.mp4"
  },
  // Placeholder videos for other categories
  {
    id: 4,
    title: "Business Podcast Episode",
    description: "Professional podcast editing and audio enhancement",
    videoUrl: "/videos/charles_Manson_4.mp4", // Using existing video as placeholder
    views: "1.2M",
    category: "podcast",
    thumbnail: "/videos/charles_Manson_4.mp4"
  },
  {
    id: 5,
    title: "Corporate Training Video",
    description: "Clean corporate presentation with professional graphics",
    videoUrl: "/videos/Cuba intro.mp4", // Using existing video as placeholder
    views: "890K",
    category: "corporate",
    thumbnail: "/videos/Cuba intro.mp4"
  },
  {
    id: 6,
    title: "Comedy Entertainment",
    description: "High-energy entertainment content with dynamic editing",
    videoUrl: "/videos/Use Time Wisely.mp4", // Using existing video as placeholder
    views: "2.1M",
    category: "entertainment",
    thumbnail: "/videos/Use Time Wisely.mp4"
  }
];

const VideoCard = ({ video, index }: { video: typeof videos[0]; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to beginning
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Container */}
      <div className="relative aspect-[9/16] md:aspect-video overflow-hidden bg-gradient-to-br from-black via-card to-black">
        {/* Blurred background */}
        <video
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110"
          src={video.videoUrl}
          preload="metadata"
          loop
          muted
          autoPlay
        />

        {/* Main video */}
        <video
          ref={videoRef}
          className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={video.videoUrl}
          preload="metadata"
          loop
          muted
          onClick={togglePlay}
        />

        {/* Play Button Overlay */}
        {!isPlaying && !isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg shadow-primary/50"
            >
              <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
            </button>
          </div>
        )}

        {/* Hover Preview Indicator */}
        {isHovered && isPlaying && (
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground">
              Preview
            </span>
          </div>
        )}

        {/* Pause Button (appears when playing) */}
        {isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transform transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <Pause className="w-6 h-6 text-white" fill="currentColor" />
          </button>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm rounded-full text-xs font-medium text-secondary-foreground">
            {video.category}
          </span>
        </div>

        {/* Views Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            {video.views} views
          </span>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {video.title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {video.description}
        </p>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      </div>
    </div>
  );
};

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredVideos = activeCategory === "all"
    ? videos
    : videos.filter(video => video.category === activeCategory);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur mb-6">
            <Grid3X3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Portfolio
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Our Best{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio of successful YouTube content across multiple categories, each generating millions of views.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                }`}
            >
              <span className="flex items-center gap-2">
                {category.name}
                <span className={`text-xs px-2 py-1 rounded-full ${activeCategory === category.id
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-muted text-muted-foreground group-hover:text-foreground'
                  }`}>
                  {category.count}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {filteredVideos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No videos found</h3>
            <p className="text-muted-foreground">
              We're working on adding more content to this category. Check back soon!
            </p>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur border border-primary/30">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Ready to Create Content Like This?</h3>
              <p className="text-muted-foreground text-sm">
                Let us help you create professional, engaging content that drives results.
              </p>
            </div>

            <button className="group px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 flex items-center gap-2">
              <Play className="w-4 h-4" />
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;