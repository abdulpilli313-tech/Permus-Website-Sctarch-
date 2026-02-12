"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"

export function ResourcesCta() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 12% 18%, #86E9FF 0%, rgba(134, 233, 255, 0) 55%), radial-gradient(70% 70% at 20% 82%, #A7A1FF 0%, rgba(167, 161, 255, 0) 60%), radial-gradient(80% 80% at 55% 35%, #5B21FF 0%, rgba(91, 33, 255, 0) 65%), linear-gradient(135deg, #26148C 0%, #5B21FF 35%, #0D1433 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-navy/70 via-midnight-navy/30 to-transparent" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-interface-grey mb-6">
              Stay Ahead
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-interface-grey mb-4 text-balance">
              Stay Ahead with Intelligent Insights
            </h2>
            <p className="text-lg text-interface-grey/70 mb-8 max-w-xl">
              Ready to transform your enterprise with AI-driven solutions? Our experts are here to help.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-white/10 text-interface-grey hover:text-data-cyan border border-white/20 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(134,233,255,0.4)]"
              >
                Book a Demo
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
