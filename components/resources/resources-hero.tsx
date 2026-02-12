"use client"

export function ResourcesHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-28 pb-16">
      {/* Editorial background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 12% 18%, #86E9FF 0%, rgba(134, 233, 255, 0) 55%), radial-gradient(70% 70% at 20% 82%, #A7A1FF 0%, rgba(167, 161, 255, 0) 60%), radial-gradient(80% 80% at 55% 35%, #5B21FF 0%, rgba(91, 33, 255, 0) 65%), linear-gradient(135deg, #26148C 0%, #5B21FF 35%, #0D1433 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight-navy/70 via-midnight-navy/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-interface-grey mb-6">
            Permus Blog
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-interface-grey leading-tight text-balance">
            Insights on AI, Enterprise Software & Digital Transformation
          </h1>
          <div className="mt-5 h-px w-24 bg-gradient-to-r from-data-cyan via-muted-lavender to-transparent" />
          <p className="mt-6 text-base md:text-lg text-interface-grey/75 max-w-2xl leading-relaxed">
            Expert perspectives, technical insights, and industry knowledge from the Permus team.
          </p>
        </div>
      </div>
    </section>
  )
}
