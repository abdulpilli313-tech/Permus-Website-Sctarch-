"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"
import type { Product } from "@/lib/products-data"

interface ProductHeroProps {
  product: Product
}

export function ProductHero({ product }: ProductHeroProps) {
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <>
      <section ref={ref} className="relative min-h-screen overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 50% 30%, ${product.color}15, transparent 60%)`
            }}
          />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(${product.color}50 1px, transparent 1px), 
                               linear-gradient(90deg, ${product.color}50 1px, transparent 1px)`,
              backgroundSize: "80px 80px"
            }}
          />
          
          {/* Dynamic orbs */}
          <motion.div
            className="absolute w-[700px] h-[700px] rounded-full blur-[200px] opacity-20"
            style={{ 
              backgroundColor: product.color,
              top: "10%",
              right: "20%",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-15"
            style={{ 
              backgroundColor: product.accentColor,
              bottom: "20%",
              left: "10%",
            }}
            animate={{
              scale: [1, 1.3, 1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: i % 2 === 0 ? product.color : product.accentColor,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
              animate={{
                y: [0, -50 - Math.random() * 50, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <motion.div 
          style={{ opacity, scale, y }}
          className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32 pb-20"
        >
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto text-center">
              {/* Product badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
              >
                <span 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: product.color }}
                />
                <span className="text-sm font-medium text-interface-grey/80">
                  Enterprise Platform
                </span>
              </motion.div>

              {/* Product name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                style={{ color: product.color }}
              >
                {product.name}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif text-2xl md:text-3xl text-interface-grey/90 mb-6"
              >
                {product.tagline}
              </motion.p>

              {/* Hero description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-interface-grey/60 max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                {product.heroDescription}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  onClick={() => setIsDemoOpen(true)}
                  className="px-10 py-6 text-lg rounded-xl font-semibold transition-all duration-300 text-white"
                  style={{ 
                    backgroundColor: product.color,
                    boxShadow: `0 0 50px ${product.color}40`
                  }}
                >
                  Book a Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-interface-grey/50 uppercase tracking-widest">Discover</span>
            <div 
              className="w-px h-10 bg-gradient-to-b to-transparent"
              style={{ backgroundImage: `linear-gradient(to bottom, ${product.color}60, transparent)` }}
            />
          </motion.div>
        </div>
      </section>

      <BookDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  )
}
