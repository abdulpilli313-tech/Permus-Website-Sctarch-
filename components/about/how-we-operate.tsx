"use client"

import { useState } from "react"
import { Search, PenTool, Code, TrendingUp, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Understanding Your Challenge",
    description: "We begin with deep discovery—understanding your business, challenges, and goals before writing a single line of code.",
    activities: ["Stakeholder interviews", "Technical assessment", "Requirements mapping"],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Architect",
    subtitle: "Designing the Solution",
    description: "Strategic architecture that balances innovation with pragmatism, ensuring scalability and maintainability.",
    activities: ["Solution architecture", "Technology selection", "Security planning"],
  },
  {
    number: "03",
    icon: Code,
    title: "Build",
    subtitle: "Engineering Excellence",
    description: "Agile delivery with controlled execution. Iterative development with continuous feedback and quality gates.",
    activities: ["Sprint-based delivery", "Continuous integration", "Quality assurance"],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Evolve",
    subtitle: "Growth & Optimization",
    description: "Post-launch partnership focused on optimization, feature evolution, and long-term platform health.",
    activities: ["Performance monitoring", "Feature roadmap", "Continuous improvement"],
  },
]

export function HowWeOperate() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-violet/10 border border-electric-violet/20 mb-6">
            <span className="text-sm font-medium text-muted-lavender">Our Approach</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-4">
            How We Operate
          </h2>

          <p className="text-lg text-interface-grey/60 max-w-2xl mx-auto">
            A structured methodology that combines agile flexibility with enterprise governance.
          </p>
        </div>

        {/* Desktop - Horizontal Timeline */}
        <div className="hidden lg:block">
          {/* Progress bar */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-electric-violet/10 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-electric-violet -translate-y-1/2 transition-all duration-500"
              style={{ width: `${(activePhase / (phases.length - 1)) * 100}%` }}
            />

            <div className="relative flex justify-between">
              {phases.map((phase, index) => {
                const Icon = phase.icon
                const isActive = index === activePhase
                const isPast = index < activePhase

                return (
                  <button
                    key={phase.number}
                    type="button"
                    onClick={() => setActivePhase(index)}
                    className={cn(
                      "relative flex flex-col items-center group",
                      "focus:outline-none"
                    )}
                  >
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300",
                        isActive
                          ? "bg-electric-violet shadow-[0_0_30px_rgba(91,33,255,0.4)]"
                          : isPast
                            ? "bg-electric-violet/50"
                            : "bg-electric-violet/10 group-hover:bg-electric-violet/20"
                      )}
                    >
                      <Icon className={cn(
                        "w-7 h-7 transition-colors",
                        isActive || isPast ? "text-interface-grey" : "text-interface-grey/50"
                      )} />
                    </div>

                    <span
                      className={cn(
                        "mt-4 font-serif text-lg font-semibold transition-colors",
                        isActive ? "text-interface-grey" : "text-interface-grey/50"
                      )}
                    >
                      {phase.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active phase content */}
          <div className="glass-card rounded-2xl p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-serif font-bold text-electric-violet/30">
                    {phases[activePhase].number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-interface-grey">
                      {phases[activePhase].title}
                    </h3>
                    <p className="text-data-cyan text-sm">{phases[activePhase].subtitle}</p>
                  </div>
                </div>
                <p className="text-interface-grey/70 leading-relaxed">
                  {phases[activePhase].description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-interface-grey/50 uppercase tracking-wider mb-4">
                  Key Activities
                </h4>
                <ul className="space-y-3">
                  {phases[activePhase].activities.map((activity) => (
                    <li key={activity} className="flex items-center gap-3 text-interface-grey/70">
                      <ChevronRight className="w-4 h-4 text-electric-violet" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile - Vertical Cards */}
        <div className="lg:hidden space-y-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <div key={phase.number} className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-electric-violet/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-electric-violet" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-electric-violet/60">{phase.number}</span>
                      <h3 className="font-serif text-xl font-bold text-interface-grey">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-sm text-data-cyan">{phase.subtitle}</p>
                  </div>
                </div>
                <p className="text-interface-grey/70 text-sm mb-4 leading-relaxed">
                  {phase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {phase.activities.map((activity) => (
                    <span
                      key={activity}
                      className="px-3 py-1 text-xs rounded-full bg-electric-violet/10 text-interface-grey/60"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
