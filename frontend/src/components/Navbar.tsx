"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/inspection-reports", label: "Reports" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="Oni Aerial logo"
              width={150}
              height={44}
              priority
              className="h-auto w-[120px] object-contain sm:w-[150px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full border border-[#D90429] bg-[#D90429] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 md:inline-flex"
            >
              Get a Quote
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-white transition ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white transition ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 flex h-screen w-[82%] max-w-[340px] flex-col border-l border-white/10 bg-[#050505] p-6 shadow-2xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <Image
              src="/logo.png"
              alt="Oni Aerial logo"
              width={130}
              height={40}
              className="h-auto w-[120px] object-contain"
            />
          </Link>

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="inline-flex w-full items-center justify-center rounded-full bg-[#D90429] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Get a Quote
          </Link>

          <a
            href="tel:3037475637"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            Call 303-747-5637
          </a>
        </div>
      </aside>
    </>
  );
}