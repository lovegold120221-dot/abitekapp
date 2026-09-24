import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/site-data";

export function Industries() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-[1240px] px-5 py-6 lg:px-8 lg:py-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle">
              Industries we serve
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              AI Solutions for Every Industry
            </h2>
          </div>
          <Link
            to="/use-cases"
            className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex"
          >
            View All Industries
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((ind) => (
            <li key={ind.slug}>
              <Link
                to="/use-cases/$slug"
                params={{ slug: ind.slug }}
                className="group relative block overflow-hidden rounded-xl aspect-[4/5] shadow-[var(--shadow-card)]"
              >
                <img
                  src={ind.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <h3 className="text-[15px] font-bold text-on-media">{ind.title}</h3>
                  <p className="mt-0.5 text-[11.5px] leading-snug text-on-media/80">{ind.tagline}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/use-cases"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary sm:hidden"
        >
          View All Industries
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
