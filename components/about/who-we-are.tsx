"use client"

import { Building2, Brain, Handshake, Code2 } from "lucide-react"

const attributes = [
  {
    icon: Building2,
    title: "Enterprise-Grade",
    description: "Building software that meets the demands of large-scale operations with security and compliance at its core.",
  },
  {
    icon: Brain,
    title: "AI-First Mindset",
    description: "Integrating intelligent systems into every solution, transforming how businesses operate and compete.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partner",
    description: "Committed to relationships that extend beyond project delivery into continuous evolution and growth.",
  },
  {
    icon: Code2,
    title: "Business-Aligned Engineering",
    description: "Technical excellence driven by real business outcomes, not technology for technology's sake.",
  },
]

export function WhoWeAre() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-violet/10 border border-electric-violet/20 mb-6">
              <span className="text-sm font-medium text-muted-lavender">Who We Are</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 leading-tight">
              Enterprise Software. <br />
              <span className="text-electric-violet">Intelligent by Design.</span>
            </h2>

            <p className="text-lg text-interface-grey/70 mb-8 leading-relaxed">
              Permus is a Dubai-based software house that engineers enterprise-grade digital platforms. We combine deep technical expertise with AI-driven innovation to deliver systems that scale, adapt, and create lasting value.
            </p>

            <p className="text-interface-grey/60 leading-relaxed">
              Our approach is grounded in understanding business challenges first, then engineering solutions that address them with precision. We are not a vendor—we are a technology partner invested in your long-term success.
            </p>
          </div>

          {/* Right - Attributes Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {attributes.map((attr, index) => {
              const Icon = attr.icon
              return (
                <div
                  key={attr.title}
                  className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-electric-violet/40"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-electric-violet/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-data-cyan" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-interface-grey mb-2">
                    {attr.title}
                  </h3>
                  <p className="text-sm text-interface-grey/60 leading-relaxed">
                    {attr.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
