"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"

export function ProductsCTA() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <section ref={ref} className="relative py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/20 via-midnight-navy to-core-violet/30" />
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(134, 233, 255, 0.5) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(134, 233, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px] bg-electric-violet/20" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[120px] bg-data-cyan/10" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-interface-grey mb-6 text-balance"
            >
              Explore Our{" "}
              <span className="text-data-cyan">Intelligent Platforms</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-interface-grey/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Discover how Permus products can transform your enterprise operations. 
              Schedule a personalized demonstration today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                onClick={() => setIsDemoOpen(true)}
                className="bg-electric-violet hover:bg-electric-violet/90 text-white px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,33,255,0.4)]"
              >
                Book a Demo
              </Button>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-6 text-lg font-semibold text-interface-grey hover:text-data-cyan transition-colors group"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <BookDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
