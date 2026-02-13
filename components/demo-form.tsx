"use client"

import { useEffect, useState } from "react"

export interface DemoFormData {
  name: string
  email: string
  dialCode: string
  phone: string
  message: string
}

interface DemoFormProps {
  onSubmit?: (data: DemoFormData) => Promise<void> | void
  isSubmitting?: boolean
  submitLabel?: string
  resetKey?: number
}

const phonePlaceholders: Record<string, string> = {
  "+971": "50 123 4567",
  "+1": "(555) 123-4567",
  "+44": "20 7946 0958",
  "+61": "0412 345 678",
  "+91": "98765 43210",
  "+966": "050 123 4567",
  "+974": "3300 1234",
  "+965": "6501 2345",
  "+968": "9123 4567",
  "+973": "3600 1234",
  "+49": "0151 23456789",
  "+33": "06 12 34 56 78",
  "+81": "090-1234-5678",
  "+86": "138 0013 8000",
  "+7": "8 (912) 345-67-89",
  "+34": "612 34 56 78",
  "+39": "312 345 6789",
  "+31": "06 12345678",
  "+52": "55 1234 5678",
  "+55": "11 91234-5678",
  "+27": "082 123 4567",
  "+20": "0100 123 4567",
  "+60": "012-345 6789",
  "+65": "8123 4567",
  "+82": "010-1234-5678",
  "+90": "0505 123 45 67",
  "+92": "0300 1234567",
  "+351": "912 345 678",
  "+46": "070-123 45 67",
  "+47": "412 34 567",
  "+45": "20 12 34 56",
  "+41": "079 123 45 67",
  "+62": "0812-3456-7890",
  "+63": "0917 123 4567",
  "+64": "021 123 4567",
}

export function DemoForm({
  onSubmit,
  isSubmitting = false,
  submitLabel = "Send Message",
  resetKey,
}: DemoFormProps) {
  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    email: "",
    dialCode: "+971",
    phone: "",
    message: "",
  })

  useEffect(() => {
    if (resetKey === undefined) return
    setFormData({ name: "", email: "", dialCode: "+971", phone: "", message: "" })
  }, [resetKey])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!onSubmit) return
    await onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          required
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
          placeholder="Full Name"
          className="w-full rounded-xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-midnight-navy placeholder:text-midnight-navy/45 focus:outline-none focus:border-electric-violet/60 focus:bg-white/70 transition-colors"
        />
        <input
          type="email"
          required
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          placeholder="Email Address"
          className="w-full rounded-xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-midnight-navy placeholder:text-midnight-navy/45 focus:outline-none focus:border-electric-violet/60 focus:bg-white/70 transition-colors"
        />
      </div>
      <div className="grid grid-cols-[160px_1fr] gap-4">
        <div className="relative">
          <select
            aria-label="Country code"
            className="w-full appearance-none rounded-xl border border-white/40 bg-white/50 px-4 py-3 pr-12 text-sm text-midnight-navy focus:outline-none focus:border-electric-violet/60 focus:bg-white/70 transition-colors"
            value={formData.dialCode}
            onChange={(event) => setFormData({ ...formData, dialCode: event.target.value })}
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
          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-midnight-navy/70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <input
          type="tel"
          value={formData.phone}
          onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
          placeholder={phonePlaceholders[formData.dialCode] ?? "Phone Number"}
          className="w-full rounded-xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-midnight-navy placeholder:text-midnight-navy/45 focus:outline-none focus:border-electric-violet/60 focus:bg-white/70 transition-colors"
        />
      </div>
      <textarea
        placeholder="Your Message"
        rows={4}
        value={formData.message}
        onChange={(event) => setFormData({ ...formData, message: event.target.value })}
        className="w-full rounded-xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-midnight-navy placeholder:text-midnight-navy/45 focus:outline-none focus:border-electric-violet/60 focus:bg-white/70 transition-colors"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full rounded-xl bg-midnight-navy text-interface-grey py-3 text-sm font-semibold tracking-wide uppercase transition-colors hover:text-data-cyan disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : submitLabel}
      </button>
    </form>
  )
}
