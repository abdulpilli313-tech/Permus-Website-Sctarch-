"use client"

import React, { useState } from "react"
import { X } from "lucide-react"
import { DemoForm, DemoFormData } from "@/components/demo-form"
import Image from "next/image"

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [resetKey, setResetKey] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (_data: DemoFormData) => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setResetKey((prev) => prev + 1)
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
      <div className="relative w-full max-w-2xl">
        <div className="pointer-events-none absolute -left-32 -top-20 hidden w-72 lg:block animate-float opacity-90 z-0">
          <Image
            src="/elements/glass_arrow.svg"
            alt=""
            width={288}
            height={288}
            className="h-auto w-full opacity-80"
            priority
          />
        </div>
        <div className="relative rounded-3xl bg-white/60 p-8 shadow-[0_28px_70px_rgba(13,20,51,0.28)] border border-white/50 backdrop-blur-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 z-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-electric-violet/15 opacity-70 z-10" />
        <div className="relative z-20">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-0 right-0 text-interface-grey/60 hover:text-interface-grey transition-colors"
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
              <h3 className="font-serif text-2xl font-bold text-midnight-navy mb-2">Thank You!</h3>
              <p className="text-midnight-navy/70">{"We'll be in touch shortly to schedule your demo."}</p>
            </div>
          ) : (
            <>
              <h2 id="modal-title" className="font-serif text-2xl font-bold text-midnight-navy mb-2">
                Book a Demo
              </h2>
              <p className="text-midnight-navy/70 mb-6">
                Schedule a personalized demonstration of our enterprise solutions.
              </p>

              <DemoForm
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                submitLabel="Send Message"
                resetKey={resetKey}
              />
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  )
}
