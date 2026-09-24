import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InnerHero } from "@/components/layout/inner-hero";
import { CtaBanner } from "@/components/home/cta-banner";
import { SERVICES } from "@/lib/site-data";
import { SERVICE_ICONS } from "@/components/home/icons";
import { Button } from "@/components/ui/button";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () =>
    seoHead({
      title: "AI Services — Strategy, Custom Build, Automation, Dedicated Teams",
      description:
        "ABI Tech services: AI strategy and advisory, custom AI development, automation and integration, and dedicated engineering teams that stay after go-live.",
      path: "/services",
    }),
});

function ServicesPage() {
  return (
    <>
      <InnerHero
        eyebrow="Services"
        title="The full path from strategy to a system in production"
        lede="Pick a starting point or take the whole stack. Most clients begin with a four-week discovery and leave with a funded build."
      />
      <section className="mx-auto max-w-[1100px] px-5 py-12 lg:px-8">
        <ul className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.icon];
            return (
              <li key={s.slug}>
                <article className="flex h-full flex-col rounded-2xl bg-card p-7 shadow-[var(--shadow-card)]">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-4 text-xl font-bold">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{s.body}</p>
                  <Button asChild variant="link" className="mt-4 justify-start px-0">
                    <Link to="/services/$slug" params={{ slug: s.slug }}>
                      Explore {s.title}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
      <CtaBanner />
    </>
  );
}
