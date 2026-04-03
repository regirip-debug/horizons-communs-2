const articles = [
  {
    title: "Pourquoi les tiers-lieux échouent",
    excerpt:
      "Les erreurs structurelles qui mènent à l\u2019essoufflement des tiers-lieux, et comment les éviter.",
    tag: "Tiers-lieux",
  },
  {
    title: "L\u2019erreur des formations classiques",
    excerpt:
      "Pourquoi les formations déconnectées du terrain ne transforment jamais vraiment les pratiques.",
    tag: "Formation",
  },
  {
    title: "IA et insertion : opportunité ou danger ?",
    excerpt:
      "Comment l\u2019intelligence artificielle peut servir les structures d\u2019insertion \u2014 sans déshumaniser.",
    tag: "Innovation",
  },
  {
    title: "Associations : sortir de la survie",
    excerpt:
      "Passer du mode \u00absurvie\u00bb au mode \u00abdéveloppement\u00bb : les leviers concrets.",
    tag: "Associations",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark">
            Idées & Vision
          </h2>
          <p className="mt-3 text-charcoal/60">
            Réflexions sur les enjeux des organisations engagées
          </p>
          <div className="mt-3 w-16 h-1 bg-beige mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group p-6 bg-white/60 rounded-xl border border-beige/30 hover:bg-white hover:shadow-lg transition-all cursor-pointer"
            >
              <span className="inline-block px-2.5 py-1 bg-petrol/10 text-petrol text-xs font-semibold rounded-md mb-3">
                {article.tag}
              </span>
              <h3 className="font-serif text-xl font-bold text-petrol-dark group-hover:text-petrol transition-colors">
                {article.title}
              </h3>
              <p className="mt-2 text-charcoal/60 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center text-petrol text-sm font-medium group-hover:gap-2 transition-all">
                <span>Lire la suite</span>
                <svg
                  className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
