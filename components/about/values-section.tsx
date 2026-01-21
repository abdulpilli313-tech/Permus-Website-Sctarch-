"use client"

import { Lightbulb, Award, ShieldCheck, Users, RefreshCcw } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation with Purpose",
    description: "Every innovation must solve a real problem. We build what matters.",
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    description: "Quality is non-negotiable. Our code reflects our standards.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Trust",
    description: "Enterprise security is foundational, not an afterthought.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    description: "We invest in relationships that create mutual, lasting value.",
  },
  {
    icon: RefreshCcw,
    title: "Continuous Evolution",
    description: "We adapt, learn, and improve—always moving forward.",
  },
]

export function ValuesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-violet/10 border border-electric-violet/20 mb-6">
            <span className="text-sm font-medium text-muted-lavender">What Guides Us</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-4">
            Our Values
          </h2>

          <p className="text-lg text-interface-grey/60 max-w-2xl mx-auto">
            The principles that define how we work, build, and partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="group relative"
              >
                <div className="glass-card rounded-xl p-6 h-full text-center transition-all duration-300 hover:border-electric-violet/40 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-violet/20 to-core-violet/20 flex items-center justify-center mx-auto mb-5 group-hover:from-electric-violet/30 group-hover:to-core-violet/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-data-cyan" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-semibold text-interface-grey mb-3">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-interface-grey/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Connector line (desktop only) */}
                {index < values.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-electric-violet/30 to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
