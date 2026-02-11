"use client"

import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

interface ArticleHeroProps {
  post: BlogPost
}

export function ArticleHero({ post }: ArticleHeroProps) {
  return (
    <section className="relative pt-32 pb-16 bg-midnight-navy overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-violet/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-data-cyan/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 text-sm text-interface-grey/60 hover:text-data-cyan transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category */}
          <span className="inline-block px-3 py-1 text-xs font-medium bg-electric-violet/20 text-data-cyan rounded-full mb-6">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 leading-tight text-balance">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-interface-grey/60">
            <span>{post.publishDate}</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="text-interface-grey/40">|</span>
            <span>By {post.author.name}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
