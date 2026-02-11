"use client"

import { useEffect, useMemo, useRef, useState } from "react"

const stats = [
  { value: "50+", label: "Enterprise Projects" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Support Coverage" },
  { value: "15+", label: "Countries Served" },
]

export function WhyPermusStats() {
  const statsRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const parsedStats = useMemo(
    () =>
      stats.map((stat) => {
        if (stat.value.includes("/")) {
          const [left, right] = stat.value.split("/")
          return { ...stat, number: Number(left), suffix: `/${right}` }
        }
        if (stat.value.includes("%")) {
          return { ...stat, number: Number(stat.value.replace("%", "")), suffix: "%" }
        }
        if (stat.value.includes("+")) {
          return { ...stat, number: Number(stat.value.replace("+", "")), suffix: "+" }
        }
        return { ...stat, number: Number(stat.value), suffix: "" }
      }),
    []
  )

  const [counts, setCounts] = useState(parsedStats.map(() => 0))

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

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setCounts(parsedStats.map((stat) => stat.number))
      return
    }

    const duration = 700
    const target = parsedStats.map((stat) => stat.number)
    const start = performance.now()
    let rafId = 0

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      setCounts(target.map((value) => Math.round(value * progress)))
      if (progress < 1) {
        rafId = requestAnimationFrame(step)
      }
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [inView, reduceMotion, parsedStats])

  return (
    <section
      ref={statsRef}
      className="rounded-2xl p-10 mt-16 bg-gradient-to-b from-midnight-navy to-core-violet border border-electric-violet/20 shadow-[0_24px_60px_rgba(13,20,51,0.35)]"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {parsedStats.map((stat, index) => (
          <div key={stat.label} className="text-center">
            <div className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-data-cyan to-muted-lavender bg-clip-text text-transparent mb-3">
              {counts[index]}
              {stat.suffix}
            </div>
            <div className="mx-auto h-0.5 w-14 bg-interface-grey/30 rounded-full overflow-hidden">
              <div
                className={`h-full bg-data-cyan transition-all duration-700 ease-out ${inView ? "w-full" : "w-0"}`}
              />
            </div>
            <div className="text-sm text-interface-grey/70 mt-3">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
