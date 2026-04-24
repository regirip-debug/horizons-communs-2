import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diagnostic Flash",
  description:
    "Diagnostic gratuit en 5 minutes : identifiez votre score de maturité opérationnelle, vos 3 leviers prioritaires et la feuille de route adaptée à votre phase. Pour dirigeants de tiers-lieux, ACI, associations, collectivités et entreprises engagées.",
  openGraph: {
    title: "Diagnostic Flash — Horizons Communs",
    description:
      "14 questions · 5 minutes · Résultat instantané. Votre structure est-elle prête à passer le cap suivant ?",
    type: "website",
  },
};

export default function DiagnosticPage() {
  return (
    <div className="bg-offwhite pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-beige-warm/60 text-petrol-dark text-sm font-semibold rounded-full mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Diagnostic offert · 5 minutes · Résultat instantané
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-petrol-dark leading-tight mb-6">
          Votre structure est-elle prête <br className="hidden md:block" />
          à passer le cap suivant&nbsp;?
        </h1>

        <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Vous pilotez un tiers-lieu, une association, un ACI, une collectivité ou une entreprise engagée&nbsp;?
          En 5 minutes, identifiez votre <strong className="text-petrol-dark">score de maturité opérationnelle</strong>,
          vos <strong className="text-petrol-dark">3 leviers prioritaires</strong> et la feuille de route adaptée
          à votre phase.
        </p>

        {/* Trust bullets */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-charcoal/70 mb-4">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-petrol" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            100% gratuit
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-petrol" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Aucun spam
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-petrol" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            PDF de synthèse reçu par email
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-petrol" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Conçu par un consultant terrain, pas un algorithme
          </span>
        </div>
      </section>

      {/* Tally embed */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-beige/50 overflow-hidden">
          <iframe
            src="https://tally.so/embed/LZEbl1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="1000"
            frameBorder={0}
            title="Diagnostic Flash Horizons Communs"
            className="block w-full"
          />
        </div>

        {/* Fallback if iframe blocked */}
        <p className="text-center text-sm text-charcoal/60 mt-6">
          Le formulaire ne s&apos;affiche pas&nbsp;?{" "}
          <Link
            href="https://tally.so/r/LZEbl1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-petrol font-semibold underline hover:text-petrol-dark"
          >
            Ouvrir dans un nouvel onglet →
          </Link>
        </p>
      </section>

      {/* Qui est derrière */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-petrol-dark mb-4">
          Qui lira vos réponses&nbsp;?
        </h2>
        <p className="text-charcoal/80 leading-relaxed mb-6">
          Moi, Régis Pio — consultant opérationnel et formateur depuis 8 ans
          auprès de tiers-lieux, ACI, associations d&apos;insertion, collectivités et entreprises
          engagées. Chaque diagnostic est lu personnellement. Les profils les plus matures
          reçoivent une réponse sous 24h.
        </p>
        <Link
          href="/#a-propos"
          className="inline-flex items-center gap-2 text-petrol font-semibold hover:text-petrol-dark transition-colors"
        >
          En savoir plus sur ma démarche
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
