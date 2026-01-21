"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Server, Layout, Cloud } from "lucide-react"
import type { Product } from "@/lib/products-data"

interface TechArchitectureProps {
  product: Product
}

const categories = [
  { key: "ai", label: "AI / ML", icon: Brain },
  { key: "backend", label: "Backend", icon: Server },
  { key: "frontend", label: "Frontend", icon: Layout },
  { key: "cloud", label: "Cloud & DevOps", icon: Cloud },
]

export function TechArchitecture({ product }: TechArchitectureProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-midnight-navy overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-electric-violet/20 to-transparent" />
        
        {/* Tech pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${product.color} 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
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
            Technology
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-interface-grey mb-6 text-balance">
            Tech Stack & <span style={{ color: product.color }}>Architecture</span>
          </h2>
          <p className="text-xl text-interface-grey/60 max-w-2xl mx-auto">
            Built on modern, enterprise-grade infrastructure
          </p>
        </motion.div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon
            const techs = product.techStack[category.key as keyof typeof product.techStack]
            
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card rounded-2xl p-6"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${product.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: product.color }} />
                </div>
                
                <h3 className="font-serif text-lg font-bold text-interface-grey mb-4">
                  {category.label}
                </h3>
                
                <div className="space-y-2">
                  {techs.map((tech) => (
                    <div 
                      key={tech}
                      className="flex items-center gap-2 text-sm text-interface-grey/70"
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: product.color }}
                      />
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
