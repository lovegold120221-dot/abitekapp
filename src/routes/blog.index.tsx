import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InnerHero } from "@/components/layout/inner-hero";
import { CtaBanner } from "@/components/home/cta-banner";
import { listPosts } from "@/lib/blog";
import { breadcrumbJsonLd, seoHead } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  loader: async () => ({ posts: await listPosts() }),
  head: () =>
    seoHead({
      title: "Blog — AI Implementation Notes",
      description:
        "Practical writing from ABI Tech on putting AI into production: hospital automation, document processing, support operations, and delivery.",
      path: "/blog",
    }),
});

function BlogIndex() {
  const { posts } = Route.useLoaderData();
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <InnerHero
        eyebrow="Blog"
        title="Notes from the implementation floor"
        lede="How AI actually lands in hospitals, banks, and operations teams — written by people who ship the system, not the slide."
      />
      <section className="mx-auto max-w-[1100px] px-5 py-12 lg:px-8">
        {posts.length === 0 ? (
          <p className="text-fg-muted">No articles published yet.</p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="block overflow-hidden"
                  >
                    <img
                      src={post.cover_image}
                      alt={post.cover_alt}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      {post.tags[0] ?? "Article"}
                    </p>
                    <h2 className="mt-2 text-xl font-extrabold tracking-tight">
                      <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{post.excerpt}</p>
                    <p className="mt-4 text-xs text-fg-subtle">
                      {new Date(post.published_at).toLocaleDateString("en-PH", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      {" · "}
                      {post.reading_minutes} min read
                    </p>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      Read article
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>
      <CtaBanner />
    </>
  );
}
