"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const techCategories = [
  {
    title: "Frontend",
    description: "Modern, responsive user interfaces",
    technologies: [
      { name: "React", abbr: "Re" },
      { name: "Next.js", abbr: "Nx" },
      { name: "TypeScript", abbr: "TS" },
      { name: "Tailwind CSS", abbr: "TW" },
      { name: "Vue.js", abbr: "Vu" },
      { name: "React Native", abbr: "RN" },
    ],
    color: "from-electric-violet to-muted-lavender",
  },
  {
    title: "Backend",
    description: "Scalable server infrastructure",
    technologies: [
      { name: "Node.js", abbr: "No" },
      { name: "Python", abbr: "Py" },
      { name: "Go", abbr: "Go" },
      { name: "PostgreSQL", abbr: "PG" },
      { name: "MongoDB", abbr: "MG" },
      { name: "Redis", abbr: "Rd" },
    ],
    color: "from-data-cyan to-electric-violet",
  },
  {
    title: "AI / Data",
    description: "Intelligent data processing",
    technologies: [
      { name: "TensorFlow", abbr: "TF" },
      { name: "PyTorch", abbr: "PT" },
      { name: "OpenAI", abbr: "AI" },
      { name: "LangChain", abbr: "LC" },
      { name: "Spark", abbr: "Sp" },
      { name: "Kafka", abbr: "Kf" },
    ],
    color: "from-muted-lavender to-data-cyan",
  },
  {
    title: "Cloud & DevOps",
    description: "Enterprise-grade infrastructure",
    technologies: [
      { name: "AWS", abbr: "AW" },
      { name: "Azure", abbr: "Az" },
      { name: "GCP", abbr: "GC" },
      { name: "Kubernetes", abbr: "K8" },
      { name: "Docker", abbr: "Dk" },
      { name: "Terraform", abbr: "Tf" },
    ],
    color: "from-electric-violet to-data-cyan",
  },
]

export function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-electric-violet/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-data-cyan/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-interface-grey mb-4">
            Technology Stack
          </h2>
          <p className="text-interface-grey/60 max-w-2xl mx-auto">
            Enterprise-grade technologies chosen for reliability, performance, and scalability.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={cn(
                "glass-card rounded-2xl p-6 transition-all duration-500 hover:glow-violet",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category header */}
              <div className="mb-6">
                <h3 className="font-serif text-lg font-bold text-interface-grey mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-interface-grey/50">{category.description}</p>
              </div>

              {/* Tech items */}
              <div className="grid grid-cols-3 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className={cn(
                      "group relative transition-all duration-300",
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    )}
                    style={{ transitionDelay: `${categoryIndex * 100 + techIndex * 50}ms` }}
                  >
                    <div
                      className={cn(
                        "aspect-square rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105",
                        "bg-midnight-navy/60 border border-electric-violet/10 group-hover:border-electric-violet/30"
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-sm font-bold bg-gradient-to-br bg-clip-text text-transparent",
                          category.color
                        )}
                      >
                        {tech.abbr}
                      </span>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-midnight-navy border border-electric-violet/20 text-xs text-interface-grey whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
