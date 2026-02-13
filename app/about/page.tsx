import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"
import { ContactSidebar } from "@/components/contact-sidebar"
import { AboutHero } from "@/components/about/about-hero"
import { WhoWeAre } from "@/components/about/who-we-are"
import { VisionMission } from "@/components/about/vision-mission"
import { ValuesSection } from "@/components/about/values-section"
import { LeadershipSection } from "@/components/about/leadership-section"
import { HowWeOperate } from "@/components/about/how-we-operate"
import { GlobalPresence } from "@/components/about/global-presence"
import { AboutCta } from "@/components/about/about-cta"
import { LocationSection } from "@/components/contact/location-section"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "About Us | Permus Software House | Enterprise AI & Digital Innovation",
  description:
    "Learn about Permus Software House - a Dubai-based enterprise software company delivering AI solutions, digital transformation, and scalable platforms to global markets.",
  keywords: [
    "About Permus",
    "Enterprise Software Company",
    "Dubai Software House",
    "AI Company UAE",
    "Digital Transformation Partner",
  ],
  openGraph: {
    title: "About Us | Permus Software House",
    description:
      "Building Intelligent Software for a Digital-First World. Enterprise AI and software solutions from Dubai to global markets.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-midnight-navy">
      <Navigation />
      <SocialSidebar />
      <ContactSidebar />

      {/* Section 1: Executive Intro Hero */}
      <AboutHero />

      {/* Section 2: Who We Are */}
      <WhoWeAre />

      {/* Section 3: Vision & Mission */}
      <VisionMission />

      {/* Section 4: Our Values */}
      <ValuesSection />

      {/* Section 5: Leadership & Team */}
      <LeadershipSection />

      {/* Section 6: How We Operate */}
      <HowWeOperate />

      {/* Section 7: Global & Local Presence */}
      {/* <GlobalPresence /> */}
      <LocationSection />
      {/* <CTASection /> */}

      {/* Section 8: Final CTA */}
      {/* <AboutCta /> */}

      <Footer />
    </main>
  )
}
