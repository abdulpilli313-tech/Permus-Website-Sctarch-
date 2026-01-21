"use client"

export function ResourcesHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-midnight-navy">
        <div className="absolute inset-0 opacity-30">
          {/* Flowing lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5B21FF" stopOpacity="0" />
                <stop offset="50%" stopColor="#5B21FF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#86E9FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[...Array(5)].map((_, i) => (
              <path
                key={i}
                d={`M0,${150 + i * 80} Q300,${100 + i * 80} 600,${150 + i * 80} T1200,${150 + i * 80}`}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                className="animate-pulse-glow"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </svg>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight-navy/50 to-midnight-navy" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Glass panel */}
          <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-violet/10 border border-electric-violet/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-data-cyan animate-pulse" />
              <span className="text-sm font-medium text-data-cyan">Knowledge Hub</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-6 leading-tight text-balance">
              Insights on AI, Enterprise Software & Digital Transformation
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-interface-grey/70 max-w-2xl mx-auto leading-relaxed">
              Expert perspectives, technical insights, and industry knowledge from the Permus team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
