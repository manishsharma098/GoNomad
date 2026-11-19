import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/app/components/common/PageHeader";
import { AboutIntro } from "@/app/components/home/AboutIntro";
import { FinalCta } from "@/app/components/home/FinalCta";
import { HowItWorks } from "@/app/components/home/HowItWorks";
import { Testimonials } from "@/app/components/home/Testimonials";
import { media } from "@/app/data/media";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GoNomad — Who We Are" },
      {
        name: "description",
        content: "Why we build slow, small-group trips with local guides — and how a trip with us works.",
      },
      { property: "og:title", content: "About GoNomad — Who We Are" },
      {
        property: "og:description",
        content: "Fewer stops, longer stays and local guides. Meet the people behind GoNomad.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title={
          "Trips for people who’d rather feel a place"
        }
        text="GoNomad started on a Patagonia trail with a simple idea: fewer stops, longer stays, and guides who actually live there."
        image={media.yosemiteValley}
        imageAlt="Misty Yosemite valley at sunrise"
      />
      <AboutIntro showButton={false} />
      <HowItWorks />
      <Testimonials />
      <FinalCta />
    </>
  );
}
