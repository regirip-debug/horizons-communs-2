import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parseFrontmatter(fileContent: string): {
  metadata: Record<string, string>;
  content: string;
} {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { metadata: {}, content: fileContent };

  const metadata: Record<string, string> = {};
  match[1].split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (key && rest.length) {
      metadata[key.trim()] = rest.join(":").trim().replace(/^["']|["']$/g, "");
    }
  });

  return { metadata, content: match[2].trim() };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { metadata, content } = parseFrontmatter(raw);

    return {
      slug,
      title: metadata.title || slug,
      date: metadata.date || "",
      tag: metadata.tag || "",
      excerpt: metadata.excerpt || "",
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}
