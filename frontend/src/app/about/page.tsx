import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      title: "Professionalism",
      description:
        "Every project is handled with clear communication, organized delivery, and respect for the client’s timeline and goals.",
    },
    {
      title: "Safety",
      description:
        "Operations are approached with planning, awareness, and compliance so every flight is conducted responsibly.",
    },
    {
      title: "Precision",
      description:
        "Oni Aerial is built around capturing clear, usable aerial data that supports real-world decisions.",
    },
  ];

  const industries = [
    "Roofing Contractors",
    "Insurance Adjusters",
    "Construction Companies",
    "Solar Installers",
    "Real Estate Agents",
    "Property Managers",
    "Homeowners",
    "Property Developers",
  ];

  return (
    <main className="bg-[#050505] text-[#F5F5F5]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,4,41,0.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
            About Oni Aerial
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Reliable drone services built on professionalism, safety, and
            precision.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Oni Aerial is a Denver-based drone services company specializing in
            aerial inspections and professional imaging for residential and
            commercial projects.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Aerial documentation with a disciplined, service-first approach.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              Oni Aerial was founded to provide clients with dependable drone
              services that combine modern aerial technology with a professional,
              streamlined experience.
            </p>

            <p>
              The company focuses on helping homeowners, contractors, property
              managers, and businesses access high-resolution aerial imagery for
              inspections, documentation, and media needs.
            </p>

            <p>
              From roof and insurance inspections to real estate media,
              construction monitoring, and solar inspections, the goal is always
              the same: deliver clear visual information that clients can
              actually use.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Founder
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Founded by FAA-certified drone pilot Nyssa Lee.
            </h2>

            <div className="mt-6 space-y-6 text-base leading-8 text-white/70 w-screen max-w-none -ml-6 lg:-ml-8 px-6 lg:px-8">
              <p>
                Oni Aerial was founded by FAA-certified drone pilot Nyssa Lee,
                with a mission to provide reliable aerial services rooted in
                precision, professionalism, and strong operational standards.
              </p>

              <p>
                As a Veteran-Owned business, Oni Aerial reflects a commitment to
                discipline, accountability, and doing the job right from flight
                planning through final delivery.
              </p>

              <p>
                That approach helps clients feel confident that every project is
                handled with care, compliance, and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              What We Stand For
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              The standards behind every project.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[2rem] border border-white/10 bg-black/40 p-7 shadow-xl shadow-black/20"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
                Who We Serve
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                Supporting property, project, and media needs across industries.
              </h2>

              <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
                Oni Aerial serves clients who need dependable aerial visuals for
                inspection, reporting, marketing, and progress documentation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-base font-medium text-white/85"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 text-center md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Ready to work with Oni Aerial?
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Let’s discuss your inspection or aerial media project.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
              Reach out for roof inspections, real estate media, construction
              monitoring, solar inspections, and custom commercial projects.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#D90429] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Request a Quote
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
              >
                View Services & Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}