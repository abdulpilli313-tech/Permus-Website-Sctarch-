"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Lightbulb, Users } from "lucide-react"
import type { Product } from "@/lib/products-data"

interface WhatItDoesProps {
  product: Product
}

const sections = [
  { key: "purpose", icon: Target, label: "Core Purpose" },
  { key: "problem", icon: Lightbulb, label: "Problem We Solve" },
  { key: "audience", icon: Users, label: "Built For" },
]

export function WhatItDoes({ product }: WhatItDoesProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-midnight-navy overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-electric-violet/20 to-transparent" />
        <div 
          className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10"
          style={{ backgroundColor: product.color }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-interface-grey/80 mb-6">
            Overview
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-interface-grey mb-6 text-balance">
            What <span style={{ color: product.color }}>{product.name}</span> Does
          </h2>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => {
            const Icon = section.icon
            const content = product.whatItDoes[section.key as keyof typeof product.whatItDoes]
            
            return (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card rounded-2xl p-8 relative group"
              >
                {/* Top accent line */}
                <div 
                  className="absolute top-0 left-6 right-6 h-px opacity-50"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${product.color}, transparent)` 
                  }}
                />
                
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${product.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: product.color }} />
                </div>
                
                <h3 className="font-serif text-xl font-bold text-interface-grey mb-4">
                  {section.label}
                </h3>
                
                <p className="text-interface-grey/60 leading-relaxed">
                  {content}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
