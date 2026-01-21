"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"
import type { Product } from "@/lib/products-data"

interface ProductCTAProps {
  product: Product
}

export function ProductCTA({ product }: ProductCTAProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <section ref={ref} className="relative py-32 overflow-hidden">
        {/* Gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${product.color}20 0%, #0D1433 50%, ${product.accentColor}15 100%)`
          }}
        />
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${product.color}50 1px, transparent 1px), 
                             linear-gradient(90deg, ${product.color}50 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />

        {/* Glow orbs */}
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full blur-[200px] opacity-20"
          style={{ 
            backgroundColor: product.color,
            top: "20%",
            left: "10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[150px] opacity-15"
          style={{ 
            backgroundColor: product.accentColor,
            bottom: "10%",
            right: "15%",
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

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
              Ready to Experience{" "}
              <span style={{ color: product.color }}>{product.name}</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-interface-grey/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Schedule a personalized demonstration and discover how {product.name} can transform your operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                onClick={() => setIsDemoOpen(true)}
                className="px-12 py-6 text-lg rounded-xl font-semibold transition-all duration-300 text-white"
                style={{ 
                  backgroundColor: product.color,
                  boxShadow: `0 0 50px ${product.color}40`
                }}
              >
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <BookDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
