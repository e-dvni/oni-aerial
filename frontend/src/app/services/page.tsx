import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Roof & Insurance Inspections",
      price: "$400 – $600",
      description:
        "Detailed aerial inspections for homeowners, insurance claims, and roofing contractors.",
      includes: [
        "Full aerial roof inspection",
        "10–20 high-resolution images",
        "Damage documentation",
        "Close-up imagery of problem areas",
        "Property overview shot",
        "24–48 hour delivery",
      ],
      extras: ["Inspection report PDF", "Same-day priority delivery"],
    },
    {
      title: "Real Estate Media Package",
      price: "$300 – $600",
      description:
        "Professional aerial photography and cinematic footage for property listings.",
      includes: [
        "15–25 professional aerial photos",
        "Cinematic flyover footage",
        "Edited listing-ready media",
        "MLS-ready resolution delivery",
      ],
      extras: ["30–60 second cinematic video", "Social media vertical edits"],
    },
    {
      title: "Construction Monitoring",
      price: "$600 – $900",
      description:
        "Reliable aerial documentation of project progress for contractors and developers.",
      includes: [
        "Aerial site overview imagery",
        "Construction progress documentation",
        "High-resolution photos and video",
        "Organized project media delivery",
      ],
      extras: [
        "Monthly monitoring packages",
        "Timeline progress reports",
        "Orthomosaic mapping",
      ],
    },
    {
      title: "Solar Panel Inspections",
      price: "$800 – $1500",
      description:
        "Aerial inspection of solar arrays to identify visible damage, debris, or shading.",
      includes: [
        "Aerial inspection of solar arrays",
        "High-resolution panel imagery",
        "Detection of debris, shading, or visible damage",
        "Detailed aerial overview of installation",
      ],
      extras: ["Thermal imaging (when available)", "Maintenance documentation"],
    },
  ];

  return (
    <main className="bg-[#050505] text-[#F5F5F5]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,4,41,0.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
            Services & Pricing
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Drone inspection and aerial media services built for speed,
            clarity, and professional delivery.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Oni Aerial provides premium aerial inspection, documentation, and
            media services throughout Denver and surrounding Colorado areas.
            Pricing varies based on property size, complexity, access, and
            deliverable needs.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-black/40 p-7 shadow-xl shadow-black/20"
              >
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-white md:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-base leading-7 text-white/70">
                        {service.description}
                      </p>
                    </div>
                    <div className="inline-flex w-auto min-w-[140px] items-center justify-center rounded-full border border-[#D90429]/40 bg-[#D90429]/10 px-4 py-2 text-sm font-semibold text-[#FF4D6D]">
                        {service.price}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
                    Includes
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-white/80">
                        <span className="mt-1 text-[#D90429]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">
                    Optional Add-Ons
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {service.extras.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-white/80">
                        <span className="mt-1 text-[#D90429]">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Custom Commercial Projects
            </p>

            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  Custom Quote
                </h2>
                <p className="mt-4 text-base leading-7 text-white/70">
                  For larger or specialized projects, pricing is based on scope,
                  site conditions, flight complexity, deliverables, and turnaround
                  requirements.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#D90429] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Request a Custom Quote
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Infrastructure inspections",
                "Industrial facilities",
                "Large commercial properties",
                "Marketing & promotional aerial footage",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5 text-sm font-medium text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Turnaround
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                24–48 Hours
              </p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Most standard projects are delivered within one to two business
                days after capture.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Coverage
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                Denver + Surrounding Areas
              </p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Travel, site distance, and project size may affect final quote
                ranges for certain jobs.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Compliance
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                FAA Part 107 Certified
              </p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Safe, compliant flight operations with professional imaging and
                organized media delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 text-center md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Need a quote for your project?
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Let’s price your aerial inspection or media job.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
              Tell us what you need, where the property is located, and your
              timeline. We’ll respond with next steps and pricing guidance.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#D90429] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Request a Quote
              </Link>

              <a
                href="tel:3037475637"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
              >
                Call 303-747-5637
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}