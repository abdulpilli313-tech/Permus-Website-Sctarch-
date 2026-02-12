"use client"

import { cn } from "@/lib/utils"
import { categories, type BlogCategory } from "@/lib/blog-data"

interface CategoryFilterProps {
  activeCategory: BlogCategory | "All"
  onCategoryChange: (category: BlogCategory | "All") => void
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <section className="py-6 bg-midnight-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Horizontal scrollable filter bar */}
          <div className="rounded-full border border-electric-violet/20 bg-white/5 px-3 py-2 backdrop-blur-xl">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200",
                    activeCategory === category
                      ? "bg-gradient-to-r from-electric-violet to-data-cyan text-white shadow-[0_0_20px_rgba(134,233,255,0.35)]"
                      : "bg-transparent text-interface-grey/70 hover:text-interface-grey hover:bg-white/10 border border-white/15"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
