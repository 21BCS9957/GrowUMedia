import ClientResults from "@/landing/components/ClientResults";
import Footer from "@/landing/components/Footer";
import Hero from "@/landing/components/Hero";
import HowItWorks from "@/landing/components/HowItWorks";
import Navbar from "@/landing/components/Navbar";
import VideoSection from "@/landing/components/VideoSection";
import WhyNotWorking from "@/landing/components/WhyNotWorking";

export default function Landing() {
  return (
    <main className="landing-page min-h-screen bg-dark-bg text-text-white font-inter">
      <Navbar />
      <Hero />
      <VideoSection />
      <ClientResults />
      <WhyNotWorking />
      <HowItWorks />
      <Footer />
    </main>
  );
}
