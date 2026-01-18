export default function Expertise() {
  const items = ["MAINFRAME PROFESSIONALS", "ERP", "ORACLE APPLICATIONS/DBM", "TESTING", "NETWORKING & INFRASTRUCTURE"]
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/modern-walkway-architecture.jpg')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-background/80" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">Companies of all sizes love our approach</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-balance">And you too will</h2>
            <p className="mt-3 text-muted-foreground">
              Established in 2014 we are leading service provider in IT solutions and consulting services. Our aim is to
              provide premier quality services to our highly prestigious clients.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item} className="rounded-md border bg-background/80 px-4 py-3">
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border bg-background/70 p-6">
            <h3 className="font-semibold">We got you with us</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Our numbers have been speaking for us. We still are progressing in what we think we can achieve.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Stat value="7" label="Years in Business" />
              <Stat value="1000" label="Total Hires" />
              <Stat value="20" label="Cities Served" />
              <Stat value="257" label="Trainings" />
            </dl>
            <div className="mt-6 rounded-md bg-primary/10 p-4">
              <p className="text-sm">
                Our client satisfaction is a whopping <span className="font-semibold text-primary">92%</span>... Looking
                to hire employees?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-2xl font-semibold text-primary">{value}</dt>
      <dd className="text-xs text-muted-foreground">{label}</dd>
    </div>
  )
}
