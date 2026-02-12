"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Layers, Maximize2, TrendingUp } from "lucide-react"

const philosophyPoints = [
  {
    icon: Brain,
    title: "AI-Driven Platforms",
    description: "Advanced AI for automation and predictive insight."
  },
  {
    icon: Layers,
    title: "Enterprise Architecture",
    description: "Battle-tested foundations with security at scale."
  },
  {
    icon: Maximize2,
    title: "Modular & Scalable",
    description: "Composable systems that grow with your business."
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description: "Continuous evolution with new capabilities."
  }
]

export function ProductPhilosophy() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-midnight-navy">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-navy via-core-violet/10 to-midnight-navy" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight-navy/80 via-midnight-navy/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-semibold text-interface-grey mb-5">
              Our Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-interface-grey mb-4 text-balance tracking-tight">
              Products Built for the <span className="text-data-cyan">Enterprise Future</span>
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-data-cyan via-muted-lavender to-transparent mb-5" />
            <p className="text-base md:text-lg text-interface-grey/70 leading-relaxed">
              Intelligent platforms engineered for scale, reliability, and measurable impact.
            </p>
          </motion.div>

          {/* Philosophy grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {philosophyPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group rounded-2xl p-5 border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-data-cyan/40 hover:shadow-[0_16px_40px_rgba(13,20,51,0.3)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-electric-violet/15 flex items-center justify-center shrink-0 group-hover:bg-electric-violet/25 transition-colors">
                    <Icon className="w-5 h-5 text-data-cyan" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-interface-grey mb-2">
                      {point.title}
                    </h3>
                    <div className="h-px w-10 bg-white/20 mb-2" />
                    <p className="text-sm text-interface-grey/65 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}
