import type { ReactNode } from "react";

export function InnerHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-linear-to-b from-bg-hero to-bg">
      <div className="mx-auto max-w-[800px] px-5 py-14 text-center lg:px-8 lg:py-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-fg-muted">{lede}</p>
        {children ? <div className="mt-7 flex justify-center gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
