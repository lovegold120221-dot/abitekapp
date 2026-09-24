import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site-data";
import { SERVICE_ICONS } from "./icons";

export function WhatWeDo() {
  return (
    <section className="bg-bg">
      <div className="mx-auto grid max-w-[1240px] items-start gap-10 px-5 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:px-8 lg:py-20">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">
            From AI Possibilities to Real-World Impact
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-fg-muted">
            We combine deep technical expertise with business understanding to deliver AI
            solutions that solve actual problems, improve operations, and create measurable
            value.
          </p>
          <Button asChild className="mt-7 pr-5">
            <Link to="/services">
              Explore Our Services
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = SERVICE_ICONS[s.icon];
            return (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="flex h-full flex-col rounded-xl bg-card p-5 shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-3 text-[15px] font-bold text-fg">{s.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">{s.short}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
