import { Navigation } from "@/components/navigation"
import { SocialSidebar } from "@/components/social-sidebar"
import { ContactSidebar } from "@/components/contact-sidebar"
import { HeroSection } from "@/components/hero-section"
import { TrustSection } from "@/components/trust-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { IndustriesSection } from "@/components/industries-section"
import { WhyPermusSection } from "@/components/why-permus-section"
import { WhyPermusStats } from "@/components/why-permus-stats"
import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-midnight-navy">
      {/* Navigation */}
      <Navigation />
      
      {/* Fixed sidebars */}
      <SocialSidebar />
      <ContactSidebar />
      
      {/* Page sections */}
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProductsSection />
      <IndustriesSection />
      <WhyPermusSection />
      <WhyPermusStats />
      <AboutSection />
      <FAQSection />
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
