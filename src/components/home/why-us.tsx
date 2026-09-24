import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STATS } from "@/lib/site-data";
import { STAT_ICONS } from "./icons";

export function WhyUs() {
  return (
    <section className="bg-bg">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle">
            Why businesses choose ABI Tech
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            A Long-Term Partner You Can Trust
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-fg-muted">
            We're more than a development vendor — we're your strategic partner in AI
            implementation, committed to your success.
          </p>
          <Button asChild className="mt-7 pr-5">
            <Link to="/about">
              Learn More About Us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <ul className="grid grid-cols-2 gap-6 sm:gap-8">
          {STATS.map((s) => {
            const Icon = STAT_ICONS[s.icon];
            return (
              <li key={s.label} className="text-center sm:text-left">
                <span className="inline-flex size-10 items-center justify-center text-primary">
                  <Icon className="size-6" strokeWidth={1.6} />
                </span>
                <p className="mt-1 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-fg-muted">{s.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
