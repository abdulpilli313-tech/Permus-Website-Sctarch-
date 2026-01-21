"use client"

import { useState } from "react"
import { Calendar, Mail, MessageCircle, MapPin } from "lucide-react"
import { BookDemoModal } from "@/components/book-demo-modal"

const contactOptions = [
  {
    icon: Calendar,
    title: "Book a Demo",
    description: "Schedule a personalized walkthrough of our enterprise solutions and AI capabilities.",
    action: "demo",
    actionLabel: "Schedule Now",
    color: "electric-violet",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Reach our enterprise team directly for detailed inquiries and partnership discussions.",
    action: "mailto:hello@permus.ae",
    actionLabel: "Send Email",
    color: "data-cyan",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Connect instantly with our team for quick questions or urgent project discussions.",
    action: "https://wa.me/971501234567",
    actionLabel: "Start Chat",
    color: "muted-lavender",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    description: "Meet us in person at our Dubai headquarters for strategic discussions.",
    action: "location",
    actionLabel: "Dubai, UAE",
    color: "electric-magenta",
  },
]

export function ContactOptions() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  const handleAction = (action: string) => {
    if (action === "demo") {
      setIsDemoOpen(true)
    } else if (action === "location") {
      // Scroll to location section
      document.getElementById("location")?.scrollIntoView({ behavior: "smooth" })
    } else if (action.startsWith("mailto:") || action.startsWith("https://")) {
      window.open(action, "_blank")
    }
  }

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-interface-grey mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-interface-grey/60 max-w-xl mx-auto">
            Choose your preferred method of communication. Our enterprise team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((option) => {
            const Icon = option.icon
            return (
              <div
                key={option.title}
                className="glass-card rounded-xl p-6 group hover:border-electric-violet/40 transition-all duration-300 cursor-pointer"
                onClick={() => handleAction(option.action)}
                onKeyDown={(e) => e.key === "Enter" && handleAction(option.action)}
                role="button"
                tabIndex={0}
              >
                <div className={`w-12 h-12 rounded-lg bg-${option.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 text-${option.color === "electric-violet" ? "electric-violet" : option.color === "data-cyan" ? "data-cyan" : option.color === "muted-lavender" ? "muted-lavender" : "electric-magenta"}`} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-interface-grey mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-interface-grey/60 mb-4 leading-relaxed">
                  {option.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-data-cyan group-hover:text-electric-violet transition-colors">
                  {option.actionLabel}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <BookDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  )
}
