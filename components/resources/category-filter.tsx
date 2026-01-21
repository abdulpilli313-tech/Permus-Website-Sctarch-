"use client"

import { cn } from "@/lib/utils"
import { categories, type BlogCategory } from "@/lib/blog-data"

interface CategoryFilterProps {
  activeCategory: BlogCategory | "All"
  onCategoryChange: (category: BlogCategory | "All") => void
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <section className="py-8 bg-midnight-navy border-y border-electric-violet/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Horizontal scrollable filter bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200",
                  activeCategory === category
                    ? "bg-electric-violet text-primary-foreground"
                    : "bg-transparent text-interface-grey/70 hover:text-interface-grey hover:bg-electric-violet/10 border border-electric-violet/20"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
