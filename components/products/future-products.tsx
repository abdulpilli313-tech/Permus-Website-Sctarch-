"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sparkles } from "lucide-react"

export function FutureProducts() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-navy via-core-violet/20 to-midnight-navy" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-electric-violet/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-electric-violet/20 flex items-center justify-center mx-auto mb-8"
          >
            <Sparkles className="w-8 h-8 text-electric-violet" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 text-balance"
          >
            More Intelligent Platforms{" "}
            <span className="text-muted-lavender">Coming Soon</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-interface-grey/60 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Our engineering teams are building the next generation of enterprise solutions. 
            Stay ahead with platforms designed to transform industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {["HealthAI", "FinanceFlow", "SupplyChain+"].map((name, index) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-interface-grey/50"
              >
                {name}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full glass text-sm font-medium text-electric-violet">
              + More
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
