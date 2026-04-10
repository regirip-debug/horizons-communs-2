"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À Propos" },
  { href: "#offres", label: "Offres" },
  { href: "#methode", label: "Méthode" },
  { href: "#references", label: "Références" },
  { href: "#blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-offwhite/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Logo + Nom */}
          <Link href="#accueil" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Horizons Communs"
              width={320}
              height={240}
              className="h-24 md:h-28 w-auto"
            />
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-petrol">Horizons</span>{" "}
              <span style={{ color: "#B8860B" }}>Communs</span>
            </span>
          </Link>

          {/* Desktop nav — centré */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal/70 hover:text-petrol transition-colors pb-0.5 border-b-2 border-transparent hover:border-petrol"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.linkedin.com/in/r%C3%A9gis-pio-240664400/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 px-4 py-2.5 bg-blue-50 text-[#0A66C2] text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </Link>
            <Link
              href="https://calendly.com/regirip/30min?month=2026-04"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 bg-petrol text-white text-sm font-semibold rounded-lg hover:bg-petrol-dark transition-colors"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-beige">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-charcoal/80 hover:text-petrol transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-4">
              <Link
                href="https://www.linkedin.com/in/r%C3%A9gis-pio-240664400/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center px-5 py-2.5 bg-blue-50 text-[#0A66C2] font-semibold rounded-lg hover:bg-blue-100 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://calendly.com/regirip/30min?month=2026-04"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center px-5 py-2.5 bg-petrol text-white font-semibold rounded-lg hover:bg-petrol-dark transition-colors"
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
