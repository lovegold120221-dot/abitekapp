import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUi } from "@/lib/ui-store";
import { PILL_ICONS } from "./icons";

const PILLS = [
  { label: "AI Strategy & Consulting" },
  { label: "Custom AI Solutions" },
  { label: "Automation & Integration" },
  { label: "Dedicated Expert Teams" },
];

export function Hero() {
  const openConsult = useUi((s) => s.openConsult);
  const openVideo = useUi((s) => s.openVideo);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-bg-hero via-bg-tint to-bg">
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 lg:px-8 lg:py-16">
        <div className="stagger-in">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            AI strategy. Real implementation. Measurable results.
          </p>
          <h1 className="mt-3 text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-[3.35rem]">
            Turn AI Into
            <span className="block text-primary">Real Business Growth</span>
          </h1>
          <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-fg-muted">
            ABI Tech, based in Ortigas Center, Pasig, helps organizations design, build, and deploy AI solutions that actually
            work — from strategy to implementation, deployment, and long-term support.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button size="lg" className="pr-5" onClick={openConsult}>
              Schedule a Consultation
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="secondary" className="pr-5" onClick={openVideo}>
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary-soft text-primary">
                <Play className="size-3.5 ml-px fill-current" />
              </span>
              Watch Our Video
            </Button>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
            {PILLS.map((p, i) => {
              const Icon = PILL_ICONS[i];
              return (
                <li key={p.label} className="flex items-start gap-2 text-[12.5px] font-medium text-fg-muted">
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Icon className="size-3.5" strokeWidth={2} />
                  </span>
                  <span className="leading-snug">{p.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative isolate">
      <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] aspect-[5/4] sm:aspect-[16/11]">
        <img
          src="/images/hero-scene.jpg"
          alt="A consultant and a humanoid robot reviewing a shared interface"
          className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-linear-to-tr from-navy/55 via-navy/10 to-navy/30" />

        <div className="absolute bottom-16 left-4 flex flex-col gap-1.5 sm:bottom-20 sm:left-5">
          {["IDEAS", "STRATEGY", "IMPLEMENTATION", "RESULTS"].map((label) => (
            <div
              key={label}
              className="hologram-card w-max rounded-md border border-on-media/35 bg-navy/35 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-on-media backdrop-blur-md sm:text-[11px]"
            >
              {label}
            </div>
          ))}
        </div>

        <p className="absolute right-4 top-4 max-w-[11rem] text-right text-[13px] font-semibold leading-snug text-on-media [text-shadow:0_1px_12px_rgba(7,20,34,0.65)] sm:right-5 sm:top-5 sm:text-[15px]">
          A more intelligent tomorrow, built today.
        </p>

        <div className="absolute bottom-4 right-4 text-right sm:bottom-5 sm:right-5">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-on-media [text-shadow:0_1px_10px_rgba(7,20,34,0.7)]">
            People + AI
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-on-media/90 [text-shadow:0_1px_10px_rgba(7,20,34,0.7)]">
            A brighter tomorrow
          </p>
        </div>
      </div>
    </div>
  );
}
