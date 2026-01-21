import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"
import { ContactSidebar } from "@/components/contact-sidebar"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesOverview } from "@/components/services/services-overview"
import { DeliveryProcess } from "@/components/services/delivery-process"
import { TechStack } from "@/components/services/tech-stack"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Enterprise Technology Services | Permus Software House",
  description: "AI-driven solutions, digital transformation, and enterprise software delivery designed for long-term growth. Full-stack development, AI automation, and scalable platforms.",
  keywords: ["Enterprise Services", "AI Solutions", "Digital Transformation", "Full-Stack Development", "Enterprise Platforms", "Dubai Software"],
  openGraph: {
    title: "Enterprise Technology Services | Permus Software House",
    description: "AI-driven solutions, digital transformation, and enterprise software delivery designed for long-term growth.",
    type: "website",
    locale: "en_AE",
    siteName: "Permus Software House",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-midnight-navy">
      <Navigation />
      <SocialSidebar />
      <ContactSidebar />
      
      <ServicesHero />
      <ServicesOverview />
      <DeliveryProcess />
      <TechStack />
      <ServicesCTA />
      
      <Footer />
    </main>
  )
}
