"use client"

import { Target, Users2, Rocket } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const pillars = [
  {
    icon: Target,
    title: "Our Vision",
    description: "To be the leading force in enterprise digital transformation across the Middle East and beyond, shaping the future of how businesses leverage technology.",
  },
  {
    icon: Users2,
    title: "Team Excellence",
    description: "Our diverse team of engineers, designers, and strategists brings together global expertise with deep understanding of regional business dynamics.",
  },
  {
    icon: Rocket,
    title: "Innovation Culture",
    description: "We foster an environment where experimentation is encouraged, failures are learning opportunities, and breakthrough ideas are born daily.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-muted-lavender/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-violet/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-data-cyan text-sm font-semibold tracking-wider uppercase mb-4">
              About Permus
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 text-balance">
              Pioneering Digital Excellence from Dubai
            </h2>
            <p className="text-lg text-interface-grey/70 mb-6 leading-relaxed">
              Founded in the heart of Dubai, Permus Software House represents the convergence of 
              world-class engineering talent and deep enterprise expertise. We build technology 
              that not only solves today&apos;s challenges but anticipates tomorrow&apos;s opportunities.
            </p>
            <p className="text-interface-grey/60 mb-8 leading-relaxed">
              Our mission is to empower enterprises with intelligent, scalable, and secure software 
              solutions that drive operational efficiency, unlock new revenue streams, and create 
              lasting competitive advantages.
            </p>
            <Button
              className="bg-electric-violet hover:bg-electric-violet/90 text-primary-foreground px-8 py-6 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,33,255,0.4)]"
              asChild
            >
              <Link href="/about">Learn Our Story</Link>
            </Button>
          </div>

          {/* Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="glass-card rounded-2xl p-6 group hover:border-electric-violet/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-electric-violet/30 to-data-cyan/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7 text-data-cyan" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-interface-grey mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-interface-grey/60 leading-relaxed">
                        {pillar.description}
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
