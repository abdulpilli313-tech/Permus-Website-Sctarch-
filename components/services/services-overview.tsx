"use client"

import { Brain, Layers, Code2, Building2, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "ai",
    icon: Brain,
    title: "AI Solutions & Automation",
    description: "Intelligent automation and predictive insights built for scale.",
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
    description: "Modernize systems with cloud-native architecture and workflow speed.",
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
    description: "Product-grade web and mobile platforms with secure backends.",
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
    description: "Custom platforms that grow with your operations and teams.",
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
  return (
    <section id="services-overview" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-electric-violet/10 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-data-cyan/10 blur-[120px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* Section header */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] font-semibold tracking-[0.2em] uppercase text-interface-grey/80 mb-5">
              Our Solutions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-interface-grey mb-4 tracking-tight">
              Enterprise Solutions, Refined
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-data-cyan via-muted-lavender to-transparent mb-5" />
            <p className="text-interface-grey/60 text-sm sm:text-base leading-relaxed">
              Focused capabilities across AI, transformation, engineering, and enterprise platforms — designed for clarity and scale.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 transition-all duration-300 hover:border-data-cyan/30 hover:shadow-[0_12px_30px_rgba(13,20,51,0.28)]"
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br",
                      service.gradient
                    )}>
                      <Icon className="w-4 h-4 text-midnight-navy" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-base font-semibold text-interface-grey mb-2">
                        {service.title}
                      </h3>
                      <div className="h-px w-10 bg-white/15 mb-2" />
                      <p className="text-interface-grey/60 text-xs leading-relaxed">
                        {service.description}
                      </p>
                    </div>
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
