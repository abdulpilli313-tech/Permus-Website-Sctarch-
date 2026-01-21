"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"

export function AboutCta() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <>
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/20 via-core-violet/30 to-midnight-navy" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(134, 233, 255, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(134, 233, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-violet/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-data-cyan/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-interface-grey/10 border border-interface-grey/20 mb-8">
              <span className="text-sm font-medium text-interface-grey">Ready to Start?</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-interface-grey mb-6 leading-tight text-balance">
              Partner with a Team That Builds for the Future
            </h2>

            {/* Subtext */}
            <p className="text-xl text-interface-grey/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're ready to transform your operations or exploring what's possible, we're here to help you take the next step.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-interface-grey text-midnight-navy hover:bg-interface-grey/90 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(241,242,244,0.3)] group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-interface-grey/30 text-interface-grey hover:bg-interface-grey/10 px-8 py-6 text-lg font-semibold rounded-xl bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-10 border-t border-interface-grey/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-data-cyan mb-1">50+</div>
                  <div className="text-sm text-interface-grey/50">Enterprise Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-electric-violet mb-1">15+</div>
                  <div className="text-sm text-interface-grey/50">Industries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-muted-lavender mb-1">98%</div>
                  <div className="text-sm text-interface-grey/50">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-data-cyan mb-1">24/7</div>
                  <div className="text-sm text-interface-grey/50">Global Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  )
}
