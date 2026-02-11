"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const highlightCards = [
  {
    title: "Expertise",
    description: "Senior teams for enterprise-grade delivery.",
    image: "/placeholder.jpg",
  },
  {
    title: "Enterprise",
    description: "Systems designed for scale and governance.",
    image: "/placeholder.jpg",
  },
  {
    title: "Precision",
    description: "Operational excellence with measurable impact.",
    image: "/placeholder.jpg",
  },
  {
    title: "Velocity",
    description: "From roadmap to production, faster.",
    image: "/placeholder.jpg",
  },
]

export function WhyPermusSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mediaQuery.matches)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-permus" className="relative py-24 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-data-cyan to-electric-violet" />
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-transparent via-white/30 to-midnight-navy/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-16">
          <span className="inline-block text-midnight-navy text-sm font-semibold tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-midnight-navy mb-6 text-balance tracking-tight">
            The Permus Advantage
          </h2>
          <p className="text-lg text-midnight-navy/80 max-w-2xl leading-relaxed text-pretty">
            We combine technical excellence with business acumen to deliver solutions that drive measurable results.
          </p>
        </div>

        {/* Highlight carousel */}
        <div className="flex items-center justify-between gap-6 mb-6">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-midnight-navy tracking-tight">
            What Sets Us Apart
          </h3>
          <button
            type="button"
            onClick={() => {
              trackRef.current?.scrollBy({ left: 360, behavior: reduceMotion ? "auto" : "smooth" })
            }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-midnight-navy text-white shadow-[0_0_24px_rgba(13,20,51,0.35)] hover:shadow-[0_0_30px_rgba(13,20,51,0.5)] transition-all"
            aria-label="Scroll highlights"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div
          ref={trackRef}
          className={`flex gap-6 overflow-x-auto pb-2 scrollbar-hide ${inView && !reduceMotion ? "animate-stripe-sweep" : ""}`}
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {highlightCards.map((card, index) => (
            <article
              key={card.title}
              className="group relative min-w-[280px] md:min-w-[360px] overflow-hidden rounded-2xl bg-white/70 border border-electric-violet/20 shadow-[0_16px_40px_rgba(13,20,51,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(13,20,51,0.18)] hover:border-electric-violet/40"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-electric-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src={card.image}
                alt={card.title}
                width={720}
                height={480}
                className="h-56 w-full object-cover rounded-b-none"
              />
              <div className="p-6">
                <h4 className="font-serif text-xl font-semibold text-midnight-navy tracking-tight">{card.title}</h4>
                <p className="mt-3 text-sm text-midnight-navy/70">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
