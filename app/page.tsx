import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VoiceCategories from "@/components/VoiceCategories";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Add top padding to account for fixed navigation */}
      <div className="pt-16">
        <section id="hero">
          <Hero />
        </section>

        <Features />
        <VoiceCategories />
        <HowItWorks />
        <Trust />
        <Faq />
        <FinalCta />
      </div>

      <Footer />
    </main>
  );
}
