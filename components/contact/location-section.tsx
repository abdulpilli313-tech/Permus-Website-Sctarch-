"use client"

import { MapPin, Globe } from "lucide-react"

export function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Map visualization */}
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0 w-full">
            {/* Abstract geographic visual */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgba(91, 33, 255, 0.1)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#grid)" />

                {/* Connection lines */}
                <g className="animate-pulse-glow">
                  <line x1="200" y1="200" x2="80" y2="100" stroke="rgba(134, 233, 255, 0.3)" strokeWidth="1" />
                  <line x1="200" y1="200" x2="320" y2="120" stroke="rgba(134, 233, 255, 0.3)" strokeWidth="1" />
                  <line x1="200" y1="200" x2="100" y2="300" stroke="rgba(134, 233, 255, 0.3)" strokeWidth="1" />
                  <line x1="200" y1="200" x2="340" y2="280" stroke="rgba(134, 233, 255, 0.3)" strokeWidth="1" />
                  <line x1="200" y1="200" x2="60" y2="220" stroke="rgba(134, 233, 255, 0.3)" strokeWidth="1" />
                </g>

                {/* Global connection points */}
                <circle cx="80" cy="100" r="4" fill="rgba(134, 233, 255, 0.5)" />
                <circle cx="320" cy="120" r="4" fill="rgba(134, 233, 255, 0.5)" />
                <circle cx="100" cy="300" r="4" fill="rgba(134, 233, 255, 0.5)" />
                <circle cx="340" cy="280" r="4" fill="rgba(134, 233, 255, 0.5)" />
                <circle cx="60" cy="220" r="4" fill="rgba(134, 233, 255, 0.5)" />

                {/* Dubai center point */}
                <circle cx="200" cy="200" r="40" fill="rgba(91, 33, 255, 0.1)" />
                <circle cx="200" cy="200" r="25" fill="rgba(91, 33, 255, 0.2)" />
                <circle cx="200" cy="200" r="10" fill="#5B21FF" />
                
                {/* Pulse effect */}
                <circle cx="200" cy="200" r="50" fill="none" stroke="rgba(91, 33, 255, 0.3)" strokeWidth="1" className="animate-ping" style={{ animationDuration: "3s" }} />
              </svg>
            </div>
          </div>

          {/* Location content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-electric-violet/20 text-data-cyan border border-electric-violet/30 mb-4">
                Our Presence
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-interface-grey mb-4">
                Global Reach, Local Excellence
              </h2>
              <p className="text-interface-grey/60 leading-relaxed">
                Headquartered in Dubai, we serve enterprise clients across the globe with dedicated support and strategic partnerships.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-electric-violet/5 border border-electric-violet/10">
                <div className="w-10 h-10 rounded-lg bg-electric-violet/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-electric-violet" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-interface-grey mb-1">Headquarters</h3>
                  <p className="text-sm text-interface-grey/60">Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-data-cyan/5 border border-data-cyan/10">
                <div className="w-10 h-10 rounded-lg bg-data-cyan/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-data-cyan" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-interface-grey mb-1">Global Clients</h3>
                  <p className="text-sm text-interface-grey/60">Serving enterprises across MENA, Europe, and North America</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
