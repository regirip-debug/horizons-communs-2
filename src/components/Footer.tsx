import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-petrol-dark text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-3">
              Horizons Communs
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              Formation, management de transition et structuration pour
              organisations engagées.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["#accueil", "Accueil"],
                ["#a-propos", "À Propos"],
                ["#offres", "Offres"],
                ["#methode", "Méthode"],
                ["#references", "Références"],
                ["#blog", "Blog"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-beige transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <Link
              href="#contact"
              className="inline-block px-5 py-2.5 bg-beige text-petrol-dark font-semibold rounded-lg hover:bg-beige-warm transition-colors text-sm"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40 italic">
            Je ne suis pas là pour vous conseiller. Je suis là pour faire avec
            vous.
          </p>
          <p className="mt-2 text-xs text-white/30">
            &copy; {new Date().getFullYear()} Horizons Communs. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
