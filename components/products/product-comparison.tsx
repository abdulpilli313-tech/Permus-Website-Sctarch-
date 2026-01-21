"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Brain, Box, Workflow } from "lucide-react"
import { products } from "@/lib/products-data"

const productIcons = {
  myndlab: Brain,
  assetgo: Box,
  equidesk: Workflow,
}

const productAudiences = {
  myndlab: "Data Teams & Executives",
  assetgo: "Operations & Facilities",
  equidesk: "Teams & Managers",
}

const productCapabilities = {
  myndlab: "Predictive Intelligence",
  assetgo: "Asset Lifecycle Control",
  equidesk: "Workflow Automation",
}

const productIndustries = {
  myndlab: "Finance, Healthcare, Retail",
  assetgo: "Real Estate, Logistics, Energy",
  equidesk: "Services, Government, HR",
}

export function ProductComparison() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-midnight-navy overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-electric-violet/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-interface-grey/80 mb-6">
            Product Ecosystem
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-interface-grey mb-6 text-balance">
            Find Your <span className="text-data-cyan">Perfect Fit</span>
          </h2>
          <p className="text-xl text-interface-grey/60 max-w-2xl mx-auto">
            Each platform addresses distinct enterprise challenges. Discover which solution aligns with your needs.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = productIcons[product.slug as keyof typeof productIcons]
            const audience = productAudiences[product.slug as keyof typeof productAudiences]
            const capability = productCapabilities[product.slug as keyof typeof productCapabilities]
            const industries = productIndustries[product.slug as keyof typeof productIndustries]
            
            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                {/* Header with color accent */}
                <div 
                  className="p-6 relative"
                  style={{ 
                    background: `linear-gradient(135deg, ${product.color}15, transparent)` 
                  }}
                >
                  <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: product.color }}
                  />
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${product.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: product.color }} />
                    </div>
                    <div>
                      <h3 
                        className="font-serif text-2xl font-bold"
                        style={{ color: product.color }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-interface-grey/60 text-sm">{product.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-interface-grey/40 font-medium">
                      Best For
                    </span>
                    <p className="text-interface-grey mt-1 font-medium">{audience}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs uppercase tracking-wider text-interface-grey/40 font-medium">
                      Core Capability
                    </span>
                    <p className="text-interface-grey mt-1 font-medium">{capability}</p>
                  </div>
                  
                  <div>
                    <span className="text-xs uppercase tracking-wider text-interface-grey/40 font-medium">
                      Industries
                    </span>
                    <p className="text-interface-grey mt-1 font-medium">{industries}</p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex items-center justify-between pt-4 border-t border-electric-violet/10 group/link"
                  >
                    <span className="text-sm font-medium text-interface-grey/70 group-hover/link:text-interface-grey transition-colors">
                      Explore {product.name}
                    </span>
                    <ArrowRight 
                      className="w-5 h-5 transition-all duration-300 group-hover/link:translate-x-1"
                      style={{ color: product.color }}
                    />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
