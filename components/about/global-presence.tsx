"use client"

import { MapPin, Globe, Users } from "lucide-react"

const presencePoints = [
  {
    icon: MapPin,
    title: "Dubai Headquarters",
    description: "Our home base in the UAE, positioned at the crossroads of global commerce.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Serving clients across MENA, Europe, Asia, and North America.",
  },
  {
    icon: Users,
    title: "International Clients",
    description: "Trusted by enterprises across multiple industries and regions.",
  },
]

export function GlobalPresence() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-violet/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-violet/10 border border-electric-violet/20 mb-6">
              <span className="text-sm font-medium text-muted-lavender">Where We Are</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 leading-tight">
              Dubai to the World
            </h2>

            <p className="text-lg text-interface-grey/70 mb-10 leading-relaxed">
              Headquartered in Dubai, we leverage our strategic position to serve enterprises globally. Our location at the intersection of East and West enables us to work across time zones and cultures with ease.
            </p>

            <div className="space-y-6">
              {presencePoints.map((point) => {
                const Icon = point.icon
                return (
                  <div key={point.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-electric-violet/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-data-cyan" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-interface-grey mb-1">
                        {point.title}
                      </h3>
                      <p className="text-interface-grey/60 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - Abstract Map Visualization */}
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 aspect-square max-w-lg mx-auto">
              {/* Abstract globe representation */}
              <div className="relative w-full h-full">
                {/* Globe circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 rounded-full border border-electric-violet/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/5 h-3/5 rounded-full border border-electric-violet/15" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2/5 h-2/5 rounded-full border border-electric-violet/20" />
                </div>

                {/* Latitude lines */}
                <div className="absolute top-1/4 left-0 right-0 h-px bg-electric-violet/5" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-electric-violet/10" />
                <div className="absolute top-3/4 left-0 right-0 h-px bg-electric-violet/5" />

                {/* Longitude lines */}
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-electric-violet/5" />
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-electric-violet/10" />
                <div className="absolute left-3/4 top-0 bottom-0 w-px bg-electric-violet/5" />

                {/* Dubai - Primary location */}
                <div className="absolute top-[45%] left-[58%] z-10">
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-electric-violet flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 rounded-full bg-data-cyan" />
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium bg-electric-violet/20 text-interface-grey rounded">
                        Dubai, UAE
                      </span>
                    </div>
                    {/* Pulse rings */}
                    <div className="absolute inset-0 w-6 h-6 rounded-full border border-electric-violet/50 animate-ping" />
                  </div>
                </div>

                {/* Secondary locations - smaller dots */}
                <div className="absolute top-[35%] left-[48%]">
                  <div className="w-2 h-2 rounded-full bg-data-cyan/50" />
                </div>
                <div className="absolute top-[30%] left-[30%]">
                  <div className="w-2 h-2 rounded-full bg-muted-lavender/50" />
                </div>
                <div className="absolute top-[40%] left-[75%]">
                  <div className="w-2 h-2 rounded-full bg-data-cyan/50" />
                </div>
                <div className="absolute top-[55%] left-[20%]">
                  <div className="w-2 h-2 rounded-full bg-muted-lavender/50" />
                </div>
                <div className="absolute top-[25%] left-[65%]">
                  <div className="w-2 h-2 rounded-full bg-data-cyan/30" />
                </div>

                {/* Connection lines from Dubai */}
                <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(91, 33, 255, 0.5)" />
                      <stop offset="100%" stopColor="rgba(134, 233, 255, 0.3)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M58% 45% Q 53% 40%, 48% 35%"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-50"
                  />
                  <path
                    d="M58% 45% Q 44% 38%, 30% 30%"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-50"
                  />
                  <path
                    d="M58% 45% Q 66% 42%, 75% 40%"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-50"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
