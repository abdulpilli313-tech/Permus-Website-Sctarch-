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
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description: "End-to-end digital strategy and implementation that modernizes legacy systems and creates seamless digital experiences.",
    features: ["Process Automation", "Cloud Migration", "Legacy Modernization", "Digital Strategy"],
    color: "data-cyan",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Custom software solutions built with modern architectures, from responsive frontends to scalable backend systems.",
    features: ["Web Applications", "Mobile Apps", "API Development", "Microservices"],
    color: "muted-lavender",
  },
  {
    icon: Building2,
    title: "Enterprise Platforms",
    description: "Comprehensive enterprise solutions that streamline operations, enhance productivity, and drive organizational efficiency.",
    features: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Business Intelligence"],
    color: "electric-magenta",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-data-cyan/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric-violet/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block text-data-cyan text-sm font-semibold tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 text-balance">
            Comprehensive Solutions for Modern Enterprises
          </h2>
          <p className="text-lg text-interface-grey/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            From AI innovation to complete digital transformation, we deliver technology that drives real business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="glass-card rounded-2xl p-8 group hover:border-electric-violet/40 transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-${service.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 text-${service.color}`} style={{ color: service.color === 'electric-violet' ? '#5B21FF' : service.color === 'data-cyan' ? '#86E9FF' : service.color === 'muted-lavender' ? '#A7A1FF' : '#FF31B0' }} />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-interface-grey mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-interface-grey/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs font-medium text-interface-grey/60 bg-electric-violet/10 px-3 py-1.5 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-data-cyan hover:text-interface-grey transition-colors group/link"
                  >
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
