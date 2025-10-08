import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/GUM Logo White.png"
              alt="GUMO Logo"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Process
            </a>
            <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Case Study
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Testimonials
            </a>
            <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Blog
            </a>
          </div>

          <Button
            variant="outline"
            size="default"
            className="px-6 py-2"
            onClick={() => window.open('https://app.reclaim.ai/m/arsh-growumedia/m', '_blank')}
          >
            Book Strategy Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
