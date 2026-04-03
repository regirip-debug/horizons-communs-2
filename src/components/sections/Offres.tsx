const offres = [
  {
    id: "transition",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Management de transition",
    subtitle: "Stabiliser, structurer, relancer",
    description:
      "Vous traversez une phase critique ? Je prends un rôle opérationnel temporaire pour remettre votre structure sur les rails.",
    examples: [
      "Direction temporaire",
      "Restructuration d\u2019équipe",
      "Sortie de crise",
      "Lancement de projet",
    ],
    accent: "petrol",
  },
  {
    id: "formation",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Formations",
    subtitle: "Former pour transformer",
    description:
      "Encadrement technique en ACI, gestion d\u2019équipe, structuration de tiers-lieu, IA & automatisation (adaptée terrain), montage de projet.",
    format: "Terrain, interactif, directement applicable.",
    accent: "beige",
  },
  {
    id: "structuration",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Structuration & Conseil",
    subtitle: "Construire des modèles solides",
    description:
      "Modèle économique, organisation interne, gouvernance, réponse à appels à projets, stratégie de développement.",
    accent: "petrol-light",
  },
  {
    id: "conferences",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Conférences & Interventions",
    subtitle: "Partager l\u2019expérience du terrain",
    description:
      "Interventions sur les enjeux des organisations engagées : tiers-lieux, insertion, économie circulaire, IA adaptée au terrain, gouvernance partagée.",
    examples: [
      "\u00c9conomie circulaire & insertion",
      "Tiers-lieux hybrides",
      "IA & structures sociales",
      "Management associatif",
    ],
    format: "Keynote, table ronde, atelier participatif.",
    accent: "petrol",
  },
];

export function Offres() {
  return (
    <section id="offres" className="py-20 md:py-28 bg-beige-light paper-grain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark">
            Mes offres
          </h2>
          <div className="mt-3 w-16 h-1 bg-petrol mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {offres.map((offre) => (
            <div
              key={offre.id}
              className="bg-white rounded-2xl p-8 md:p-10 border border-beige/30 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-petrol/10 flex items-center justify-center text-petrol flex-shrink-0">
                  {offre.icon}
                </div>

                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-petrol-dark">
                    {offre.title}
                  </h3>
                  <p className="text-petrol font-medium mt-1">
                    {offre.subtitle}
                  </p>

                  <p className="mt-4 text-charcoal/70 leading-relaxed text-lg">
                    {offre.description}
                  </p>

                  {offre.examples && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {offre.examples.map((ex) => (
                        <span
                          key={ex}
                          className="px-3 py-1.5 bg-petrol/8 text-petrol text-sm font-medium rounded-lg"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  )}

                  {offre.format && (
                    <div className="mt-5 p-4 bg-beige-light rounded-xl border border-beige/50">
                      <p className="text-sm font-semibold text-petrol-dark">
                        Format : {offre.format}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
