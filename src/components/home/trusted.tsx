import { PARTNERS } from "@/lib/site-data";

export function Trusted() {
  return (
    <section className="border-y border-border bg-bg">
      <div className="mx-auto max-w-[1240px] px-5 py-8 lg:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle">
          Trusted by innovative companies worldwide
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
          {PARTNERS.map((name) => (
            <li
              key={name}
              className="select-none text-[17px] font-extrabold tracking-tight text-fg-subtle/80 grayscale sm:text-[19px]"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
