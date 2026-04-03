export function About() {
  return (
    <section id="a-propos" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark">
            À Propos
          </h2>
          <div className="mt-3 w-16 h-1 bg-beige mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-petrol/10 to-beige/30 border border-beige/50 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-petrol/15 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-petrol/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-sm text-charcoal/40 italic">
                  Photo professionnelle
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-beige/40 rounded-2xl -z-10" />
          </div>

          {/* Story */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-petrol-dark mb-6">
              Mon parcours
            </h3>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Je suis coordinateur, directeur de tiers-lieu et encadrant
              technique en insertion. Depuis plusieurs années, je développe des
              projets à fort impact social : ateliers chantiers d&apos;insertion,
              tiers-lieux hybrides, projets culturels et entrepreneuriaux.
            </p>

            <div className="p-5 bg-petrol/5 rounded-xl border-l-4 border-petrol mb-8">
              <p className="text-petrol-dark font-medium leading-relaxed">
                J&apos;interviens là où les organisations sont en tension :
                croissance, crise, structuration ou transformation.
              </p>
            </div>

            <h3 className="font-serif text-2xl font-bold text-petrol-dark mb-4">
              Ma vision
            </h3>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Je suis convaincu que les structures engagées ne doivent pas
              choisir entre : impact social, performance, innovation. Elles
              doivent apprendre à combiner les trois.
            </p>

            <h3 className="font-serif text-xl font-bold text-petrol-dark mb-4">
              Mon rôle :
            </h3>
            <ul className="space-y-3">
              {[
                "Traduire vos valeurs en organisation efficace",
                "Transformer vos idées en systèmes durables",
                "Renforcer vos équipes sans les dénaturer",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-petrol mt-0.5 flex-shrink-0"
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
                  <span className="text-charcoal/70 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
