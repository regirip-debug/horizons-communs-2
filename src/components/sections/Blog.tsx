import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export function Blog() {
  const posts = getAllPosts();

  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark">
            Idées & Vision
          </h2>
          <p className="mt-3 text-charcoal/60">
            Réflexions sourcées sur les enjeux des organisations engagées
          </p>
          <div className="mt-3 w-16 h-1 bg-beige mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block p-6 bg-white/60 rounded-xl border border-beige/30 hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-2.5 py-1 bg-petrol/10 text-petrol text-xs font-semibold rounded-md">
                    {post.tag}
                  </span>
                  <span className="text-xs text-charcoal/40">
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-petrol-dark group-hover:text-petrol transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-charcoal/60 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center text-petrol text-sm font-medium">
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
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
