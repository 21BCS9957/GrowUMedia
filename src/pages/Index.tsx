import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreServices from "@/components/CoreServices";
import Services from "@/components/Services";
import Process from "@/components/Process";
import OurWork from "@/components/OurWork";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CoreServices />
      <Services />
      <Process />
      <OurWork />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
