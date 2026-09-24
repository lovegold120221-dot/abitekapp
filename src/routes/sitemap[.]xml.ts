import { createFileRoute } from "@tanstack/react-router";
import { listPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

const STATIC_PATHS = [
  "/",
  "/about",
  "/services",
  "/services/ai-strategy",
  "/services/custom-ai",
  "/services/automation",
  "/services/dedicated-teams",
  "/use-cases",
  "/use-cases/healthcare",
  "/use-cases/finance",
  "/use-cases/retail",
  "/use-cases/education",
  "/use-cases/manufacturing",
  "/use-cases/government",
  "/case-studies",
  "/case-studies/patient-support",
  "/case-studies/document-processing",
  "/case-studies/multilingual-support",
  "/approach",
  "/blog",
  "/careers",
  "/contact",
];

function xmlEscape(s: string) {
  const amp = String.fromCharCode(38);
  return s
    .replace(/&/g, amp + "amp;")
    .replace(/</g, amp + "lt;")
    .replace(/>/g, amp + "gt;")
    .replace(/"/g, amp + "quot;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const posts = await listPosts();
        const today = new Date().toISOString().slice(0, 10);
        const urls = [
          ...STATIC_PATHS.map((path) => {
            const freq = path === "/" ? "weekly" : "monthly";
            const pri = path === "/" ? "1.0" : "0.7";
            return `  <url><loc>${xmlEscape(SITE_URL + path)}</loc><changefreq>${freq}</changefreq><priority>${pri}</priority><lastmod>${today}</lastmod></url>`;
          }),
          ...posts.map((p) => {
            const loc = `${SITE_URL}/blog/${p.slug}`;
            const mod = p.updated_at.slice(0, 10);
            return `  <url><loc>${xmlEscape(loc)}</loc><changefreq>monthly</changefreq><priority>0.8</priority><lastmod>${xmlEscape(mod)}</lastmod></url>`;
          }),
        ];
        const body = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          "</urlset>",
          "",
        ].join("\n");
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
