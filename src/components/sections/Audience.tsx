const audiences = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Associations & structures d\u2019insertion",
    subtitle: "ACI, chantiers, etc.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Tiers-lieux",
    subtitle: "Ressourceries, fablabs, cafés associatifs",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: "Collectivités & dispositifs publics",
    subtitle: "Communes, intercommunalités, régions",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Porteurs de projets à impact",
    subtitle: "Entrepreneurs sociaux, innovateurs",
  },
];

export function Audience() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark">
            J&apos;accompagne
          </h2>
          <div className="mt-3 w-16 h-1 bg-beige mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl border border-beige/40 bg-white/40 hover:bg-white hover:shadow-lg hover:border-petrol/20 transition-all text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-petrol/8 flex items-center justify-center text-petrol mx-auto mb-4 group-hover:bg-petrol group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-semibold text-charcoal text-lg">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-charcoal/50">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
