"use client"

import { Brain, RefreshCw, Code2, Building2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Automation, analytics, and intelligence at scale.",
    color: "electric-violet",
    gradient: "from-electric-violet to-data-cyan",
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description: "Modernize systems and elevate experiences.",
    color: "data-cyan",
    gradient: "from-electric-violet to-muted-lavender",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Product-grade web and mobile platforms.",
    color: "muted-lavender",
    gradient: "from-electric-violet to-core-violet",
  },
  {
    icon: Building2,
    title: "Enterprise Platforms",
    description: "Operational systems built for scale.",
    color: "electric-magenta",
    gradient: "from-electric-violet via-data-cyan to-electric-magenta",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative pt-16 pb-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-data-cyan/8 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-electric-violet/12 rounded-full blur-[160px]" />

      {/* Glass element */}
      <div className="pointer-events-none absolute left-[-6%] -top-6 -bottom-6 hidden w-[480px] opacity-90 sm:block lg:w-[620px] xl:w-[700px]">
        <Image
          src="/elements/glass_six.svg"
          alt=""
          fill
          className="h-full w-full object-contain object-left scale-105"
          priority
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_1.35fr] gap-12 lg:gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-data-cyan text-sm font-semibold tracking-wider uppercase mb-5">
              Our Services
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-interface-grey mb-6 text-balance">
              Our Services
            </h2>
            <p className="text-base md:text-lg text-interface-grey/70 leading-relaxed max-w-md">
              Focused expertise across AI, transformation, and enterprise software delivery.
            </p>

            <Link
              href="/services"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-interface-grey/30 px-6 py-3 text-sm font-medium text-interface-grey transition-all duration-300 hover:border-data-cyan/60 hover:text-data-cyan"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className={`w-6 h-6 ${iconColor}`} />
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-interface-grey mb-2">
                      {service.title}
                    </h3>

                    <p className="text-interface-grey/60 leading-relaxed">
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
