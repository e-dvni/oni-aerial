import QuoteForm from "@/components/QuoteForm";

export default function HomePage() {
  const reasons = [
    "FAA Part 107 Certified Drone Pilot",
    "Veteran-Owned Business",
    "Professional High-Resolution Imaging",
    "Fast 24–48 Hour Delivery",
    "Safe & Compliant Operations",
  ];

  const services = [
    {
      title: "Roof & Insurance Inspections",
      description:
        "Detailed aerial inspections for homeowners, insurance claims, and roofing contractors.",
    },
    {
      title: "Real Estate Media",
      description:
        "Professional aerial photography and cinematic footage for property listings.",
    },
    {
      title: "Construction Monitoring",
      description:
        "Reliable aerial documentation of project progress for contractors and developers.",
    },
    {
      title: "Solar Panel Inspections",
      description:
        "Inspection of solar arrays to identify damage, debris, or shading.",
    },
  ];

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,4,41,0.18),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              FAA Part 107 Certified | Veteran-Owned
            </p>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Precision Drone Inspections & Aerial Imaging
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Serving Denver and surrounding Colorado areas with premium drone
              inspection, documentation, and aerial media services.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Request a Quote
              </a>
              
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                    Coverage Area
                  </p>
                  <p className="mt-1 text-xl font-semibold text-white">
                    Denver, Colorado
                  </p>
                </div>

                <div className="rounded-full border border-[#D90429]/40 bg-[#D90429]/10 px-4 py-2 text-xs font-medium text-[#FF4D6D]">
                  24–48 Hour Delivery
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                  <p className="text-sm text-white/50">Inspection Services</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Roof, Solar, Construction
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
                  <p className="text-sm text-white/50">Media Services</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Real Estate & Cinematic
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/50 p-5 md:col-span-2">
                  <p className="text-sm text-white/50">Call Directly</p>
                  <a
                    href="tel:3037475637"
                    className="mt-2 block text-2xl font-semibold text-white"
                  >
                    303-747-5637
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Request a Quote
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Tell us about your project.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
              Send a few quick details and we will respond within 24 hours with next
              steps, pricing guidance, or a custom quote.
            </p>
            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Or call directly
              </p>
              <a href="tel:3037475637" className="mt-3 block text-3xl font-semibold text-white">
                303-747-5637
              </a>
            </div>
          </div>

          <div>
            <QuoteForm
              title="Send your project details."
              subtitle="Tell us what you need and we’ll follow up with pricing guidance or a custom quote within 24 hours."
            />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Why Choose Oni Aerial
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Professional, compliant, and built for fast decision-making.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/80"
              >
                <p className="font-medium text-white">✔ {reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Aerial services designed for inspections, documentation, and media.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-black/40 p-7 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}