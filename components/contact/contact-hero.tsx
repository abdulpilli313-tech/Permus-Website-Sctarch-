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
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-navy via-core-violet/10 to-midnight-navy" />
      
      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-electric-violet/20 text-data-cyan border border-electric-violet/30 mb-6">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-4 text-balance">
            {"Let's Talk About Your Next Digital Initiative"}
          </h1>
          <p className="text-interface-grey/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Connect with Permus Software House to discuss AI solutions, digital transformation, or enterprise software development.
          </p>
        </div>
      </div>
    </section>
  )
}
