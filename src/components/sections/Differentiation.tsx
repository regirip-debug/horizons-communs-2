const points = [
  "Je viens du terrain",
  "J\u2019ai dirigé des projets complexes",
  "Je comprends les réalités sociales et politiques",
  "Je combine impact social + efficacité opérationnelle",
];

export function Differentiation() {
  return (
    <section className="py-20 md:py-28 bg-petrol paper-grain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center">
            Contrairement aux cabinets classiques
          </h2>
          <div className="mt-3 w-16 h-1 bg-beige mx-auto rounded-full" />

          <div className="mt-12 space-y-5">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/8 border border-white/10"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-beige/20 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-5 h-5 text-beige"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-white/90 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
