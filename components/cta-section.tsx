"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-core-violet via-electric-violet/30 to-midnight-navy" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-data-cyan/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-data-cyan/30 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-data-cyan/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-electric-violet/20 rounded-full blur-[120px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(134, 233, 255, 0.8) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-data-cyan animate-pulse" />
            <span className="text-sm font-medium text-data-cyan">Ready to Transform?</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-interface-grey mb-6 text-balance">
            {"Let's Build Something"}{" "}
            <span className="bg-gradient-to-r from-data-cyan to-muted-lavender bg-clip-text text-transparent">
              Intelligent
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-interface-grey/70 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Partner with Permus to bring your digital vision to life. From AI innovation to 
            enterprise transformation, {"we're"} ready to build the future together.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-interface-grey hover:bg-interface-grey/90 text-midnight-navy px-8 py-6 rounded-lg text-base font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(241,242,244,0.3)] group"
              onClick={() => setIsModalOpen(true)}
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-interface-grey/30 text-interface-grey hover:bg-interface-grey/10 hover:border-interface-grey/50 px-8 py-6 rounded-lg text-base font-medium transition-all duration-300"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Solutions
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-interface-grey/50">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-data-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-data-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Rapid Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-data-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
