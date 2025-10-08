import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoTestimonials from "@/components/VideoTestimonials";
import CoreServices from "@/components/CoreServices";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import WhatsAppTestimonials from "@/components/WhatsAppTestimonials";
import OurWork from "@/components/OurWork";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <VideoTestimonials />
      <CoreServices />
      <CaseStudies />
      <Process />
      <WhatsAppTestimonials />
      <OurWork />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
