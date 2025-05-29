import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import InteriorSection from "@/components/interior-section"
import ExteriorSection from "@/components/exterior-section"
import LocationSection from "@/components/location-section"
import ContactSection from "@/components/contact-section"
import ParticlesBackground from "@/components/particles-background"
import ScrollToTop from "@/components/scroll-to-top"
import StatsSection from "@/components/stats-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <ParticlesBackground />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <InteriorSection />
      <ExteriorSection />
      <LocationSection />
      <ContactSection />
      <ScrollToTop />
    </main>
  )
}
