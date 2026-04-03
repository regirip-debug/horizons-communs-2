import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Management de transition",
    description:
      "Je prends un rôle clé temporaire pour stabiliser ou relancer votre structure.",
    color: "bg-petrol",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Formation terrain",
    description:
      "Des formations concrètes, adaptées à vos équipes. Pas de bullshit théorique.",
    color: "bg-beige",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Structuration & stratégie",
    description:
      "Modèle économique, organisation, gouvernance, développement.",
    color: "bg-petrol-light",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services-overview" className="py-20 md:py-28 bg-beige-light paper-grain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark">
            Ce que je fais
          </h2>
          <div className="mt-3 w-16 h-1 bg-petrol mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-white rounded-2xl p-8 border border-beige/30 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-bold text-petrol/40 tracking-widest">
                  {service.number}
                </span>
                <div className="w-10 h-10 rounded-lg bg-petrol/10 flex items-center justify-center text-petrol group-hover:bg-petrol group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-petrol-dark mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#offres"
            className="inline-flex items-center text-petrol font-semibold hover:text-petrol-dark transition-colors group"
          >
            Voir le détail des offres
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </section>
  );
}
