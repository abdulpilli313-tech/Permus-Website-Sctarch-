"use client"

import { useState } from "react"
import { Brain, Layers, Code2, Building2, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "ai",
    icon: Brain,
    title: "AI Solutions & Automation",
    description: "Transform your operations with intelligent systems that learn, adapt, and drive measurable outcomes.",
    features: [
      { title: "AI Strategy", description: "Comprehensive roadmaps aligning AI initiatives with business objectives" },
      { title: "Machine Learning Systems", description: "Custom ML models for prediction, classification, and optimization" },
      { title: "Intelligent Automation", description: "End-to-end process automation with cognitive capabilities" },
      { title: "Data-Driven Decision Platforms", description: "Real-time analytics and insights for strategic decision-making" },
    ],
    gradient: "from-electric-violet to-data-cyan",
  },
  {
    id: "digital",
    icon: Layers,
    title: "Digital Transformation",
    description: "Modernize your technology landscape to unlock efficiency, agility, and competitive advantage.",
    features: [
      { title: "Legacy System Modernization", description: "Migrate and upgrade outdated systems to modern architectures" },
      { title: "Process Automation", description: "Streamline workflows and eliminate manual bottlenecks" },
      { title: "Cloud-Native Architecture", description: "Design and implement scalable, resilient cloud solutions" },
      { title: "Enterprise Integration", description: "Connect disparate systems for seamless data flow" },
    ],
    gradient: "from-data-cyan to-muted-lavender",
  },
  {
    id: "development",
    icon: Code2,
    title: "Full-Stack Development",
    description: "Build robust, high-performance applications with modern technologies and best practices.",
    features: [
      { title: "Web & Mobile Applications", description: "Cross-platform solutions with exceptional user experiences" },
      { title: "API & Backend Systems", description: "Scalable, secure APIs and microservices architectures" },
      { title: "Secure Architecture", description: "Security-first design with compliance and data protection" },
      { title: "Performance Optimization", description: "Fine-tuned systems for speed, reliability, and efficiency" },
    ],
    gradient: "from-muted-lavender to-electric-violet",
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise Platforms",
    description: "Custom-built platforms that scale with your business and evolve with your needs.",
    features: [
      { title: "Custom Enterprise Systems", description: "Tailored solutions for complex business requirements" },
      { title: "Internal Tools", description: "Productivity tools that empower teams and streamline operations" },
      { title: "Scalable SaaS Platforms", description: "Multi-tenant architectures built for growth" },
      { title: "Long-Term Support & Evolution", description: "Ongoing maintenance, updates, and strategic enhancements" },
    ],
    gradient: "from-electric-violet to-electric-magenta",
  },
]

export function ServicesOverview() {
  const [expandedService, setExpandedService] = useState<string | null>("ai")

  return (
    <section id="services-overview" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-interface-grey mb-4">
            Our Services
          </h2>
          <p className="text-interface-grey/60 max-w-2xl mx-auto">
            Comprehensive technology solutions designed for enterprise scale and complexity.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 max-w-5xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon
            const isExpanded = expandedService === service.id

            return (
              <div
                key={service.id}
                id={service.id}
                className={cn(
                  "glass-card rounded-2xl transition-all duration-500 overflow-hidden",
                  isExpanded ? "glow-violet" : "hover:border-electric-violet/30"
                )}
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                  className="w-full p-6 sm:p-8 flex items-start gap-6 text-left"
                  aria-expanded={isExpanded}
                >
                  {/* Icon */}
                  <div className={cn(
                    "shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br",
                    service.gradient
                  )}>
                    <Icon className="w-7 h-7 text-midnight-navy" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-interface-grey mb-2">
                      {service.title}
                    </h3>
                    <p className="text-interface-grey/60 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Expand indicator */}
                  <div className={cn(
                    "shrink-0 w-10 h-10 rounded-full bg-electric-violet/10 flex items-center justify-center transition-transform duration-300",
                    isExpanded && "rotate-180"
                  )}>
                    <ChevronDown className="w-5 h-5 text-electric-violet" />
                  </div>
                </button>

                {/* Expandable content */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-8 pt-2">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <div
                            key={feature.title}
                            className="p-4 rounded-xl bg-midnight-navy/40 border border-electric-violet/10 hover:border-electric-violet/20 transition-colors"
                          >
                            <h4 className="font-semibold text-interface-grey mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-interface-grey/50">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
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
