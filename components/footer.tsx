"use client"

import Link from "next/link"
import { Linkedin, Github, MapPin, Mail, Phone } from "lucide-react"

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

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/permus", label: "LinkedIn" },
  { icon: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ), href: "https://x.com/permus", label: "X (Twitter)" },
  { icon: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ), href: "https://instagram.com/permus", label: "Instagram" },
  { icon: Github, href: "https://github.com/permus", label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="relative bg-midnight-navy border-t border-electric-violet/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-electric-violet rounded-lg rotate-45" />
                <div className="absolute inset-1 bg-midnight-navy rounded-md rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center font-serif text-xl font-bold text-interface-grey">
                  P
                </span>
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-interface-grey">
                PERMUS
              </span>
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
            <h4 className="font-serif font-semibold text-interface-grey mb-4">Resources</h4>
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

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-electric-violet/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-interface-grey/50">
            © {new Date().getFullYear()} Permus Software House. All rights reserved.
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-interface-grey/50 hover:text-data-cyan transition-colors p-2"
                  aria-label={link.label}
                >
                  <Icon />
                </a>
              )
            })}
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
