import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-xl border bg-card p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-[1.5fr,1fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary">We Serve Everyone</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-balance">
                Whether small or large, we find you talent that adds to your growth.
              </h3>
              <p className="mt-2 text-muted-foreground">
                We collaborate with loyalty and transparency—focused on endless prospecting that fits your success
                model.
              </p>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <Button>Get Started</Button>
              <Button variant="outline" asChild>
                <a href="mailto:ashish@pnrtechnology.in">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
