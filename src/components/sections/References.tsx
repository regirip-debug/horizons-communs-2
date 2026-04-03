const references = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Tiers-lieu hybride",
    description: "Ressourcerie, café et fablab intégrés dans un même espace.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Chantiers d\u2019insertion",
    description: "Accompagnement et structuration d\u2019ACI et chantiers d\u2019insertion.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2m0 2a2 2 0 00-2 2v1h14V6a2 2 0 00-2-2M7 4a2 2 0 012-2h6a2 2 0 012 2M3 20h18M5 20V9h14v11" />
      </svg>
    ),
    title: "Projets culturels & entrepreneuriaux",
    description: "Développement de projets à forte dimension culturelle et entrepreneuriale.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Dispositifs jeunesse & engagement",
    description: "Projets d\u2019engagement citoyen et dispositifs jeunesse.",
  },
];

export function References() {
  return (
    <section id="references" className="py-20 md:py-28 bg-beige-light paper-grain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark">
            J&apos;ai accompagné et développé
          </h2>
          <div className="mt-3 w-16 h-1 bg-petrol mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((ref) => (
            <div
              key={ref.title}
              className="flex items-start gap-5 p-6 bg-white rounded-xl border border-beige/30 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-petrol/10 flex items-center justify-center text-petrol flex-shrink-0">
                {ref.icon}
              </div>
              <div>
                <h3 className="font-semibold text-petrol-dark text-lg">
                  {ref.title}
                </h3>
                <p className="mt-1 text-charcoal/60 leading-relaxed">
                  {ref.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
