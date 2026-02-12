import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"
import { ContactSidebar } from "@/components/contact-sidebar"
import { CinematicHero } from "@/components/products/cinematic-hero"
import { ProductPhilosophy } from "@/components/products/product-philosophy"
import { ProductComparison } from "@/components/products/product-comparison"
import { FutureProducts } from "@/components/products/future-products"
import { ProductsCTA } from "@/components/products/products-cta"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Products | Permus Software House - Enterprise AI Platforms",
  description: "Discover Permus flagship products: MyndLab for AI-powered decision intelligence, AssetGo for intelligent asset management, and EquiDesk for unified operations.",
  openGraph: {
    title: "Products | Permus Software House",
    description: "Enterprise-grade AI platforms built to transform how organizations operate.",
  },
}

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen bg-midnight-navy">
      <Navigation />
      <SocialSidebar />
      <ContactSidebar />
      
      {/* Cinematic product hero */}
      <CinematicHero />
      
      {/* Product philosophy / story layer */}
      <ProductPhilosophy />
      
      {/* Product comparison snapshot */}
      <ProductComparison />
      
      {/* Future products teaser */}
      <FutureProducts />
      
      {/* Final CTA */}
      <ProductsCTA />
      <CTASection/>
      
      <Footer />
    </main>
  )
}
