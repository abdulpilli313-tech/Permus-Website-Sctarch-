"use client"

import { Shield, Cpu, Lock, Handshake } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Enterprise-Grade Delivery",
    description: "Proven methodologies and quality standards trusted by leading organizations.",
  },
  {
    icon: Cpu,
    title: "AI-First Approach",
    description: "Intelligent solutions powered by cutting-edge machine learning and automation.",
  },
  {
    icon: Lock,
    title: "Secure & Scalable Solutions",
    description: "Architecture designed for growth with enterprise security at its core.",
  },
  {
    icon: Handshake,
    title: "Long-Term Technology Partner",
    description: "Committed to your success beyond project delivery with ongoing support.",
  },
]

export function WhyContact() {
  return (
    <section className="py-16 md:py-24 relative bg-core-violet/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-interface-grey mb-4">
              Why Partner with Permus
            </h2>
            <p className="text-interface-grey/60 max-w-xl mx-auto">
              Enterprise decision-makers choose us for our proven track record and commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.title}
                  className="flex items-start gap-4 p-6 rounded-xl bg-midnight-navy/40 border border-electric-violet/10 hover:border-electric-violet/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-electric-violet/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-data-cyan" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-interface-grey mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-interface-grey/60 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
