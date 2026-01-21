"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"

export function BlogCta() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-core-violet/50 via-electric-violet/20 to-midnight-navy" />
        
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-violet to-transparent" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Headline */}
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-interface-grey mb-6 text-balance">
              Want to Explore Intelligent Solutions?
            </h2>

            {/* Subtext */}
            <p className="text-interface-grey/70 mb-8 max-w-xl mx-auto">
              Let our team help you build enterprise-grade AI solutions tailored to your business needs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-electric-violet hover:bg-electric-violet/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,33,255,0.4)]"
              >
                Book a Demo
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-interface-grey/30 text-interface-grey hover:bg-interface-grey/10 px-8 py-3 rounded-lg font-semibold bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BookDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  )
}
