import { PhotoPortrait } from "@/components/PhotoPortrait";

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
          {/* Photo */}
          <div className="relative">
            <PhotoPortrait />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-beige/40 rounded-2xl -z-10" />
          </div>

          {/* Story */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-petrol-dark mb-6">
              Mon parcours
            </h3>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Je mets en œuvre et dirige des lieux de vie conçus pour maximiser
              l&apos;impact social, allant de la phase de conceptualisation à
              l&apos;exploitation quotidienne.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              En tant que professionnel du secteur, je développe depuis plusieurs
              années des projets qui allient utilité sociale et innovation. Mon
              expérience s&apos;articule autour de la création d&apos;ateliers
              chantiers d&apos;insertion, de tiers-lieux hybrides, ainsi que de
              projets culturels et entrepreneuriaux.
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

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/r%C3%A9gis-pio-240664400/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#0A66C2] text-white font-semibold rounded-lg hover:bg-[#004182] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Voir mon profil LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
