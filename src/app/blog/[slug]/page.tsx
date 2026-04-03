import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };

  return {
    title: `${post.title} | Horizons Communs`,
    description: post.excerpt,
  };
}

function markdownToHtml(md: string): string {
  let html = md
    // h2
    .replace(/^## (.+)$/gm, '<h2 class="font-serif text-2xl font-bold text-petrol-dark mt-10 mb-4">$1</h2>')
    // h3
    .replace(/^### (.+)$/gm, '<h3 class="font-serif text-xl font-bold text-petrol-dark mt-8 mb-3">$1</h3>')
    // bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-charcoal">$1</strong>')
    // italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // links
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-petrol underline underline-offset-2 hover:text-petrol-dark transition-colors">$1</a>'
    )
    // unordered lists
    .replace(
      /^- (.+)$/gm,
      '<li class="flex items-start gap-2"><span class="text-petrol mt-1.5 flex-shrink-0">&#8226;</span><span>$1</span></li>'
    )
    // ordered lists
    .replace(
      /^(\d+)\. (.+)$/gm,
      '<li class="flex items-start gap-2"><span class="font-bold text-petrol flex-shrink-0">$1.</span><span>$2</span></li>'
    );

  // Wrap consecutive <li> in <ul>
  html = html.replace(
    /(<li[\s\S]*?<\/li>\n?)+/g,
    '<ul class="space-y-2 my-4">$&</ul>'
  );

  // Paragraphs: wrap lines that are not tags
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;
      return `<p class="text-charcoal/70 leading-relaxed mb-4">${trimmed}</p>`;
    })
    .join("\n");

  return html;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const contentHtml = markdownToHtml(post.content);

  return (
    <article className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/#blog"
          className="inline-flex items-center text-petrol text-sm font-medium hover:text-petrol-dark transition-colors mb-8"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Retour aux articles
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-petrol/10 text-petrol text-sm font-semibold rounded-md">
              {post.tag}
            </span>
            <time className="text-sm text-charcoal/50">
              {new Date(post.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-petrol-dark leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-charcoal/60 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-6 w-16 h-1 bg-beige rounded-full" />
        </header>

        {/* Content */}
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-beige-light rounded-2xl border border-beige/50 text-center paper-grain">
          <p className="font-serif text-xl font-bold text-petrol-dark mb-2">
            Ce sujet vous concerne ?
          </p>
          <p className="text-charcoal/60 mb-6">
            Discutons de votre situation spécifique.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-6 py-3 bg-petrol text-white font-semibold rounded-lg hover:bg-petrol-dark transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </article>
  );
}
