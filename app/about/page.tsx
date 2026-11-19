import type { Metadata } from "next";

import { PageHeader } from "@/app/components/common/PageHeader";
import { AboutIntro } from "@/app/components/home/AboutIntro";
import { FinalCta } from "@/app/components/home/FinalCta";
import { HowItWorks } from "@/app/components/home/HowItWorks";
import { Testimonials } from "@/app/components/home/Testimonials";
import { media } from "@/app/data/media";

export const metadata: Metadata = {
  title: "About GoNomad — Who We Are",
  description: "Why we build slow, small-group trips with local guides — and how a trip with us works.",
  openGraph: {
    title: "About GoNomad — Who We Are",
    description: "Fewer stops, longer stays and local guides. Meet the people behind GoNomad.",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Trips for people who’d rather feel a place"
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
