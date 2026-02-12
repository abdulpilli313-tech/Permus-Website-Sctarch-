"use client"

import { MapPin, Globe } from "lucide-react"

export function LocationSection() {
  return (
    <section id="location" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-data-cyan to-electric-violet" />
      <div className="absolute inset-0 opacity-35 bg-gradient-to-br from-transparent via-midnight-navy/40 to-midnight-navy/80" />
      <div className="absolute top-1/2 -left-32 w-[520px] h-[520px] bg-data-cyan/20 rounded-full blur-[180px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-electric-violet/20 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Map */}
          <div className="relative w-full h-full min-h-[360px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/20 bg-midnight-navy/40 shadow-[0_24px_60px_rgba(13,20,51,0.35)]">
              <iframe
                title="Permus Office Location"
                src="https://www.google.com/maps?q=Office%2001.02%2C%20The%20Offices%205%2C%20One%20Central%20Plaza%2C%20DWTC%2C%20Dubai%2C%20UAE&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Location content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-interface-grey border border-white/25 mb-4">
                Our Presence
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-interface-grey mb-4">
                Global Reach, Local Excellence
              </h2>
              <p className="text-interface-grey/80 leading-relaxed">
                Headquartered in Dubai, we serve enterprise clients across the globe with dedicated support and strategic partnerships.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 border border-white/20 shadow-[0_14px_30px_rgba(13,20,51,0.25)]">
                <div className="w-10 h-10 rounded-lg bg-electric-violet/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-data-cyan" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-interface-grey mb-1">Office 1</h3>
                  <p className="text-sm text-interface-grey/80">
                    Office 01.02, The Offices 5, One Central Plaza, DWTC
                    <br />
                    P.O. Box: 9420, Dubai, UAE
                  </p>
                  <p className="mt-3 text-sm text-interface-grey/80">
                    Phone: 04 576 8155
                    <br />
                    Email: admin@permus.io
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 border border-white/20 shadow-[0_14px_30px_rgba(13,20,51,0.25)]">
                <div className="w-10 h-10 rounded-lg bg-data-cyan/20 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-data-cyan" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-interface-grey mb-1">Contact</h3>
                  <p className="text-sm text-interface-grey/80">
                    Phone: 04 576 8155
                    <br />
                    Email: admin@permus.io
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
