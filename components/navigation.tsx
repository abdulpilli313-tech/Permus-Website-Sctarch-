"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Blogs" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/Permus%20Logo%201.svg"
            alt="Permus"
            width={72}
            height={72}
            className={cn("w-auto transition-all duration-300", isScrolled ? "h-10" : "h-14")}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-interface-grey/80 hover:text-data-cyan transition-colors duration-200 relative group",
                pathname === link.href && "text-data-cyan"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-electric-violet transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* CTA + Powered by */}
        <div className="hidden lg:flex items-center gap-6">
          <Button
            variant="default"
            className="group px-6 py-2 rounded-full bg-white/10 border border-white/20 text-interface-grey hover:text-data-cyan hover:bg-white/15 hover:shadow-[0_0_30px_rgba(134,233,255,0.35)]"
          >
            <span>Request a demo</span>
            <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-electric-violet text-interface-grey transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
          <a
            href="https://pilli.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-interface-grey/60 hover:text-data-cyan transition-colors"
            aria-label="Powered by Pill"
          >
            <span className="uppercase tracking-widest">Powered by</span>
            <Image
              src="/pilli_logo.png"
              alt="Pill"
              width={56}
              height={24}
              className="h-5 w-auto"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden text-interface-grey p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 glass-nav transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-base font-medium text-interface-grey/80 hover:text-data-cyan transition-colors duration-200 py-2",
                pathname === link.href && "text-data-cyan"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="default"
            className="mt-4 group w-full px-6 py-2 rounded-full bg-white/10 border border-white/20 text-interface-grey hover:text-data-cyan hover:bg-white/15"
          >
            <span>Request a demo</span>
            <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-electric-violet text-interface-grey transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </nav>
      </div>
    </header>
  )
}
