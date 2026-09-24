import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Youtube, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "./logo";
import { NAV, SERVICES, COMPANY, type NavChild, type NavItem } from "@/lib/site-data";

function FooterLink({ link }: { link: NavChild | NavItem }) {
  const className = "text-sm text-fg-muted hover:text-primary";
  if ("href" in link && link.href) {
    return (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    );
  }
  if (!("to" in link) || !link.to) return null;
  if (link.params) {
    return (
      <Link to={link.to as never} params={link.params as never} className={className as never}>
        {link.label}
      </Link>
    );
  }
  return (
    <Link to={link.to as never} className={className as never}>
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            Building a more intelligent, efficient, and human-centered future through AI.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Twitter, label: "X" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Instagram, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="/contact"
                aria-label={label}
                className="inline-flex size-9 items-center justify-center rounded-full text-fg-muted hover:bg-bg hover:text-primary"
              >
                <Icon className="size-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-fg">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.flatMap((item) => {
              const rows: { key: string; link: NavChild | NavItem }[] = [];
              if ("href" in item && item.href) {
                rows.push({ key: `main-${item.href}`, link: item });
                return rows.map(({ key, link }) => (
                  <li key={key}>
                    <FooterLink link={link} />
                  </li>
                ));
              }
              if ("to" in item && item.to) {
                rows.push({ key: `main-${item.label}-${item.to}`, link: item });
              }
              if (item.children) {
                for (const child of item.children) {
                  const childKey =
                    "href" in child && child.href
                      ? `sub-${child.href}`
                      : `sub-${child.label}-${"to" in child ? child.to : ""}-${"params" in child && child.params ? Object.values(child.params).join("-") : ""}`;
                  if ("to" in child && child.to && "to" in item && child.to === item.to && !("params" in child && child.params)) {
                    continue;
                  }
                  rows.push({ key: childKey, link: child });
                }
              }
              return rows.map(({ key, link }) => (
                <li key={key}>
                  <FooterLink link={link} />
                </li>
              ));
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-fg">Our Services</h3>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-fg-muted hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-sm text-fg-muted hover:text-primary">
                Support & Maintenance
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-fg">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-fg-muted">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.8} />
              <a href={COMPANY.emailHref} className="hover:text-primary">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.8} />
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                {COMPANY.whatsapp}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.8} />
              <a href={COMPANY.mapsHref} target="_blank" rel="noreferrer" className="hover:text-primary">
                <span className="font-medium text-fg">{COMPANY.officeName}</span>
                {COMPANY.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="mt-1 block text-fg-subtle">{COMPANY.appointmentNote}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-5 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} ABI Tech. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-fg">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-fg">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
