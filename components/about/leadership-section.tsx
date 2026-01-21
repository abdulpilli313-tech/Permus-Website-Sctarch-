"use client"

import { Code2, Brain, Layers, Rocket } from "lucide-react"

const teamHighlights = [
  {
    icon: Code2,
    title: "Experienced Engineers",
    description: "Full-stack architects with enterprise delivery backgrounds.",
  },
  {
    icon: Brain,
    title: "AI Specialists",
    description: "Machine learning experts building intelligent systems.",
  },
  {
    icon: Layers,
    title: "Product-Focused Teams",
    description: "Cross-functional groups aligned to business outcomes.",
  },
  {
    icon: Rocket,
    title: "Enterprise Mindset",
    description: "Delivery excellence with governance and scalability.",
  },
]

export function LeadershipSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-core-violet/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual representation */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-10 lg:p-12">
              {/* Abstract team visualization */}
              <div className="relative h-80">
                {/* Central hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-electric-violet to-core-violet flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-interface-grey">P</span>
                </div>

                {/* Orbital elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-electric-violet/20 animate-[spin_30s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-data-cyan" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-electric-violet/10 animate-[spin_45s_linear_infinite_reverse]">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-muted-lavender" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-electric-violet/5 animate-[spin_60s_linear_infinite]">
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-electric-violet" />
                </div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-16 h-16 rounded-lg bg-electric-violet/10 flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-electric-violet/50" />
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 rounded-lg bg-data-cyan/10 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-data-cyan/50" />
                </div>
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-lg bg-muted-lavender/10 flex items-center justify-center">
                  <Layers className="w-8 h-8 text-muted-lavender/50" />
                </div>
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-lg bg-core-violet/20 flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-core-violet/70" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-violet/10 border border-electric-violet/20 mb-6">
              <span className="text-sm font-medium text-muted-lavender">Our Team</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 leading-tight">
              Built by Engineers. <br />
              <span className="text-data-cyan">Driven by Excellence.</span>
            </h2>

            <p className="text-lg text-interface-grey/70 mb-10 leading-relaxed">
              Our team combines deep technical expertise with enterprise delivery experience. We are engineers, architects, and AI specialists united by a commitment to building software that matters.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {teamHighlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-electric-violet/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-electric-violet" />
                    </div>
                    <div>
                      <h3 className="font-medium text-interface-grey mb-1">{item.title}</h3>
                      <p className="text-sm text-interface-grey/60">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
