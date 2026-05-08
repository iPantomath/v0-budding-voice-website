"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Menu, X } from "lucide-react"
import Image from "next/image"

const WHATSAPP_URL = "https://wa.me/+60174885368?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Budding%20Voice."

const NAV_LINKS = [
  { label: "The Challenge", href: "#challenge" },
  { label: "Our Solution", href: "#solution" },
  { label: "Who It's For", href: "#who" },
  { label: "How It Works", href: "#process" },
  { label: "Outcomes", href: "#outcomes" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-card/95 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center">
            <Image
              src="/images/budding-voice-logo-1.png"
            alt="Budding Voice"
            width={128} 
            height={128}
            className="object-cover"
            priority
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-primary">
            Budding Voice
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-primary lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-card px-4 pb-4 pt-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
