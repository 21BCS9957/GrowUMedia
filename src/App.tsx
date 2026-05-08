import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Booking from "./pages/Booking";
import Landing from "./pages/Landing";
import LandingScheduled from "./pages/LandingScheduled";
import LandingThankYou from "./pages/LandingThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landining" element={<Landing />} />
          <Route path="/landing/thank-you" element={<LandingThankYou />} />
          <Route path="/landing/scheduled" element={<LandingScheduled />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
