import type React from "react"
import { Card } from "@/components/ui/card"
import { Code, Globe, Megaphone } from "lucide-react"

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-primary">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-balance">We deliver what you require</h2>
          <p className="text-muted-foreground text-pretty">
            We prepare you for your success model and we are constantly passionate about providing solutions which are
            relevant to you. Be it a small company or a large company, we deliver what you require.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Code className="text-primary" />}
            title="ORACLE TECHNOLOGIES"
            desc="Implementation, customization, and support for Oracle applications and databases."
          />
          <ServiceCard
            icon={<Globe className="text-primary" />}
            title="WEB DESIGN/DEVELOPMENT SOLUTIONS"
            desc="Modern, responsive web solutions built for scalability and performance."
          />
          <ServiceCard
            icon={<Megaphone className="text-primary" />}
            title="DIGITAL MARKETING SOLUTIONS"
            desc="Data-driven strategies to amplify your brand and accelerate growth."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex size-11 items-center justify-center rounded-md bg-primary/10">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{desc}</p>
        </div>
      </div>
    </Card>
  )
}
