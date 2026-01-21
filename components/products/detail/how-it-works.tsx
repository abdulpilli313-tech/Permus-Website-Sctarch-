"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import type { Product } from "@/lib/products-data"

interface HowItWorksProps {
  product: Product
}

export function HowItWorks({ product }: HowItWorksProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #0D1433 0%, ${product.color}08 50%, #0D1433 100%)`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-interface-grey/80 mb-6">
            Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-interface-grey mb-6 text-balance">
            How <span style={{ color: product.color }}>{product.name}</span> Works
          </h2>
          <p className="text-xl text-interface-grey/60 max-w-2xl mx-auto">
            A streamlined approach to delivering intelligent results
          </p>
        </motion.div>

        {/* Desktop horizontal flow */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Progress bar */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-electric-violet/10 -translate-y-1/2" />
            <motion.div 
              className="absolute top-1/2 left-0 h-1 -translate-y-1/2 rounded-full"
              style={{ backgroundColor: product.color }}
              initial={{ width: "0%" }}
              animate={isInView ? { width: `${((activeStep + 1) / product.howItWorks.length) * 100}%` } : {}}
              transition={{ duration: 0.5 }}
            />
            
            <div className="relative flex justify-between">
              {product.howItWorks.map((step, index) => (
                <button
                  type="button"
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center group"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                      index <= activeStep 
                        ? "text-white" 
                        : "bg-midnight-navy border-2 border-electric-violet/30 text-interface-grey/50"
                    }`}
                    style={{
                      backgroundColor: index <= activeStep ? product.color : undefined,
                      boxShadow: index === activeStep ? `0 0 30px ${product.color}50` : undefined
                    }}
                  >
                    {step.step}
                  </motion.div>
                  <span className={`mt-4 text-sm font-medium transition-colors ${
                    index === activeStep ? "text-interface-grey" : "text-interface-grey/50"
                  }`}>
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active step content */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-12 text-center max-w-3xl mx-auto"
          >
            <h3 
              className="font-serif text-2xl font-bold mb-4"
              style={{ color: product.color }}
            >
              Step {product.howItWorks[activeStep].step}: {product.howItWorks[activeStep].title}
            </h3>
            <p className="text-lg text-interface-grey/70 leading-relaxed">
              {product.howItWorks[activeStep].description}
            </p>
          </motion.div>
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-6">
          {product.howItWorks.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-xl p-6 relative"
            >
              {/* Connecting line */}
              {index < product.howItWorks.length - 1 && (
                <div 
                  className="absolute left-9 top-full w-0.5 h-6 z-0"
                  style={{ backgroundColor: `${product.color}30` }}
                />
              )}
              
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0"
                  style={{ backgroundColor: product.color }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-interface-grey mb-2">
                    {step.title}
                  </h3>
                  <p className="text-interface-grey/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
