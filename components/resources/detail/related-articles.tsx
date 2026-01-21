"use client"

import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { getRelatedPosts, type BlogPost, type BlogCategory } from "@/lib/blog-data"

interface RelatedArticlesProps {
  currentSlug: string
  category: BlogCategory
}

export function RelatedArticles({ currentSlug, category }: RelatedArticlesProps) {
  const relatedPosts = getRelatedPosts(currentSlug, category, 3)

  if (relatedPosts.length === 0) return null

  return (
    <section className="py-16 bg-midnight-navy border-t border-electric-violet/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <h2 className="font-serif text-2xl font-bold text-interface-grey mb-8">
            Related Articles
          </h2>

          {/* Related posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link key={post.slug} href={`/resources/${post.slug}`} className="group">
                <article className="h-full glass-card rounded-xl p-6 transition-all duration-300 hover:border-electric-violet/40 hover:translate-y-[-4px] flex flex-col">
                  {/* Category */}
                  <span className="inline-block w-fit px-3 py-1 text-xs font-medium bg-electric-violet/15 text-muted-lavender rounded-full mb-4">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-semibold text-interface-grey mb-3 group-hover:text-data-cyan transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  {/* Meta & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-electric-violet/10 mt-auto">
                    <div className="flex items-center gap-3 text-xs text-interface-grey/50">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-electric-violet group-hover:text-data-cyan group-hover:translate-x-1 transition-all" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
