import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const videos = [
  {
    id: 1,
    title: "Charles Manson Documentary",
    description: "Professional editing and storytelling",
    videoUrl: "/videos/charles_Manson_4.mp4",
    views: "2.5M",
    category: "Documentary"
  },
  {
    id: 2,
    title: "Cuba Intro",
    description: "Casual Vloging",
    videoUrl: "/videos/Cuba intro.mp4",
    views: "1.4M",
    category: "Vloging"
  },
  {
    id: 3,
    title: "Use Time Wisely",
    description: "Motion Graphics",
    videoUrl: "/videos/Use Time Wisely.mp4",
    views: "3.8M",
    category: "Short Form"
  },
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
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Best <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful YouTube content that has generated millions of views
          </p>
        </div>

        {/* Videos Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {videos.map((video, index) => (
              <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <VideoCard video={video} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full hover:border-primary/50 transition-all duration-300 inline-flex items-center gap-2">
            <span className="text-foreground group-hover:text-primary transition-colors">
              View Full Portfolio
            </span>
            <Play className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;