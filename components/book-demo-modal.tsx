"use client"

import React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", phone: "", message: "" })
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-midnight-navy/80 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg glass-card rounded-2xl p-8 animate-in fade-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-interface-grey/60 hover:text-interface-grey transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-electric-violet/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-data-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-interface-grey mb-2">Thank You!</h3>
            <p className="text-interface-grey/70">{"We'll be in touch shortly to schedule your demo."}</p>
          </div>
        ) : (
          <>
            <h2 id="modal-title" className="font-serif text-2xl font-bold text-interface-grey mb-2">
              Book a Demo
            </h2>
            <p className="text-interface-grey/70 mb-6">
              Schedule a personalized demonstration of our enterprise solutions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-interface-grey/80">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-midnight-navy/60 border-electric-violet/20 text-interface-grey placeholder:text-interface-grey/40 focus:border-electric-violet"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-interface-grey/80">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-midnight-navy/60 border-electric-violet/20 text-interface-grey placeholder:text-interface-grey/40 focus:border-electric-violet"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-interface-grey/80">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-midnight-navy/60 border-electric-violet/20 text-interface-grey placeholder:text-interface-grey/40 focus:border-electric-violet"
                    placeholder="Company Inc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-interface-grey/80">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-midnight-navy/60 border-electric-violet/20 text-interface-grey placeholder:text-interface-grey/40 focus:border-electric-violet"
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-interface-grey/80">{"What's your primary interest?"}</Label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={cn(
                    "flex w-full rounded-lg border bg-midnight-navy/60 border-electric-violet/20 px-3 py-2 text-sm text-interface-grey placeholder:text-interface-grey/40 focus:outline-none focus:border-electric-violet transition-colors resize-none"
                  )}
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-electric-violet hover:bg-electric-violet/90 text-primary-foreground py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,33,255,0.4)] disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Request Demo"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
