"use client"

import { Brain, RefreshCw, Code2, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent automation, machine learning models, and AI-powered analytics that transform raw data into actionable business intelligence.",
    features: ["Machine Learning", "NLP & Computer Vision", "Predictive Analytics", "AI Integration"],
    color: "electric-violet",
    gradient: "from-electric-violet to-data-cyan",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description: "End-to-end digital strategy and implementation that modernizes legacy systems and creates seamless digital experiences.",
    features: ["Process Automation", "Cloud Migration", "Legacy Modernization", "Digital Strategy"],
    color: "data-cyan",
    gradient: "from-electric-violet to-muted-lavender",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Custom software solutions built with modern architectures, from responsive frontends to scalable backend systems.",
    features: ["Web Applications", "Mobile Apps", "API Development", "Microservices"],
    color: "muted-lavender",
    gradient: "from-electric-violet to-core-violet",
  },
  {
    icon: Building2,
    title: "Enterprise Platforms",
    description: "Comprehensive enterprise solutions that streamline operations, enhance productivity, and drive organizational efficiency.",
    features: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Business Intelligence"],
    color: "electric-magenta",
    gradient: "from-electric-violet via-data-cyan to-electric-magenta",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-navy via-core-violet/10 to-midnight-navy" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-data-cyan/6 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric-violet/12 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-data-cyan text-sm font-semibold tracking-wider uppercase mb-5">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 text-balance">
            Modern Enterprise Systems, Built to Scale
          </h2>
          <p className="text-lg text-interface-grey/70 leading-relaxed text-pretty">
            We design, engineer, and evolve platforms that turn strategy into measurable growth across AI, product, and transformation.
          </p>

          <div className="mt-10 glass-card rounded-2xl p-6 border border-electric-violet/20">
            <div className="text-sm text-interface-grey/60 uppercase tracking-widest mb-3">Engagement Model</div>
            <div className="text-interface-grey font-medium">
              Discovery → Architecture → Build → Scale
            </div>
            <div className="text-interface-grey/60 text-sm mt-2">
              A phased delivery system built for enterprise clarity.
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-6 mt-12">
          {services.map((service) => {
            const Icon = service.icon
            const iconColor =
              service.color === "electric-violet"
                ? "text-electric-violet"
                : service.color === "data-cyan"
                  ? "text-data-cyan"
                  : service.color === "muted-lavender"
                    ? "text-muted-lavender"
                    : "text-electric-magenta"
            const iconBg =
              service.color === "electric-violet"
                ? "bg-electric-violet/20"
                : service.color === "data-cyan"
                  ? "bg-data-cyan/20"
                  : service.color === "muted-lavender"
                    ? "bg-muted-lavender/20"
                    : "bg-electric-magenta/15"

            return (
              <div
                key={service.title}
                className={`rounded-2xl p-[1px] bg-gradient-to-br ${service.gradient}`}
              >
                <div className="glass-card rounded-2xl p-7 group transition-all duration-300 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className={`w-6 h-6 ${iconColor}`} />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-interface-grey mb-3">
                      {service.title}
                    </h3>

                    <p className="text-interface-grey/70 mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs font-medium text-interface-grey/70 bg-electric-violet/10 px-3 py-1.5 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-data-cyan hover:text-interface-grey transition-colors duration-300 group/link"
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
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
