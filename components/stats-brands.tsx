import Image from "next/image"

export default function StatsBrands() {
  const logos = new Array(12).fill(0).map((_, i) => ({
    id: i,
    src: i % 2 === 0 ? "/public/placeholder-logo.svg" : "/public/placeholder-logo.png",
  }))
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-center text-sm uppercase tracking-widest text-muted-foreground">Brands we work for</h3>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center rounded-md border bg-background p-4">
              <Image
                src="/generic-brand-logo.png"
                alt="Client brand logo"
                width={120}
                height={40}
                className="object-contain opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
