"use client"

import { useEffect, useRef, useState } from "react"
import { Search, PenTool, Wrench, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover & Plan",
    description: "Deep-dive analysis of your business objectives, technical landscape, and strategic requirements.",
    details: ["Stakeholder interviews", "Technical assessment", "Roadmap development"],
  },
  {
    icon: PenTool,
    number: "02",
    title: "Architect & Design",
    description: "Blueprint your solution with scalable architecture, intuitive UX, and robust technical foundations.",
    details: ["System architecture", "UX/UI design", "Security planning"],
  },
  {
    icon: Wrench,
    number: "03",
    title: "Build & Integrate",
    description: "Agile development with continuous integration, rigorous testing, and seamless deployment.",
    details: ["Sprint-based delivery", "Quality assurance", "Integration testing"],
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Scale & Optimize",
    description: "Ongoing optimization, monitoring, and evolution to maximize performance and business value.",
    details: ["Performance tuning", "Continuous improvement", "Strategic expansion"],
  },
]

export function DeliveryProcess() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-violet/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-interface-grey mb-4">
            How We Deliver
          </h2>
          <p className="text-interface-grey/60 max-w-2xl mx-auto">
            A proven methodology that ensures successful outcomes at every stage of your project.
          </p>
        </div>

        {/* Desktop horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-electric-violet/10">
              <div
                className="h-full bg-gradient-to-r from-electric-violet to-data-cyan transition-all duration-1000"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = index === activeStep
                const isPast = index < activeStep

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      "text-left transition-all duration-500",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Icon circle */}
                    <div className="relative mb-6">
                      <div
                        className={cn(
                          "w-[120px] h-[120px] rounded-2xl flex items-center justify-center transition-all duration-500 mx-auto",
                          isActive
                            ? "glass-card glow-violet scale-105"
                            : isPast
                            ? "glass-card border-data-cyan/30"
                            : "glass-card"
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-10 h-10 transition-colors duration-300",
                            isActive ? "text-data-cyan" : isPast ? "text-data-cyan/60" : "text-electric-violet/60"
                          )}
                        />
                      </div>
                      {/* Step number */}
                      <span
                        className={cn(
                          "absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300",
                          isActive
                            ? "bg-electric-violet text-primary-foreground"
                            : isPast
                            ? "bg-data-cyan/20 text-data-cyan"
                            : "bg-electric-violet/20 text-electric-violet"
                        )}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3
                        className={cn(
                          "font-serif text-lg font-bold mb-2 transition-colors duration-300",
                          isActive ? "text-interface-grey" : "text-interface-grey/70"
                        )}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={cn(
                          "text-sm leading-relaxed mb-4 transition-colors duration-300",
                          isActive ? "text-interface-grey/70" : "text-interface-grey/50"
                        )}
                      >
                        {step.description}
                      </p>

                      {/* Details */}
                      <div
                        className={cn(
                          "space-y-1 transition-all duration-500",
                          isActive ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                        )}
                      >
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center justify-center gap-2 text-xs text-data-cyan">
                            <div className="w-1 h-1 rounded-full bg-data-cyan" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className={cn(
                  "glass-card rounded-xl p-6 transition-all duration-500",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-electric-violet to-data-cyan flex items-center justify-center">
                    <Icon className="w-7 h-7 text-midnight-navy" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-electric-violet">{step.number}</span>
                      <h3 className="font-serif text-lg font-bold text-interface-grey">{step.title}</h3>
                    </div>
                    <p className="text-sm text-interface-grey/60 mb-3">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail) => (
                        <span key={detail} className="text-xs px-2 py-1 rounded-full bg-electric-violet/10 text-data-cyan">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
