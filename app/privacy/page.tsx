import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"
import { ContactSidebar } from "@/components/contact-sidebar"

export const metadata: Metadata = {
  title: "Privacy Policy | Permus Software House",
  description:
    "Read Permus Software House's Privacy Policy covering data collection, usage, security, and your rights.",
  openGraph: {
    title: "Privacy Policy | Permus Software House",
    description:
      "Read Permus Software House's Privacy Policy covering data collection, usage, security, and your rights.",
    type: "website",
  },
}

const sections = [
  {
    title: "Information We Collect",
    body:
      "We collect information you provide directly, such as contact details and inquiry content, and limited technical data such as device, browser, and usage analytics.",
    points: [
      "Contact details submitted through forms, email, or booking requests.",
      "Business-related information shared for project discussions.",
      "Technical data like IP address, browser type, and pages visited.",
    ],
  },
  {
    title: "How We Use Information",
    body:
      "We use information to respond to inquiries, deliver services, improve our website, and meet legal obligations.",
    points: [
      "Provide proposals, project scoping, and customer support.",
      "Maintain security, performance, and analytics for site improvements.",
      "Communicate updates related to services you request.",
    ],
  },
  {
    title: "Cookies & Analytics",
    body:
      "We use cookies and similar technologies to remember preferences and measure site performance.",
    points: [
      "Functional cookies for site stability and user experience.",
      "Analytics cookies to understand traffic and content usage.",
    ],
  },
  {
    title: "Data Sharing & Transfers",
    body:
      "We do not sell personal data. We may share limited information with trusted service providers who help operate our business.",
    points: [
      "Service providers (hosting, analytics, CRM) under confidentiality terms.",
      "Legal disclosures when required by law or to protect rights.",
    ],
  },
  {
    title: "Data Security",
    body:
      "We implement technical and organizational safeguards to protect your information, including access controls and secure storage.",
    points: [
      "Controlled access to systems and data.",
      "Continuous monitoring and security best practices.",
    ],
  },
  {
    title: "Your Rights",
    body:
      "Depending on your location, you may request access, correction, or deletion of your personal information.",
    points: [
      "Request a copy of the data we hold about you.",
      "Ask to update or delete your information where applicable.",
    ],
  },
  {
    title: "Retention",
    body:
      "We keep personal data only as long as needed for the purposes described in this policy or as required by law.",
  },
  {
    title: "Contact Us",
    body:
      "For privacy questions or requests, contact our team and we will respond promptly.",
  },
]

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-midnight-navy">
      <Navigation />
      <SocialSidebar />
      <ContactSidebar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute top-12 left-1/4 w-80 h-80 bg-electric-violet/15 rounded-full blur-[110px] animate-pulse-glow" />
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-data-cyan/10 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl">
            <span className="inline-flex items-center gap-2 glass text-sm font-medium text-interface-grey/80 mb-6">
              Legal
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-interface-grey mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-interface-grey/70 leading-relaxed">
              This Privacy Policy explains how Permus Software House collects, uses, and protects your information
              when you visit our website or engage with our services.
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
