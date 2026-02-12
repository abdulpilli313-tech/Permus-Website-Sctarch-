"use client"

export function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-28 pb-16">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 12% 18%, #86E9FF 0%, rgba(134, 233, 255, 0) 55%), radial-gradient(70% 70% at 20% 82%, #A7A1FF 0%, rgba(167, 161, 255, 0) 60%), radial-gradient(80% 80% at 55% 35%, #5B21FF 0%, rgba(91, 33, 255, 0) 65%), linear-gradient(135deg, #26148C 0%, #5B21FF 35%, #0D1433 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight-navy/70 via-midnight-navy/30 to-transparent" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[520px] h-[520px] rounded-full bg-electric-violet/12 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] rounded-full bg-core-violet/18 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-interface-grey mb-6">
            Enterprise Solutions
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-interface-grey mb-4 leading-tight text-balance tracking-tight">
            Enterprise Technology Solutions
          </h1>
          <p className="text-xl md:text-2xl text-interface-grey/90 mb-4">
            Built for Scale
          </p>
          <p className="text-base sm:text-lg text-interface-grey/70 max-w-2xl leading-relaxed text-pretty">
            AI-driven solutions, digital transformation, and enterprise software delivery designed for long-term growth.
          </p>
        </div>
      </div>
    </section>
  )
}
