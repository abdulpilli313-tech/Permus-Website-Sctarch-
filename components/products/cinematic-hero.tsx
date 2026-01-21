"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { products } from "@/lib/products-data"

export function CinematicHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % products.length)
      }, 6000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % products.length)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setActiveIndex(index)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-midnight-navy">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(91, 33, 255, 0.5) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(91, 33, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: "100px 100px"
          }}
        />
        
        {/* Dynamic gradient orbs based on active product */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div 
              className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
              style={{ backgroundColor: products[activeIndex].color }}
            />
            <div 
              className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
              style={{ backgroundColor: products[activeIndex].accentColor }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Product panels container */}
        <div className="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
          <div className="container mx-auto">
            <div className="relative flex items-center justify-center">
              {/* Side products (desktop) */}
              <div className="hidden lg:flex absolute left-0 right-0 justify-between items-center pointer-events-none px-4">
                {products.map((product, index) => {
                  const offset = index - activeIndex
                  if (offset === 0) return null
                  
                  const isLeft = offset < 0 || (offset === 2 && activeIndex === 0)
                  const isRight = offset > 0 || (offset === -2 && activeIndex === 2)
                  
                  return (
                    <motion.div
                      key={product.slug}
                      initial={false}
                      animate={{
                        opacity: 0.3,
                        x: isLeft ? -50 : isRight ? 50 : 0,
                        scale: 0.7,
                      }}
                      className={`absolute ${isLeft ? "left-0" : "right-0"} pointer-events-auto cursor-pointer`}
                      onClick={() => handleDotClick(index)}
                    >
                      <div className="glass-card rounded-2xl p-8 w-[280px] transition-all duration-300 hover:opacity-60">
                        <h3 
                          className="font-serif text-2xl font-bold mb-2"
                          style={{ color: product.color }}
                        >
                          {product.name}
                        </h3>
                        <p className="text-interface-grey/50 text-sm line-clamp-2">
                          {product.tagline}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Active product - center stage */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center max-w-4xl mx-auto"
                >
                  {/* Product badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                  >
                    <span 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: products[activeIndex].color }}
                    />
                    <span className="text-sm font-medium text-interface-grey/80">
                      Flagship Platform
                    </span>
                  </motion.div>

                  {/* Product name */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight"
                    style={{ color: products[activeIndex].color }}
                  >
                    {products[activeIndex].name}
                  </motion.h1>

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-interface-grey/80 mb-4 font-serif"
                  >
                    {products[activeIndex].tagline}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-interface-grey/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
                  >
                    {products[activeIndex].description}
                  </motion.p>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      href={`/products/${products[activeIndex].slug}`}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 group"
                      style={{ 
                        backgroundColor: products[activeIndex].color,
                        boxShadow: `0 0 40px ${products[activeIndex].color}40`
                      }}
                    >
                      <span className="text-white">Enter Product</span>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="absolute bottom-12 left-0 right-0 z-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              {/* Arrow navigation */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-3 rounded-full glass hover:bg-electric-violet/20 transition-all duration-300 group"
                  aria-label="Previous product"
                >
                  <ChevronLeft className="w-6 h-6 text-interface-grey group-hover:text-data-cyan transition-colors" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-3 rounded-full glass hover:bg-electric-violet/20 transition-all duration-300 group"
                  aria-label="Next product"
                >
                  <ChevronRight className="w-6 h-6 text-interface-grey group-hover:text-data-cyan transition-colors" />
                </button>
              </div>

              {/* Dot indicators with labels */}
              <div className="flex items-center gap-6">
                {products.map((product, index) => (
                  <button
                    type="button"
                    key={product.slug}
                    onClick={() => handleDotClick(index)}
                    className="flex items-center gap-3 group"
                    aria-label={`Go to ${product.name}`}
                  >
                    <span 
                      className={`text-sm font-medium transition-all duration-300 ${
                        index === activeIndex 
                          ? "text-interface-grey" 
                          : "text-interface-grey/40 group-hover:text-interface-grey/70"
                      }`}
                    >
                      {product.name}
                    </span>
                    <div 
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === activeIndex ? "w-12" : "w-3 group-hover:w-6"
                      }`}
                      style={{ 
                        backgroundColor: index === activeIndex 
                          ? product.color 
                          : "rgba(241, 242, 244, 0.3)"
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Auto-play indicator */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`text-sm font-medium transition-colors ${
                    isAutoPlaying ? "text-data-cyan" : "text-interface-grey/50"
                  }`}
                  aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
                >
                  {isAutoPlaying ? "Auto" : "Paused"}
                </button>
                <div 
                  className={`w-2 h-2 rounded-full ${
                    isAutoPlaying ? "bg-data-cyan animate-pulse" : "bg-interface-grey/30"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-interface-grey/50 uppercase tracking-widest">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-electric-violet/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
