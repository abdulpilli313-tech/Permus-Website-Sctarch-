"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"
import Image from "next/image"
import { DemoForm } from "@/components/demo-form"

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 88% 18%, #86E9FF 0%, rgba(134, 233, 255, 0) 55%), radial-gradient(70% 70% at 80% 82%, #A7A1FF 0%, rgba(167, 161, 255, 0) 60%), radial-gradient(80% 80% at 45% 35%, #5B21FF 0%, rgba(91, 33, 255, 0) 65%), linear-gradient(225deg, #26148C 0%, #5B21FF 35%, #0D1433 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-transparent via-white/20 to-midnight-navy/20" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-1/2 w-[520px] h-[520px] bg-electric-violet/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-data-cyan/15 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-interface-grey mb-6">
              Ready to Transform?
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-interface-grey leading-tight text-balance">
              READY TO FUTURE
            </h2>
            <p className="mt-4 text-2xl md:text-3xl text-interface-grey/90">
              Proof your Business
            </p>
            <p className="mt-4 text-base md:text-lg text-interface-grey/70 max-w-xl">
              Partner with Permus to build intelligent products, AI systems, and enterprise platforms that scale.
            </p>

            <Button
              size="lg"
              className="mt-8 group bg-white/10 text-interface-grey hover:text-data-cyan border border-white/20 px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(91,33,255,0.4)]"
              onClick={() => setIsModalOpen(true)}
            >
              Request a demo
              <span className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-electric-violet text-interface-grey transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Button>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-36 -top-16 hidden w-[320px] lg:block animate-float">
              <Image
                src="/elements/glass_arrow.svg"
                alt=""
                width={320}
                height={320}
                className="h-auto w-full opacity-90"
                priority
              />
            </div>

            <div className="relative rounded-3xl bg-white/60 p-8 shadow-[0_28px_70px_rgba(13,20,51,0.28)] border border-white/50 backdrop-blur-3xl overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-electric-violet/15 opacity-70" />
              <h3 className="text-2xl font-semibold text-midnight-navy mb-2">Get In Touch</h3>
              <p className="text-sm text-midnight-navy/70 mb-6">
                Tell us about your goals and we’ll get back within 24 hours.
              </p>
              <DemoForm />
            </div>
          </div>
        </div>
      </div>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
