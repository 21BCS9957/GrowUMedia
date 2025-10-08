import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 YouTube Algorithm Secrets That Will Skyrocket Your Views",
    excerpt: "Discover the hidden strategies top creators use to get their videos recommended by YouTube's algorithm.",
    author: "GUMO Team",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Algorithm",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    tags: ["YouTube", "Algorithm", "Growth", "Strategy"]
  },
  {
    id: 2,
    title: "The Complete Guide to YouTube Thumbnails That Get Clicks",
    excerpt: "Learn how to create eye-catching thumbnails that increase your click-through rates by 300%.",
    author: "GUMO Team",
    date: "December 12, 2024",
    readTime: "12 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
    tags: ["Thumbnails", "Design", "CTR", "Optimization"]
  },
  {
    id: 3,
    title: "How to Script YouTube Videos That Keep Viewers Engaged",
    excerpt: "Master the art of scriptwriting with proven frameworks that boost watch time and retention.",
    author: "GUMO Team",
    date: "December 10, 2024",
    readTime: "10 min read",
    category: "Content",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    tags: ["Scripting", "Engagement", "Content", "Retention"]
  },
  {
    id: 4,
    title: "YouTube SEO: Rank Higher in Search Results",
    excerpt: "Optimize your videos for search with these proven SEO techniques that top creators swear by.",
    author: "GUMO Team",
    date: "December 8, 2024",
    readTime: "15 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
    tags: ["SEO", "Search", "Optimization", "Keywords"]
  },
  {
    id: 5,
    title: "Building a Sustainable YouTube Content Strategy",
    excerpt: "Create a content calendar and strategy that ensures consistent growth and audience engagement.",
    author: "GUMO Team",
    date: "December 5, 2024",
    readTime: "11 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1553028826-f4804151e596?w=800&h=400&fit=crop",
    tags: ["Strategy", "Planning", "Content Calendar", "Growth"]
  },
  {
    id: 6,
    title: "Monetization Strategies Beyond AdSense",
    excerpt: "Explore multiple revenue streams to maximize your YouTube channel's earning potential.",
    author: "GUMO Team",
    date: "December 3, 2024",
    readTime: "9 min read",
    category: "Monetization",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop",
    tags: ["Monetization", "Revenue", "Business", "Income"]
  }
];

const categories = ["All", "Algorithm", "Design", "Content", "SEO", "Strategy", "Monetization"];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <article className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-foreground">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary/50 rounded-md text-xs text-secondary-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          Read More
        </Button>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GUMO{" "}
              <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Insights, strategies, and tips to help you grow your YouTube channel and create content that converts.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pb-20">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full font-medium transition-all duration-300 bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            Load More Articles
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Blog;