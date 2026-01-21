"use client"

import type { BlogPost } from "@/lib/blog-data"

interface AuthorSectionProps {
  author: BlogPost["author"]
}

export function AuthorSection({ author }: AuthorSectionProps) {
  return (
    <section className="py-12 bg-midnight-navy border-t border-electric-violet/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            {/* Author avatar placeholder */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-violet to-data-cyan flex items-center justify-center shrink-0">
              <span className="text-xl font-serif font-bold text-midnight-navy">
                {author.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>

            {/* Author info */}
            <div>
              <h3 className="font-serif text-lg font-semibold text-interface-grey mb-1">
                {author.name}
              </h3>
              <p className="text-sm text-data-cyan mb-2">
                {author.role}
              </p>
              <p className="text-sm text-interface-grey/60 leading-relaxed">
                {author.credibility}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
