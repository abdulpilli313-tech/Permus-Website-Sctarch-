"use client"

import { useEffect, useRef, useState } from "react"
import {
  Landmark,
  HeartPulse,
  Factory,
  Truck,
  ShieldCheck,
  ShoppingBag,
  Building2,
  PlaneTakeoff,
  Wifi,
  Zap,
} from "lucide-react"

const industries = [
  { title: "Finance", icon: Landmark },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Manufacturing", icon: Factory },
  { title: "Logistics", icon: Truck },
  { title: "Government", icon: ShieldCheck },
  { title: "Retail", icon: ShoppingBag },
  { title: "Real Estate", icon: Building2 },
  { title: "Aviation", icon: PlaneTakeoff },
  { title: "Telecom", icon: Wifi },
  { title: "Energy", icon: Zap },
]

export function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [animate, setAnimate] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mediaQuery.matches)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
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
    <section className="relative py-20 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-navy via-core-violet/10 to-midnight-navy" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-electric-violet/10 rounded-full blur-[160px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-data-cyan text-sm font-semibold tracking-wider uppercase mb-4">
              Our Solutions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey text-balance">
              Industries
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              trackRef.current?.scrollBy({ left: 260, behavior: reduceMotion ? "auto" : "smooth" })
            }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-electric-violet text-interface-grey shadow-[0_0_24px_rgba(91,33,255,0.45)] hover:shadow-[0_0_30px_rgba(91,33,255,0.6)] transition-all"
            aria-label="Scroll industries"
          >
            →
          </button>
        </div>

        <div
          ref={trackRef}
          className={`flex items-center gap-8 overflow-x-auto pb-2 scrollbar-hide ${animate && !reduceMotion ? "animate-stripe-sweep" : ""}`}
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.title}
                className="flex flex-col items-center min-w-[180px] animate-slide-in"
                style={{ animationDelay: `${index * 50}ms`, scrollSnapAlign: "start" }}
              >
                <div className="rounded-full p-[1px] bg-gradient-to-br from-electric-violet via-data-cyan to-muted-lavender">
                  <div className="w-32 h-32 rounded-full bg-midnight-navy/80 border border-white/10 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-interface-grey" />
                  </div>
                </div>
                <span className="mt-4 text-sm uppercase tracking-[0.2em] text-interface-grey/70">
                  {industry.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
