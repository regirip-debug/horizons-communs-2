import Link from "next/link";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center paper-grain overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-petrol/5 via-transparent to-beige/20" />

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-petrol/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-beige/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-petrol/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-petrol rounded-full" />
            <span className="text-xs font-medium text-petrol uppercase tracking-wider">
              Consultant &middot; Formateur &middot; Manager de transition
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-petrol-dark leading-tight">
            Transformer vos organisations
            <br />
            <span className="text-petrol">sans perdre leur âme</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-charcoal/70 leading-relaxed max-w-2xl">
            Formation, management de transition et structuration pour
            associations, tiers-lieux et collectivités.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="https://calendly.com/regirip/30min?month=2026-04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-petrol text-white font-semibold rounded-lg hover:bg-petrol-dark transition-all hover:shadow-lg hover:shadow-petrol/20"
            >
              Prendre rendez-vous
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="#offres"
              className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-petrol text-petrol font-semibold rounded-lg hover:bg-petrol hover:text-white transition-all"
            >
              Découvrir nos offres
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
