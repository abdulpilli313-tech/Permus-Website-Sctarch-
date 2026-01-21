"use client"

import { useEffect, useRef } from "react"

export function AboutHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Abstract AI wave animation
    const waves: { y: number; amplitude: number; frequency: number; speed: number; opacity: number }[] = []
    for (let i = 0; i < 3; i++) {
      waves.push({
        y: canvas.height * (0.4 + i * 0.15),
        amplitude: 30 + i * 10,
        frequency: 0.005 - i * 0.001,
        speed: 0.02 + i * 0.005,
        opacity: 0.1 - i * 0.02,
      })
    }

    let offset = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, wave.y)

        for (let x = 0; x <= canvas.width; x += 5) {
          const y = wave.y + Math.sin(x * wave.frequency + offset * wave.speed) * wave.amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, canvas.height)
        gradient.addColorStop(0, `rgba(91, 33, 255, ${wave.opacity})`)
        gradient.addColorStop(1, "rgba(91, 33, 255, 0)")
        ctx.fillStyle = gradient
        ctx.fill()
      })

      offset++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-midnight-navy" />

      {/* Animated waves */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-navy/50 via-transparent to-midnight-navy" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(91, 33, 255, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(91, 33, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="glass-card rounded-2xl p-10 md:p-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-violet/10 border border-electric-violet/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-data-cyan" />
            <span className="text-sm font-medium text-data-cyan">About Permus</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-interface-grey mb-6 leading-tight text-balance">
            Building Intelligent Software for a Digital-First World
          </h1>

          <p className="text-lg md:text-xl text-interface-grey/70 max-w-2xl mx-auto leading-relaxed">
            Permus Software House is an enterprise AI and software company delivering scalable digital solutions from Dubai to global markets.
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight-navy to-transparent" />
    </section>
  )
}
