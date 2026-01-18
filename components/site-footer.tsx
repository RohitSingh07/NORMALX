import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h4 className="font-semibold">About Us</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Established in 2014 we are leading service provider in IT solutions and consulting services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Useful Links</h4>
            <ul className="mt-2 space-y-2 text-sm">
              {[
                ["Home", "#home"],
                ["About Us", "#about"],
                ["Contract Staffing", "#contract-staffing"],
                ["Permanent Staffing", "#permanent-staffing"],
                ["Training Solutions", "#training"],
                ["Contact Us", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link className="text-muted-foreground hover:text-foreground" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Working Hours</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Mondays - Fridays
              <br />
              9:30am - 6:30pm
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Contact Us</h4>
            <address className="mt-2 not-italic text-sm text-muted-foreground">
              PNR Technology
              <br />
              Malibu Towne, Sohna Road, Gurgaon - 122018
              <br />
              Mansarovar, Jaipur - 302001
              <br />
              Mob: +91-9990635353
              <br />
              Email:{" "}
              <a className="underline" href="mailto:ashish@pnrtechnology.in">
                ashish@pnrtechnology.in
              </a>
            </address>
            <div className="mt-3 flex gap-3 text-muted-foreground">
              <a aria-label="Facebook" href="#" className="hover:text-foreground">
                <Facebook className="size-5" />
              </a>
              <a aria-label="Instagram" href="#" className="hover:text-foreground">
                <Instagram className="size-5" />
              </a>
              <a aria-label="LinkedIn" href="#" className="hover:text-foreground">
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          Copyright 2025 - PNR Technology. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
