"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Layers, Maximize2, TrendingUp } from "lucide-react"

const philosophyPoints = [
  {
    icon: Brain,
    title: "AI-Driven Platforms",
    description: "Every product leverages advanced machine learning and artificial intelligence to deliver intelligent automation and predictive insights."
  },
  {
    icon: Layers,
    title: "Enterprise Architecture",
    description: "Built on robust, battle-tested foundations that handle millions of transactions while maintaining security and compliance."
  },
  {
    icon: Maximize2,
    title: "Modular & Scalable",
    description: "Designed as composable systems that grow with your organization, from startup to global enterprise."
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description: "Products evolve continuously with regular updates, new capabilities, and expanding integrations."
  }
]

export function ProductPhilosophy() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 bg-midnight-navy overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-electric-violet/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[200px] bg-core-violet/10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] bg-electric-violet/5" />
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
            Our Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-interface-grey mb-6 text-balance">
            Products Built for the{" "}
            <span className="text-electric-violet">Enterprise Future</span>
          </h2>
          <p className="text-xl text-interface-grey/60 max-w-3xl mx-auto leading-relaxed">
            We engineer intelligent platforms that transform how organizations operate. 
            Each product embodies our commitment to innovation, reliability, and measurable impact.
          </p>
        </motion.div>

        {/* Philosophy grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {philosophyPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-card rounded-2xl p-8 group hover:border-electric-violet/40 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-electric-violet/10 flex items-center justify-center shrink-0 group-hover:bg-electric-violet/20 transition-colors">
                    <Icon className="w-7 h-7 text-electric-violet" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-interface-grey mb-3">
                      {point.title}
                    </h3>
                    <p className="text-interface-grey/60 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
