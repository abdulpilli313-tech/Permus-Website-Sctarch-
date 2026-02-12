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
    <section className="relative py-14 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #A7A1FF 0%, #5B21FF 50%, #86E9FF 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-35 bg-gradient-to-br from-midnight-navy/30 via-transparent to-midnight-navy/70" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post, index) => {
              const isFeature = index % 5 === 0
              return (
                <Link key={post.slug} href={`/resources/${post.slug}`} className="group">
                  <article
                    className={`h-full rounded-2xl border border-electric-violet/30 bg-gradient-to-b from-midnight-navy to-core-violet backdrop-blur-xl transition-all duration-300 hover:border-electric-violet/50 hover:translate-y-[-4px] hover:shadow-[0_22px_60px_rgba(13,20,51,0.4)] flex flex-col ${
                      isFeature ? "lg:row-span-2" : ""
                    }`}
                  >
                    <div className={`relative ${isFeature ? "h-64" : "h-48"} rounded-t-2xl overflow-hidden border-b border-white/10`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/50 via-data-cyan/30 to-midnight-navy" />
                      <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-transparent via-white/10 to-midnight-navy/30" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="inline-flex w-fit items-center px-3 py-1 text-xs font-semibold bg-electric-violet/20 text-data-cyan rounded-full mb-4">
                        {post.category}
                      </span>

                      <div className="mb-3 flex items-center gap-4 text-xs text-interface-grey/50">
                        <span>{post.publishDate}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-semibold text-interface-grey mb-3 group-hover:text-data-cyan transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-interface-grey/65 mb-6 line-clamp-3 leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-electric-violet/10">
                        <span className="text-sm font-medium text-data-cyan">Read</span>
                        <ArrowRight className="w-4 h-4 text-electric-violet group-hover:text-data-cyan group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
