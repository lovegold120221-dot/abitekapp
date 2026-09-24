import { createFileRoute, Link } from "@tanstack/react-router";
import { InnerHero } from "@/components/layout/inner-hero";
import { INDUSTRIES } from "@/lib/site-data";
import { CtaBanner } from "@/components/home/cta-banner";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/use-cases/")({
  component: UseCasesPage,
  head: () =>
    seoHead({
      title: "AI Use Cases by Industry — Healthcare, Finance, Retail, and More",
      description:
        "Industry AI use cases ABI Tech implements: healthcare, finance, retail, education, manufacturing, and government operations.",
      path: "/use-cases",
    }),
});

function UseCasesPage() {
  return (
    <>
      <InnerHero
        eyebrow="Use cases"
        title="AI solutions for every industry we serve"
        lede="Same implementation muscle. Different operating reality. Pick a sector to see the work we typically take on."
      />
      <section className="mx-auto max-w-[1100px] px-5 py-12 lg:px-8">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <li key={ind.slug}>
              <Link
                to="/use-cases/$slug"
                params={{ slug: ind.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={ind.image}
                    alt={`${ind.title} AI use cases`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-lg font-bold">{ind.title}</h2>
                  <p className="mt-1 text-sm text-primary">{ind.tagline}</p>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{ind.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBanner />
    </>
  );
}
