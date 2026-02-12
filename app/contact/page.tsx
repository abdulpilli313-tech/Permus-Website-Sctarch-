import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"
import { ContactSidebar } from "@/components/contact-sidebar"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactOptions } from "@/components/contact/contact-options"
import { EnterpriseForm } from "@/components/contact/enterprise-form"
import { WhyContact } from "@/components/contact/why-contact"
import { LocationSection } from "@/components/contact/location-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Contact Us | Permus Software House | Dubai",
  description: "Connect with Permus Software House to discuss AI solutions, digital transformation, or enterprise software development. Based in Dubai, serving clients globally.",
  openGraph: {
    title: "Contact Permus Software House",
    description: "Connect with Permus to discuss AI solutions, digital transformation, or enterprise software development.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-midnight-navy">
      <Navigation />
      <SocialSidebar />
      <ContactSidebar />
      
      {/* Section 1: Contact Hero */}
      <ContactHero />
      
      {/* Section 2: Contact Options */}
      <ContactOptions />
      
      {/* Section 3: Enterprise Contact Form */}
      {/* <EnterpriseForm />  need to remove */}

      {/* CTA Section */}
      <CTASection />
      
      {/* Section 4: Why Contact Permus */}
      <WhyContact />
      
      {/* Section 5: Location & Presence */}
      <LocationSection />
      
      <Footer />
    </main>
  )
}
