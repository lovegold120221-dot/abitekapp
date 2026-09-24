import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { PageShell } from "@/components/layout/page-shell";
import appCss from "../styles.css?url";

const APP_NAME = "ABI Tech";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "ABI Tech helps organizations design, build, and deploy AI solutions that actually work — from strategy to implementation in Ortigas, Pasig.",
      },
      { name: "theme-color", content: "#1D6FE8" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "64x64", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <PageShell>
            <Outlet />
          </PageShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});

function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-[640px] flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">404</p>
      <h1 className="mt-2 text-3xl font-extrabold">This page is not on the map</h1>
      <p className="mt-2 text-fg-muted">The link may be old, or the page has moved.</p>
      <Link
        to="/"
        className="mt-6 inline-flex h-12 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-primary-fg"
      >
        Back to home
      </Link>
    </div>
  );
}
