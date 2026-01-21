"use client"

import { Target, Compass } from "lucide-react"

export function VisionMission() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-violet/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-violet/10 border border-electric-violet/20 mb-6">
            <span className="text-sm font-medium text-muted-lavender">Our Direction</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey">
            Vision & Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-violet/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-electric-violet/15 transition-colors duration-500" />
            
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-electric-violet/20 flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-electric-violet" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-interface-grey mb-4">
                Our Vision
              </h3>

              <div className="space-y-4 text-interface-grey/70">
                <p className="leading-relaxed">
                  Enable intelligent digital transformation for enterprises worldwide.
                </p>
                <p className="leading-relaxed">
                  Build software that scales with businesses—systems that grow more valuable over time, not obsolete.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-electric-violet/10">
                <p className="text-sm text-interface-grey/50 italic">
                  "Technology should amplify human capability, not replace it."
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-data-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-data-cyan/15 transition-colors duration-500" />
            
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-data-cyan/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-data-cyan" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-interface-grey mb-4">
                Our Mission
              </h3>

              <ul className="space-y-4 text-interface-grey/70">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-data-cyan mt-2 shrink-0" />
                  <span className="leading-relaxed">Deliver secure, scalable, AI-powered systems that drive measurable business outcomes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-data-cyan mt-2 shrink-0" />
                  <span className="leading-relaxed">Solve real enterprise challenges with engineering excellence and domain expertise.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-data-cyan mt-2 shrink-0" />
                  <span className="leading-relaxed">Create long-term value through partnerships, not transactions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
