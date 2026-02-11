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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 10% 18%, #86E9FF 0%, rgba(134, 233, 255, 0) 55%), radial-gradient(70% 70% at 20% 82%, #A7A1FF 0%, rgba(167, 161, 255, 0) 60%), radial-gradient(80% 80% at 55% 35%, #5B21FF 0%, rgba(91, 33, 255, 0) 65%), linear-gradient(135deg, #26148C 0%, #5B21FF 35%, #0D1433 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-35 bg-gradient-to-br from-transparent via-white/20 to-midnight-navy/15" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 text-interface-grey text-sm font-semibold tracking-wider uppercase mb-4">
            FAQs
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-interface-grey mb-6 text-balance tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-interface-grey/80 leading-relaxed text-pretty">
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
                      className="rounded-2xl p-6 border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_18px_40px_rgba(13,20,51,0.18)] transition-all duration-300 hover:border-white/35 hover:shadow-[0_22px_50px_rgba(13,20,51,0.24)]"
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
                        <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-interface-grey">
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-interface-grey/80 leading-relaxed">
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
