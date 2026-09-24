import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/site-data";

export function FeaturedCases() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-[1240px] px-5 py-14 lg:px-8 lg:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle">
              Featured case studies
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Real Results. Real Impact.
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex"
          >
            View All Case Studies
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <li key={cs.slug} className="flex flex-col">
              <Link
                to="/case-studies/$slug"
                params={{ slug: cs.slug }}
                className="group overflow-hidden rounded-xl shadow-[var(--shadow-card)]"
              >
                <img
                  src={cs.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={cs.slug === "patient-support" ? { objectPosition: "20% 40%" } : undefined}
                />
              </Link>
              <p className="mt-4 text-xs font-semibold text-fg-subtle">{cs.industry}</p>
              <h3 className="mt-1 text-lg font-bold leading-snug">
                <Link to="/case-studies/$slug" params={{ slug: cs.slug }} className="hover:text-primary">
                  {cs.title}
                </Link>
              </h3>
              <dl className="mt-4 grid grid-cols-3 gap-2">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-lg font-extrabold text-primary sm:text-xl">{m.value}</dt>
                    <dd className="text-[11px] leading-snug text-fg-muted">{m.label}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/case-studies/$slug"
                params={{ slug: cs.slug }}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Read Case Study
                <ArrowRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
