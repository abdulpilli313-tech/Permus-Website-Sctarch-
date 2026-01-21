"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"

export function ContactCTA() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const scrollToForm = () => {
    const form = document.querySelector("form")
    form?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/20 via-core-violet/30 to-midnight-navy" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-violet/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-data-cyan/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 text-balance">
          Start Building Intelligent Software Today
        </h2>
        <p className="text-interface-grey/70 text-lg max-w-2xl mx-auto mb-10">
          Partner with Permus to transform your digital vision into enterprise-grade reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => setIsDemoOpen(true)}
            className="bg-electric-violet hover:bg-electric-violet/90 text-primary-foreground px-8 py-3 h-12 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,33,255,0.4)] min-w-[180px]"
          >
            Book a Demo
          </Button>
          <Button
            onClick={scrollToForm}
            variant="outline"
            className="border-interface-grey/30 text-interface-grey hover:bg-interface-grey/10 hover:border-interface-grey/50 px-8 py-3 h-12 rounded-lg font-medium min-w-[180px] bg-transparent"
          >
            Send Inquiry
          </Button>
        </div>
      </div>

      <BookDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  )
}
