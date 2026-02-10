"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How do we start an engagement with Permus?",
    answer:
      "We begin with a discovery session to understand your objectives, constraints, and current systems. From there, we define scope, architecture, and delivery phases aligned to your timelines.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We deliver across regulated and high‑growth sectors including finance, healthcare, logistics, manufacturing, government, retail, and enterprise SaaS.",
  },
  {
    question: "Do you build custom AI solutions or use off‑the‑shelf tools?",
    answer:
      "We design custom AI systems when differentiation matters and integrate proven platforms when speed is critical. The approach depends on your data maturity and business goals.",
  },
  {
    question: "How long does a typical enterprise project take?",
    answer:
      "Timelines vary by scope. We usually deliver an initial production‑ready release within 8–12 weeks, then scale through iterative phases.",
  },
  {
    question: "Can you work with our existing teams and infrastructure?",
    answer:
      "Yes. We integrate with internal teams, cloud providers, and legacy systems while maintaining security, compliance, and performance standards.",
  },
  {
    question: "What support is included after launch?",
    answer:
      "We provide monitoring, optimization, and roadmap support with optional managed services, ensuring continuous reliability and performance.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-navy via-core-violet/10 to-midnight-navy" />
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-electric-violet/10 rounded-full blur-[180px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-data-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            FAQs
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-interface-grey mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-interface-grey/70 leading-relaxed text-pretty">
            Clear answers to the most common questions about our enterprise AI,
            product engineering, and transformation services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {[0, 1].map((column) => (
            <div key={column} className="space-y-6">
              {faqs
                .map((faq, index) => ({ faq, index }))
                .filter(({ index }) => index % 2 === column)
                .map(({ faq, index }) => {
                  const isOpen = openIndex === index
                  return (
                    <div
                      key={faq.question}
                      className="glass-card rounded-2xl p-6 border border-electric-violet/20 transition-all duration-300"
                    >
                      <button
                        type="button"
                        className="w-full flex items-center justify-between gap-4 text-left"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <span className="text-interface-grey text-base md:text-lg font-medium">
                          {faq.question}
                        </span>
                        <span className="w-9 h-9 rounded-full bg-electric-violet/15 flex items-center justify-center text-data-cyan">
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-interface-grey/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
