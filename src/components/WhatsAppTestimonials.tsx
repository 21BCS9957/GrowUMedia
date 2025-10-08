import { MessageCircle, Users, TrendingUp, X } from "lucide-react";
import { useState, useEffect } from "react";

// Auto-load testimonial images from assets/testimonials/
const useTestimonialImages = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // For now, we'll use the existing public folder images
    // In a real implementation, you'd use a build-time script or dynamic import
    const testimonialImages = [
      "/Whatsapp Testimonial Images/1.png",
      "/Whatsapp Testimonial Images/2.png",
      "/Whatsapp Testimonial Images/3.png",
      "/Whatsapp Testimonial Images/4.png",
      "/Whatsapp Testimonial Images/5.png",
      "/Whatsapp Testimonial Images/6.jpg",
      "/Whatsapp Testimonial Images/7.jpg",
      "/Whatsapp Testimonial Images/9.png",
      "/Whatsapp Testimonial Images/10.png",
      "/Whatsapp Testimonial Images/12.png",
      "/Whatsapp Testimonial Images/14.png",
      "/Whatsapp Testimonial Images/14 2.png",
      "/Whatsapp Testimonial Images/15.png",
      "/Whatsapp Testimonial Images/15 2.png",
      "/Whatsapp Testimonial Images/16.png",
      "/Whatsapp Testimonial Images/17.png"
    ];
    setImages(testimonialImages);
  }, []);

  return images;
};

// Lightbox component for click-to-zoom
const Lightbox = ({ 
  isOpen, 
  imageSrc, 
  onClose 
}: { 
  isOpen: boolean; 
  imageSrc: string; 
  onClose: () => void; 
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
          style={{ fontSize: '24px' }}
        >
          <X size={24} />
        </button>
        <img
          src={imageSrc}
          alt="Testimonial full size"
          className="max-w-full max-h-full object-contain"
          style={{
            imageRendering: '-webkit-optimize-contrast',
            filter: 'contrast(1.05)'
          }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

const WhatsAppTestimonials = () => {
  const testimonialImages = useTestimonialImages();
  const [lightboxImage, setLightboxImage] = useState<string>('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage('');
  };
  return (
    <>
      {/* Add responsive styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 768px) {
            .testimonial-card-desktop {
              min-height: 300px !important; /* Increased height for better fit */
            }
            .testimonial-image-desktop {
              min-height: 280px !important; /* Larger images for better readability */
            }
          }
          
          .testimonial-grid {
            gap: 6px; /* Tight spacing: 6px between cards */
          }
          
          @media (max-width: 767px) {
            .testimonial-grid {
              gap: 8px; /* Slightly more space on mobile */
            }
          }
        `
      }} />
      
      <section className="py-16 relative overflow-hidden">
        {/* Dark Background */}
        <div className="absolute inset-0" style={{ backgroundColor: '#0f0f10' }} />
        
        <div className="container mx-auto px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur">
              <MessageCircle className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
                Client Feedback
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium leading-tight text-white">
              What Our Clients Really Say
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Authentic WhatsApp conversations showing real client satisfaction and results.
            </p>
          </div>

          {/* Clipboard Container - Narrower max-width (1100px) */}
          <div className="mx-auto" style={{ maxWidth: '1100px' }}>
            <div 
              className="relative px-8 py-10 rounded-2xl shadow-2xl"
              style={{ 
                backgroundColor: '#1a1a1b',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Clipboard Header */}
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-2 rounded-full bg-yellow-400/20 border border-yellow-400/30">
                  <span className="text-yellow-400 font-medium text-sm">Client Testimonials Clipboard</span>
                </div>
              </div>

              {/* Responsive Grid with Tight Spacing */}
              <div 
                className="testimonial-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {testimonialImages.map((testimonial, index) => (
                  <div
                    key={index}
                    className="group relative transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    style={{ 
                      transform: `rotate(${(Math.random() - 0.5) * 2}deg)`, // Max ±1° rotation
                      animationDelay: `${index * 50}ms`
                    }}
                    onClick={() => openLightbox(testimonial)}
                  >
                    {/* Card with no borders, only shadows - Larger for better readability */}
                    <div 
                      className="testimonial-card-desktop relative rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center p-1"
                      style={{
                        backgroundColor: '#2a2a2b',
                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)', // Enhanced shadows, no borders
                        minHeight: '220px', // Mobile: increased to 220px
                        height: 'auto'
                      }}
                    >
                      <img
                        src={testimonial}
                        alt="WhatsApp testimonial"
                        className="testimonial-image-desktop w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        style={{ 
                          imageRendering: '-webkit-optimize-contrast',
                          filter: 'contrast(1.05)',
                          minHeight: '200px', // Mobile: increased to 200px for better text readability
                          maxHeight: '450px', // Allow taller images
                          transform: 'scale(1.1)' // Zoom in images for better text readability
                        }}
                      />
                      
                      {/* Hover Overlay with Gold Highlight */}
                      <div className="absolute inset-0 bg-yellow-400/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      
                      {/* Click indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/70 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium border border-yellow-400/30">
                          Click to zoom
                        </div>
                      </div>
                      
                      {/* Subtle Pin Effect */}
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400/80 rounded-full shadow-md" />
                    </div>
                  </div>
                ))}
              </div>


            </div>
          </div>


        </div>
      </section>

      {/* Lightbox */}
      <Lightbox 
        isOpen={isLightboxOpen}
        imageSrc={lightboxImage}
        onClose={closeLightbox}
      />
    </>
  );
};

export default WhatsAppTestimonials;