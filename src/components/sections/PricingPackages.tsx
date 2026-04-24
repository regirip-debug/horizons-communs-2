import Link from "next/link";

const packages = [
  {
    id: "diagnostic",
    duration: "10 jours",
    title: "Diagnostic stratégique",
    subtitle: "Comprendre pour agir",
    price: "Sur devis",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: "Audit complet de votre situation pour identifier les vrais enjeux.",
    includes: [
      "Entretiens avec votre équipe dirigeante",
      "Analyse documentaire (statuts, comptes, org, stratégie)",
      "Rapport de diagnostic détaillé",
      "Recommandations priorisées et réalistes",
      "Proposition d'accompagnement sur mesure"
    ],
    outcome: "Clarté sur vos vrais défis + feuille de route actuelle",
    highlight: true,
    cta: "Réserver un diagnostic"
  },
  {
    id: "structuration",
    duration: "90 jours",
    title: "Structuration opérationnelle",
    subtitle: "Construire les fondations",
    price: "À définir ensemble",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description: "Mettre en place une organisation, gouvernance et modèle économique solides.",
    includes: [
      "Refonte de la structure organisationnelle",
      "Design de la gouvernance (CA, comités, responsabilités)",
      "Renforcement du modèle économique",
      "Processus et outils de pilotage",
      "Plan de déploiement avec jalons"
    ],
    outcome: "Organisation capable de grandir sans perdre ses valeurs",
    highlight: false,
    cta: "Discuter d'une structuration"
  },
  {
    id: "transition",
    duration: "6 à 24 mois",
    title: "Direction de transition",
    subtitle: "Piloter le changement",
    price: "Forfait ou journée",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Je prends un rôle clé dans votre direction pour piloter une transformation complexe.",
    includes: [
      "Implication opérationnelle directe au sein de votre équipe",
      "Leadership du changement et fédération",
      "Gestion des risques et des blocages",
      "Mise en place des systèmes et processus",
      "Mentoring de vos cadres",
      "Transition progressive vers votre équipe interne"
    ],
    outcome: "Changement implémenté + équipe autonome et confiante",
    highlight: false,
    cta: "Explorer une direction de transition"
  },
  {
    id: "conferences",
    duration: "À la demande",
    title: "Conférences & Interventions",
    subtitle: "Inspirer et outiller vos équipes",
    price: "Forfait par intervention",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    description: "Partage d'expérience terrain sur l'ESS, les tiers-lieux, l'IA et la transformation organisationnelle.",
    includes: [
      "Préparation adaptée à votre contexte et audience",
      "Keynote ou table ronde interactive",
      "Atelier participatif (sur demande)",
      "Support de présentation professionnel",
      "Q&A et moments d'échange"
    ],
    outcome: "Équipes inspirées et outillées pour agir",
    highlight: false,
    cta: "Réserver une intervention"
  },
];

export function PricingPackages() {
  return (
    <section id="offres-packagees" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1.5 bg-petrol/10 rounded-full mb-6">
            <span className="text-xs font-semibold text-petrol uppercase tracking-wider">Offres structurées</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark">
            Quatre offres pour accompagner votre structure
          </h2>
          <p className="mt-4 text-lg text-charcoal/60 max-w-2xl mx-auto">
            Diagnostic, structuration, direction ou conférences. Chaque situation a sa solution.
          </p>
          <div className="mt-3 w-16 h-1 bg-petrol mx-auto rounded-full" />

          {/* Diagnostic Flash CTA */}
          <div className="mt-10 max-w-2xl mx-auto p-6 md:p-7 bg-beige-warm/40 border border-petrol/15 rounded-2xl">
            <p className="text-sm font-semibold text-petrol uppercase tracking-wider mb-2">
              Pas sûr de l&apos;offre qu&apos;il vous faut ?
            </p>
            <p className="text-charcoal/80 mb-5">
              Commencez par le <strong className="text-petrol-dark">Diagnostic Flash Gratuit</strong>&nbsp;: 14 questions, 5 minutes,
              score instantané et recommandation personnalisée.
            </p>
            <Link
              href="https://tally.so/r/LZEbl1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-petrol text-white font-bold rounded-lg hover:bg-petrol-dark hover:shadow-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Faire le Diagnostic Flash Gratuit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl overflow-hidden transition-all ${
                pkg.highlight
                  ? "lg:scale-105 ring-2 ring-petrol shadow-2xl"
                  : "border border-beige/30"
              } ${pkg.highlight ? "bg-gradient-to-br from-petrol/5 to-transparent" : "bg-white"}`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-petrol text-white px-4 py-2 text-xs font-bold rounded-bl-xl">
                  RECOMMANDÉ
                </div>
              )}

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-petrol/10 flex items-center justify-center text-petrol">
                    {pkg.icon}
                  </div>
                  <span className="text-xs font-bold text-petrol/60 uppercase tracking-widest">
                    {pkg.duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-petrol-dark mb-2">
                  {pkg.title}
                </h3>
                <p className="text-petrol font-semibold mb-4">{pkg.subtitle}</p>

                <p className="text-charcoal/70 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mb-6 p-4 bg-beige/50 rounded-xl border border-beige/30">
                  <p className="text-sm font-medium text-petrol-dark">{pkg.price}</p>
                </div>

                {/* Outcome */}
                <div className="mb-6 p-4 bg-petrol/5 rounded-xl border-l-4 border-petrol">
                  <p className="text-xs font-semibold text-petrol/60 uppercase tracking-wider mb-2">
                    Résultat
                  </p>
                  <p className="text-petrol-dark font-semibold">{pkg.outcome}</p>
                </div>

                {/* Includes */}
                <div className="mb-8">
                  <p className="text-xs font-semibold text-petrol-dark/60 uppercase tracking-wider mb-3">
                    Ce qui est inclus
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-charcoal/70">
                        <svg
                          className="w-4 h-4 text-petrol mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href="https://calendly.com/regirip/30min?month=2026-04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    pkg.highlight
                      ? "bg-petrol text-white hover:bg-petrol-dark hover:shadow-lg"
                      : "bg-petrol/10 text-petrol hover:bg-petrol/20"
                  }`}
                >
                  {pkg.cta}
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-charcoal/70 mb-6">
            Aucune de ces offres ne correspond exactement ? Discutons ensemble.
          </p>
          <Link
            href="https://calendly.com/regirip/30min?month=2026-04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-petrol text-petrol font-semibold rounded-lg hover:bg-petrol hover:text-white transition-all"
          >
            Planifier un échange
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
