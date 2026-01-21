import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"
import { ContactSidebar } from "@/components/contact-sidebar"
import { ProductHero } from "@/components/products/detail/product-hero"
import { WhatItDoes } from "@/components/products/detail/what-it-does"
import { HowItWorks } from "@/components/products/detail/how-it-works"
import { KeyFeatures } from "@/components/products/detail/key-features"
import { UseCases } from "@/components/products/detail/use-cases"
import { TechArchitecture } from "@/components/products/detail/tech-architecture"
import { ProductCTA } from "@/components/products/detail/product-cta"
import { products, getProductBySlug } from "@/lib/products-data"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const product = getProductBySlug(resolvedParams.slug)
  
  if (!product) {
    return {
      title: "Product Not Found | Permus Software House",
    }
  }

  return {
    title: `${product.name} | ${product.tagline} | Permus Software House`,
    description: product.heroDescription,
    openGraph: {
      title: `${product.name} - ${product.tagline}`,
      description: product.heroDescription,
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params
  const product = getProductBySlug(resolvedParams.slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="relative min-h-screen bg-midnight-navy">
      <Navigation />
      <SocialSidebar />
      <ContactSidebar />
      
      {/* Product Hero */}
      <ProductHero product={product} />
      
      {/* What It Does */}
      <WhatItDoes product={product} />
      
      {/* How It Works */}
      <HowItWorks product={product} />
      
      {/* Key Features */}
      <KeyFeatures product={product} />
      
      {/* Use Cases & Industries */}
      <UseCases product={product} />
      
      {/* Tech Stack & Architecture */}
      <TechArchitecture product={product} />
      
      {/* Final CTA */}
      <ProductCTA product={product} />
      
      <Footer />
    </main>
  )
}
