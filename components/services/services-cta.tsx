"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"

export function ServicesCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-core-violet/40 via-midnight-navy to-electric-violet/20" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-electric-violet/20 blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-data-cyan/10 blur-[120px]" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#5B21FF" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-cta-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <div className="w-2 h-2 rounded-full bg-data-cyan animate-pulse" />
              <span className="text-sm font-medium text-interface-grey/80">Start Your Transformation</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 leading-tight text-balance">
              {"Let's Transform Your Business with "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet via-data-cyan to-muted-lavender">
                Intelligent Technology
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-lg text-interface-grey/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with Permus to build scalable, AI-powered solutions that drive real business outcomes. Our enterprise expertise ensures your success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-electric-violet hover:bg-electric-violet/90 text-primary-foreground px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,33,255,0.5)] group"
              >
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-electric-violet/30 text-interface-grey hover:bg-electric-violet/10 px-8 py-6 rounded-xl text-lg font-semibold bg-transparent"
              >
                View Case Studies
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-electric-violet/10">
              <p className="text-sm text-interface-grey/50 mb-4">Trusted by enterprise leaders across industries</p>
              <div className="flex flex-wrap items-center justify-center gap-8 text-interface-grey/30">
                <span className="font-serif text-xl font-bold">Fortune 500</span>
                <span className="w-1 h-1 rounded-full bg-electric-violet/30" />
                <span className="font-serif text-xl font-bold">Government</span>
                <span className="w-1 h-1 rounded-full bg-electric-violet/30" />
                <span className="font-serif text-xl font-bold">Healthcare</span>
                <span className="w-1 h-1 rounded-full bg-electric-violet/30" />
                <span className="font-serif text-xl font-bold">Finance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
