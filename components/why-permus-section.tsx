"use client"

import { CheckCircle2, Lock, Scale, Lightbulb, Users, Workflow } from "lucide-react"

const differentiators = [
  {
    icon: Lock,
    title: "Security-First Architecture",
    description: "Every solution is built with enterprise-grade security protocols, ensuring your data and operations remain protected.",
  },
  {
    icon: Scale,
    title: "Infinite Scalability",
    description: "Our architectures are designed to grow with your business, from startup scale to global enterprise operations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation at Core",
    description: "We leverage cutting-edge technologies and methodologies to deliver solutions that set you apart from competitors.",
  },
  {
    icon: Workflow,
    title: "Process Excellence",
    description: "Rigorous development processes ensure consistent quality, predictable timelines, and transparent communication.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work as an extension of your team, aligning deeply with your business goals and organizational culture.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description: "Successful implementations across diverse industries demonstrate our ability to deliver real business value.",
  },
]

const stats = [
  { value: "50+", label: "Enterprise Projects" },
  { value: "98%", label: "Client Retention" },
  { value: "24/7", label: "Support Coverage" },
  { value: "15+", label: "Countries Served" },
]

export function WhyPermusSection() {
  return (
    <section id="why-permus" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-navy via-core-violet/5 to-midnight-navy" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-electric-violet/5 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-data-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 text-balance">
            The Permus Advantage
          </h2>
          <p className="text-lg text-interface-grey/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            We combine technical excellence with business acumen to deliver solutions that drive measurable results.
          </p>
        </div>

        {/* Stats bar */}
        <div className="glass-card rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-bold bg-gradient-to-r from-electric-violet to-data-cyan bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-interface-grey/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 group hover:border-electric-violet/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-electric-violet/20 flex items-center justify-center shrink-0 group-hover:bg-electric-violet/30 transition-colors">
                    <Icon className="w-6 h-6 text-data-cyan" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-interface-grey mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-interface-grey/60 leading-relaxed">
                      {item.description}
                    </p>
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
