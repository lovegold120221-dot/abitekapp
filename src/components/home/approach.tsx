import { Link } from "@tanstack/react-router";
import { STEPS } from "@/lib/site-data";
import { STEP_ICONS } from "./icons";

export function Approach() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-[1240px] px-5 py-6 lg:px-8 lg:py-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle">
          Our approach
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          A Proven Path to AI Success
        </h2>
        <ol className="relative mt-10 grid gap-8 sm:grid-cols-5 sm:gap-4">
          <span
            aria-hidden
            className="pointer-events-none absolute top-5 right-[10%] left-[10%] z-0 hidden h-px bg-primary/25 sm:block"
          />
          {STEPS.map((step) => {
            const Icon = STEP_ICONS[step.icon];
            return (
              <li key={step.n} className="relative text-center sm:text-left">
                <div className="flex items-center justify-center gap-3 sm:justify-start">
                  <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full bg-bg text-sm font-extrabold text-primary shadow-[0_0_0_1px_var(--color-line)]">
                    {step.n}
                  </span>
                </div>
                <div className="mt-4 flex flex-col items-center sm:items-start">
                  <span className="inline-flex size-9 items-center justify-center text-fg-muted">
                    <Icon className="size-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-2 text-[15px] font-bold">{step.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-fg-muted">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="mt-8">
          <Link to="/approach" className="text-sm font-semibold text-primary hover:underline">
            See how an engagement runs →
          </Link>
        </div>
      </div>
    </section>
  );
}
