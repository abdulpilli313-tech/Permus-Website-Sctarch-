"use client"

import React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  BarChart3, MessageSquare, AlertTriangle, Shield, Link2, Cpu,
  Wifi, Wrench, Map, CheckCircle, Smartphone, DollarSign,
  GitBranch, Search, Inbox, FileText, Users, LayoutGrid
} from "lucide-react"
import type { Product } from "@/lib/products-data"

interface KeyFeaturesProps {
  product: Product
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  chart: BarChart3,
  message: MessageSquare,
  alert: AlertTriangle,
  shield: Shield,
  link: Link2,
  cpu: Cpu,
  wifi: Wifi,
  tool: Wrench,
  map: Map,
  check: CheckCircle,
  smartphone: Smartphone,
  dollar: DollarSign,
  workflow: GitBranch,
  search: Search,
  inbox: Inbox,
  file: FileText,
  users: Users,
  layout: LayoutGrid,
}

export function KeyFeatures({ product }: KeyFeaturesProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-midnight-navy overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-electric-violet/20 to-transparent" />
        <div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[250px] opacity-10"
          style={{ backgroundColor: product.accentColor }}
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
            Capabilities
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-interface-grey mb-6 text-balance">
            Key <span style={{ color: product.color }}>Features</span>
          </h2>
          <p className="text-xl text-interface-grey/60 max-w-2xl mx-auto">
            Enterprise-grade capabilities designed for scale and performance
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {product.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Cpu
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="glass-card rounded-2xl p-6 group hover:border-electric-violet/30 transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${product.color}15`,
                  }}
                >
                  <Icon 
                    className="w-6 h-6 transition-colors" 
                    style={{ color: product.color }} 
                  />
                </div>
                
                <h3 className="font-serif text-lg font-bold text-interface-grey mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-interface-grey/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
