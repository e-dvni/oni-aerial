import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        
        {/* Company Description */}
        <div>
          <p className="text-lg font-semibold tracking-[0.18em] text-white">
            ONI AERIAL
          </p>

          <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
            Precision drone inspections and aerial imaging for roofing,
            solar, real estate, and construction projects across Denver
            and surrounding Colorado areas.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="grid gap-6 sm:grid-cols-2">
          
          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Contact
            </p>

            <div className="mt-4 space-y-3 text-sm text-white/75">
              <p>Denver, Colorado</p>

              <a
                href="tel:3037475637"
                className="block hover:text-white"
              >
                303-747-5637
              </a>

              <a
                href="mailto:nlee@oniaerial.com"
                className="block hover:text-white"
              >
                nlee@oniaerial.com
              </a>

            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Pages
            </p>

            <div className="mt-4 space-y-3 text-sm text-white/75">

              <Link href="/" className="block hover:text-white">
                Home
              </Link>

              <Link href="/services" className="block hover:text-white">
                Services & Pricing
              </Link>

              <Link href="/inspection-reports" className="block hover:text-white">
                Inspection Reports
              </Link>

              <Link href="/about" className="block hover:text-white">
                About
              </Link>

              <Link href="/contact" className="block hover:text-white">
                Contact
              </Link>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Oni Aerial. All rights reserved.
      </div>
    </footer>
  );
}