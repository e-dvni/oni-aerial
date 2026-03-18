import Link from "next/link";
import Image from "next/image";

export default function InspectionReportsPage() {
  const deliverables = [
    {
      title: "High-Resolution Inspection Images",
      description:
        "Detailed aerial images captured from multiple angles to clearly document the visible condition of the property.",
    },
    {
      title: "Close-Up Damage Documentation",
      description:
        "Zoomed aerial imagery highlighting potential damage, wear, or problem areas for easier review.",
    },
    {
      title: "Property Overview Imagery",
      description:
        "Wide aerial shots showing the full property layout, roof lines, surroundings, and site context.",
    },
    {
      title: "Organized Media Delivery",
      description:
        "All images and videos delivered in clearly labeled folders so teams can review and share files efficiently.",
    },
    {
      title: "Optional Inspection Summary",
      description:
        "A structured visual summary can be provided to organize key inspection imagery into a cleaner client-facing format.",
    },
  ];

  const workflow = [
    "Site assessment and flight planning",
    "Aerial inspection flight",
    "Image review and organization",
    "Delivery within 24–48 hours",
  ];

  const users = [
    "Roofing Contractors",
    "Insurance Adjusters",
    "Property Managers",
    "Solar Companies",
    "Construction Companies",
    "Homeowners",
  ];

  return (
    <main className="bg-[#050505] text-[#F5F5F5]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,4,41,0.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
            Inspection Reports
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Professional aerial documentation designed for clear review and
            better decision-making.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            At Oni Aerial, every inspection includes organized aerial
            documentation to help clients understand visible property
            conditions. Our goal is to provide clean, high-resolution visual
            data that supports documentation, communication, and next steps.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              What Clients Receive
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Organized deliverables that make aerial inspections easier to
              review and share.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {deliverables.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-black/40 p-7 shadow-xl shadow-black/20"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Typical Inspection Workflow
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              A simple, professional process from planning to delivery.
            </h2>

            <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
              Each inspection follows a clear workflow that prioritizes safety,
              site awareness, efficient capture, and organized delivery of media.
            </p>
          </div>

          <div className="space-y-4">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D90429]/40 bg-[#D90429]/10 text-sm font-semibold text-[#FF4D6D]">
                  {index + 1}
                </div>

                <div>
                  <p className="text-lg font-semibold text-white">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
                Optional Inspection Summary
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                A cleaner visual format for presenting key findings.
              </h2>

              <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
                For clients who want a more polished presentation format, Oni
                Aerial can provide an optional inspection summary that organizes
                key imagery into a more structured visual document.
              </p>

              <p className="mt-4 max-w-lg text-base leading-7 text-white/70">
                This can help contractors, adjusters, managers, and property
                owners quickly review the most important images without sorting
                through every file first.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src="/roofPhoto.jpg"
                    alt="Roof inspection"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Who Uses Our Inspection Reports
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Built for professionals, teams, and property owners who need
              organized visual documentation.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <div
                key={user}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-4 text-base font-medium text-white/85"
              >
                {user}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 text-center md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Need organized aerial documentation?
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Let’s capture and deliver the visual data your project needs.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
              Reach out for roof inspections, solar inspections, construction
              monitoring, or custom aerial documentation work.
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