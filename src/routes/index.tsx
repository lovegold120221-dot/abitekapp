import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/hero";
import { Trusted } from "@/components/home/trusted";
import { WhatWeDo } from "@/components/home/what-we-do";
import { Industries } from "@/components/home/industries";
import { FeaturedCases } from "@/components/home/featured-cases";
import { BlogTeaser } from "@/components/home/blog-teaser";
import { Approach } from "@/components/home/approach";
import { WhyUs } from "@/components/home/why-us";
import { CtaBanner } from "@/components/home/cta-banner";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    seoHead({
      title: "ABI Tech | AI Implementation & Automation Company in Ortigas, Philippines",
      description:
        "ABI Tech designs, builds, and deploys production AI — strategy, custom agents, automation, and dedicated teams. Ortigas Center, Pasig. Serving hospitals, banks, and operators worldwide.",
      path: "/",
    }),
});

function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <WhatWeDo />
      <Industries />
      <FeaturedCases />
      <BlogTeaser />
      <Approach />
      <WhyUs />
      <CtaBanner />
    </>
  );
}
