import { Play, Grid3X3, X, Maximize2 } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "podcast", name: "Podcast", count: 7 },
  { id: "talking-head", name: "Talking Head", count: 5 },
  { id: "documentary", name: "Documentary", count: 4 },
  { id: "corporate", name: "Corporate", count: 7 },
  { id: "entertainment", name: "Entertainment", count: 3 }
];



const videos = [
  // Podcast Videos
  {
    id: 1,
    title: "Podcast Episode",
    description: "Full-length podcast episode with professional editing and audio enhancement",
    youtubeUrl: "https://www.youtube.com/watch?v=Fm0yGaIiJrw&t=121s",
    thumbnail: "https://img.youtube.com/vi/Fm0yGaIiJrw/maxresdefault.jpg",
    category: "podcast",
    badge: "Full Pod"
  },
  {
    id: 2,
    title: "Tech Innovation Podcast",
    description: "Deep dive into technology trends and innovations",
    youtubeUrl: "https://www.youtube.com/watch?v=3Xo-XGetRbk",
    thumbnail: "https://img.youtube.com/vi/3Xo-XGetRbk/maxresdefault.jpg",
    category: "podcast",
    badge: "Teaser"
  },
  {
    id: 3,
    title: "Entrepreneurship Stories",
    description: "Inspiring stories from successful entrepreneurs",
    youtubeUrl: "https://www.youtube.com/watch?v=eTVhdcp-WVw",
    thumbnail: "https://img.youtube.com/vi/eTVhdcp-WVw/maxresdefault.jpg",
    category: "podcast",
    badge: "Teaser"
  },
  {
    id: 4,
    title: "Marketing Mastery Podcast",
    description: "Advanced marketing strategies and tactics",
    youtubeUrl: "https://www.youtube.com/watch?v=6KBdGABVvFg",
    thumbnail: "https://img.youtube.com/vi/6KBdGABVvFg/maxresdefault.jpg",
    category: "podcast",
    badge: "Channel Intro"
  },
  {
    id: 5,
    title: "Leadership Insights",
    description: "Leadership lessons from industry experts",
    youtubeUrl: "https://youtube.com/watch?v=_byCwhJ-G1U",
    thumbnail: "https://img.youtube.com/vi/_byCwhJ-G1U/maxresdefault.jpg",
    category: "podcast",
    badge: "Shortform"
  },
  {
    id: 26,
    title: "Podcast Highlights",
    description: "Best moments from our podcast series",
    youtubeUrl: "https://youtube.com/watch?v=OijOnkaWAsY",
    thumbnail: "https://img.youtube.com/vi/OijOnkaWAsY/maxresdefault.jpg",
    category: "podcast",
    badge: "Shortform"
  },
  {
    id: 27,
    title: "Quick Insights",
    description: "Bite-sized content for maximum impact",
    youtubeUrl: "https://www.youtube.com/shorts/WQXAprEEVtQ",
    thumbnail: "https://img.youtube.com/vi/WQXAprEEVtQ/maxresdefault.jpg",
    category: "podcast",
    badge: "Shortform"
  },

  // Talking Head Videos
  {
    id: 6,
    title: "Personal Development Tips",
    description: "Engaging talking head format with dynamic visuals",
    youtubeUrl: "https://www.youtube.com/watch?v=w1iVErYblDc",
    thumbnail: "https://img.youtube.com/vi/w1iVErYblDc/maxresdefault.jpg",
    category: "talking-head"
  },
  {
    id: 7,
    title: "Financial Freedom Guide",
    description: "Expert advice on building wealth and financial independence",
    youtubeUrl: "https://www.youtube.com/watch?v=LJ0fQoqpQCQ",
    thumbnail: "https://img.youtube.com/vi/LJ0fQoqpQCQ/maxresdefault.jpg",
    category: "talking-head"
  },
  {
    id: 8,
    title: "Productivity Hacks",
    description: "Time management and productivity strategies",
    youtubeUrl: "https://www.youtube.com/watch?v=KTzjHf90Wc4",
    thumbnail: "https://img.youtube.com/vi/KTzjHf90Wc4/maxresdefault.jpg",
    category: "talking-head"
  },
  {
    id: 9,
    title: "Career Advancement",
    description: "Professional growth and career development advice",
    youtubeUrl: "https://www.youtube.com/watch?v=8Ab-W51t8WI",
    thumbnail: "https://img.youtube.com/vi/8Ab-W51t8WI/maxresdefault.jpg",
    category: "talking-head"
  },
  {
    id: 10,
    title: "Thriller ",
    description: "Inside the Mind of a Criminal",
    youtubeUrl: "https://www.youtube.com/watch?v=6N6tj4aGz5Q",
    thumbnail: "https://img.youtube.com/vi/6N6tj4aGz5Q/maxresdefault.jpg",
    category: "talking-head"
  },

  // Documentary Videos
  {
    id: 11,
    title: "Crime Investigation Documentary",
    description: "Deep dive investigative storytelling with professional editing",
    youtubeUrl: "https://www.youtube.com/watch?v=eVTl2iAOmCI",
    thumbnail: "https://img.youtube.com/vi/eVTl2iAOmCI/maxresdefault.jpg",
    category: "documentary",
    badge: "Crime LF"
  },
  {
    id: 12,
    title: "Business Documentary",
    description: "Professional business storytelling and corporate narratives",
    youtubeUrl: "https://www.youtube.com/watch?si=5l9RNhy_BKSMaaex&v=w_KnjFhnws0&feature=youtu.be",
    thumbnail: "https://img.youtube.com/vi/w_KnjFhnws0/maxresdefault.jpg",
    category: "documentary",
    badge: "Business"
  },
  {
    id: 13,
    title: "Educational Content",
    description: "Engaging educational content in short-form format",
    youtubeUrl: "https://www.youtube.com/watch?v=gU5-41_s-Ao",
    thumbnail: "https://img.youtube.com/vi/gU5-41_s-Ao/maxresdefault.jpg",
    category: "documentary",
    badge: "Educational Shortform"
  },
  {
    id: 14,
    title: "Documentary Production",
    description: "Professional documentary filmmaking and storytelling",
    youtubeUrl: "https://www.youtube.com/watch?v=gMzPu5dAhy4&feature=youtu.be",
    thumbnail: "https://img.youtube.com/vi/gMzPu5dAhy4/maxresdefault.jpg",
    category: "documentary"
  },


  // Corporate Videos
  {
    id: 16,
    title: "Corporate Training Excellence",
    description: "Clean corporate presentation with professional graphics",
    youtubeUrl: "https://www.youtube.com/watch?v=fiCF0OvNI-s",
    thumbnail: "https://img.youtube.com/vi/fiCF0OvNI-s/maxresdefault.jpg",
    category: "corporate"
  },
  {
    id: 17,
    title: "Redefining the Future of Aging",
    description: "Pioneering research and breakthroughs driving the science of longevity",
    youtubeUrl: "https://www.youtube.com/watch?v=ammb6H2eMtg",
    thumbnail: "https://img.youtube.com/vi/ammb6H2eMtg/maxresdefault.jpg",
    category: "corporate"
  },
  {
    id: 18,
    title: "Product Launch Campaign",
    description: "Professional product showcase and marketing",
    youtubeUrl: "https://www.youtube.com/watch?v=Wh_dKDon8I0",
    thumbnail: "https://img.youtube.com/vi/Wh_dKDon8I0/maxresdefault.jpg",
    category: "corporate"
  },
  {
    id: 19,
    title: "Our Services. Your Possibilities.",
    description: "Engaging presentation of company achievements",
    youtubeUrl: "https://www.youtube.com/watch?v=BeWlAIODDkQ",
    thumbnail: "https://img.youtube.com/vi/BeWlAIODDkQ/maxresdefault.jpg",
    category: "corporate"
  },
  {
    id: 20,
    title: "Inspirational & Visionary",
    description: "Professional executive communication and messaging",
    youtubeUrl: "https://www.youtube.com/watch?v=wl4UFHkYNZ8",
    thumbnail: "https://img.youtube.com/vi/wl4UFHkYNZ8/maxresdefault.jpg",
    category: "corporate"
  },
  {
    id: 28,
    title: "Brand Showcase",
    description: "Professional brand presentation and storytelling",
    youtubeUrl: "https://www.youtube.com/watch?v=1phjXRmqQt4",
    thumbnail: "https://img.youtube.com/vi/1phjXRmqQt4/maxresdefault.jpg",
    category: "corporate"
  },
  {
    id: 29,
    title: "Corporate Portfolio",
    description: "Comprehensive corporate video production showcase",
    youtubeUrl: "https://www.youtube.com/watch?v=ammb6H2eMtg",
    thumbnail: "https://img.youtube.com/vi/ammb6H2eMtg/maxresdefault.jpg",
    category: "corporate"
  },

  // Entertainment Videos
  {
    id: 21,
    title: "Entertainment Production",
    description: "High-energy entertainment content with dynamic editing",
    youtubeUrl: "https://www.youtube.com/watch?v=-gfUZpYKD6E",
    thumbnail: "https://img.youtube.com/vi/-gfUZpYKD6E/maxresdefault.jpg",
    category: "entertainment"
  },
  {
    id: 22,
    title: "Creative Content Series",
    description: "Creative entertainment video with stunning visuals",
    youtubeUrl: "https://youtu.be/YM4l_PafjgU",
    thumbnail: "https://img.youtube.com/vi/YM4l_PafjgU/maxresdefault.jpg",
    category: "entertainment"
  },

  {
    id: 24,
    title: "Entertainment Showcase",
    description: "Professional entertainment video production",
    youtubeUrl: "https://www.youtube.com/watch?v=bZZi6tceM9E",
    thumbnail: "https://img.youtube.com/vi/bZZi6tceM9E/maxresdefault.jpg",
    category: "entertainment"
  },

];

