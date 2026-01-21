"use client"

import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { type BlogPost } from "@/lib/blog-data"

interface ArticlesGridProps {
  posts: BlogPost[]
}

export function ArticlesGrid({ posts }: ArticlesGridProps) {
  // Filter out the featured post from the grid
  const gridPosts = posts.filter(post => !post.featured)

  if (gridPosts.length === 0) {
    return (
      <section className="py-16 bg-midnight-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-interface-grey/60 text-lg">
              No articles found in this category.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-midnight-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
              <Link key={post.slug} href={`/resources/${post.slug}`} className="group">
                <article className="h-full glass-card rounded-xl p-6 transition-all duration-300 hover:border-electric-violet/40 hover:translate-y-[-4px] flex flex-col">
                  {/* Category */}
                  <span className="inline-block w-fit px-3 py-1 text-xs font-medium bg-electric-violet/15 text-muted-lavender rounded-full mb-4">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold text-interface-grey mb-3 group-hover:text-data-cyan transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-interface-grey/60 mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-electric-violet/10">
                    <div className="flex items-center gap-4 text-xs text-interface-grey/50">
                      <span>{post.publishDate}</span>
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
