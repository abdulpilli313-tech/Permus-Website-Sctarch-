import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"
import { ContactSidebar } from "@/components/contact-sidebar"

export const metadata: Metadata = {
  title: "Terms of Service | Permus Software House",
  description:
    "Review the Terms of Service for Permus Software House, including usage rules, responsibilities, and legal terms.",
  openGraph: {
    title: "Terms of Service | Permus Software House",
    description:
      "Review the Terms of Service for Permus Software House, including usage rules, responsibilities, and legal terms.",
    type: "website",
  },
}

const sections = [
  {
    title: "Agreement to Terms",
    body:
      "By accessing our website or engaging our services, you agree to these Terms of Service. If you do not agree, please do not use our services.",
  },
  {
    title: "Services",
    body:
      "Permus provides enterprise software, AI solutions, and digital transformation services. Specific deliverables and timelines are defined in project agreements.",
  },
  {
    title: "User Responsibilities",
    body:
      "You agree to provide accurate information and use our website and services in compliance with applicable laws.",
    points: [
      "Do not misuse, disrupt, or attempt to compromise our systems.",
      "Respect intellectual property and confidentiality obligations.",
    ],
  },
  {
    title: "Intellectual Property",
    body:
      "All website content, branding, and materials are owned by Permus or its licensors. Project-specific IP rights are governed by client agreements.",
  },
  {
    title: "Confidentiality",
    body:
      "Both parties may share confidential information during engagement. Each party must protect such information and use it only for the agreed purpose.",
  },
  {
    title: "Disclaimers",
    body:
      "Our website and content are provided “as is.” We do not guarantee that the site will be uninterrupted or error-free.",
  },
  {
    title: "Limitation of Liability",
    body:
      "To the extent permitted by law, Permus is not liable for indirect, incidental, or consequential damages arising from use of the website or services.",
  },
  {
    title: "Termination",
    body:
      "We may suspend or terminate access to our website if misuse occurs. Service termination terms are defined in client agreements.",
  },
  {
    title: "Governing Law",
    body:
      "These Terms are governed by the laws applicable in the United Arab Emirates, unless a separate agreement specifies otherwise.",
  },
  {
    title: "Contact Us",
    body:
      "Questions about these Terms? Reach out to our team and we will respond promptly.",
  },
]

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-midnight-navy">
      <Navigation />
      <SocialSidebar />
      <ContactSidebar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute top-12 right-1/4 w-80 h-80 bg-core-violet/20 rounded-full blur-[110px] animate-pulse-glow" />
        <div
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-muted-lavender/10 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl">
            <span className="inline-flex items-center gap-2 glass text-sm font-medium text-interface-grey/80 mb-6">
              Legal
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-interface-grey mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-interface-grey/70 leading-relaxed">
              These Terms of Service govern the use of the Permus Software House website and services. Project-specific
              terms will be outlined in individual agreements.
            </p>
            <p className="mt-4 text-sm text-interface-grey/60">Last updated: February 6, 2026</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-midnight-navy to-transparent" />
      </section>

      {/* Content */}
      <section className="relative pb-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8">
            {sections.map((section) => (
              <div key={section.title} className="glass-card rounded-2xl p-8">
                <h2 className="font-serif text-2xl md:text-3xl text-interface-grey mb-3">
                  {section.title}
                </h2>
                <p className="text-interface-grey/70 leading-relaxed mb-4">{section.body}</p>
                {section.points ? (
                  <ul className="space-y-2 text-interface-grey/60">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-data-cyan" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.title === "Contact Us" ? (
                  <div className="mt-5">
                    <Link
                      href="/contact"
                      className="text-data-cyan hover:text-interface-grey transition-colors"
                    >
                      Contact Permus
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
