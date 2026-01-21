"use client"

import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { getFeaturedPost } from "@/lib/blog-data"

export function FeaturedArticle() {
  const featured = getFeaturedPost()

  if (!featured) return null

  return (
    <section className="py-16 bg-midnight-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="mb-8">
            <span className="text-sm font-medium text-electric-violet uppercase tracking-wider">
              Featured Article
            </span>
          </div>

          {/* Featured card */}
          <Link href={`/resources/${featured.slug}`} className="block group">
            <article className="glass-card rounded-2xl p-8 md:p-12 transition-all duration-300 hover:border-electric-violet/40 glow-hover">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Content */}
                <div className="flex-1">
                  {/* Category */}
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-electric-violet/20 text-data-cyan rounded-full mb-4">
                    {featured.category}
                  </span>

                  {/* Title */}
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-interface-grey mb-4 group-hover:text-data-cyan transition-colors leading-tight">
                    {featured.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-interface-grey/70 text-lg leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-6 text-sm text-interface-grey/50">
                    <span>{featured.publishDate}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featured.readTime}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="lg:pl-8 lg:border-l lg:border-electric-violet/20">
                  <div className="flex items-center gap-2 text-electric-violet group-hover:text-data-cyan transition-colors font-medium">
                    <span>Read Article</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </div>
    </section>
  )
}