const VideoCard = ({ video, index, onOpenModal }: {
  video: typeof videos[0];
  index: number;
  onOpenModal: (video: typeof videos[0]) => void;
}) => {
  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenModal(video);
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Video Container */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-black via-card to-black cursor-pointer" onClick={handleVideoClick}>
        {/* YouTube Thumbnail */}
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-lg shadow-primary/50">
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Expand Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <Maximize2 className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-secondary/90 backdrop-blur-sm rounded-full text-xs font-medium text-secondary-foreground capitalize">
            {(video as any).badge || video.category.replace('-', ' ')}
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

// Video Modal Component
const VideoModal = ({
  video,
  isOpen,
  onClose
}: {
  video: typeof videos[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !video) return null;

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-6xl w-full max-h-[90vh] bg-card rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
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
            src={getYouTubeEmbedUrl(video.youtubeUrl)}
            title={video.title}
            className="w-full h-full"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Info */}
        <div className="p-6 bg-card">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
              <p className="text-muted-foreground mb-4">{video.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="px-3 py-1 bg-secondary rounded-full text-secondary-foreground capitalize">
                  {video.category.replace('-', ' ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("podcast");
  const [modalVideo, setModalVideo] = useState<typeof videos[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredVideos = videos.filter(video => video.category === activeCategory).slice(0, 6);

  const openModal = (video: typeof videos[0]) => {
    setModalVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalVideo(null);
  };

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

          <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
            <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
              Our Best Work
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

        {/* 2x3 Grid Layout */}
        <div className="mb-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} onOpenModal={openModal} />
            ))}
          </div>
        </div>




      </div>

      {/* Video Modal */}
      <VideoModal
        video={modalVideo}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default OurWork;