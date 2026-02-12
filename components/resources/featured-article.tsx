"use client"

import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { getFeaturedPost } from "@/lib/blog-data"

export function FeaturedArticle() {
  const featured = getFeaturedPost()

  if (!featured) return null

  return (
    <section className="py-12 bg-midnight-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="text-sm font-semibold text-electric-violet uppercase tracking-wider">
              Featured
            </span>
            <span className="h-px w-12 bg-electric-violet/40" />
          </div>

          {/* Featured strip */}
          <Link href={`/resources/${featured.slug}`} className="block group">
            <article className="rounded-2xl border border-electric-violet/20 bg-white/5 backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-electric-violet/40 hover:shadow-[0_24px_60px_rgba(13,20,51,0.35)]">
              <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-8 items-center">
                <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/50 via-data-cyan/30 to-midnight-navy" />
                  <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-transparent via-white/10 to-midnight-navy/30" />
                </div>

                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-electric-violet/20 text-data-cyan rounded-full mb-4">
                    {featured.category}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-interface-grey mb-4 leading-tight group-hover:text-data-cyan transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-interface-grey/70 text-lg leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-interface-grey/50">
                    <span>{featured.publishDate}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featured.readTime}
                    </span>
                    <span className="flex items-center gap-2 text-data-cyan font-medium">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
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
