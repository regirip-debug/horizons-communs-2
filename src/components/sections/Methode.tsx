const steps = [
  {
    number: "01",
    title: "Diagnostic réel",
    subtitle: "(pas de bullshit)",
    description: "Immersion terrain, compréhension des tensions.",
  },
  {
    number: "02",
    title: "Priorisation",
    subtitle: "",
    description: "On arrête de tout faire \u2192 on cible.",
  },
  {
    number: "03",
    title: "Action",
    subtitle: "",
    description: "Mise en place concrète avec les équipes.",
  },
  {
    number: "04",
    title: "Transmission",
    subtitle: "",
    description: "Autonomisation des équipes.",
  },
];

export function Methode() {
  return (
    <section id="methode" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark">
            Ma méthode
          </h2>
          <div className="mt-3 w-16 h-1 bg-beige mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line — aligned to center of 64px circles (top: 32px) */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-beige" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                {/* Number circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-petrol text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-petrol/20">
                  <span className="text-lg font-bold">{step.number}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-petrol-dark">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <span className="text-sm text-petrol italic">
                    {step.subtitle}
                  </span>
                )}
                <p className="mt-2 text-charcoal/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy quote */}
        <div className="mt-20 max-w-2xl mx-auto text-center">
          <div className="p-8 bg-beige-light rounded-2xl border border-beige/50 paper-grain">
            <svg
              className="w-10 h-10 text-petrol/20 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>
            <p className="font-serif text-xl md:text-2xl text-petrol-dark font-medium italic leading-relaxed">
              Pas de PowerPoint inutile. Pas de solutions hors-sol.
              <br />
              Seulement du concret.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
