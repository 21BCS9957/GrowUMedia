const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl font-black text-primary-foreground">G</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-foreground">Growu</span>
                <span className="text-primary">Media</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              YouTube Growth Engines, Built for Scale
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Content Strategy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Repurposing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Publishing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://app.reclaim.ai/m/arsh-growumedia/m" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Book a Call</a></li>
              <li><a href="mailto:growth@growumedia.com" className="hover:text-primary transition-colors">growth@growumedia.com</a></li>
              <li><a href="https://www.instagram.com/growumedia" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/growumedia" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Growu Media. All rights reserved. Built with passion for YouTube creators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
