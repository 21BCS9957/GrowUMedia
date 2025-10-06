import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/GUM Logo White.png" 
              alt="GUMO Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Process
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Services
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Testimonials
            </a>
          </div>

          <Button variant="hero" size="lg" className="shadow-lg">
            Book Your Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
