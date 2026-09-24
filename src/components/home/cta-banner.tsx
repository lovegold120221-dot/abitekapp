import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useUi } from "@/lib/ui-store";

export function CtaBanner() {
  const openConsult = useUi((s) => s.openConsult);

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/images/cta-banner.jpg"
        alt="Hiker looking out from a mountain summit at sunrise"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-r from-navy/80 via-navy/55 to-navy/25" />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-8 px-5 py-16 lg:grid-cols-[1fr_auto] lg:px-8 lg:py-20">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-on-media/70">
            Let's build what's next
          </p>
          <h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-tight text-on-media sm:text-4xl">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-on-media/85">
            Let's turn your ideas into real-world solutions. Talk to our team today and
            discover what's possible with ABI Tech.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg" className="pr-5" onClick={openConsult}>
              Schedule a Consultation
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <p className="max-w-[9rem] text-right text-sm font-extrabold uppercase leading-snug tracking-[0.16em] text-on-media">
          Bolder
          <br />
          Smarter
          <br />
          Together
        </p>
      </div>
    </section>
  );
}
