"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp } from "lucide-react"
import type { Product } from "@/lib/products-data"

interface UseCasesProps {
  product: Product
}

export function UseCases({ product }: UseCasesProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #0D1433 0%, ${product.color}05 50%, #0D1433 100%)`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-interface-grey/80 mb-6">
            Applications
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-interface-grey mb-6 text-balance">
            Use Cases & <span style={{ color: product.color }}>Industries</span>
          </h2>
          <p className="text-xl text-interface-grey/60 max-w-2xl mx-auto">
            Real-world applications delivering measurable impact
          </p>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {product.useCases.map((useCase, index) => (
            <motion.div
              key={useCase.industry}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group"
            >
              {/* Accent corner */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full"
                style={{ backgroundColor: product.color }}
              />
              
              <div className="relative">
                {/* Industry badge */}
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ 
                    backgroundColor: `${product.color}20`,
                    color: product.color
                  }}
                >
                  {useCase.industry}
                </span>
                
                {/* Application */}
                <h3 className="font-serif text-xl font-bold text-interface-grey mb-3">
                  {useCase.application}
                </h3>
                
                {/* Impact */}
                <div className="flex items-center gap-2 text-data-cyan">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">{useCase.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
