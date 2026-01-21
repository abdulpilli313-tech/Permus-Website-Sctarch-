"use client"

import { useEffect, useRef } from "react"

export function ServicesHero() {
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

    // Animated grid lines
    const lines: { x: number; y: number; vx: number; vy: number; length: number }[] = []
    const numLines = 15

    for (let i = 0; i < numLines; i++) {
      lines.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        length: Math.random() * 100 + 50,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Draw subtle grid
      ctx.strokeStyle = "rgba(91, 33, 255, 0.05)"
      ctx.lineWidth = 1
      const gridSize = 60

      for (let x = 0; x < canvas.offsetWidth; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.offsetHeight)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.offsetHeight; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.offsetWidth, y)
        ctx.stroke()
      }

      // Draw animated lines
      for (const line of lines) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(134, 233, 255, ${0.1 + Math.random() * 0.1})`
        ctx.lineWidth = 1
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x + line.length, line.y)
        ctx.stroke()

        line.x += line.vx
        line.y += line.vy

        if (line.x < -line.length || line.x > canvas.offsetWidth) line.vx *= -1
        if (line.y < 0 || line.y > canvas.offsetHeight) line.vy *= -1
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-electric-violet/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-core-violet/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <div className="w-2 h-2 rounded-full bg-data-cyan animate-pulse" />
            <span className="text-sm font-medium text-interface-grey/80">Enterprise Technology Services</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-interface-grey mb-6 leading-tight text-balance">
            Enterprise Technology Services{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-data-cyan">
              Built for Scale
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-interface-grey/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            AI-driven solutions, digital transformation, and enterprise software delivery designed for long-term growth.
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight-navy to-transparent" />
    </section>
  )
}
