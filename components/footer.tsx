"use client"

import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

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
