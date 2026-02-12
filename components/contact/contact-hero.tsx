"use client"

import { useEffect, useRef } from "react"

export function ContactHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Subtle wave animation
    const waves: { x: number; y: number; radius: number; speed: number; opacity: number }[] = []
    for (let i = 0; i < 3; i++) {
      waves.push({
        x: canvas.offsetWidth * (0.3 + i * 0.2),
        y: canvas.offsetHeight * 0.5,
        radius: 100 + i * 80,
        speed: 0.3 + i * 0.1,
        opacity: 0.08 - i * 0.02,
      })
    }

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      waves.forEach((wave) => {
        wave.radius += wave.speed
        if (wave.radius > Math.max(canvas.offsetWidth, canvas.offsetHeight)) {
          wave.radius = 50
        }

        ctx.beginPath()
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(91, 33, 255, ${wave.opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-24 pb-12">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 10% 18%, #86E9FF 0%, rgba(134, 233, 255, 0) 55%), radial-gradient(70% 70% at 20% 82%, #A7A1FF 0%, rgba(167, 161, 255, 0) 60%), radial-gradient(80% 80% at 55% 35%, #5B21FF 0%, rgba(91, 33, 255, 0) 65%), linear-gradient(135deg, #26148C 0%, #5B21FF 35%, #0D1433 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-35 bg-gradient-to-br from-transparent via-white/20 to-midnight-navy/15" />
      
      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-interface-grey border border-white/30 mb-6">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-interface-grey mb-4 text-balance tracking-tight">
            LET{"'"}S TALK
          </h1>
          <p className="text-2xl md:text-3xl text-interface-grey/90 mb-4">
            About Your Next Digital Initiative
          </p>
          <p className="text-interface-grey/70 text-base md:text-lg max-w-2xl leading-relaxed">
            Connect with Permus Software House to discuss AI solutions, digital transformation, or enterprise software development.
          </p>
        </div>
      </div>
    </section>
  )
}
