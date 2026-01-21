"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"

export function ResourcesCta() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-core-violet via-electric-violet/30 to-midnight-navy" />
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #86E9FF 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Headline */}
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-interface-grey mb-6 text-balance">
              Stay Ahead with Intelligent Insights
            </h2>

            {/* Subtext */}
            <p className="text-lg text-interface-grey/70 mb-10 max-w-xl mx-auto">
              Ready to transform your enterprise with AI-driven solutions? Our experts are here to help.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-data-cyan hover:bg-data-cyan/90 text-midnight-navy px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(134,233,255,0.4)]"
              >
                Book a Demo
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-interface-grey/30 text-interface-grey hover:bg-interface-grey/10 px-8 py-3 rounded-lg font-semibold bg-transparent"
              >
                <Link href="/contact">Contact Our Experts</Link>
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
