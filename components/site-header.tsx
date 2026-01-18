"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#contract-staffing", label: "Contract Staffing" },
  { href: "#permanent-staffing", label: "Permanent Staffing" },
  { href: "#training", label: "Training Solutions" },
  { href: "#contact", label: "Contact Us" },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:p-2 focus:bg-primary focus:text-primary-foreground"
          >
            Skip to main content
          </a>
          <Link href="#home" className="flex items-center gap-2 font-semibold tracking-wide">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-mono text-sm">
              PNR
            </span>
            <span className="text-pretty">PNR TECHNOLOGY</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="hidden md:inline-flex">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
