export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "img"; src: string; alt: string }
  | { type: "callout"; title: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  seo_title: string;
  seo_description: string;
  cover_image: string;
  cover_alt: string;
  tags: string[];
  author_name: string;
  author_role: string;
  reading_minutes: number;
  published_at: string;
  updated_at: string;
  content: BlogBlock[];
  faqs: { q: string; a: string }[];
};

const SUPABASE_URL = (
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SUPABASE_URL) ||
  "https://yvjqhkoawpawpkddojrh.supabase.co"
).replace(/\/$/, "");

const SUPABASE_ANON =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SUPABASE_ANON_KEY) ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2anFoa29hd3Bhd3BrZGRvanJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyMzcxMDksImV4cCI6MjEwNDgxMzEwOX0.XSRYndNlCnIiGdruddXtNR_iUMNn6eo9Onmr91Nxavk";

function asPost(row: Record<string, unknown>): BlogPost {
  return {
    slug: String(row.slug),
    title: String(row.title),
    excerpt: String(row.excerpt),
    seo_title: String(row.seo_title ?? row.title),
    seo_description: String(row.seo_description ?? row.excerpt),
    cover_image: String(row.cover_image ?? "/images/blog-hospital-ops.jpg"),
    cover_alt: String(row.cover_alt ?? row.title),
    tags: Array.isArray(row.tags) ? row.tags.map(String) : [],
    author_name: String(row.author_name ?? "ABI Tech"),
    author_role: String(row.author_role ?? "Implementation team"),
    reading_minutes: Number(row.reading_minutes ?? 9),
    published_at: String(row.published_at),
    updated_at: String(row.updated_at ?? row.published_at),
    content: Array.isArray(row.content) ? (row.content as BlogBlock[]) : [],
    faqs: Array.isArray(row.faqs) ? (row.faqs as BlogPost["faqs"]) : [],
  };
}

async function fromSupabase(path: string): Promise<BlogPost[] | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
      headers: {
        apikey: SUPABASE_ANON,
        Authorization: `Bearer ${SUPABASE_ANON}`,
        Accept: "application/json",
      },
    });
    if (!res.ok) return null;
    const rows = (await res.json()) as Record<string, unknown>[];
    if (!Array.isArray(rows) || rows.length === 0) return null;
    return rows.map(asPost);
  } catch {
    return null;
  }
}

export async function listPosts(): Promise<BlogPost[]> {
  const { SEED_POSTS } = await import("./blog-seed");
  const rows = await fromSupabase(
    "blog_posts?select=*&order=published_at.desc",
  );
  return rows && rows.length ? rows : SEED_POSTS;
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const { SEED_POSTS } = await import("./blog-seed");
  const rows = await fromSupabase(
    `blog_posts?slug=eq.${encodeURIComponent(slug)}&select=*&limit=1`,
  );
  if (rows?.[0]) return rows[0];
  return SEED_POSTS.find((p) => p.slug === slug) ?? null;
}
