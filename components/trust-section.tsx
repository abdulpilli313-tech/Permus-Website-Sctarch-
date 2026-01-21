"use client"

import { Shield, Globe, Zap, Award } from "lucide-react"

const trustPoints = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols and compliance standards",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description: "Dubai-based innovation with worldwide delivery capabilities",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Agile methodologies for swift, quality-driven delivery",
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Track record of successful enterprise transformations",
  },
]

export function TrustSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-electric-violet/10 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-data-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            Trusted by Enterprises
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 text-balance">
            Building the Future of Enterprise Technology
          </h2>
          <p className="text-lg text-interface-grey/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            Permus Software House delivers enterprise-grade solutions that transform how businesses operate, 
            innovate, and compete in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={point.title}
                className="glass-card rounded-2xl p-6 group hover:border-electric-violet/40 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-electric-violet/20 flex items-center justify-center mb-4 group-hover:bg-electric-violet/30 transition-colors">
                  <Icon className="w-6 h-6 text-data-cyan" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-interface-grey mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-interface-grey/60 leading-relaxed">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
