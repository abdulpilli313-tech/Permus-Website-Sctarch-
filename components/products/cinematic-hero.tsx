"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products-data"

export function CinematicHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-midnight-navy">
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(91, 33, 255, 0.45) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(91, 33, 255, 0.45) 1px, transparent 1px)`,
            backgroundSize: "140px 140px",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <div className="flex h-screen flex-col lg:flex-row">
          {products.map((product) => (
            <article
              key={product.slug}
              className="group relative overflow-hidden border-b border-white/10 bg-midnight-navy/80 transition-[flex] duration-500 hover:z-10 hover:shadow-[0_30px_80px_rgba(13,20,51,0.6)] lg:border-b-0 lg:border-r lg:flex-[1] lg:hover:flex-[1.6]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-midnight-navy/80 via-midnight-navy/30 to-midnight-navy/90" />
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  background: `radial-gradient(120% 120% at 10% 15%, ${product.accentColor}45 0%, transparent 55%), radial-gradient(120% 120% at 90% 10%, ${product.color}65 0%, transparent 55%)`,
                }}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-midnight-navy/70 via-transparent to-transparent" />

              <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
                <h2
                  className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ color: product.color }}
                >
                  {product.name}
                </h2>
                <p className="text-interface-grey/85 text-xs md:text-sm font-semibold mb-6 transition-opacity duration-500 group-hover:opacity-100">
                  {product.tagline}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 group/cta border border-white/30 bg-white/10 text-interface-grey hover:text-data-cyan hover:border-data-cyan/60"
                >
                  <span>Enter Product</span>
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
