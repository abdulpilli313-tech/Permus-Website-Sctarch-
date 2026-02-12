"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone, Linkedin, Github, Instagram, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI Solutions", href: "/services#ai" },
    { label: "Digital Transformation", href: "/services#digital" },
    { label: "Full-Stack Development", href: "/services#development" },
    { label: "Enterprise Platforms", href: "/services#enterprise" },
  ],
  products: [
    { label: "MyndLab", href: "/products/myndlab" },
    { label: "AssetGo", href: "/products/assetgo" },
    { label: "EquiDesk", href: "/products/equidesk" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Documentation", href: "/docs" },
    { label: "Support", href: "/support" },
  ],
}

const footerSocials = [
  { label: "LinkedIn", href: "https://linkedin.com/company/permus", icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com/permus", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com/permus", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "GitHub", href: "https://github.com/permus", icon: Github },
]

export function Footer() {
  return (
    <footer className="relative bg-midnight-navy border-t border-electric-violet/10">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/Permus%20Logo%201.svg"
                alt="Permus"
                width={72}
                height={72}
                className="w-35"
              />
            </Link>
            <p className="text-sm text-interface-grey/60 mb-6 max-w-xs leading-relaxed">
              Enterprise-grade software solutions and AI innovation, engineered in Dubai for global impact.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm text-interface-grey/60">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-data-cyan shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-data-cyan shrink-0" />
                <a href="mailto:hello@permus.ae" className="hover:text-data-cyan transition-colors">
                  hello@permus.ae
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-data-cyan shrink-0" />
                <a href="tel:+971501234567" className="hover:text-data-cyan transition-colors">
                  +971 50 123 4567
                </a>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-serif font-semibold text-interface-grey mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-interface-grey/60 hover:text-data-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-interface-grey mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-interface-grey/60 hover:text-data-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-interface-grey mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-interface-grey/60 hover:text-data-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-interface-grey mb-4">Blogs</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-interface-grey/60 hover:text-data-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subscribe panel */}
        <div className="relative mt-6 px-4 md:px-6 pt-4 pb-3 rounded-3xl">
          <div className="absolute inset-0 rounded-3xl neon-sweep" />
          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-interface-grey mb-4">
                Subscribe Today.
              </h3>
              <p className="text-interface-grey/70 max-w-xl leading-relaxed mb-8">
                Get product updates, insights, and enterprise AI news from Permus.
              </p>

              <form className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full">
                  <label className="text-sm text-interface-grey/60" htmlFor="footer-email">
                    Email Address
                  </label>
                  <div className="mt-2 flex items-center gap-3 border-b border-electric-violet/20 pb-2">
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="w-full bg-transparent text-interface-grey placeholder:text-interface-grey/40 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="w-10 h-10 rounded-full bg-electric-violet/20 text-data-cyan hover:bg-electric-violet/30 transition-colors duration-300"
                      aria-label="Subscribe"
                    >
                      →
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-8">
                <div className="text-sm text-interface-grey/60 uppercase tracking-wider mb-3">
                  Follow Us On
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {footerSocials.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-interface-grey/60 hover:text-data-cyan transition-colors duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold uppercase tracking-tight text-transparent"
                style={{ WebkitTextStroke: "1px rgba(241, 242, 244, 0.25)" }}
              >
                PERMUS
              </div>
              <div className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-interface-grey mt-2">
               AI Solutions
                <span className="text-electric-violet ml-2">.</span>
              </div>
              <p className="text-interface-grey/60 mt-4 max-w-sm ml-auto">
                Enterprise software, AI systems, and transformation — engineered in Dubai.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-electric-violet/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-interface-grey/50">
            © {new Date().getFullYear()} Permus Software House. All rights reserved.
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6 text-sm text-interface-grey/50">
            <Link href="/privacy" className="hover:text-data-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-data-cyan transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
