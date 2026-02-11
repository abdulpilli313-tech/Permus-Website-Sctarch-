"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
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

    const colors = ["#5B21FF", "#26148C", "#86E9FF", "#A7A1FF", "#FF31B0"]

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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 12% 18%, #86E9FF 0%, rgba(134, 233, 255, 0) 55%), radial-gradient(70% 70% at 20% 80%, #A7A1FF 0%, rgba(167, 161, 255, 0) 60%), radial-gradient(80% 80% at 55% 35%, #5B21FF 0%, rgba(91, 33, 255, 0) 65%), linear-gradient(135deg, #26148C 0%, #5B21FF 35%, #0D1433 100%)",
        }}
      >
        {/* Gradient wash overlay */}
        <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-core-violet/40 via-transparent to-midnight-navy/80" />

        {/* Gradient sweep */}
        <div className="absolute -top-32 left-1/2 h-[420px] w-[120%] -translate-x-1/2 bg-gradient-to-r from-electric-violet/25 via-data-cyan/25 to-electric-magenta/25 blur-[140px] animate-gradient" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-violet/18 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-data-cyan/18 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-muted-lavender/12 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-12 left-1/3 w-72 h-72 bg-core-violet/20 rounded-full blur-[110px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
        
        {/* Particle field */}
        <ParticleField />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(134, 233, 255, 0.35) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(91, 33, 255, 0.35) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glass ball asset */}
      <div className="pointer-events-none absolute right-[-6%] top-[56%] z-[1] hidden w-[380px] -translate-y-1/2 sm:block md:right-[-4%] md:w-[480px] lg:right-[-2%] lg:w-[600px] xl:w-[680px]">
        <div className="absolute inset-0 rounded-full blur-[24px] bg-gradient-to-r from-electric-violet/20 via-data-cyan/20 to-electric-magenta/20 animate-pulse-glow" />
        <Image
          src="/elements/glass_ball.svg"
          alt=""
          width={680}
          height={680}
          className="h-auto w-full opacity-90 animate-float"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-electric-violet/30 bg-midnight-navy/40 px-4 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-data-cyan animate-pulse" />
            <span className="text-sm font-medium text-data-cyan">Dubai-based Enterprise Solutions</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-interface-grey mb-6 leading-tight text-balance">
            <span className="block font-normal">Engineering</span>
            <span className="block font-normal">Intelligent</span>
            <span className="block">Digital Futures</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-interface-grey/70 max-w-xl mb-10 leading-relaxed text-pretty">
            Enterprise AI solutions, digital transformation, and scalable software products built in Dubai.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-interface-grey/40 bg-transparent text-interface-grey hover:text-data-cyan hover:border-data-cyan/60 hover:bg-interface-grey/10 px-8 py-6 rounded-full text-base font-medium transition-all duration-300 w-full sm:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Book a Demo
            </Button>
            <Button
              size="lg"
              className="group bg-interface-grey/10 text-interface-grey hover:text-data-cyan px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:bg-interface-grey/15 w-full sm:w-auto relative overflow-hidden"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10">View products</span>
              <span className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-electric-violet text-interface-grey transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
              <span className="absolute inset-0 rounded-full border border-interface-grey/20" />
            </Button>
          </div>
        </div>

      </div>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
