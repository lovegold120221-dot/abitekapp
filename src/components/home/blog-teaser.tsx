import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SEED_POSTS } from "@/lib/blog-seed";

export function BlogTeaser() {
  const post = SEED_POSTS[0];
  if (!post) return null;
  return (
    <section className="bg-bg-soft">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 px-5 py-14 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <Link to="/blog/$slug" params={{ slug: post.slug }} className="overflow-hidden rounded-2xl">
          <img
            src={post.cover_image}
            alt={post.cover_alt}
            className="aspect-[16/10] w-full object-cover"
          />
        </Link>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle">From the journal</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">{post.title}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{post.excerpt}</p>
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Read the hospital automation playbook
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
