"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="#accueil"
            className="font-serif text-xl md:text-2xl font-bold text-petrol tracking-tight"
          >
            Horizons Communs
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
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
              href="#contact"
              className="ml-2 px-5 py-2.5 bg-petrol text-white text-sm font-semibold rounded-lg hover:bg-petrol-dark transition-colors"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-charcoal"
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
          <div className="md:hidden pb-4 border-t border-beige">
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
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 text-center px-5 py-2.5 bg-petrol text-white font-semibold rounded-lg"
            >
              Prendre RDV
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
