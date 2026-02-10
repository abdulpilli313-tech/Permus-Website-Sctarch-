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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-data-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            Industries We Empower
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-5 text-balance">
            Trusted Across Critical Sectors
          </h2>
          <p className="text-lg text-interface-grey/70 leading-relaxed text-pretty">
            From regulated industries to fast-scaling enterprises, we deliver systems that power operations and innovation.
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-5 gap-6 ${animate && !reduceMotion ? "animate-stripe-sweep" : ""}`}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={industry.title}
                className="glass-card rounded-2xl px-6 py-5 border border-electric-violet/20 transition-all duration-300 ease-out hover:translate-y-[-2px] hover:border-electric-violet/40 animate-slide-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-electric-violet/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-data-cyan" />
                  </div>
                  <span className="text-interface-grey text-lg font-medium">
                    {industry.title}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
