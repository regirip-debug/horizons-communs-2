const conferences = [
  {
    title: "L\u2019économie circulaire comme levier d\u2019insertion professionnelle",
    event: "Forum de l\u2019\u00c9conomie Sociale et Solidaire",
    date: "2024",
    summary:
      "Comment les ressourceries et tiers-lieux créent des passerelles durables vers l\u2019emploi en combinant revalorisation des matériaux et accompagnement social.",
    tags: ["ESS", "Insertion"],
  },
  {
    title: "Tiers-lieux hybrides : modèles économiques et gouvernance partagée",
    event: "Rencontres Nationales des Tiers-Lieux",
    date: "2024",
    summary:
      "Retour d\u2019expérience sur la création et la gestion d\u2019espaces combinant ressourcerie, fablab et café associatif. Les clés d\u2019un modèle viable.",
    tags: ["Tiers-lieux", "Gouvernance"],
  },
  {
    title: "IA et structures d\u2019insertion : opportunités terrain",
    event: "Journées de l\u2019Innovation Sociale",
    date: "2025",
    summary:
      "Exploration concrète des outils d\u2019intelligence artificielle adaptés aux structures d\u2019insertion : automatisation administrative, suivi des parcours, aide à la décision.",
    tags: ["IA", "Innovation"],
  },
  {
    title: "Diriger dans l\u2019urgence : management de transition en milieu associatif",
    event: "Université du Management Associatif",
    date: "2025",
    summary:
      "Les spécificités du management de transition dans les structures à impact social : maintenir la mission tout en restructurant l\u2019organisation.",
    tags: ["Management", "Associations"],
  },
];

export function Conferences() {
  return (
    <section id="conferences" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark">
            Conférences & Interventions
          </h2>
          <p className="mt-3 text-charcoal/60">
            Partager l&apos;expérience du terrain pour nourrir la réflexion
            collective
          </p>
          <div className="mt-3 w-16 h-1 bg-beige mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {conferences.map((conf) => (
            <div
              key={conf.title}
              className="group relative bg-white/60 rounded-2xl p-6 md:p-8 border border-beige/30 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Date badge */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-petrol/10 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-5 h-5 text-petrol mx-auto mb-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-xs font-bold text-petrol">
                        {conf.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {conf.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-petrol/8 text-petrol text-xs font-semibold rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-petrol-dark group-hover:text-petrol transition-colors">
                    {conf.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-beige-warm flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-charcoal/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-charcoal/50">{conf.event}</span>
                  </p>

                  <p className="mt-3 text-charcoal/60 leading-relaxed">
                    {conf.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
