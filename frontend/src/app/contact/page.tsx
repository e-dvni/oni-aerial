import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

export default function ContactPage() {
  return (
    <main className="bg-[#050505] text-[#F5F5F5]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,4,41,0.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
            Contact Oni Aerial
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Tell us about your project and request a quote.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Reach out for roof inspections, real estate media, construction
            monitoring, solar inspections, and custom aerial projects throughout
            Denver and surrounding Colorado areas.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090909]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Contact Information
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Let’s discuss your aerial inspection or media needs.
            </h2>

            <div className="mt-8 space-y-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Location
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Denver, Colorado
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Phone
                </p>
                <a
                  href="tel:3037475637"
                  className="mt-2 block text-lg font-semibold text-white hover:text-[#FF4D6D]"
                >
                  303-747-5637
                </a>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Email
                </p>
                <a
                  href="mailto:nlee@oniaerial.com"
                  className="mt-2 block text-lg font-semibold text-white hover:text-[#FF4D6D]"
                >
                  nlee@oniaerial.com
                </a>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/oniaerial"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block text-lg font-semibold text-white hover:text-[#FF4D6D]"
                >
                  @oniaerial
                </a>
              </div>
            </div>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 text-center md:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
              Need pricing first?
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              View services, pricing ranges, and project options.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
              Explore inspection, media, and monitoring packages before sending
              your inquiry.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className="rounded-full bg-[#D90429] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                View Services & Pricing
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}