"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"

// Particle animation for the hero background
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    const colors = ["#5B21FF", "#86E9FF", "#A7A1FF", "#FF31B0"]

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(91, 33, 255, ${0.15 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      drawConnections()

      // Update and draw particles
      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()
        ctx.globalAlpha = 1
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    createParticles()
    animate()

    window.addEventListener("resize", () => {
      resize()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-midnight-navy">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-violet/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-data-cyan/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-muted-lavender/10 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
        
        {/* Particle field */}
        <ParticleField />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(91, 33, 255, 0.5) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(91, 33, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="glass max-w-4xl mx-auto rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-data-cyan animate-pulse" />
            <span className="text-sm font-medium text-data-cyan">Dubai-based Enterprise Solutions</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-interface-grey mb-6 leading-tight text-balance">
            Engineering{" "}
            <span className="bg-gradient-to-r from-electric-violet via-data-cyan to-muted-lavender bg-clip-text text-transparent animate-gradient">
              Intelligent
            </span>{" "}
            Digital Futures
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-interface-grey/70 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Enterprise AI solutions, digital transformation, and scalable software products built in Dubai.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-electric-violet hover:bg-electric-violet/90 text-primary-foreground px-8 py-6 rounded-lg text-base font-medium transition-all duration-300 hover:shadow-[0_0_40px_rgba(91,33,255,0.5)] w-full sm:w-auto"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Solutions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-electric-violet/40 text-interface-grey hover:bg-electric-violet/10 hover:border-electric-violet px-8 py-6 rounded-lg text-base font-medium transition-all duration-300 w-full sm:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-interface-grey/50 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border border-electric-violet/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-electric-violet rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
