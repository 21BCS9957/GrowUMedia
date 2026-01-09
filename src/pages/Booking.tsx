import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { trackSchedule, trackPageView } from '@/lib/metaPixel';

const Booking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Track page view for booking page
    trackPageView();

    // Listen for messages from the iframe (when booking is completed)
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from reclaim.ai
      if (event.origin === 'https://meet.reclaimai.com') {
        // Check if it's a booking completion event
        if (event.data && (event.data.type === 'booking_completed' || event.data.type === 'scheduled')) {
          trackSchedule();
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="container mx-auto px-6 py-6">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Website
        </Button>
      </div>

      {/* Page content */}
      <div className="container mx-auto px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-medium mb-4">
              Book Your Free
              <span className="bg-gradient-to-r from-gray-500 via-white to-yellow-400 bg-clip-text text-transparent">
                {" "}Strategy Session
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule a 30-minute call to discuss your YouTube growth strategy and discover how we can help you build your empire.
            </p>
          </div>

          {/* Embedded Reclaim.ai scheduler */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
            <iframe
              src="https://meet.reclaimai.com/e/673b1d38-a315-443d-a5f4-8e194af12d28"
              width="100%"
              height="700"
              frameBorder="0"
              className="rounded-2xl"
              title="Book Strategy Session"
              style={{ outline: 'none', border: 'none' }}
            />
          </div>

          {/* Additional info */}
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-100" />
              30-minute session
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-200" />
              Custom strategy included
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;