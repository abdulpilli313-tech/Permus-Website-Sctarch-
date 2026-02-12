"use client"

import { useState } from "react"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { SocialSidebar } from "@/components/social-sidebar"
import { ContactSidebar } from "@/components/contact-sidebar"
import { Footer } from "@/components/footer"
import { ResourcesHero } from "@/components/resources/resources-hero"
import { FeaturedArticle } from "@/components/resources/featured-article"
import { CategoryFilter } from "@/components/resources/category-filter"
import { ArticlesGrid } from "@/components/resources/articles-grid"
import { ResourcesCta } from "@/components/resources/resources-cta"
import { getPostsByCategory, type BlogCategory } from "@/lib/blog-data"
import { CTASection } from "@/components/cta-section"

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All")
  const posts = getPostsByCategory(activeCategory)

  return (
    <main className="min-h-screen bg-midnight-navy">
      <Navigation />
      <SocialSidebar />
      <ContactSidebar />
      
      <ResourcesHero />
      <FeaturedArticle />
      <CategoryFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      <ArticlesGrid posts={posts} />
      {/* <ResourcesCta /> */}
      <CTASection/>
      
      
      <Footer />
    </main>
  )
}
