import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Growu Media transformed our channel from struggling to get views to consistently hitting 100K+ per video. The ROI has been incredible.",
    author: "Satyam Tripathi",
    role: "Founder, TechStartup Channel",
    growth: "450% increase in 6 months"
  },
  {
    quote: "The team's understanding of YouTube's algorithm and audience psychology is unmatched. They don't just edit videos—they engineer growth.",
    author: "Pratham",
    role: "Business Coach",
    growth: "$2M+ in course sales"
  },
  {
    quote: "From 5K to 250K subscribers in a year. The systems they built are scalable, repeatable, and most importantly—they work.",
    author: "Tom Zener",
    role: "Lifestyle Creator",
    growth: "5000% subscriber growth"
  },
  {
    quote: "Working with Growu Media has been game-changing. They handle everything so I can focus on what I do best—creating content.",
    author: "Flow With Adee",
    role: "Tech Reviewer",
    growth: "2M+ views per month"
  },
  {
    quote: "The analytics insights and optimization strategies they provide are worth their weight in gold. Our CPM tripled in 4 months.",
    author: "Maria",
    role: "Financial Education Channel",
    growth: "$50K+ monthly ad revenue"
  },
  {
    quote: "Best decision we made for our brand. The content quality and engagement metrics have skyrocketed since partnering with them.",
    author: "Vista Social",
    role: "Fitness Brand",
    growth: "800% engagement increase"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black">
            Trusted by creators, brands, and podcasters serious about{" "}
            <span className="text-primary">real YouTube growth</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear how we helped creators and brands scale faster on YouTube.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full group p-8 rounded-2xl bg-card/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)] space-y-6">
                    <Quote className="w-10 h-10 text-primary opacity-50" />
                    
                    <p className="text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary font-semibold mt-2">
                        {testimonial.growth}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/50 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/50 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
