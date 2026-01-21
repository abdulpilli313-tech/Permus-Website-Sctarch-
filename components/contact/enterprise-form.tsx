"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const serviceOptions = [
  { value: "ai-solutions", label: "AI Solutions" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "full-stack-development", label: "Full-Stack Development" },
  { value: "enterprise-platforms", label: "Enterprise Platforms" },
  { value: "consulting", label: "Strategic Consulting" },
  { value: "other", label: "Other" },
]

export function EnterpriseForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid business email"
    }
    if (!formData.serviceInterest) {
      newErrors.serviceInterest = "Please select a service"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: "",
    })
    setErrors({})
  }

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-electric-violet/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-data-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-interface-grey mb-4">
              Inquiry Received
            </h3>
            <p className="text-interface-grey/70 mb-8 max-w-md mx-auto">
              Thank you for reaching out. Our enterprise team will review your inquiry and respond within 24 business hours.
            </p>
            <Button
              onClick={handleReset}
              variant="outline"
              className="border-electric-violet/30 text-interface-grey hover:bg-electric-violet/10 hover:border-electric-violet bg-transparent"
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-interface-grey mb-4">
              Enterprise Contact Form
            </h2>
            <p className="text-interface-grey/60">
              Complete the form below and our team will respond promptly.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-interface-grey/80 text-sm font-medium">
                    Full Name <span className="text-electric-magenta">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value })
                      if (errors.fullName) setErrors({ ...errors, fullName: "" })
                    }}
                    className={cn(
                      "bg-midnight-navy/60 border-electric-violet/20 text-interface-grey placeholder:text-interface-grey/40 focus:border-electric-violet h-11",
                      errors.fullName && "border-electric-magenta"
                    )}
                    placeholder="John Smith"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-electric-magenta">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-interface-grey/80 text-sm font-medium">
                    Company Name <span className="text-electric-magenta">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => {
                      setFormData({ ...formData, companyName: e.target.value })
                      if (errors.companyName) setErrors({ ...errors, companyName: "" })
                    }}
                    className={cn(
                      "bg-midnight-navy/60 border-electric-violet/20 text-interface-grey placeholder:text-interface-grey/40 focus:border-electric-violet h-11",
                      errors.companyName && "border-electric-magenta"
                    )}
                    placeholder="Acme Corporation"
                  />
                  {errors.companyName && (
                    <p className="text-xs text-electric-magenta">{errors.companyName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-interface-grey/80 text-sm font-medium">
                    Business Email <span className="text-electric-magenta">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: "" })
                    }}
                    className={cn(
                      "bg-midnight-navy/60 border-electric-violet/20 text-interface-grey placeholder:text-interface-grey/40 focus:border-electric-violet h-11",
                      errors.email && "border-electric-magenta"
                    )}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-electric-magenta">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-interface-grey/80 text-sm font-medium">
                    Phone <span className="text-interface-grey/40">(Optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-midnight-navy/60 border-electric-violet/20 text-interface-grey placeholder:text-interface-grey/40 focus:border-electric-violet h-11"
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceInterest" className="text-interface-grey/80 text-sm font-medium">
                  Service Interest <span className="text-electric-magenta">*</span>
                </Label>
                <Select
                  value={formData.serviceInterest}
                  onValueChange={(value) => {
                    setFormData({ ...formData, serviceInterest: value })
                    if (errors.serviceInterest) setErrors({ ...errors, serviceInterest: "" })
                  }}
                >
                  <SelectTrigger 
                    className={cn(
                      "bg-midnight-navy/60 border-electric-violet/20 text-interface-grey focus:border-electric-violet h-11",
                      !formData.serviceInterest && "text-interface-grey/40",
                      errors.serviceInterest && "border-electric-magenta"
                    )}
                  >
                    <SelectValue placeholder="Select a service area" />
                  </SelectTrigger>
                  <SelectContent className="bg-midnight-navy border-electric-violet/20">
                    {serviceOptions.map((option) => (
                      <SelectItem 
                        key={option.value} 
                        value={option.value}
                        className="text-interface-grey hover:bg-electric-violet/20 focus:bg-electric-violet/20"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.serviceInterest && (
                  <p className="text-xs text-electric-magenta">{errors.serviceInterest}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-interface-grey/80 text-sm font-medium">
                  Message <span className="text-electric-magenta">*</span>
                </Label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value })
                    if (errors.message) setErrors({ ...errors, message: "" })
                  }}
                  className={cn(
                    "flex w-full rounded-lg border bg-midnight-navy/60 border-electric-violet/20 px-3 py-3 text-sm text-interface-grey placeholder:text-interface-grey/40 focus:outline-none focus:border-electric-violet transition-colors resize-none",
                    errors.message && "border-electric-magenta"
                  )}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
                {errors.message && (
                  <p className="text-xs text-electric-magenta">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-electric-violet hover:bg-electric-violet/90 text-primary-foreground py-3 h-12 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,33,255,0.4)] disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>

              <p className="text-xs text-interface-grey/50 text-center">
                By submitting this form, you agree to our Privacy Policy and consent to being contacted regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
