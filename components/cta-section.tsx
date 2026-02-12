"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/book-demo-modal"
import Image from "next/image"

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dialCode, setDialCode] = useState("+971")

  const phonePlaceholders: Record<string, string> = {
    "+971": "50 123 4567",
    "+1": "(555) 123-4567",
    "+44": "7123 456789",
    "+61": "412 345 678",
    "+91": "98765 43210",
    "+966": "5X XXX XXXX",
    "+974": "3XXX XXXX",
    "+965": "5XXX XXXX",
    "+968": "9XXX XXXX",
    "+973": "3XXX XXXX",
    "+49": "1512 3456789",
    "+33": "6 12 34 56 78",
    "+81": "90-1234-5678",
    "+86": "138 0013 8000",
    "+7": "912 345-67-89",
    "+34": "612 34 56 78",
    "+39": "312 345 6789",
    "+31": "6 12 34 56 78",
    "+52": "55 1234 5678",
    "+55": "11 91234-5678",
    "+27": "71 234 5678",
    "+20": "10 1234 5678",
    "+60": "12-345 6789",
    "+65": "8123 4567",
    "+82": "10-1234-5678",
    "+90": "5XX XXX XX XX",
    "+92": "300 1234567",
    "+351": "912 345 678",
    "+46": "70 123 45 67",
    "+47": "412 34 567",
    "+45": "20 12 34 56",
    "+41": "79 123 45 67",
    "+62": "812-3456-7890",
    "+63": "917 123 4567",
    "+64": "21 123 4567",
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 88% 18%, #86E9FF 0%, rgba(134, 233, 255, 0) 55%), radial-gradient(70% 70% at 80% 82%, #A7A1FF 0%, rgba(167, 161, 255, 0) 60%), radial-gradient(80% 80% at 45% 35%, #5B21FF 0%, rgba(91, 33, 255, 0) 65%), linear-gradient(225deg, #26148C 0%, #5B21FF 35%, #0D1433 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-transparent via-white/20 to-midnight-navy/20" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-1/2 w-[520px] h-[520px] bg-electric-violet/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-data-cyan/15 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-interface-grey mb-6">
              Ready to Transform?
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-interface-grey leading-tight text-balance">
              READY TO FUTURE
            </h2>
            <p className="mt-4 text-2xl md:text-3xl text-interface-grey/90">
              Proof your Business
            </p>
            <p className="mt-4 text-base md:text-lg text-interface-grey/70 max-w-xl">
              Partner with Permus to build intelligent products, AI systems, and enterprise platforms that scale.
            </p>

            <Button
              size="lg"
              className="mt-8 group bg-white/10 text-interface-grey hover:text-data-cyan border border-white/20 px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:bg-white/15 hover:shadow-[0_0_30px_rgba(91,33,255,0.4)]"
              onClick={() => setIsModalOpen(true)}
            >
              Request a demo
              <span className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-electric-violet text-interface-grey transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Button>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -left-36 -top-16 hidden w-[320px] lg:block animate-float">
              <Image
                src="/elements/glass_arrow.svg"
                alt=""
                width={320}
                height={320}
                className="h-auto w-full opacity-90"
                priority
              />
            </div>

            <div className="relative rounded-3xl bg-white/60 p-8 shadow-[0_28px_70px_rgba(13,20,51,0.28)] border border-white/50 backdrop-blur-3xl overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-electric-violet/15 opacity-70" />
              <h3 className="text-2xl font-semibold text-midnight-navy mb-2">Get In Touch</h3>
              <p className="text-sm text-midnight-navy/70 mb-6">
                Tell us about your goals and we’ll get back within 24 hours.
              </p>
              <form className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-midnight-navy placeholder:text-midnight-navy/45 focus:outline-none focus:border-electric-violet/60 focus:bg-white/70 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-midnight-navy placeholder:text-midnight-navy/45 focus:outline-none focus:border-electric-violet/60 focus:bg-white/70 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-[160px_1fr] gap-4">
                  <select
                    aria-label="Country code"
                    className="w-full rounded-xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-midnight-navy focus:outline-none focus:border-electric-violet/60 focus:bg-white/70 transition-colors"
                    value={dialCode}
                    onChange={(event) => setDialCode(event.target.value)}
                  >
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+966">🇸🇦 +966</option>
                    <option value="+974">🇶🇦 +974</option>
                    <option value="+965">🇰🇼 +965</option>
                    <option value="+968">🇴🇲 +968</option>
                    <option value="+973">🇧🇭 +973</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+7">🇷🇺 +7</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+31">🇳🇱 +31</option>
                    <option value="+52">🇲🇽 +52</option>
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+27">🇿🇦 +27</option>
                    <option value="+20">🇪🇬 +20</option>
                    <option value="+60">🇲🇾 +60</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+82">🇰🇷 +82</option>
                    <option value="+90">🇹🇷 +90</option>
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+351">🇵🇹 +351</option>
                    <option value="+46">🇸🇪 +46</option>
                    <option value="+47">🇳🇴 +47</option>
                    <option value="+45">🇩🇰 +45</option>
                    <option value="+41">🇨🇭 +41</option>
                    <option value="+62">🇮🇩 +62</option>
                    <option value="+63">🇵🇭 +63</option>
                    <option value="+64">🇳🇿 +64</option>
                  </select>
                  <input
                    type="tel"
                    placeholder={phonePlaceholders[dialCode] ?? "Phone Number"}
                    className="w-full rounded-xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-midnight-navy placeholder:text-midnight-navy/45 focus:outline-none focus:border-electric-violet/60 focus:bg-white/70 transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full rounded-xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-midnight-navy placeholder:text-midnight-navy/45 focus:outline-none focus:border-electric-violet/60 focus:bg-white/70 transition-colors"
                />
                <button
                  type="button"
                  className="mt-2 w-full rounded-xl bg-midnight-navy text-interface-grey py-3 text-sm font-semibold tracking-wide uppercase"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
